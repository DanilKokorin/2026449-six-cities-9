export const REDIRECT_TO_ROUTE = 'REDIRECT_TO_ROUTE';
export const DEFAULT_CITY = 'Paris';

export const MAIN_CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const SORTING_OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

export const EMAIL_PATTERN = new RegExp(/^((([0-9A-Za-z]{1}[A-Za-z0-9_\-.]{1,}[0-9A-Za-z]{1}))@([-A-Za-z0-9]{1,}\.){1,2}[-A-Za-z]{2,})$/u);

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
  Favorite = '/favorite',
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
  favorites = 'FAVORITES',
}

export enum UrlMarker {
  default = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  current = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
}

export const ERROR_STATUSES = [HTTP_CODE.BAD_REQUEST, HTTP_CODE.UNAUTHORIZED, HTTP_CODE.NOT_FOUND];

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
