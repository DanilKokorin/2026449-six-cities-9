import { Hotel } from '../../../types/hotel';

export default function CardFavoritesHotel({item}: { item: Hotel; }) {
  function getRating(rating: number): number {
    return rating * 20;
  }
  return (
    <article className="favorites__card place-card">
      {item.premium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={item.img.src} width="150" height="110" alt={item.img.alt} />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{item.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRating(item.rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{item.name}</a>
        </h2>
        <p className="place-card__type">{item.type}</p>
      </div>
    </article>
  );
}
