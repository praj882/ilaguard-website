import fetch from "node-fetch";

export default async function handler(req, res) {
  const { deviceId } = req.query;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const data = req.body;

  const FIREBASE_HOST = "https://ilapot-default-rtdb.asia-southeast1.firebasedatabase.app";
  const AUTH = process.env.FIREBASE_SECRET; // set in Vercel environment variables

  try {
    const firebaseUrl = `${FIREBASE_HOST}/devices/${deviceId}/sensorData.json?auth=${AUTH}`;
    const response = await fetch(firebaseUrl, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    res.status(response.status).json({ firebaseResponse: result });
  } catch (err) {
    res.status(500).json({ error: "Proxy error", details: err.message });
  }
}
