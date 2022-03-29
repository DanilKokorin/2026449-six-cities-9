import { Route, Routes } from 'react-router-dom';
import FavoritePage from '../../pages/FavoritePage';
import Login from '../../pages/Login';
import MainPage from '../../pages/MainPage';
import PageNotFound from '../../pages/PageNotFound';
import PropertyPage from '../../pages/PropertyPage';
import Layout from '../../route/layout';
import PrivateRoute from '../../route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import Loader from './../UI/Loader/Loader';
import { useAppSelector } from '../../hooks/useState';
import HistoryRouter from '../history-route/history-route';
import browserHistory from './../../browser-history';

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export default function App() {
  const { authorizationStatus, isLodaing } = useAppSelector((state) => state);
  if (isCheckedAuth(authorizationStatus) || isLodaing) {
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
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
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
