import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { SharedTypes } from '@shared';

import { IText, IParagraph, ITitle } from './types';

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
export const TitleElement = styled(Link)`
    font-family: ${({ theme }) => theme.typography[SharedTypes.FontTypes.h1].fontFamily};
    font-size: ${({ theme }) => theme.typography[SharedTypes.FontTypes.h1].fontSize};
    color: ${({ theme }) => theme.palette.decorativeColor};
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

export const Title: FC<ITitle> = memo(({ text, to }) => {
    return <TitleElement to={to}>{text}</TitleElement>;
});
