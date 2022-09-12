import { SharedTypes } from '@shared';

export class _Client {
    baseUrl?: string;

    constructor({ baseUrl }: SharedTypes.IApiClientParams) {
        this.baseUrl = baseUrl;
    }

    fetchCountryData = async ({
        code,
    }: SharedTypes.ICountryInput): Promise<SharedTypes.ICountryOutput[]> => {
        const countryData = await fetch(
            `${this.baseUrl}/name/${code}?fields=area,borders,capital,capitalInfo,car,cca2,ccn3,currencies,flags,idd,languages,name,region,timezones,tld,coatOfArms`,
            //берем только те поля, которые нам нужны: fields
        );
        return await countryData.json();
    };
}

export const Client = new _Client({
    baseUrl: 'https://restcountries.com/v3.1',
});
