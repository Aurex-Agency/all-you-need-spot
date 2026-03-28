export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(
      "https://services.leadconnectorhq.com/hooks/TeOpti4qe6jxiicUI2Sy/webhook-trigger/a288e479-e21c-4d52-a95a-128f09e375bb",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Webhook request failed" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}
