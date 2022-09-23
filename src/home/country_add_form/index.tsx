import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { SharedComponents, AppStore } from '@shared';

export const CountryAddForm = () => {
    const [countryName, setCountryName] = useState('');

    const dispatch = useDispatch();
    const { getCountryData } = AppStore.Actions.Country;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.value.length >= 0) {
            setCountryName(e.target.value);
        }
    };

    const onSubmitHandler = (e: React.FormEvent): void => {
        e.preventDefault();
        if (countryName.length === 0) {
            alert('enter country name ');
        } else {
            dispatch(getCountryData({ name: countryName }));
        } 
        setCountryName('');
    };

    return (
        <SharedComponents.Form onSubmit={onSubmitHandler}>
            <SharedComponents.Input
                ariaLabel="field to Add country to the list"
                placeholder="Add country to list"
                onChange={handleChange}
                value={countryName}
            />
            <SharedComponents.Button
                ariaLabel="button Add country to list"
                text="Add"
            />
        </SharedComponents.Form>
    );
};
