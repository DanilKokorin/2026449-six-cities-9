import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../store';
import { store } from '../store';
import { getLocations, requireAuthorization, setError } from './action';
import { APIRoute, AuthorizationStatus } from '../const';
import { Hotel } from '../types/hotel';
import { saveToken, dropToken } from './../services/token';
import { AuthData } from '../types/AuthData';
import { UserData } from '../types/UserData';
import { TIMEOUT_SHOW_ERROR } from './../const';
import { errorHandle } from './../services/error-handle';

export const clearErrorAction = createAsyncThunk(
  'main/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);


export const fetchLocationsAction = createAsyncThunk(
  'data/fetchLocations',
  async () => {
    try {
      const { data } = await api.get<Hotel[]>(APIRoute.Hotels);
      store.dispatch(getLocations(data));
    } catch (error) {
      errorHandle(error);
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
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

