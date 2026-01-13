import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "";

export function useGames(search) {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadGames() {
      setLoading(true);
      setError(null);

      try {
        const query = search ? `?search=${encodeURIComponent(search)}` : "";
        const res = await fetch(`${API_URL}/list${query}`);

        if (!res.ok) {
          throw new Error("Failed to fetch games");
        }

        const data = await res.json();
        setGames(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadGames();
  }, [search]);

  return { games, loading, error };
}
