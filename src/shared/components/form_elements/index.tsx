import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { SharedTypes, SharedComponents } from '@shared';
import { IFormElement, IButton, IInput, ILink } from './types';

//Button
export const StyledButton = styled.button<IFormElement>`
    border: ${({ theme }) =>
        `${theme.palette.decorativeColor} ${theme.line.thin} solid` || '1px solid black'};
    color: ${({ theme }) => theme.palette.secondaryFontColor};
    border-radius: ${({ theme }) => theme.spacing.xs || '10px'};
    background-color: ${({ theme }) => theme.palette.decorativeColorTransparent};
    padding: ${({ theme }) => theme.spacing.xs || '0'};
    height: ${({ theme }) => theme.spacing.xl || '10px'};
    width: ${({ theme }) => theme.proportions.widthM};
    cursor: ${({ cursor = 'pointer' }) => cursor};
    align-items: ${({ alignItems = 'center' }) => alignItems};
    display: ${({ display = 'inline-grid' }) => display};
    justify-items: ${({ justifyItems = 'center' }) => justifyItems};
    outline: ${({ outline = 'none' }) => outline};
    justify-self: ${({ justifySelf = 'center' }) => justifySelf};

    &:hover,
    :active,
    :focus-visible {
        border: ${({ theme }) =>
            `${theme.palette.decorativeColor} ${theme.line.middle} solid` || '3px solid black'};
    }

    @media screen and (max-width:620px) {
        width: ${({ theme }) => theme.proportions.widthS};
    }
`;

export const Button: FC<IButton> = memo(
    ({
        color = 'black',
        type = SharedTypes.FontTypes.small,
        ariaLabel,
        text,
        onClick,
        dataLineID,
    }) => {
        return (
            <StyledButton
                color={color}
                aria-label={ariaLabel}
                onClick={onClick}
                data-line-id={dataLineID}>
                <SharedComponents.TextFormElements
                    color={color}
                    text={text}
                    type={type}
                />
            </StyledButton>
        );
    },
);

//Link like Button
export const StyledLink = styled(Link)`
    border: ${({ theme }) =>
        `${theme.palette.decorativeColor} ${theme.line.thin} solid` || '1px solid black'};
    color: ${({ theme }) => theme.palette.secondaryFontColor};
    border-radius: ${({ theme }) => theme.spacing.xs || '10px'};
    background-color: ${({ theme }) => theme.palette.decorativeColorTransparent};
    padding: ${({ theme }) => theme.spacing.xs || '0'};
    height: ${({ theme }) => theme.spacing.xl || '10px'};
    width: ${({ theme }) => theme.proportions.widthM};
    cursor: ${'pointer'};
    align-items: ${'center'};
    display: ${'inline-grid'};
    justify-items: ${'center'};
    outline: ${'none'};
    justify-self: ${'center'};

    &:hover,
    :active,
    :focus-visible {
        border: ${({ theme }) =>
            `${theme.palette.decorativeColor} ${theme.line.middle} solid` || '3px solid black'};
    }

    @media screen and (max-width:620px) {
        width: ${({ theme }) => theme.proportions.widthS};
    }
`;

export const LinkButton: FC<ILink> = memo(
    ({
        color = 'black',
        type = SharedTypes.FontTypes.small,
        ariaLabel,
        text,
        to,
        onClick,
        dataLineID,
    }) => {
        return (
            <StyledLink
                to={to}
                color={color}
                aria-label={ariaLabel}
                onClick={onClick}
                data-line-id={dataLineID}>
                <SharedComponents.TextFormElements
                    color={color}
                    text={text}
                    type={type}
                />
            </StyledLink>
        );
    },
);

//Input
export const StyledInput = styled.input<IFormElement>`
    border: ${({ theme }) =>
        `${theme.palette.decorativeColor} ${theme.line.thin} solid` || '1px solid black'};
    color: ${({ theme }) => theme.palette.primaryFontColor};
    border-radius: ${({ theme }) => theme.spacing.xs || '10px'};
    background-color: ${({ theme }) => theme.palette.secondaryBackgroundColor};
    padding: ${({ theme }) => theme.spacing.xs || '5px'};
    height: ${({ theme }) => theme.spacing.xl || '10px'};
    cursor: ${({ cursor = 'pointer' }) => cursor};
    align-items: ${({ alignItems = 'center' }) => alignItems};
    display: ${({ display = 'inline-grid' }) => display};
    justify-items: ${({ justifyItems = 'center' }) => justifyItems};
    outline: ${({ outline = 'none' }) => outline};
    justify-self: ${({ justifySelf = 'center' }) => justifySelf};
    width: ${({ theme }) => theme.proportions.widthL};

    &:hover,
    :active,
    :focus-visible {
        background-color: ${({ theme }) => theme.palette.decorativeColorTransparent};
    }
`;

export const Input: FC<IInput> = memo(
    ({ color = 'black', ariaLabel, inputType = 'text', placeholder, value, onChange }) => {
        return (
            <StyledInput
                color={color}
                aria-label={ariaLabel}
                type={inputType}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        );
    },
);
