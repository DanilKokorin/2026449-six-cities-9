import Header from '../components/UI/header/Header';
import MainWithOffers from '../components/UI/Main/MainWithOffers';
import TabList from '../components/UI/tab-list/TabList';
import { useAppSelector } from '../hooks/useState';
import { Hotel } from '../types/hotel';
import MainPageEmpty from './../components/UI/Main/MainPageEmpty';

export default function MainPage() {
  const { city, hotels } = useAppSelector(({MAIN}) => MAIN);
  const offers: Hotel[] = hotels.filter((hotel) => hotel.city.name === city);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <TabList />
          </section>
        </div>
        <div className="cities">
          {offers.length
            ?
            <MainWithOffers hotels={offers} city={city} />
            :
            <MainPageEmpty />}
        </div>
      </main>
    </div>
  );
}
