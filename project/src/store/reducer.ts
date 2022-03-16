import { createReducer } from '@reduxjs/toolkit';
import { setCity, getLocations } from './action';
import { DEFAULT_CITY } from './../components/const';

const initialState = {
  locations: [],
  city: DEFAULT_CITY,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getLocations, (state, action) => {
      state.locations = action.payload;
    });
});

export { reducer };
