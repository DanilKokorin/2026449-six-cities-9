import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { errorProcess } from './error-process/error-process';
import { mainData } from './main-data/main-data';
import { offerData } from './offer-data/offer-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.main]: mainData.reducer,
  [NameSpace.offer]: offerData.reducer,
  [NameSpace.user]: userProcess.reducer,
  [NameSpace.error]: errorProcess.reducer,
});
