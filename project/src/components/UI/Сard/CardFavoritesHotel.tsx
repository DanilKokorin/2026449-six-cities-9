import { Hotel } from '../../../types/hotel';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { sendFavoriteAction } from '../../../store/api-action';
import { store } from '../../../store';
import { useAppSelector } from '../../../hooks/useState';

export default function CardFavoritesHotel({ item }: { item: Hotel; }) {
  const status = item.isFavorite ? '0' : '1';
  const { authorizationStatus } = useAppSelector(({ USER }) => USER);
  const navigate = useNavigate();

  function getRating(rating: number): number {
    return rating * 20;
  }

  function setFavorites() {
    const isAuthorization = authorizationStatus === AuthorizationStatus.Auth;
    const id = item.id;
    if (!isAuthorization) {
      return navigate(AppRoute.Login);
    }
    store.dispatch(sendFavoriteAction({ id, status }));
  }

  return (
    <article className="favorites__card place-card">
      {item.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link className="header__nav-link" to={`/offer/${item.id}`}>
          <img className="place-card__image" src={item.previewImage} width="260" height="200" alt={item.host.name} />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{item.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
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
            <span style={{ width: `${getRating(item.rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link className="header__nav-link" to={`/offer/${item.id}`}>
            {item.title}
          </Link>
        </h2>
        <p className="place-card__type">{item.type}</p>
      </div>
    </article>
  );
}
