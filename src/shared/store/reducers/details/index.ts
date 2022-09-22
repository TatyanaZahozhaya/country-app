import { SharedTypes } from '@shared';

import { DetailsActionsType, DetailsAction } from '../../actions/details';

export interface IDetailsState {
    detailedData: Array<SharedTypes.ICountryOutput>;
    loadingDetails: boolean;
    errorDetails: boolean;
}

const initialState: IDetailsState = {
    detailedData: [],
    loadingDetails: false,
    errorDetails: false,
};

export const detailsReducer = (state: IDetailsState = initialState, action: DetailsActionsType): IDetailsState => {
    switch (action.type) {
        case DetailsAction.DETAILS_FETCHING:
            return {
                ...state,
                loadingDetails: true,
            };
        case DetailsAction.DETAILS_FETCHED:
            return {
                ...state,
                detailedData: [
                    ...state.detailedData.filter((item) => item.ccn3 !== action.payload.ccn3),
                    action.payload,
                ],
                loadingDetails: false,
                errorDetails: false,
            };
        case DetailsAction.DETAILS_FETCHING_ERROR:
            return {
                ...state,
                errorDetails: true,
                loadingDetails: false,
            };
        default:
            return state;
    }
};
