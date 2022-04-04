export const DEFAULT_CITY = 'Paris';

export const mainСities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const sortedBy = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

export const TIMEOUT_SHOW_ERROR = 3000;

export const STARS_NUMBER = 5;

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

export enum NameSpace {
  main = 'MAIN',
  offer = 'OFFER',
  user = 'USER',
  error = 'ERROR',
}

export const errorStatuses = [HTTP_CODE.BAD_REQUEST, HTTP_CODE.UNAUTHORIZED, HTTP_CODE.NOT_FOUND];

