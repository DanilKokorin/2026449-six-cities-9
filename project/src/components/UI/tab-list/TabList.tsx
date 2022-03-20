import { cities } from '../../../mocks/cities';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/useState';
import { useAppDispatch } from './../../../hooks/useState';
import { setCity } from './../../../store/action';


export default function TabList() {
  const { city } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  function getСity(getCity: string) {
    return () => {
      dispatch(setCity(getCity));
    };
  }

  return (
    <ul className="locations__list tabs__list">
      {cities.map((location) => {
        const isActive = `locations__item-link tabs__item ${location.title === city && ' tabs__item--active'}`;
        return (
          <li className="locations__item" key={location.lat}>
            <Link to='/'
              className={isActive}
              onClick={getСity(location.title)}
            >
              <span>{location.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

