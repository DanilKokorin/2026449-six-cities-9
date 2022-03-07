import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoritePage from '../../pages/FavoritePage';
import Login from '../../pages/Login';
import MainPage from '../../pages/MainPage';
import PageNotFound from '../../pages/PageNotFound';
import PropertyPage from '../../pages/PropertyPage';
import Layout from '../../route/layout';
import PrivateRoute from '../../route/private-route';
import { AppRoute, AuthorizationStatus } from '../const';
import { Favorites, Hotel } from '../../types/hotel';

type AppScreenProps = {
  hotels: Hotel[];
  favorites: Favorites[];
}

export default function App({ hotels, favorites }: AppScreenProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.MainPage} element={<Layout />}>
          <Route index element={<MainPage hotels={hotels} />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Room} element={<PropertyPage />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritePage favorites={favorites}/>
            </PrivateRoute>
          }
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
