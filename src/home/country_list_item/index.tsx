import { useDispatch } from 'react-redux';

import { SharedComponents, SharedTypes, Paths, AppStore } from '@shared';

export const CountryListItem = (item: SharedTypes.ICountryOutput) => {
    const dispatch = useDispatch();
    const { deleteCountry, showCountryDetailes } = AppStore.Actions;

    const onAddDetailes = (e: React.PointerEvent<HTMLButtonElement>): void => {
        let data = e.currentTarget.dataset.lineId;
        if (data) dispatch(showCountryDetailes(data));
    };

    const onDelete = (e: React.PointerEvent<HTMLButtonElement>): void => {
        let data = e.currentTarget.dataset.lineId;
        if (data) dispatch(deleteCountry(data));
    };


    return (
        <SharedComponents.HomepageTableLineContainer as="li">
            <SharedComponents.HomepageCountryNameContainer >
                <SharedComponents.FlagIcon icon={`${item.flags.svg}`} />
                <SharedComponents.Text text={`${item.name.common}`} />
            </SharedComponents.HomepageCountryNameContainer>
            <SharedComponents.Text text={`${item.ccn3}`} />
            <SharedComponents.Text text={`${item.region}`} />
            <SharedComponents.LinkButton
                ariaLabel="Detailes about country"
                text="...more"
                to={Paths.DETAILES}
                onClick={onAddDetailes}
                dataLineID={`${item.ccn3}`}
            />
            <SharedComponents.Button
                ariaLabel="Remove country from list"
                text="X"
                onClick={onDelete}
                dataLineID={`${item.ccn3}`}
            />
        </SharedComponents.HomepageTableLineContainer>
    );
};
