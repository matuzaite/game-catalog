import { useState } from "react";
import NavBar from "../../../shared/components/NavBar";
import CardList from "../../../shared/components/CardList/CardList";
import { useGames } from "../hooks/useGames";

export default function SearchGames() {
  const [search, setSearch] = useState("");
  const { games, loading, error } = useGames(search);

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <NavBar search={search} onSearchChange={setSearch} />
      {error ? (
        <div>Error: {error}</div>
      ) : loading ? (
        <div>Loading games...</div>
      ) : (
        <CardList games={filteredGames} />
      )}
    </>
  );
}
