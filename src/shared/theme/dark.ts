import { DefaultTheme } from "styled-components";

export const dark: DefaultTheme = {
    spacing: {
        xs: "5px",
        s: "10px",
        m: "20px",
        l: "30px",
        xl: "35px",
    },
    line: {
        thin: "1px",
        middle: "3px",
        thick: "5px",
    },
    proportions: {
        heightXS: "15px",
        heightS: "25px",
        heightM: "35px",
        widthXS: "15px",
        widthS: "50px",
        widthM: "90px",
        widthL: "180px",
        widthXL: "700px",
    },
    typography: {
        h1: {
            fontSize: '2rem',
            fontWeight: 400,
        },
        h2: {
            fontSize: '1rem',
            fontWeight: 400,
        },
        small: {
            fontSize: '0.8rem',
            fontWeight: 400,
        },
        medium: {
            fontSize: '1rem',
            fontWeight: 400,
        },
        large: {
            fontSize: '2rem',
            fontWeight: 500,
        },
    },
    palette: {
        primaryFontColor: 'rgb(0, 16, 100)',
        secondaryFontColor: 'rgb(0, 16, 100)',
        decorativeColor: 'rgb(196, 139, 159)',
        decorativeColorTransparent: 'rgba(248, 187, 208, 0.9)',
        primaryBackgroundColor: 'rgb(0, 16, 100)',
        secondaryBackgroundColor: 'rgba(255, 238, 255, 0.7)',
    }
}

