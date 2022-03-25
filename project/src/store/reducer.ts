import { createReducer } from '@reduxjs/toolkit';
import { setCity, getLocations } from './action';
import { DEFAULT_CITY } from '../const';
import { AppState } from '../types/state';

const initialState: AppState = {
  locations: [],
  city: DEFAULT_CITY,
  isLoader: true,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getLocations, (state, action) => {
      state.locations = action.payload;
      state.isLoader = false;
    });
});

export { reducer };
