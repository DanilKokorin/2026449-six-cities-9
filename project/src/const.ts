export const SET_CITY = 'SET_CITY';
export const GET_LOCATIONS = 'GET_LOCATIONST';
export const REQUIRE_AUTHORIZATION = 'REQUIRE_AUTHORIZATION';
export const SET_ERROR = 'SET_ERROR';
export const SET_USER = 'SET_USER';
export const REDIRECT_TO_ROUTE = 'REDIRECT_TO_ROUTE';

export const DEFAULT_CITY = 'Paris';

export const mainСities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

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
}


export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  status
}

export const errorStatuses = [HTTP_CODE.BAD_REQUEST, HTTP_CODE.UNAUTHORIZED, HTTP_CODE.NOT_FOUND];
