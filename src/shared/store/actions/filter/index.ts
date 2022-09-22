export enum FilterAction {
    CHANGE_ACTIVE_FILTER = 'CHANGE_ACTIVE_FILTER',
}

export type FilterActionsType = IChangeActiveFilterAction;

interface IChangeActiveFilterAction {
    type: typeof FilterAction.CHANGE_ACTIVE_FILTER;
    payload: string;
}
export const changeActiveFilter = (filter: string): IChangeActiveFilterAction => {
    return {
        type: FilterAction.CHANGE_ACTIVE_FILTER,
        payload: filter,
    };
};
