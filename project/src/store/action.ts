import { createAction } from '@reduxjs/toolkit';
import { SET_CITY, GET_LOCATIONS } from './../components/const';

export const setCity = createAction<string>(SET_CITY);
export const getLocations = createAction<[]>(GET_LOCATIONS);

