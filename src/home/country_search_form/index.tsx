import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { AppStore, SharedComponents } from '@shared';

export const CountrySearchForm = () => {
    const [filter, setFilter] = useState('');

    const dispatch = useDispatch();
    const { changeActiveFilter } = AppStore.Actions;

    useEffect(() => {
        dispatch(changeActiveFilter(filter));
    }, [filter, changeActiveFilter, dispatch]);

    const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFilter(e.target.value.toLocaleLowerCase());
    };

    const onSubmitForm = (e: React.FormEvent):void => {
        e.preventDefault();
    }
    return (
        <SharedComponents.Form onSubmit={onSubmitForm}>
            <SharedComponents.Input
                ariaLabel="field to Find a country in the list"
                placeholder="Find a country in the list..."
                value={filter}
                onChange={onChangeFilter}
            />
        </SharedComponents.Form>
    );
};
