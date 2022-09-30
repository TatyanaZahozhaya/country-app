import { useEffect, useMemo} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SharedComponents, SharedTypes, AppStore, Hooks } from '@shared';

const renderTableRows = (item: SharedTypes.IDetailesRow) => {
    return (
        <SharedComponents.DetailesRow
            key={item.title}
            title={item.title}
            info={item.info}
        />
    );
};

export const DataSection = ({ id }: SharedTypes.IDataSection) => {
    const { detailedData } = useSelector((state: AppStore.IAppState) => state.details);
    const { useCountryCode, useCurrentCountry, useCurrentData, useCountryName } = Hooks;
    const { getDetailedData } = AppStore.Actions.Details;
    const { addCountryData } = AppStore.Actions.Country;
    const dispatch = useDispatch();
    const countryName = useCountryName(id);
    const countryCode = useCountryCode(id);
    const country = useCurrentCountry(countryCode, countryName, detailedData);
    const currentData = useCurrentData(id, country);

    const hasData = currentData.length && country;

    const flag = useMemo(() => `${country && country.flags ? country.flags.svg : '-'}`, [country]);
    const coatOfArms = useMemo(
        () => `${country && country.coatOfArms ? country.coatOfArms.svg : '-'}`,
        [country],
    );
    const nativeName = useMemo(
        () => `${
            country && country.name ? Object.values(country.name.nativeName)[0].official : '-'
        }`,
        [country],
    );

    useEffect(() => {
        if (!hasData && countryName) {
            dispatch(getDetailedData({ name: countryName, code: countryCode }));
        }
    }, []);

    if (!hasData || !countryName || !countryCode.length || !country) {
        return <SharedComponents.WarningMessage text="No data" />;
    }

    return (
        <>
            <SharedComponents.DetailsPageHeaderContainer>
                <SharedComponents.Button
                    ariaLabel="button to add country to list"
                    text="Add to list"
                    onClick={() =>
                        dispatch(addCountryData({ name: countryName, code: countryCode }))
                    }
                />
                <SharedComponents.Button
                    ariaLabel="button to update information"
                    text="Update"
                    onClick={() =>
                        dispatch(getDetailedData({ name: countryName, code: countryCode }))
                    }
                />
            </SharedComponents.DetailsPageHeaderContainer>
            <SharedComponents.DetailsDataContainer>
                <SharedComponents.FlagIcon icon={coatOfArms} />
                <SharedComponents.FlagIcon icon={flag} />
            </SharedComponents.DetailsDataContainer>
            <SharedComponents.DetailsDataContainer>
                <SharedComponents.Text
                    text={nativeName}
                />
            </SharedComponents.DetailsDataContainer>
            <SharedComponents.Container>
                {currentData.map(renderTableRows)}
            </SharedComponents.Container>
        </>
    );
};
