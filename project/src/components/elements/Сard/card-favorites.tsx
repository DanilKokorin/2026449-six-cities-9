import CardFavoritesHotel from './card-favorites-hotel';
import { Hotel } from '../../../types/hotel';
import { Link } from 'react-router-dom';
import { setCity } from '../../../store/main-data/main-data';
import { useAppDispatch } from '../../../hooks/useState';

type CardFavoritesProps = {
  citieys: Array<string>;
  favorites: Hotel[];
};

export default function CardFavorites({ favorites, citieys }: CardFavoritesProps) {
  const dispatch = useAppDispatch();

  return (
    <>
      {citieys.map((city) => {
        const sortedFavorite = favorites.filter((item) => item.city.name === city);
        return (
          <li key={city} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link
                  to='/'
                  className="locations__item-link"
                  onClick={() => dispatch(setCity(city))}
                >
                  <span>{city}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {sortedFavorite.map((item) =>
                <CardFavoritesHotel item={item} key={item.id} />,
              )}
            </div>
          </li>
        );
      })}
    </>
  );
}
