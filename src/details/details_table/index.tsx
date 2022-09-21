import { useSelector } from 'react-redux';

import { SharedComponents, SharedTypes, Paths, AppStore } from '@shared';

const renderTableRows = (item: SharedTypes.IDetailesRow) => {
    return (
        <SharedComponents.DetailesRow
            key={item.title}
            title={item.title}
            info={item.info}
        />
    );
};

export const DetailsTable = () => {
    const { countryInformation, detailedData } = useSelector(
        (state: AppStore.IAppState) => state.country,
    );

    if (countryInformation.length > 0) {
        const currentCountry = countryInformation.filter((item) => item.ccn3 === detailedData)[0];

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
            flags,
            coatOfArms,
        } = currentCountry;

        const currentData = [
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
                info: `${timezones.join(', ')}`,
            },
            {
                title: `Area: `,
                info: `${area} km2`,
            },
            {
                title: `Capital: `,
                info: `${capital} (coord: ${capitalInfo.latlng.join(', ')})`,
            },
            {
                title: `Borders with countries: `,
                info: `${borders.join(', ')}`,
            },
            {
                title: `Languages: `,
                info: `${Object.values(languages).join(', ')}`,
            },
            {
                title: `Currencies: `,
                info: `${Object.values(currencies)[0].name}, code: ${Object.keys(currencies)}`,
            },
            {
                title: `Car: `,
                info: `"${car.signs.join(', ')}" signs; ${car.side} side driveing`,
            },
            {
                title: `Telephone code: `,
                info: `${idd.root}${idd.suffixes[0]}`,
            },
            {
                title: `Domain name: `,
                info: `${tld}`,
            },
        ];

        return (
            <>
                <SharedComponents.DetailsDataContainer>
                    <SharedComponents.FlagIcon icon={`${coatOfArms.svg}`} />
                    <SharedComponents.FlagIcon icon={`${flags.svg}`} />
                </SharedComponents.DetailsDataContainer>
                <SharedComponents.DetailsDataContainer>
                    <SharedComponents.Text text={`${Object.values(name.nativeName)[0].official}`} />
                </SharedComponents.DetailsDataContainer>
                <SharedComponents.Container>
                    {currentData.map(renderTableRows)}
                </SharedComponents.Container>
            </>
        );
    }

    return (
        <>
            <SharedComponents.WarningMessage text="No data. Please, enter country name. Link to Home page ..." />
            <SharedComponents.LinkButton
                ariaLabel="Link to Home page"
                text="HOME"
                to={Paths.HOME}
            />
        </>
    );
};
