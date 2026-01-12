import { useState } from "react";
import NavBar from "../../../shared/components/NavBar";
import CardList from "../../../shared/components/CardList/CardList";
import { useGames } from "../hooks/useGames";

export default function SearchGames() {
  const [search, setSearch] = useState("");
  const { games, loading, error } = useGames();

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div>Loading games...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <NavBar search={search} onSearchChange={setSearch} />
      <CardList games={filteredGames} />
    </>
  );
}
