import { Theme, SharedComponents, SharedTypes } from '@shared';

export const AppFooter = () => {
    const {
        palette: { secondaryFontColor },
    } = Theme.useStyledTheme();
    
    return (
        <SharedComponents.AppFooterContainer
            as="footer">
            <SharedComponents.Text
                text="CountryApp, 2022"
                type={SharedTypes.FontTypes.h1}
                color={secondaryFontColor}
            />
        </SharedComponents.AppFooterContainer>
    );
};
