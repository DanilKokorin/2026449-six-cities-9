import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoritePage from '../../pages/FavoritePage';
import Login from '../../pages/Login';
import MainPage from '../../pages/MainPage';
import PageNotFound from '../../pages/PageNotFound';
import PropertyPage from '../../pages/PropertyPage';
import Layout from '../../route/layout';
import PrivateRoute from '../../route/private-route';
import { AppRoute, AuthorizationStatus } from '../const';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.MainPage} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Room} element={<PropertyPage />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritePage />
            </PrivateRoute>
          }
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
