import React, { FC, memo } from 'react';
import styled from 'styled-components';

interface ITogglerWrapper {
    position?: string;
    padding?: string;
}

const TogglerWrapper = styled.div<ITogglerWrapper>`
    padding: ${({ theme }) => `${theme.spacing.l} 0px 0px 0px`};
`;

interface IStyledTogglerInput {
    display?: string;
}

const StyledTogglerInput = styled.input<IStyledTogglerInput>`
    display: none;
`;

interface ITogglerInput {
    id: string;
    ariaLabel: string;
    inputType?: string;
    readOnly?: boolean;
    onClick?(e: React.MouseEvent): void;
    value?: string;
}

const TogglerInput: FC<ITogglerInput> = memo(({ id, ariaLabel,  inputType='checkbox', readOnly=true, value,onClick}) => {
    return (
        <StyledTogglerInput
            id={id}
            aria-label={ariaLabel}
            type={inputType}
            readOnly={readOnly}
            value={value}
            onClick={onClick}
        />
    );
});

interface IToggleLabel {
    position?: string;
    right?: string;
    width?: string;
    height?: string;
    transform?: string;
    htmlFor: string;
}

const ToggleLabel = styled.label<IToggleLabel>`
    position: absolute;
    right: ${({ theme }) => `${theme.spacing.xs}`};
    width: ${({ theme }) => `${theme.proportions.widthM}`};
    height: ${({ theme }) => `${theme.proportions.heightS}`};
    transform: translate(0%, -100%);
`;

interface ITogglerButton {
    position?: string;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    zIndex?: number;
    overflow?: string;
    backgroundColor?: string;
    borderRadius?: string;
    cursor?: string;
    transition?: string;
}

const TogglerButton = styled.span<ITogglerButton>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;
    background-color: ${({ theme }) => `${theme.palette.decorativeColor}`};
    border-radius: ${({ theme }) => `${theme.spacing.m}`};
    cursor: pointer;
    transition: all 1.4s;
    &:after {
        content: '';
        position: absolute;
        bottom: ${({ theme }) => `${theme.spacing.xs}`};
        left: ${({ theme }) => `${theme.spacing.xs}`};
        width: ${({ theme }) => `${theme.proportions.widthXS}`};
        height: ${({ theme }) => `${theme.proportions.heightXS}`};
        background-color: ${({ theme }) => `${theme.palette.primaryBackgroundColor}`};
        border-radius: ${({ theme }) => `${theme.spacing.m}`};
        transition: 0.5s;        
    }
    &:before {
        content: 'Theme';
        position: absolute;
        bottom: ${({ theme }) => `${theme.spacing.xs}`};
        left: ${({ theme }) => `${theme.spacing.xl}`};
        color: ${({ theme }) => `${theme.palette.primaryBackgroundColor}`};
        font-size: 14px;
    }
`;

interface IToggler {
    value?: string;
    id: string;
    ariaLabel: string;
    onClick?(e: React.MouseEvent): void;
}

export const Toggler: FC<IToggler> = memo(({  value, id, ariaLabel, onClick }) => {
    return (
        <TogglerWrapper>
            <ToggleLabel htmlFor={id}>
                <TogglerInput
                    id={id}
                    ariaLabel={ariaLabel}
                    value={value}
                    onClick={onClick}
                />
                <TogglerButton />
            </ToggleLabel>
        </TogglerWrapper>
    );
});
