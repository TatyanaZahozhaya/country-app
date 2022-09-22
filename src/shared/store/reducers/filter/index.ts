import { FilterActionsType, FilterAction } from '../../actions/filter';

export interface IFilterState {
    activeFilter: string;
}

const initialState: IFilterState = {
    activeFilter: "",
};

export const filterReducer = (state: IFilterState = initialState, action: FilterActionsType): IFilterState => {
    switch (action.type) {
        case FilterAction.CHANGE_ACTIVE_FILTER:
            return {
                ...state,
                activeFilter: action.payload,
            };
        default:
            return state;
    }
};
