import { createReducer } from '@reduxjs/toolkit';
import {
  setCity,
  getHotels,
  requireAuthorization,
  setError,
  setUser,
  getHotel,
  getComments,
  getNearby,
  setRating} from './action';
import { AuthorizationStatus, DEFAULT_CITY } from '../const';
import { AppState } from '../types/state';

const initialState: AppState = {
  hotels: [],
  city: DEFAULT_CITY,
  isLodaing: true,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
  user: '',
  hotel: [][0],
  comments: [],
  nearby: [],
  isHotelLodaing: true,
  rating: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    }).addCase(getHotels, (state, action) => {
      state.hotels = action.payload;
      state.isLodaing = false;
    }).addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    }).addCase(setError, (state, action) => {
      state.error = action.payload;
    }).addCase(setUser, (state, action) => {
      state.user = action.payload;
    }).addCase(setRating, (state, action) => {
      state.rating = action.payload;
    }).addCase(getHotel, (state, action) => {
      state.hotel = action.payload;
      state.isHotelLodaing = false;
    }).addCase(getComments, (state, action) => {
      state.comments = action.payload;
    }).addCase(getNearby, (state, action) => {
      state.nearby = action.payload;
    });
});

export { reducer };
