import { SharedComponents, Paths } from '@shared';

export const DetailsPageHeader = () => {
    return (
        <SharedComponents.DetailsPageHeaderContainer>
            <SharedComponents.LinkButton
                ariaLabel="Link to Home page"
                text="HOME"
                to={Paths.HOME} 
            />
        </SharedComponents.DetailsPageHeaderContainer>
    );
};
