import Footer from '../elements/footer/footer';
import Header from '../elements/header/header';
import { useAppSelector } from '../../hooks/useState';
import Loader from '../elements/Loader/loader';
import MainWithFavorites from '../elements/main-with-favorites/main-with-favorites';

export default function FavoritePage() {
  const { favorites, emptryFavorites } = useAppSelector(({ FAVORITES }) => FAVORITES);

  if (!favorites.length && !emptryFavorites) {
    return (
      <Loader />
    );
  }

  if (!favorites.length && emptryFavorites) {
    return (
      <div className="page page--favorites-empty">
        <Header />
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <MainWithFavorites favorites={favorites} />
  );
}
