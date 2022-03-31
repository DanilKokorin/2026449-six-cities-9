import { Link } from 'react-router-dom';
import { Hotel } from '../../../types/hotel';

type СardHotelProps = {
  sortedHotel: Hotel;
  setChosenHotel: any;
};

export default function СardHotel({ sortedHotel, setChosenHotel }: СardHotelProps) {
  function getRating(rating: number): number {
    return rating * 20;
  }

  const onMouseEnter = () => {
    setChosenHotel(sortedHotel);
  };

  return (
    <article onMouseEnter={onMouseEnter} className="cities__place-card place-card">
      {sortedHotel.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${sortedHotel.id}`} >
          <img className="place-card__image" src={sortedHotel.previewImage} width="260" height="200" alt={sortedHotel.host.name} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{sortedHotel.price}</b>
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
            <span style={{ width: `${getRating(sortedHotel.rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${sortedHotel.id}`} >{sortedHotel.title}</Link>
        </h2>
        <p className="place-card__type">{sortedHotel.type}</p>
      </div>
    </article>
  );
}
