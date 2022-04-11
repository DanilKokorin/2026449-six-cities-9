import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ErrorProcess } from '../../types/state';

const initialState: ErrorProcess = {
  error: '',
  errorServer: false,
};

export const errorProcess = createSlice({
  name: NameSpace.error,
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    setErrorServer: (state, action) => {
      state.errorServer = action.payload;
    },
  },
});

export const { setError, setErrorServer } = errorProcess.actions;
