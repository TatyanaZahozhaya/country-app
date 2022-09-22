import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { SharedComponents, SharedTypes, AppStore, Utils } from '@shared';

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
    const { detailedData } = useSelector((state: AppStore.IAppState) => state.details);

    const dispatch = useDispatch();
    const { getDetailedData } = AppStore.Actions.Details;

    const { id } = useParams();
    const { cutName, cutCode } = Utils;

    let countryName = '';
    let countryCode = '';

    if (id) {
        countryName = cutName(id);
        countryCode = cutCode(id);
    }

    const currentCountry = detailedData.find((item) => item.ccn3 === countryCode);

    useEffect(() => {
        if (!currentCountry) {
            dispatch(getDetailedData({ code: countryName }));
        }
    }, []);

    if (currentCountry) {
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
                info: `${
                    currencies ? Object.values(currencies)[0].name : '-'
                }, code: ${currencies ? Object.keys(currencies): '-'}`,
            },
            {
                title: `Car: `,
                info: `"${car ? car.signs.join(', ') : '-'}" signs; ${car ? car.side : '-'} side driveing`,
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

        return (
            <>
                <SharedComponents.DetailsDataContainer>
                    <SharedComponents.FlagIcon icon={`${coatOfArms ? coatOfArms.svg : '-'}`} />
                    <SharedComponents.FlagIcon icon={`${flags ? flags.svg : '-'}`} />
                </SharedComponents.DetailsDataContainer>
                <SharedComponents.DetailsDataContainer>
                    <SharedComponents.Text text={`${name ? Object.values(name.nativeName)[0].official : '-'}`} />
                </SharedComponents.DetailsDataContainer>
                <SharedComponents.Container>
                    {currentData.map(renderTableRows)}
                </SharedComponents.Container>
            </>
        );
    }

    return (
        <SharedComponents.WarningMessage text="No data. Please, enter country name. Link to Home page ..." />
    );
};
