import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { SharedTypes, Client, AppStore } from '@shared';

export enum Action {
    COUNTRY_FETCHING = 'COUNTRY_FETCHING',
    COUNTRY_FETCHED = 'COUNTRY_FETCHED',
    COUNTRY_FETCHING_ERROR = 'COUNTRY_FETCHING_ERROR',
    DELETE_COUNTRY = 'DELETE_COUNTRY',
    SHOW_COUNTRY_DETAILES = 'SHOW_COUNTRY_DETAILES',
    CHANGE_ACTIVE_FILTER = 'CHANGE_ACTIVE_FILTER',
    TOGGLE_THEME = 'TOGGLE_THEME',
}

export type ActionsType =
    | ICountryFetchingAction
    | ICountryFetchedAction
    | ICountryFetchingErrorAction
    | IDeleteCountryAction
    | IShowCountryDetailesAction
    | IChangeActiveFilterAction
    | IToggleThemeAction;

interface ICountryFetchingAction {
    type: typeof Action.COUNTRY_FETCHING;
}

export const countryFetching = (): ICountryFetchingAction => {
    return {
        type: Action.COUNTRY_FETCHING,
    };
};

interface ICountryFetchedAction {
    type: typeof Action.COUNTRY_FETCHED;
    payload: SharedTypes.ICountryOutput;
}
export const countryFetched = (country: SharedTypes.ICountryOutput): ICountryFetchedAction => {
    return {
        type: Action.COUNTRY_FETCHED,
        payload: country,
    };
};

interface ICountryFetchingErrorAction {
    type: typeof Action.COUNTRY_FETCHING_ERROR;
}
export const countryFetchingError = (): ICountryFetchingErrorAction => {
    return {
        type: Action.COUNTRY_FETCHING_ERROR,
    };
};

interface IDeleteCountryAction {
    type: typeof Action.DELETE_COUNTRY;
    payload: string;
}
export const deleteCountry = (ccn3: string): IDeleteCountryAction => {
    return {
        type: Action.DELETE_COUNTRY,
        payload: ccn3,
    };
};

interface IShowCountryDetailesAction {
    type: typeof Action.SHOW_COUNTRY_DETAILES;
    payload: string;
}
export const showCountryDetailes = (ccn3: string): IShowCountryDetailesAction => {
    return {
        type: Action.SHOW_COUNTRY_DETAILES,
        payload: ccn3,
    };
};

interface IChangeActiveFilterAction {
    type: typeof Action.CHANGE_ACTIVE_FILTER;
    payload: string;
}
export const changeActiveFilter = (filter: string): IChangeActiveFilterAction => {
    return {
        type: Action.CHANGE_ACTIVE_FILTER,
        payload: filter,
    };
};

interface IToggleThemeAction {
    type: typeof Action.TOGGLE_THEME;
    payload: string;
}
export const toggleTheme = (activeTheme: string): IToggleThemeAction => {
    return {
        type: Action.TOGGLE_THEME,
        payload: activeTheme,
    };
};

//thunk
export const getCountryData =
    ({ code }: SharedTypes.ICountryInput): ThunkAction<void, AppStore.IState, unknown, AnyAction> =>
    (dispatch) => {
        const { fetchCountryData } = Client;
        dispatch(countryFetching());
        fetchCountryData({ code: code })
            .then((data: SharedTypes.ICountryOutput[]) => {
                if (!data.length) {
                    alert('City not found. Check the spelling');
                    dispatch(countryFetchingError());
                } else {
                    data.forEach((item) => dispatch(countryFetched(item)));
                }
            })
            .catch(() => dispatch(countryFetchingError()));
    };
