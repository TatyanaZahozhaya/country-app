import { useSelector } from 'react-redux';

import { Theme, SharedComponents, SharedTypes, AppStore, Hooks } from '@shared';

import { CountryListItem } from '../country_list_item';

const renderCountryListItem = (item: SharedTypes.ICountryOutput) => {
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

    const { countryInformation, isLoadingCountryInfo } = useSelector(
        (state: AppStore.IAppState) => state.country,
    );
    const filteredCountryInformation = Hooks.useFilteredCountryInfo();

    if (countryInformation.length === 0) {
        return <SharedComponents.WarningMessage text="Enter country name ..." />;
    }

    return (
        <SharedComponents.Container margin={`${l} 0`}>
            <SharedComponents.HomepageTableHeader />
            {isLoadingCountryInfo ? (
                <SharedComponents.HomepageTableErrorContainer>
                    <SharedComponents.Text text="Loading country information ..." />
                </SharedComponents.HomepageTableErrorContainer>
            ) : (
                <ul>{filteredCountryInformation.map(renderCountryListItem)} </ul>
            )}
        </SharedComponents.Container>
    );
};
