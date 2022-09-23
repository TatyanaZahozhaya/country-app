import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { SharedTypes, Client, AppStore } from '@shared';

export enum CountryAction {
    COUNTRY_FETCHING = 'COUNTRY_FETCHING',
    COUNTRY_FETCHED = 'COUNTRY_FETCHED',
    COUNTRY_FETCHING_ERROR = 'COUNTRY_FETCHING_ERROR',
    DELETE_COUNTRY = 'DELETE_COUNTRY',
}

export type CountryActionsType =
    | ICountryFetchingAction
    | ICountryFetchedAction
    | ICountryFetchingErrorAction
    | IDeleteCountryAction;

interface ICountryFetchingAction {
    type: typeof CountryAction.COUNTRY_FETCHING;
}

export const countryFetching = (): ICountryFetchingAction => {
    return {
        type: CountryAction.COUNTRY_FETCHING,
    };
};

interface ICountryFetchedAction {
    type: typeof CountryAction.COUNTRY_FETCHED;
    payload: SharedTypes.ICountryOutput;
}
export const countryFetched = (country: SharedTypes.ICountryOutput): ICountryFetchedAction => {
    return {
        type: CountryAction.COUNTRY_FETCHED,
        payload: country,
    };
};

interface ICountryFetchingErrorAction {
    type: typeof CountryAction.COUNTRY_FETCHING_ERROR;
}
export const countryFetchingError = (): ICountryFetchingErrorAction => {
    return {
        type: CountryAction.COUNTRY_FETCHING_ERROR,
    };
};

interface IDeleteCountryAction {
    type: typeof CountryAction.DELETE_COUNTRY;
    payload: string;
}
export const deleteCountry = (ccn3: string): IDeleteCountryAction => {
    return {
        type: CountryAction.DELETE_COUNTRY,
        payload: ccn3,
    };
};

//thunk
export const getCountryData =
    ({ name }: SharedTypes.ICountryInput): ThunkAction<void, AppStore.IState, unknown, AnyAction> =>
    (dispatch) => {
        const { fetchCountryData } = Client;
        dispatch(countryFetching());
        fetchCountryData({ name: name })
            .then((data: SharedTypes.ICountryData) => {
                if (!data.length) {
                    alert('City not found. Check the spelling');
                    dispatch(countryFetchingError());
                } else {
                    data.forEach((item) => dispatch(countryFetched(item)));
                }
            })
            .catch(() => dispatch(countryFetchingError()));
    };

export const addCountryData =
    ({
        name,
        code,
    }: SharedTypes.IAddCountryInput): ThunkAction<void, AppStore.IState, unknown, AnyAction> =>
    (dispatch) => {
        const { fetchCountryData } = Client;
        dispatch(countryFetching());
        fetchCountryData({ name: name })
            .then((data: SharedTypes.ICountryData) => {
                if (!data.length) {
                    alert('City not found. Check the spelling');
                    dispatch(countryFetchingError());
                } else {
                    const country = data.find((item) => item.ccn3 === code);
                    if (country) {
                        dispatch(countryFetched(country));
                    }
                }
            })
            .catch(() => dispatch(countryFetchingError()));
    };
