export const SET_CITY = 'SET_CITY';
export const GET_LOCATIONS = 'GET_LOCATIONST';

export const DEFAULT_CITY = 'Amsterdam';

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
