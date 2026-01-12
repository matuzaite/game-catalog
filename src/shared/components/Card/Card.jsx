import "./Card.scss";

const Card = ({ game }) => {
  return (
    <article className="game-card">
      <div className="game-card__image">
        <img src={game.image} alt={game.title} />

        {game.cashback && <span className="game-card__badge">💰 CASHBACK</span>}
      </div>

      <div className="game-card__content">
        <h3 className="game-card__title">{game.title}</h3>

        <div className="game-card__meta">
          <span className="game-card__platform">{game.platform}</span>
          <span className="game-card__region">{game.region}</span>
        </div>

        <div className="game-card__pricing">
          <div className="game-card__prices">
            <span className="old-price">€{game.oldPrice}</span>
            <span className="discount">-{game.discount}%</span>
          </div>

          <span className="current-price">€{game.price}</span>
        </div>

        <div className="game-card__footer">
          <span className="cashback">Cashback €{game.cashbackAmount}</span>

          <div className="actions">
            <button className="wishlist">♡</button>
            <span className="stock">{game.stock}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
