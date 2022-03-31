export const SET_CITY = 'SET_CITY';
export const GET_HOTELS = 'GET_HOTELS';
export const GET_HOTEL = 'GET_HOTEL';
export const REQUIRE_AUTHORIZATION = 'REQUIRE_AUTHORIZATION';
export const SET_ERROR = 'SET_ERROR';
export const SET_USER = 'SET_USER';
export const REDIRECT_TO_ROUTE = 'REDIRECT_TO_ROUTE';
export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_NEARBY = 'GET_NEARBY';

export const DEFAULT_CITY = 'Paris';

export const mainСities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const bySorted = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

export const TIMEOUT_SHOW_ERROR = 3000;


export enum AppRoute {
  MainPage = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby',
  Comments = '/comments',
}


export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export const errorStatuses = [HTTP_CODE.BAD_REQUEST, HTTP_CODE.UNAUTHORIZED, HTTP_CODE.NOT_FOUND];

