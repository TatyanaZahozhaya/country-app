import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { SharedTypes, AppStore, Utils } from '@shared';

export const useCountryName = (id: string): string => {
    return Utils.getName(id);
};

export const useCountryCode = (id: string): string => {
    return Utils.getCode(id);
};

export const useCurrentCountry = (
    countryCode: string,
    countryName: string,
    detailedData: Array<SharedTypes.ICountryOutput>,
): SharedTypes.ICountryOutput | undefined => {
    const data = detailedData.find(
        (item) => item.ccn3 === countryCode && item.name.common === countryName,
    );
    return data;
};

export const useCurrentData = (
    id: string,
    country?: SharedTypes.ICountryOutput,
): Array<{ title: string; info: string }> => {
    const empty: Array<{ title: string; info: string }> = [];
    if (!id.length || !country) return empty;

    const {
        area,
        borders,
        capital,
        capitalInfo,
        car,
        cca2,
        ccn3,
        idd,
        tld,
        currencies,
        languages,
        region,
        timezones,
        name,
    } = country;

    return [
        {
            title: `Name: `,
            info: name.common,
        },
        {
            title: `ISO Code: `,
            info: cca2,
        },
        {
            title: `ISO Code numeric: `,
            info: ccn3,
        },
        {
            title: `Region: `,
            info: region,
        },
        {
            title: `Timezones: `,
            info: `${timezones && timezones.length ? timezones.join(', ') : '-'}`,
        },
        {
            title: `Area: `,
            info: `${area ? area : '-'} km2`,
        },
        {
            title: `Capital: `,
            info: `${capital ? capital : '-'} (coord: ${
                capitalInfo && capitalInfo.latlng.length ? capitalInfo.latlng.join(', ') : '-'
            })`,
        },
        {
            title: `Borders with countries: `,
            info: `${borders && borders.length ? borders.join(', ') : '-'}`,
        },
        {
            title: `Languages: `,
            info: `${languages ? Object.values(languages).join(', ') : '-'}`,
        },
        {
            title: `Currencies: `,
            info: `${currencies ? Object.values(currencies)[0].name : '-'}, code: ${
                currencies ? Object.keys(currencies) : '-'
            }`,
        },
        {
            title: `Car: `,
            info: `"${car ? car.signs.join(', ') : '-'}" signs; ${
                car ? car.side : '-'
            } side driveing`,
        },
        {
            title: `Telephone code: `,
            info: `${idd ? idd.root : '-'}${idd && idd.suffixes.length ? idd.suffixes[0] : '-'}`,
        },
        {
            title: `Domain name: `,
            info: `${tld && tld.length ? tld : '-'}`,
        },
    ];
};

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
