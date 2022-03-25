import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../store';
import { store } from '../store';
import { getLocations } from './action';
import { ApiRoute } from '../const';
import { Hotel } from '../types/hotel';

export const fetchLocationsAction = createAsyncThunk(
  'data/fetchLocations',
  async () => {
    try {
      const { data } = await api.get<Hotel[]>(ApiRoute.Hotels);
      store.dispatch(getLocations(data));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  },
);
