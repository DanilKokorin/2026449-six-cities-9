import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ErrorProcess } from '../../types/state';

const initialState: ErrorProcess = {
  error: '',
};

export const errorProcess = createSlice({
  name: NameSpace.error,
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setError } = errorProcess.actions;
