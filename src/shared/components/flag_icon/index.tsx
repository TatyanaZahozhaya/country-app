import { FC, memo } from 'react';
import styled from 'styled-components';

interface IIMg {
    display?: string;
    'max-height'?: string;
    'max-width'?: string;
    src?: string;
    alt: string;
}

export const StyledImg = styled.img<IIMg>`
    display: 'inline-block';
    max-height: ${({ theme }) => theme.proportions.heightM};
    max-width: ${({ theme }) => theme.proportions.heightM};
`;

interface IIcon {
    icon: string;
}

export const FlagIcon: FC<IIcon> = memo(({ icon }) => {
    return (
        <StyledImg
            src={icon}
            alt="Country flag icon"
        />
    );
});
