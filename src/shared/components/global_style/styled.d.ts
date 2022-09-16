import 'styled-components';

import ITypography from '@shared';

declare module 'styled-components' {
    export interface DefaultTheme {
        spacing: {
            xs: string;
            s: string;
            m: string;
            l: string;
            xl: string;
        };
        line: {
            thin: string;
            middle: string;
            thick: string;
        };
        proportions: {
            heightXS: string;
            heightS: string;
            heightM: string;
            widthXS: string;
            widthS: string;
            widthM: string;
            widthL: string;
            widthXL: string;
        };
        typography: {
            h1: ITypography;
            h2: ITypography;
            small: ITypography;
            medium: ITypography;
            large: ITypography;
        };
        palette: {
            primaryFontColor: string;
            secondaryFontColor: string;
            decorativeColor: string;
            decorativeColorTransparent: string;
            primaryBackgroundColor: string;
            secondaryBackgroundColor: string;
        };
    }
}
