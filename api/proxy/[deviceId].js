export default async function handler(req, res) {
  const { deviceId } = req.query;

  try {
    const response = await fetch(`https://ilaguard.com/api/sendData/${deviceId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const data = await response.text();
    res.status(response.status).send(data);
  } catch (err) {
    res.status(500).json({ error: "Proxy error", details: err.message });
  }
}
