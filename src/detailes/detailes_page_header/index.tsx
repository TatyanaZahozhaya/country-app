import { SharedComponents, Paths } from '@shared';

export const DetailesPageHeader = () => {
    return (
        <SharedComponents.DetailesPageHeaderContainer>
            <SharedComponents.LinkButton
                ariaLabel="Link to Home page"
                text="HOME"
                to={Paths.HOME}
            />
        </SharedComponents.DetailesPageHeaderContainer>
    );
};
