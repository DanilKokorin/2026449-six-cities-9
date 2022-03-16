import { useEffect, useState } from 'react';
import Header from '../components/UI/header/Header';
import Map from '../components/UI/Map/Map';
import TabList from '../components/UI/tab-list/TabList';
import СardHotel from '../components/UI/Сard/СardHotel';
import { CITY } from '../mocks/city';
import { offers } from '../mocks/offers';
import { Offers } from '../types/hotel';


export default function MainPage() {
  //тут я объявляю состояние города, который показывает предложения 
  const [city, setCity] = useState<string>('Amsterdam');
  //это callback функция, которая получает город при нажатии из дочернего компонента TabList, он там снизу
  //получает данные успешно, приходит город тот который нужен
  const getFilteredCity = (filteredCity: string) => {
    setCity(filteredCity);
  };
  // по логике, которая вроде как работает, при изменении переменной
  // city должны обновляться предложения по аренде и город в заголовке 
  // но в чём проблема, я не знаю как передать это в состояние 
  // 
  useEffect(() => {
    const b = [...offers].filter((offer) => offer.city === city);
  }, [city]);
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <TabList getFilteredCity={getFilteredCity}/>
          </section>
        </div>
        <div className="cities">
          {/* {list.offers.length
            ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{list.offers.length} places to stay in {list.city}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by&nbsp;</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <div className="cities__places-list places__list tabs__content">
                  {list.offers.map((hotel) =>
                    <СardHotel {...hotel} key={hotel.id} />,
                  )}
                </div>
              </section>
              <div className="cities__right-section">
                <Map city={CITY} hotels={list.offers} />
              </div>
            </div>
            :
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>} */}
        </div>
      </main>
    </div>
  );
}
function filterOffersByCity() {
  throw new Error('Function not implemented.');
}

