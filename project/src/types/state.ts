import { store } from '../store/index.js';
import { Hotel } from './hotel.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppState = {
  city: string,
  locations: Hotel[],
  isLodaing: boolean,
}
