import { AuthorizationStatus } from '../const';
import { store } from '../store/index';
import { Hotel } from './hotel';
import { Сomment } from './comment';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type OfferState = {
  comments: Сomment[],
  nearby: Hotel[],
  hotel: Hotel,
  isHotelLodaing: boolean,
  rating: number,
};

export type UserProcess = {
  user: string,
  authorizationStatus: AuthorizationStatus,
};

export type ErrorProcess = {
  error: string,
};

export type MainState = {
  city: string,
  hotels: Hotel[],
  isLodaing: boolean,
};

