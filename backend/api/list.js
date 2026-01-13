import { listGames } from "../src/services/games.service.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const search = req.query?.search?.trim();
    const games = await listGames(search);
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
