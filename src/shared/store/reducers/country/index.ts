import { SharedTypes } from '@shared';

import { CountryActionsType, CountryAction } from '../../actions/country';

export interface IState {
    countryInformation: Array<SharedTypes.ICountryOutput>;
    loading: boolean;
    error: boolean;
}

const initialState: IState = {
    countryInformation: [],
    loading: false,
    error: false,
};

export const countryReducer = (state: IState = initialState, action: CountryActionsType): IState => {
    switch (action.type) {
        case CountryAction.COUNTRY_FETCHING:
            return {
                ...state,
                loading: true,
            };
        case CountryAction.COUNTRY_FETCHED:
            return {
                ...state,
                countryInformation: [
                    ...state.countryInformation.filter((item) => item.ccn3 !== action.payload.ccn3),
                    action.payload,
                ],
                loading: false,
                error: false,
            };
        case CountryAction.COUNTRY_FETCHING_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
            };
        case CountryAction.DELETE_COUNTRY:
            return {
                ...state,
                countryInformation: state.countryInformation.filter(
                    (item) => item.ccn3 !== action.payload,
                ),
            };
        default:
            return state;
    }
};
