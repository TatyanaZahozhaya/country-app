import { useDispatch, useSelector } from 'react-redux';

import { SharedComponents, AppStore, Paths } from '@shared';

export const AppHeader = () => {
    const { activeTheme } = useSelector((state: AppStore.IAppState) => state.theme);

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

    return (
        <>
            <SharedComponents.AppHeaderContainer as="header">
                <SharedComponents.Title
                    text="CountryApp"
                    to={Paths.HOME}
                />
                <SharedComponents.Toggler
                    id="toggler"
                    ariaLabel="theme toggler (light/dark)"
                    onClick={onToggleTheme}
                    value={activeTheme}
                />
            </SharedComponents.AppHeaderContainer>
        </>
    );
};
