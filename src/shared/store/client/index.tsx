import { SharedTypes } from '@shared';

export class _Client {
    baseUrl: string;
    fields?: Array<string>;

    constructor({ baseUrl, fields }: SharedTypes.IApiClientParams) {
        if (baseUrl.trim() === '') {
            throw new Error ('BaseURL is not defined');
        }
        this.baseUrl = baseUrl;
        this.fields = fields;
    }

    fetchCountryData = async ({
        name,
    }: SharedTypes.ICountryInput): Promise<SharedTypes.ICountryData> => {
        const countryData = await fetch(
            this.fields
                ? `${this.baseUrl}/name/${name}?fields=${this.fields.join(',')}`
                : `${this.baseUrl}/name/${name}`,
        );
        return await countryData.json();
    };
}

export const Client = new _Client({
    baseUrl: 'https://restcountries.com/v3.1',
    fields: [
        'ccn3',
        'flags',
        'name',
        'region',
    ],
});

export const ClientDetails = new _Client({
    baseUrl: 'https://restcountries.com/v3.1',
    fields: [
        'area',
        'borders',
        'capital',
        'capitalInfo',
        'car',
        'cca2',
        'ccn3',
        'coatOfArms',
        'currencies',
        'flags',
        'idd',
        'languages',
        'name',
        'region',
        'timezones',
        'tld',
    ],
});