import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext, DefaultTheme  } from 'styled-components';

import {AppStore} from '@shared';

export const useStyledTheme = () => {
    const themeContext = useContext<DefaultTheme>(ThemeContext); 

    if (!themeContext) {
        throw new Error('Theme context is not defined!');
    }

    return themeContext;
};


export const useSelectedTheme = () => {
    const dispatch = useDispatch();
    const { toggleTheme } = AppStore.Actions.Theme;

    enum Themes {
        light = 'light',
        dark = 'dark'
    }

    const onToggleTheme = (e: React.MouseEvent<HTMLButtonElement>): void => {
        if (e.currentTarget.value === Themes.light) {
            dispatch(toggleTheme(Themes.dark));
        } else {
            dispatch(toggleTheme(Themes.light));
        }
    };
    return onToggleTheme;
}