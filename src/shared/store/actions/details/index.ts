import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { SharedTypes, ClientDetails, AppStore } from '@shared';

export enum DetailsAction {
    DETAILS_FETCHING = 'DETAILS_FETCHING',
    DETAILS_FETCHED = 'DETAILS_FETCHED',
    DETAILS_FETCHING_ERROR = 'DETAILS_FETCHING_ERROR',
}

export type DetailsActionsType =
    | IDetailsFetchingAction
    | IDetailsFetchedAction
    | IDetailsFetchingErrorAction;

interface IDetailsFetchingAction {
    type: typeof DetailsAction.DETAILS_FETCHING;
}

export const detailsFetching = (): IDetailsFetchingAction => {
    return {
        type: DetailsAction.DETAILS_FETCHING,
    };
};

interface IDetailsFetchedAction {
    type: typeof DetailsAction.DETAILS_FETCHED;
    payload: SharedTypes.ICountryOutput;
}
export const showCountryDetails = (country: SharedTypes.ICountryOutput): IDetailsFetchedAction => {
    return {
        type: DetailsAction.DETAILS_FETCHED,
        payload: country,
    };
};

interface IDetailsFetchingErrorAction {
    type: typeof DetailsAction.DETAILS_FETCHING_ERROR;
}
export const detailsFetchingError = (): IDetailsFetchingErrorAction => {
    return {
        type: DetailsAction.DETAILS_FETCHING_ERROR,
    };
};

//thunk

export const getDetailedData =
    ({
        name,
        code,
    }: SharedTypes.IAddCountryInput): ThunkAction<void, AppStore.IState, unknown, AnyAction> =>
    (dispatch) => {
        const { fetchCountryData } = ClientDetails;
        dispatch(detailsFetching());
        fetchCountryData({ name: name })
            .then((data: SharedTypes.ICountryOutput[]) => {
                if (!data.length || !data.some((item) => item.ccn3 === code)) {
                    dispatch(detailsFetchingError());
                } else {
                    data.forEach((item) => dispatch(showCountryDetails(item)));
                }
            })
            .catch(() => dispatch(detailsFetchingError()));
    };
