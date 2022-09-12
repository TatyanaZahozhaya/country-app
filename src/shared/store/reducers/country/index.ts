import { ActionsType } from '../../actions';
import { SharedTypes } from '@shared';

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
        case 'COUNTRY_FETCHING':
            return {
                ...state,
                loading: true,
            };
        case 'COUNTRY_FETCHED':
            return {
                ...state,
                countryInformation: [
                    ...state.countryInformation.filter((item) => item.ccn3 !== action.payload.ccn3),
                    action.payload,
                ],
                loading: false,
                error: false,
            };
        case 'COUNTRY_FETCHING_ERROR':
            return {
                ...state,
                error: true,
                loading: false,
            };
        case 'DELETE_COUNTRY':
            return {
                ...state,
                countryInformation: state.countryInformation.filter(
                    (item) => item.ccn3 !== action.payload,
                ),
            };
        case 'SHOW_COUNTRY_DETAILES':
            return {
                ...state,
                detailedData:  action.payload,
            };
        default:
            return state;
    }
};
