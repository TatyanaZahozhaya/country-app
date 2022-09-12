import { ActionsType } from '../../actions';

export interface IFilterState {
    activeFilter: string;
}

const initialState: IFilterState = {
    activeFilter: "",
};

export const filterReducer = (state: IFilterState = initialState, action: ActionsType): IFilterState => {
    switch (action.type) {
        case 'CHANGE_ACTIVE_FILTER':
            return {
                ...state,
                activeFilter: action.payload,
            };
        default:
            return state;
    }
};
