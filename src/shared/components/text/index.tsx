import { FC, memo } from 'react';

import styled from 'styled-components';

import { IText, IParagraph } from './types';
import { SharedTypes } from '@shared';

export const Paragraph = styled.p<IParagraph>`
    font-family: ${({ theme }) => theme.typography[SharedTypes.FontTypes.medium].fontFamily};
    font-size: ${({ theme }) => theme.typography[SharedTypes.FontTypes.medium].fontSize};
    color: ${({ color = 'black' }) => color};
    text-align: ${({ textAlign }) => textAlign};

    @media screen and (max-width: 470px) {
        font-family: ${({ theme }) => theme.typography[SharedTypes.FontTypes.small].fontFamily};
        font-size: ${({ theme }) => theme.typography[SharedTypes.FontTypes.small].fontSize};
    }
`;
export const TitleElement = styled(Paragraph)`
    font-family: ${({ theme }) => theme.typography[SharedTypes.FontTypes.h1].fontFamily};
    font-size: ${({ theme }) => theme.typography[SharedTypes.FontTypes.h1].fontSize};
`;

export const ParagraphFormElements = styled(Paragraph)`
    font-family: ${({ theme }) => theme.typography[SharedTypes.FontTypes.small].fontFamily};
    font-size: ${({ theme }) => theme.typography[SharedTypes.FontTypes.small].fontSize};
`;

export const Text: FC<IText> = memo(({ color, textAlign, text }) => {
    return (
        <Paragraph
            color={color}
            textAlign={textAlign}>
            {text}
        </Paragraph>
    );
});

export const TextFormElements: FC<IText> = memo(({ color, textAlign, text }) => {
    return (
        <ParagraphFormElements
            color={color}
            textAlign={textAlign}>
            {text}
        </ParagraphFormElements>
    );
});

export const Title: FC<IText> = memo(({ color, textAlign = 'right', text, href }) => {
    return (
        <TitleElement
            as="a"
            color={color}
            textAlign={textAlign}
            href={href}>
            {text}
        </TitleElement>
    );
});
