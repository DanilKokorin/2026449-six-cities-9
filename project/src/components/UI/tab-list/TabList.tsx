import { Link } from 'react-router-dom';
import { mainСities } from '../../../const';
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
      {mainСities.map((location) => {
        const isActive = `locations__item-link tabs__item ${location === city && ' tabs__item--active'}`;
        return (
          <li className="locations__item" key={location}>
            <Link to='/'
              className={isActive}
              onClick={getСity(location)}
            >
              <span>{location}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

