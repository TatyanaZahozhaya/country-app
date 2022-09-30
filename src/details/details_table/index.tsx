import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { SharedComponents, AppStore, Utils } from '@shared';
import { DataSection } from '../data_section';

export const DetailsTable = () => {
    const { isLoadingDetails, hasDetailesError } = useSelector((state: AppStore.IAppState) => state.details);
    const { id } = useParams();
    const { isIdMatch } = Utils;

    if (!id) {
        return <SharedComponents.WarningMessage text="No country id" />;
    }

    if (!isIdMatch(id) || hasDetailesError) {
        return <SharedComponents.WarningMessage text="Invalid country id" />;
    }

    if (isLoadingDetails) {
        return <SharedComponents.WarningMessage text="Loading ..." />;
    }

    return <DataSection id={id} />;
};
