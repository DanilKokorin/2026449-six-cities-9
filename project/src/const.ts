export const SET_CITY = 'SET_CITY';
export const GET_LOCATIONS = 'GET_LOCATIONST';

export const DEFAULT_CITY = 'Paris';

export const mainСities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

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

export enum ApiRoute {
    Hotels = '/hotels',
    Login = '/login',
    Logout = '/logout',
}
