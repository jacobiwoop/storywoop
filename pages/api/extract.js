export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { baseUrl } = req.body;
  if (!baseUrl) return res.status(400).json({ error: "baseUrl is required" });

  // On prépare le stream pour envoyer les données au fur et à mesure (comme l'extension)
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  try {
    let url = new URL(baseUrl);

    // Réplication de la méthode de l'extension : on nettoie les signatures potentiellement expirées
    // car on va faire les appels depuis le backend (ou on laisse l'utilisateur gérer son proxy/cookies)
    // NOTE: Dans une vraie app, on devrait ajouter des headers de session ici.
    url.searchParams.delete("_signature");
    url.searchParams.delete("msToken");
    url.searchParams.delete("X-Bogus");

    let cursor = 0;
    let hasMore = true;
    let totalFetched = 0;
    const count = 20;

    while (hasMore && totalFetched < 1000) {
      // Limite de sécurité pour la démo
      url.searchParams.set("cursor", cursor.toString());
      url.searchParams.set("count", count.toString());

      console.log(`Fetching: ${url.toString()}`);

      const response = await fetch(url.toString(), {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Referer: "https://www.tiktok.com/",
        },
      });

      if (!response.ok) {
        throw new Error(`TikTok API error: ${response.status}`);
      }

      const data = await response.json();
      const fetchedComments = data.comments || [];

      totalFetched += fetchedComments.length;
      cursor = data.cursor || cursor + count;
      hasMore = data.has_more === 1 || data.has_more === true;

      // Envoyer le "chunk" au frontend
      res.write(
        JSON.stringify({
          type: "progress",
          current: totalFetched,
          comments: fetchedComments.map((c) => ({
            text: c.text,
            digg_count: c.digg_count,
            user: { nickname: c.user?.nickname },
          })),
        }) + "\n",
      );

      if (!hasMore) break;

      // Délai pour éviter le bannissement (comme l'extension)
      await new Promise((resolve) =>
        setTimeout(resolve, 1000 + Math.random() * 1000),
      );
    }

    res.write(JSON.stringify({ type: "done" }) + "\n");
    res.end();
  } catch (error) {
    console.error(error);
    res.write(JSON.stringify({ type: "error", message: error.message }) + "\n");
    res.end();
  }
}
