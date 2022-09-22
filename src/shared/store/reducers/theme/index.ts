import { ThemeActionsType, ThemeAction } from '../../actions/theme';

export interface IThemeState {
    activeTheme: string;
}

const initialState: IThemeState = {
    activeTheme: 'light',
}

export const themeReducer =(state: IThemeState = initialState, action: ThemeActionsType): IThemeState => {
    switch (action.type) {
        case ThemeAction.TOGGLE_THEME:

            return {
                activeTheme: action.payload,
            };
        default: 
        return state
    }
}