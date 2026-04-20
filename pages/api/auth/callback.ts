import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code, state, error } = req.query;

  if (error) {
    console.error("Erreur d'authentification TikTok:", error);
    return res.redirect(`/?error=${error}`);
  }

  if (!code) {
    return res.status(400).json({ error: "Code d'autorisation manquant" });
  }

  try {
    const clientId = process.env.TIKTOK_CLIENT_ID;
    const clientSecret = process.env.TIKTOK_CLIENT_SECRET;
    const redirectUri = process.env.TIKTOK_REDIRECT_URI;

    console.log("Échange du code contre un token...");

    // Appel à l'API TikTok pour obtenir le token
    const response = await fetch(
      "https://open.tiktokapis.com/v2/oauth/token/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Cache-Control": "no-cache",
        },
        body: new URLSearchParams({
          client_key: clientId,
          client_secret: clientSecret,
          code: code,
          grant_type: "authorization_code",
          redirect_uri: redirectUri,
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Détails de l'erreur TikTok:", data);
      throw new Error(data.error_description || "Échec de l'échange de token");
    }

    // Le token est ici !
    const { access_token, open_id, refresh_token, expires_in } = data;

    console.log("✅ Token récupéré avec succès pour l'utilisateur:", open_id);

    // TODO: Stocker le token de manière sécurisée (Base de données ou Session)
    // Pour l'instant, on redirige vers l'accueil avec un succès
    res.redirect("/?status=success");
  } catch (err) {
    console.error("Erreur lors de l'échange de token:", err);
    res.redirect(
      `/?error=token_exchange_failed&message=${encodeURIComponent(err.message)}`,
    );
  }
}
