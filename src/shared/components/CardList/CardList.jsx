import Card from "../Card/Card";
import "./CardList.scss";

const CardList = ({ games }) => {
  return (
    <div className="card-list">
      {games.map((game) => {
        return <Card key={game.id} game={game} />;
      })}
    </div>
  );
};

export default CardList;
