import { SharedTypes } from '@shared';

import { ActionsType, Action } from '../../actions';

export interface IState {
    countryInformation: Array<SharedTypes.ICountryOutput>;
    loading: boolean;
    error: boolean;
    detailedData: string;
}

const initialState: IState = {
    countryInformation: [],
    loading: false,
    error: false,
    detailedData: '',
};

export const countryReducer = (state: IState = initialState, action: ActionsType): IState => {
    switch (action.type) {
        case Action.COUNTRY_FETCHING:
            return {
                ...state,
                loading: true,
            };
        case Action.COUNTRY_FETCHED:
            return {
                ...state,
                countryInformation: [
                    ...state.countryInformation.filter((item) => item.ccn3 !== action.payload.ccn3),
                    action.payload,
                ],
                loading: false,
                error: false,
            };
        case Action.COUNTRY_FETCHING_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
            };
        case Action.DELETE_COUNTRY:
            return {
                ...state,
                countryInformation: state.countryInformation.filter(
                    (item) => item.ccn3 !== action.payload,
                ),
            };
        case Action.SHOW_COUNTRY_DETAILES:
            return {
                ...state,
                detailedData:  action.payload,
            };
        default:
            return state;
    }
};
