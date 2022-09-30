import { useSelector } from 'react-redux';

import { SharedComponents, AppStore, Paths, Theme } from '@shared';

export const AppHeader = () => {
    const { activeTheme } = useSelector((state: AppStore.IAppState) => state.theme);
    const onToggleTheme = Theme.useSelectedTheme();

    return (
        <>
            <SharedComponents.AppHeaderContainer as="header">
                <SharedComponents.Title
                    text="XCountry"
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
