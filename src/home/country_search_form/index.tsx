import { useDispatch, useSelector } from 'react-redux';

import { AppStore, SharedComponents } from '@shared';

export const CountrySearchForm = () => {
    const { activeFilter } = useSelector((state: AppStore.IAppState) => state.filter);
    const dispatch = useDispatch();
    const { changeActiveFilter } = AppStore.Actions.Filter;

    return (
        <SharedComponents.Form onSubmit={(e: React.FormEvent) => e.preventDefault()}>
            <SharedComponents.Input
                ariaLabel="field to Find a country in the list"
                placeholder="Find a country in the list..."
                value={activeFilter}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(changeActiveFilter(e.target.value.toLowerCase()))
                }
            />
        </SharedComponents.Form>
    );
};
