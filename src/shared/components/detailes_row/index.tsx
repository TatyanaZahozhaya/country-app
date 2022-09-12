import { FC, memo } from 'react';

import { SharedComponents, SharedTypes } from '@shared';


export const DetailesRow: FC<SharedTypes.IDetailesRow> = memo(({title, info}) => {
    return (
        <SharedComponents.DetailesRowsContainer>
            <SharedComponents.Text text={title} />
            <SharedComponents.Text text={info} />
        </SharedComponents.DetailesRowsContainer>
    );
});
