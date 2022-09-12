import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { SharedTypes, Client, AppStore } from '@shared';

const COUNTRY_FETCHING = 'COUNTRY_FETCHING';
const COUNTRY_FETCHED = 'COUNTRY_FETCHED';
const COUNTRY_FETCHING_ERROR = 'COUNTRY_FETCHING_ERROR';
const DELETE_COUNTRY = 'DELETE_COUNTRY';
const SHOW_COUNTRY_DETAILES = 'SHOW_COUNTRY_DETAILES';
const CHANGE_ACTIVE_FILTER = 'CHANGE_ACTIVE_FILTER';
const TOGGLE_THEME = 'TOGGLE_THEME';

export type ActionsType =
    | ICountryFetchingAction
    | ICountryFetchedAction
    | ICountryFetchingErrorAction
    | IDeleteCountryAction
    | IShowCountryDetailesAction
    | IChangeActiveFilterAction
    | IToggleThemeAction;

interface ICountryFetchingAction {
    type: typeof COUNTRY_FETCHING;
}
export const countryFetching = (): ICountryFetchingAction => {
    return {
        type: 'COUNTRY_FETCHING',
    };
};

interface ICountryFetchedAction {
    type: typeof COUNTRY_FETCHED;
    payload: SharedTypes.ICountryOutput;
}
export const countryFetched = (country: SharedTypes.ICountryOutput): ICountryFetchedAction => {
    return {
        type: 'COUNTRY_FETCHED',
        payload: country,
    };
};

interface ICountryFetchingErrorAction {
    type: typeof COUNTRY_FETCHING_ERROR;
}
export const countryFetchingError = (): ICountryFetchingErrorAction => {
    return {
        type: 'COUNTRY_FETCHING_ERROR',
    };
};

interface IDeleteCountryAction {
    type: typeof DELETE_COUNTRY;
    payload: string;
}
export const deleteCountry = (ccn3: string): IDeleteCountryAction => {
    return {
        type: 'DELETE_COUNTRY',
        payload: ccn3,
    };
};

interface IShowCountryDetailesAction {
    type: typeof SHOW_COUNTRY_DETAILES;
    payload: string;
}
export const showCountryDetailes = (ccn3: string): IShowCountryDetailesAction => {
    return {
        type: 'SHOW_COUNTRY_DETAILES',
        payload: ccn3,
    };
};

interface IChangeActiveFilterAction {
    type: typeof CHANGE_ACTIVE_FILTER;
    payload: string;
}
export const changeActiveFilter = (filter: string): IChangeActiveFilterAction => {
    return {
        type: 'CHANGE_ACTIVE_FILTER',
        payload: filter,
    };
};

interface IToggleThemeAction {
    type: typeof TOGGLE_THEME;
    payload: string;
}
export const toggleTheme = (activeTheme: string): IToggleThemeAction => {
    return {
        type: 'TOGGLE_THEME',
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
                if (!data[0]) {
                    alert('City not found. Chaeck the spelling');
                    dispatch(countryFetchingError());
                } else {
                    data.forEach((item) => dispatch(countryFetched(item)));
                }
            })
            .catch(() => dispatch(countryFetchingError()));
    };
