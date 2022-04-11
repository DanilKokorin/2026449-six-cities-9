import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from './store';
import { store } from './store';
import { setError, setErrorServer } from './error-process/error-process';
import { getHotel, getComments, getNearby } from './offer-data/offer-data';
import { getHotels, setEmptryHotel } from './main-data/main-data';
import { requireAuthorization } from './user-process/user-process';
import { APIRoute, AuthorizationStatus } from '../const';
import { Hotel } from '../types/hotel';
import { saveToken, dropToken } from './../services/token';
import { AuthData } from '../types/AuthData';
import { UserData } from '../types/UserData';
import { Сomment } from '../types/comment';
import { TIMEOUT_SHOW_ERROR } from './../const';
import { errorHandle } from './../services/error-handle';
import { AddReview } from '../types/addReview';
import { setEmpty, setFavorites } from './favorites-data/favorites-data';
import { SendFavorite } from '../types/sendFavorite';

export const clearErrorAction = createAsyncThunk(
  'main/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);


export const fetchHotelsAction = createAsyncThunk(
  'data/fetchHotels',
  async () => {
    try {
      const { data } = await api.get<Hotel[]>(APIRoute.Hotels);
      store.dispatch(getHotels(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(setErrorServer(true));
    }
  },
);

export const fetchHotelAction = createAsyncThunk(
  'data/fetchHotel',
  async (id: string | undefined) => {
    try {
      const { data } = await api.get<Hotel>(`${APIRoute.Hotels}/${id}`);
      !data ? store.dispatch(setEmptryHotel(true)) : store.dispatch(setEmptryHotel(false));
      store.dispatch(getHotel(data));
    } catch (error) {
      store.dispatch(getHotel(''));
      errorHandle(error);
    }
  },
);

export const fetchCommentsAction = createAsyncThunk(
  'data/fetchHotel',
  async (id: string | undefined) => {
    try {
      const { data } = await api.get<Сomment[]>(`${APIRoute.Comments}/${id}`);
      store.dispatch(getComments(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(setErrorServer(true));
    }
  },
);

export const fetchNearbyAction = createAsyncThunk(
  'data/fetchHotel',
  async (id: string | undefined) => {
    try {
      const { data } = await api.get<Hotel[]>(`${APIRoute.Hotels}/${id}${APIRoute.Nearby}`);
      store.dispatch(getNearby(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(setErrorServer(true));
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({ login: email, password }: AuthData) => {
    try {
      const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      store.dispatch(setFavorites([]));
      store.dispatch(fetchHotelsAction());
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const LeaveFeedbackAction = createAsyncThunk(
  'offer/leaveFeedback',
  async ({ hotelID, reviewData }: AddReview) => {
    try {
      const { comment, rating } = reviewData;
      const { data } = await api.post(`${APIRoute.Comments}/${hotelID}`, { comment, rating });
      store.dispatch(getComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavoritesAction = createAsyncThunk(
  'favorites/setFavorites',
  async () => {
    try {
      const { data } = await api.get<Hotel[]>(`${APIRoute.Favorite}`);
      !data.length ? store.dispatch(setEmpty(true)) : store.dispatch(setEmpty(false));
      store.dispatch(setFavorites(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const sendFavoriteAction = createAsyncThunk(
  'favorites/setFavorites',
  async ({ id, status }: SendFavorite) => {
    try {
      const { data } = await api.post<Hotel[]>(`${APIRoute.Favorite}/${id}/${status}`);
      store.dispatch(setFavorites(data));
      store.dispatch(fetchFavoritesAction());
      store.dispatch(fetchHotelsAction());
    } catch (error) {
      errorHandle(error);
    }
  },
);


