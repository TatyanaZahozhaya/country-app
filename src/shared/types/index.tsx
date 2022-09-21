export interface IRoute {
    element: React.ReactElement;
    path: string;
}

export interface ITypography {
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: number;
}

export enum FontTypes {
    h1 = 'h1',
    h2 = 'h2',
    small = 'small',
    medium = 'medium',
    large = 'large',
}

export type FontType =
    | typeof FontTypes.h1
    | typeof FontTypes.h2
    | typeof FontTypes.small
    | typeof FontTypes.medium
    | typeof FontTypes.large;

export interface IApiClientParams {
    baseUrl: string;
    fields?: Array<string>;
}

export interface ICountryInput {
    code: string;
}
export interface ICountryOutput {
    area: number;
    borders: Array<String>;
    capital: Array<String>;
    capitalInfo: ICoord;
    car: ICar;
    cca2: string;
    ccn3: string;
    coatOfArms: ICoatOfArms;
    currencies: ICurrencies;
    flags: IFlag;
    idd: IIdd;
    languages: ILanguages;
    name: IName;
    region: string;
    timezones: Array<string>;
    tld: Array<string>;

}

export type ICountryData = Array<ICountryOutput>;

export interface ICoord {
    latlng: Array<number>;
}

export interface ICar {
    signs: Array<String>;
    side: string;
}

export interface ICurrencies {
    [key: string]: ICurrencyDetailes;
}

export interface ICurrencyDetailes {
    name: string;
    symbol: string;
}

export interface IFlag {
    svg: string;
    png: string;
}

export interface ICoatOfArms extends IFlag {}

export interface IIdd {
    root: string;
    suffixes: Array<string>;
}

export interface ILanguages {
    [key: string]: string;
}

export interface IName {
    common: string;
    nativeName: INativeName;
    official: string;
}

export interface INativeName {
    [key: string]: INativeNameLang;
}

export interface INativeNameLang {
    official: string;
    common: string;
}

export interface IDetailesRow {
    title: string;
    info: string;
}
