import { createAction } from '@reduxjs/toolkit';
import { SET_CITY, GET_LOCATIONS, REQUIRE_AUTHORIZATION, SET_ERROR, REDIRECT_TO_ROUTE, AppRoute } from '../const';
import { Hotel } from '../types/hotel';
import { AuthorizationStatus } from '../const';
import { SET_USER } from './../const';

export const setCity = createAction<string>(SET_CITY);

export const getLocations = createAction<Hotel[]>(GET_LOCATIONS);

export const requireAuthorization = createAction<AuthorizationStatus>(REQUIRE_AUTHORIZATION);

export const setError = createAction<string>(SET_ERROR);

export const setUser = createAction<string>(SET_USER);

export const redirectToRoute = createAction<AppRoute>(REDIRECT_TO_ROUTE);
