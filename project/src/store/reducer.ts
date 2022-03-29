import { createReducer } from '@reduxjs/toolkit';
import { setCity, getLocations, requireAuthorization, setError, setUser } from './action';
import { AuthorizationStatus, DEFAULT_CITY } from '../const';
import { AppState } from '../types/state';

const initialState: AppState = {
  locations: [],
  city: DEFAULT_CITY,
  isLodaing: true,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
  user: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getLocations, (state, action) => {
      state.locations = action.payload;
      state.isLodaing = false;
    }).addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    }).addCase(setError, (state, action) => {
      state.error = action.payload;
    }).addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});

export { reducer };
