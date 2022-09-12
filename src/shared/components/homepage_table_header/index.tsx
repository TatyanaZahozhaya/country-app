import { SharedComponents } from '@shared';

const renderTableColumns = (item: string) => {
    return (
        <SharedComponents.Text
            text={item}
            key={item}
            textAlign={'center'}
        />
    );
};

const HomepageTableColumns = ['Country', 'Code', 'Region', 'Detailes', 'Remove'];

export const HomepageTableHeader = () => {
    return (
        <SharedComponents.HomepageTableHeaderContainer>
            {HomepageTableColumns.map(renderTableColumns)}
        </SharedComponents.HomepageTableHeaderContainer>
    );
};
