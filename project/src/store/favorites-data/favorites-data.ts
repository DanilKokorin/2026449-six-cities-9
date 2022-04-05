import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoritesData } from '../../types/state';

const initialState: FavoritesData = {
  favorites: [],
  emptryFavorites: true,
};

export const favoritesData = createSlice({
  name: NameSpace.favorites,
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    setEmpty: (state, action) => {
      state.emptryFavorites = action.payload;
    },
  },
});

export const { setFavorites, setEmpty } = favoritesData.actions;
