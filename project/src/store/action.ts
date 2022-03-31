import { createAction } from '@reduxjs/toolkit';
import {
  SET_CITY,
  GET_HOTELS,
  REQUIRE_AUTHORIZATION,
  SET_ERROR,
  REDIRECT_TO_ROUTE,
  AppRoute,
  GET_HOTEL,
  GET_COMMENTS,
  GET_NEARBY} from '../const';
import { Hotel } from '../types/hotel';
import { Сomment } from '../types/comment';
import { AuthorizationStatus } from '../const';
import { SET_USER } from './../const';

export const setCity = createAction<string>(SET_CITY);

export const getHotels = createAction<Hotel[]>(GET_HOTELS);

export const getHotel = createAction<Hotel>(GET_HOTEL);

export const getComments = createAction<Сomment[]>(GET_COMMENTS);

export const getNearby = createAction<Hotel[]>(GET_NEARBY);

export const requireAuthorization = createAction<AuthorizationStatus>(REQUIRE_AUTHORIZATION);

export const setError = createAction<string>(SET_ERROR);

export const setUser = createAction<string>(SET_USER);

export const redirectToRoute = createAction<AppRoute>(REDIRECT_TO_ROUTE);
