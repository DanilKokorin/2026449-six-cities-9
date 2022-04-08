import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks/useState';
import { fetchNearbyAction, sendFavoriteAction } from '../../../store/api-action';
import { Hotel } from '../../../types/hotel';

type СardHotelProps = {
  sortedHotel: Hotel;
  setChosenHotel: (hotel: Hotel) => void;
  paramId?: string;
};

export default function СardHotel({ sortedHotel, setChosenHotel, paramId }: СardHotelProps) {
  const status = sortedHotel.isFavorite ? '0' : '1';
  const { authorizationStatus } = useAppSelector(({ USER }) => USER);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  function getRating(rating: number): number {
    return rating * 20;
  }

  const onMouseEnter = () => {
    setChosenHotel(sortedHotel);
  };

  function setFavorites() {
    const isAuthorization = authorizationStatus === AuthorizationStatus.Auth;
    const id = sortedHotel.id;
    if (!isAuthorization) {
      return navigate(AppRoute.Login);
    }
    dispatch(sendFavoriteAction({ id, status }));
    paramId && dispatch(fetchNearbyAction(paramId));
  }

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
          <button
            className={`place-card__bookmark-button button${sortedHotel.isFavorite ? ' place-card__bookmark-button--active' : ''}`}
            type="button"
            onClick={() => setFavorites()}
          >
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
