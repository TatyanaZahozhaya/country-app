import { SharedTypes } from '@shared';

import { DetailsActionsType, DetailsAction } from '../../actions/details';

export interface IDetailsState {
    detailedData: Array<SharedTypes.ICountryOutput>;
    isLoadingDetails: boolean;
    hasDetailesError: boolean;
}

const initialState: IDetailsState = {
    detailedData: [],
    isLoadingDetails: false,
    hasDetailesError: false,
};

export const detailsReducer = (state: IDetailsState = initialState, action: DetailsActionsType): IDetailsState => {
    switch (action.type) {
        case DetailsAction.DETAILS_FETCHING:
            return {
                ...state,
                isLoadingDetails: true,
            };
        case DetailsAction.DETAILS_FETCHED:
            return {
                ...state,
                detailedData: [
                    ...state.detailedData.filter((item) => item.ccn3 !== action.payload.ccn3),
                    action.payload,
                ],
                isLoadingDetails: false,
                hasDetailesError: false,
            };
        case DetailsAction.DETAILS_FETCHING_ERROR:
            return {
                ...state,
                hasDetailesError: true,
                isLoadingDetails: false,
            };
        default:
            return state;
    }
};
