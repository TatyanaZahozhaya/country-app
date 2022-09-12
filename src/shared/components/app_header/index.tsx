import { useDispatch, useSelector } from 'react-redux';

import { Theme, SharedTypes, SharedComponents, AppStore, Paths } from '@shared';

export const AppHeader = () => {
    const {
        palette: { decorativeColor },
    } = Theme.useStyledTheme();

    const { activeTheme } = useSelector((state: AppStore.IAppState) => state.theme);

    const dispatch = useDispatch();
    const { toggleTheme } = AppStore.Actions;

    const onToggleTheme = (e: React.MouseEvent<HTMLButtonElement>): void => {
        if (e.currentTarget.value === 'light') {
            dispatch(toggleTheme('dark'));
        } else {
            dispatch(toggleTheme('light'));
        }
    };

    return (
        <>
            <SharedComponents.AppHeaderContainer as="header">
                <SharedComponents.Title
                    text="CountryApp"
                    href={Paths.HOME}
                    type={SharedTypes.FontTypes.h1}
                    color={decorativeColor}
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
