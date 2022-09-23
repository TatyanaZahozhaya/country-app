import { Theme, SharedComponents } from '@shared';

export const AppFooter = () => {
    const {
        palette: { secondaryFontColor },
    } = Theme.useStyledTheme();

    return (
        <SharedComponents.AppFooterContainer as="footer">
            <SharedComponents.Text
                text="XCountry, 2022"
                color={secondaryFontColor}
            />
        </SharedComponents.AppFooterContainer>
    );
};
