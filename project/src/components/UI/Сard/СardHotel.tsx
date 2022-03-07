import { Link } from 'react-router-dom';
import { Hotel } from '../../../types/hotel';

export default function СardHotel(props: Hotel) {
  function getRating(rating: number): number {
    return rating * 20;
  }

  return (
    <article className="cities__place-card place-card">
      {props.premium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${props.id}`} >
          <img className="place-card__image" src={props.img.src} width="260" height="200" alt={props.img.alt} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRating(props.rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${props.id}`} >{props.name}</Link>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>
  );
}
