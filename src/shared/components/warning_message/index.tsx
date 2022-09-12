import { FC, memo } from 'react';

import { Theme, SharedComponents } from '@shared';

interface IMessage {
    text: string;
}

export const WarningMessage: FC<IMessage> = memo(({ text }) => {
    const {
        spacing: { l },
    } = Theme.useStyledTheme();
    return (
        <SharedComponents.Container margin={`${l} 0`}>
            <SharedComponents.HomepageTableErrorContainer>
                <SharedComponents.Text text={text} />
            </SharedComponents.HomepageTableErrorContainer>
        </SharedComponents.Container>
    );
});
