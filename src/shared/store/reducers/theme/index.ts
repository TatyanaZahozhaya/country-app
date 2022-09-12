import { ActionsType } from '../../actions';

export interface IThemeState {
    activeTheme: string;
}

const initialState: IThemeState = {
    activeTheme: 'light',
}

export const themeReducer =(state: IThemeState = initialState, action: ActionsType): IThemeState => {
    switch (action.type) {
        case 'TOGGLE_THEME':

            return {
                activeTheme: action.payload,
            };
        default: 
        return state
    }
}