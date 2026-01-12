import { useEffect, useState } from "react";
import { fetchGames } from "../services/games.service";

export function useGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadGames() {
      try {
        const data = await fetchGames();
        console.log("Fetched games:", data);
        setGames(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadGames();
  }, []);

  return { games, loading, error };
}
