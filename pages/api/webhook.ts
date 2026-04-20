import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const data = req.body;
    const headers = req.headers;

    // Log pour debug (sera visible dans les logs de Render)
    console.log("🔔 Webhook reçu !");
    console.log("Method:", req.method);
    console.log("Headers:", JSON.stringify(headers, null, 2));
    console.log("Body:", JSON.stringify(data, null, 2));

    // Ici, vous pouvez ajouter la logique métier :
    // - Validation de signature
    // - Mise à jour de la base de données
    // - Envoi de notification au Coach

    return res
      .status(200)
      .json({ status: "success", message: "Webhook received" });
  } else if (req.method === "GET") {
    // Utile pour la validation initiale de certains services (ex: validation d'URL)
    return res.status(200).json({
      status: "ok",
      message: "Webhook endpoint is active. Use POST to send data.",
    });
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
