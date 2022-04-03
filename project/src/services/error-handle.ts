import request from 'axios';
import { store } from '../store';
import { setError } from '../store/error-process/error-process';
import { errorStatuses } from '../const';
import { ErrorType } from '../types/error';
import { clearErrorAction } from './../store/api-action';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const handleError = (message: string) => {
    store.dispatch(setError(message));
    store.dispatch(clearErrorAction());
  };

  const { response } = error;

  if (response) {
    if (errorStatuses.some((status) => response.status === status)) {
      handleError(response.data.error);
    }
  }
};
