import { FC, memo } from 'react';
import { useDispatch } from 'react-redux';

import { SharedComponents, SharedTypes, Paths, AppStore } from '@shared';

export const CountryListItem: FC<SharedTypes.ICountryOutput> = memo((item) => {
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

    const { flags, name, ccn3, region } = item;

    return (
        <SharedComponents.HomepageTableLineContainer as="li">
            <SharedComponents.HomepageCountryNameContainer>
                <SharedComponents.FlagIcon icon={`${flags.svg}`} />
                <SharedComponents.Text text={`${name.common}`} />
            </SharedComponents.HomepageCountryNameContainer>
            <SharedComponents.Text text={`${ccn3}`} />
            <SharedComponents.Text text={`${region}`} />
            <SharedComponents.LinkButton
                ariaLabel="Detailes about country"
                text="...more"
                to={Paths.DETAILES}
                onClick={onAddDetailes}
                dataLineID={`${ccn3}`}
            />
            <SharedComponents.Button
                ariaLabel="Remove country from list"
                text="X"
                onClick={onDelete}
                dataLineID={`${ccn3}`}
            />
        </SharedComponents.HomepageTableLineContainer>
    );
});
