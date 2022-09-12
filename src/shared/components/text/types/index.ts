import { SharedTypes } from "@shared";

export interface IParagraph {
    type?: SharedTypes.FontType;
    color?: string;
    textAlign?: string;
}

export interface IText {
    type?: SharedTypes.FontType;
    color?: string;
    textAlign?: string;
    text: string;
    href?: string;
}