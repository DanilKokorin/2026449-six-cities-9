import { Favorites } from '../../../types/hotel';
import CardFavoritesHotel from './CardFavoritesHotel';

export default function CardFavorites(favorite: Favorites) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{favorite.city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favorite.list.map((item) =>
          <CardFavoritesHotel item={item} key={item.id}/>,
        )}
      </div>
    </li>
  );
}
