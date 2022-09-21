import { FC } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { Theme, SharedComponents, SharedTypes, AppStore } from '@shared';

import { CountryListItem } from '../country_list_item';

const renderCountryListItem: FC<SharedTypes.ICountryOutput> = (item) => {
    return (
        <CountryListItem
            key={item.ccn3}
            {...item}
        />
    );
};

export const CountriesList = () => {
    const {
        spacing: { l },
    } = Theme.useStyledTheme();

    const filteredCountrySelector = createSelector(
        (state: AppStore.IAppState) => state.filter.activeFilter,
        (state: AppStore.IAppState) => state.country.countryInformation,
        (filter, country) => {
            if (filter === '') {
                return country;
            } else {
                return country.filter((item) =>
                    item.name.common.toLocaleLowerCase().includes(filter, 0),
                );
            }
        },
    );

    const filteredCountryInformation = useSelector(filteredCountrySelector);

    const { countryInformation, loading } = useSelector(
        (state: AppStore.IAppState) => state.country,
    );

    if (countryInformation.length === 0) {
        return <SharedComponents.WarningMessage text="Enter country name ..." />;
    }

    if (!filteredCountryInformation) {
        return <SharedComponents.WarningMessage text="Loading ..." />;
    }

    return (
        <SharedComponents.Container margin={`${l} 0`}>
            <SharedComponents.HomepageTableHeader />
            {loading ? (
                <SharedComponents.HomepageTableErrorContainer>
                    <SharedComponents.Text text="Loading country information ..." />
                </SharedComponents.HomepageTableErrorContainer>
            ) : (
                <ul>{filteredCountryInformation.map(renderCountryListItem)} </ul>
            )}
        </SharedComponents.Container>
    );
};
