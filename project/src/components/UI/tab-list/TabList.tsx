import { MouseEvent } from 'react';
import { cities } from '../../../mocks/cities';

type CitiesListProps = {
  getFilteredCity: (city: string) => void,
};

export default function TabList({getFilteredCity}: CitiesListProps) {
  const getСity = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    getFilteredCity(event.currentTarget.innerText);
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) =>
        (
          <li className="locations__item" key={city.lat}>
            <button
              className="locations__item-link tabs__item"
              onClick={(event) => getСity(event)}
            >
              <span>{city.title}</span>
            </button>
          </li>
        ),
      )}
    </ul>
  );
}

