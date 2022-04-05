import CardFavorites from '../Сard/CardFavorites';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { Hotel } from '../../../types/hotel';

type MainWithFavoritesProps = {
  favorites: Hotel[];
};

export default function MainWithFavorites({favorites}: MainWithFavoritesProps) {
  const citieys: Array<string> = [];
  favorites.map((favorite) => citieys.push(favorite.city.name));
  const sortedCitieys: Array<string> = [...new Set(citieys)];

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <CardFavorites favorites={favorites} citieys={sortedCitieys}/>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
