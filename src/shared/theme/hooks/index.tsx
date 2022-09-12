import { useContext } from 'react';
import { ThemeContext, DefaultTheme  } from 'styled-components';

export const useStyledTheme = () => {
    const themeContext = useContext<DefaultTheme>(ThemeContext); 

    if (!themeContext) {
        throw new Error('Theme context is not defined!');
    }

    return themeContext;
};

