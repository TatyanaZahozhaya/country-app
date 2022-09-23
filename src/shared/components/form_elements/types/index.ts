import { SharedTypes } from '@shared';

export interface IFormElement {
    alignItems?: string;
    border?: string;
    borderRadius?: string;
    color?: string;
    cursor?: string;
    display?: string;
    height?: string;
    justifyItems?: string;
    outline?: string;
    backgroundColor?: string;
    justifySelf?: string;
    width?: string;
    padding?: string;
}

export interface IButton {
    ariaLabel: string;
    text: string;
    type?: SharedTypes.FontType;
    onClick?(e?: React.MouseEvent): void;
    dataLineID?: string;
    dataLineName?: string;
    color?: string;
    width?: string;
}

export interface ILink extends IButton {
    to: string;
}

export interface IInput {
    ariaLabel: string;
    placeholder?: string;
    inputType?: string;
    value?: string;
    onChange?(e: React.ChangeEvent): void;
    type?: SharedTypes.FontType;
    color?: string;
}
