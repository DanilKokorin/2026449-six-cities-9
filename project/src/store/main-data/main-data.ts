import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, DEFAULT_CITY } from '../../const';
import { MainState } from '../../types/state';

const initialState: MainState = {
  hotels: [],
  city: DEFAULT_CITY,
  isLodaing: true,
  emptryHotel: true,
};

export const mainData = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    getHotels: (state, action) => {
      state.hotels = action.payload;
      state.isLodaing = false;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setEmptryHotel: (state, action) => {
      state.emptryHotel = action.payload;
      state.isLodaing = false;
    },
  },
});

export const { getHotels, setCity, setEmptryHotel } = mainData.actions;
