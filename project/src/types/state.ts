import { AuthorizationStatus } from '../const';
import { store } from '../store/index';
import { Hotel } from './hotel';
import { Сomment } from './comment';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppState = {
  city: string,
  hotels: Hotel[],
  hotel: Hotel,
  isLodaing: boolean,
  authorizationStatus: AuthorizationStatus,
  error: string,
  user: string,
  comments: Сomment[],
  nearby: Hotel[],
  isHotelLodaing: boolean,
}
