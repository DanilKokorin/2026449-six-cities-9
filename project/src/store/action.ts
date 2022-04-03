import { createAction } from '@reduxjs/toolkit';
import { REDIRECT_TO_ROUTE, AppRoute } from '../const';

export const redirectToRoute = createAction<AppRoute>(REDIRECT_TO_ROUTE);
