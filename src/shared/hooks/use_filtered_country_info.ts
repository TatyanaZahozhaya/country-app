import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { AppStore } from '@shared';

export const useFilteredCountryInfo = () => {
    const filteredCountrySelector = createSelector(
        (state: AppStore.IAppState) => state.filter.activeFilter,
        (state: AppStore.IAppState) => state.country.countryInformation,
        (filter, country) => {
            if (filter === '') {
                return country;
            } else {
                return country.filter((item) => item.name.common.toLowerCase().includes(filter, 0));
            }
        },
    );

    const filteredCountryInformation = useSelector(filteredCountrySelector);
    return filteredCountryInformation;
};
