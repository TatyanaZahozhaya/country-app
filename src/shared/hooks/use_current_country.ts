import { SharedTypes } from '@shared';

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