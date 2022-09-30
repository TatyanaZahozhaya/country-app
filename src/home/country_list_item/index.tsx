import { FC, memo } from 'react';
import { useDispatch } from 'react-redux';

import { SharedComponents, SharedTypes, Paths, AppStore } from '@shared';

export const CountryListItem: FC<SharedTypes.ICountryOutput> = memo((item) => {
    const dispatch = useDispatch();
    const { deleteCountry } = AppStore.Actions.Country;
    const { flags, name, ccn3, region } = item;

    const handleClick = (e: React.PointerEvent<HTMLButtonElement>): void => {
        let data = e.currentTarget.dataset.lineId;
        if (data) dispatch(deleteCountry(data));
    };

    return (
        <SharedComponents.HomepageTableLineContainer as="li">
            <SharedComponents.HomepageCountryNameContainer>
                <SharedComponents.FlagIcon icon={`${flags.svg}`} />
                <SharedComponents.Text text={`${name.common}`} />
            </SharedComponents.HomepageCountryNameContainer>
            <SharedComponents.Text text={`${ccn3}`} />
            <SharedComponents.Text text={`${region}`} />
            <SharedComponents.LinkButton
                ariaLabel="Details about country"
                text="...more"
                to={`${Paths.DETAILS}/${ccn3}-${name.common}`}
                dataLineID={`${ccn3}-${name.common}`}
            />
            <SharedComponents.Button
                ariaLabel="Remove country from list"
                text="X"
                onClick={handleClick}
                dataLineID={`${ccn3}`}
            />
        </SharedComponents.HomepageTableLineContainer>
    );
});
