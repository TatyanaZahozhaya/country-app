export enum ThemeAction {
    TOGGLE_THEME = 'TOGGLE_THEME',
}

export type ThemeActionsType = IToggleThemeAction;

interface IToggleThemeAction {
    type: typeof ThemeAction.TOGGLE_THEME;
    payload: string;
}
export const toggleTheme = (activeTheme: string): IToggleThemeAction => {
    return {
        type: ThemeAction.TOGGLE_THEME,
        payload: activeTheme,
    };
};
