import express from "express";
import { getGames } from "../services/games.service.js";

const router = express.Router();

router.get("/list", async (req, res) => {
  try {
    const search = req.query.search;
    const games = await getGames(search);
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
