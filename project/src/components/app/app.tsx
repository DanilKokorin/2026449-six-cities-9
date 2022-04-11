import { Route, Routes } from 'react-router-dom';
import FavoritePage from '../pages/favorite-page';
import Login from '../pages/login';
import MainPage from '../pages/main-page';
import PageNotFound from '../pages/page-not-found';
import PropertyPage from '../pages/property-page';
import Layout from '../../route/layout';
import PrivateRoute from '../../route/private-route';
import { AppRoute } from '../../const';
import Loader from '../elements/Loader/loader';
import HistoryRouter from '../../route/history-route';
import browserHistory from './../../browser-history';
import { useAppLoading } from '../../hooks/useAppLoading';
import { useAppSelector } from '../../hooks/useState';

export default function App() {
  const isAppLoading = useAppLoading();
  const { errorServer } = useAppSelector(({ERROR}) => ERROR);
  if (errorServer) {
    return (
      <h1>Server error, please check back later</h1>
    );
  }

  if (isAppLoading) {
    return (
      <Loader />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.MainPage} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Room} element={<PropertyPage />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute>
              <FavoritePage />
            </PrivateRoute>
          }
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
}
