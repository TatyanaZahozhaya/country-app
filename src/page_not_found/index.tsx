
import { Theme, SharedComponents } from '@shared';

export const PageNotFound = () => {
    const {
        spacing: { l },
    } = Theme.useStyledTheme();
    return (
        <SharedComponents.Container margin={`${l} 0`}>
            <SharedComponents.HomepageTableErrorContainer>
                <SharedComponents.Text text='Page not found' />
            </SharedComponents.HomepageTableErrorContainer>
        </SharedComponents.Container>
    )
}