// import CardFavorites from '../components/UI/Сard/CardFavorites';
// import { Favorites } from '../types/hotel';
import Footer from '../components/UI/footer/Footer';
import Header from '../components/UI/header/Header';

// type FavoritePageProps = {
//   favorites: Favorites[];
// }

export default function FavoritePage() {
  // if (!favorites.length) {
  //   return (
  //     <div className="page page--favorites-empty">
  //       <Header />
  //       <main className="page__main page__main--favorites page__main--favorites-empty">
  //         <div className="page__favorites-container container">
  //           <section className="favorites favorites--empty">
  //             <h1 className="visually-hidden">Favorites (empty)</h1>
  //             <div className="favorites__status-wrapper">
  //               <b className="favorites__status">Nothing yet saved.</b>
  //               <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
  //             </div>
  //           </section>
  //         </div>
  //       </main>
  //       <Footer />
  //     </div>
  //   );
  // }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {/* {favorites.map((favorite) =>
                <CardFavorites {...favorite} key={favorite.city} />,
              )} */}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
