import { createAction } from '@reduxjs/toolkit';
import { SET_CITY, GET_LOCATIONS } from '../const';
import { Hotel } from '../types/hotel';

export const setCity = createAction<string>(SET_CITY);
export const getLocations = createAction<Hotel[]>(GET_LOCATIONS);

