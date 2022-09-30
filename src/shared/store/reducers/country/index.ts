import { SharedTypes } from '@shared';

import { CountryActionsType, CountryAction } from '../../actions/country';

export interface IState {
    countryInformation: Array<SharedTypes.ICountryOutput>;
    isLoadingCountryInfo: boolean;
    hasCountryInfoError: boolean;
}

const initialState: IState = {
    countryInformation: [],
    isLoadingCountryInfo: false,
    hasCountryInfoError: false,
};

export const countryReducer = (state: IState = initialState, action: CountryActionsType): IState => {
    switch (action.type) {
        case CountryAction.COUNTRY_FETCHING:
            return {
                ...state,
                isLoadingCountryInfo: true,
            };
        case CountryAction.COUNTRY_FETCHED:
            return {
                ...state,
                countryInformation: [
                    ...state.countryInformation.filter((item) => item.ccn3 !== action.payload.ccn3),
                    action.payload,
                ],
                isLoadingCountryInfo: false,
                hasCountryInfoError: false,
            };
        case CountryAction.COUNTRY_FETCHING_ERROR:
            return {
                ...state,
                hasCountryInfoError: true,
                isLoadingCountryInfo: false,
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
