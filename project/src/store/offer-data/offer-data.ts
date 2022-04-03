import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferState } from '../../types/state';

const initialState: OfferState = {
  comments: [],
  nearby: [],
  hotel: [][0],
  isHotelLodaing: true,
  rating: 0,
};

export const offerData = createSlice({
  name: NameSpace.offer,
  initialState,
  reducers: {
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    getHotel: (state, action) => {
      state.hotel = action.payload;
      state.isHotelLodaing = false;
    },
    getComments: (state, action) => {
      state.comments = action.payload;
    },
    getNearby: (state, action) => {
      state.nearby = action.payload;
    },
  },
});

export const { setRating, getHotel, getComments, getNearby } = offerData.actions;
