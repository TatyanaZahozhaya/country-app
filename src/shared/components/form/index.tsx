import styled from 'styled-components';

export interface IForm {
    display?: string;
    gap?: string;
    marginTop?: string;
    onSubmit?(e: React.FormEvent): void;
}

export const Form = styled.form`
    display: flex;
    gap: ${({ theme }) => theme.spacing.s};
    margin-top: ${({ theme }) => theme.spacing.m};
`;
