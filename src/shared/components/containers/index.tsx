import styled, { keyframes } from 'styled-components';
import { IGridContainer, IFlexContainer, IAppContainer, IContainer } from './types';

const brightUp = keyframes`
    from { opacity: 0; }
`;

const zoomIn = keyframes`
    from { transform: scale3d(0,0,0); }
`;

export const AppContainer = styled.div<IAppContainer>`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    min-height: 100vh;
    font-family: ${({ fontFamily = 'Arial' }) => fontFamily};
    font-size: ${({ fontSize = '16px' }) => fontSize};
    background-color: ${({ backgroundColor = 'transparent' }) => backgroundColor};
`;

export const AppHeaderContainer = styled.div<IFlexContainer>`
    display: flex;
    width: 100%;
    padding: ${({ theme }) => theme.spacing.m};
    border-bottom: ${({ theme }) => `${theme.line.thin} solid ${theme.palette.decorativeColor}`};
    background-color: ${({ backgroundColor = 'transparent' }) => backgroundColor};
`;

export const AppFooterContainer = styled.div<IContainer>`
    width: ${({ width = '100%' }) => width};
    padding: ${({ padding = '0' }) => padding};
    padding: ${({ theme }) => theme.spacing.m};
    background-color: ${({ theme }) => theme.palette.decorativeColor};
`;

export const MainPartContainer = styled.div<IAppContainer>`
    max-width: ${({ maxWidth = '700px' }) => maxWidth};
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing.l};
    background-color: ${({ backgroundColor = 'transparent' }) => backgroundColor};
    flex: 1 1 auto;
`;

export const Container = styled.div<IContainer>`
    display: block;
    width: ${({ width = '100%' }) => width};
    margin: ${({ margin = '0 auto' }) => margin};
    padding: ${({ padding = '0' }) => padding};
    gap: ${({ gap = '0' }) => gap};
    align-items: ${({ alignItems = 'center' }) => alignItems};
    background-color: ${({ backgroundColor = 'transparent' }) => backgroundColor};
    animation-name: ${brightUp};
    animation-duration: 2s;
`;

export const GridContainer = styled.div<IGridContainer>`
    display: grid;
    width: ${({ width = '100%' }) => width};
    margin: ${({ margin = '0 auto' }) => margin};
    padding: ${({ padding = '0' }) => padding};
    gap: ${({ gap = '5px' }) => gap};
    grid-template-columns: ${({ gridTemplateColumns = '1fr' }) => gridTemplateColumns};
    align-items: ${({ alignItems = 'center' }) => alignItems};
    justify-items: ${({ justifyItems = 'center' }) => justifyItems};
    border-bottom: ${({ borderBottom }) => borderBottom};
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const FlexContainer = styled.div<IFlexContainer>`
    display: flex;
    width: ${({ width = '100%' }) => width};
    margin: ${({ margin = '0 auto' }) => margin};
    padding: ${({ padding = '0' }) => padding};
    gap: ${({ gap = '0' }) => gap};
    justify-content: ${({ justifyContent = 'left' }) => justifyContent};
    align-items: ${({ alignItems = 'flex-end' }) => alignItems};
    background-color: ${({ backgroundColor = 'transparent' }) => backgroundColor};
`;

export const HomepageCountryNameContainer = styled(GridContainer)`
    grid-template-columns: 0.5fr 1fr;

    @media screen and (max-width: 430px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`;

export const HomepageTableHeaderContainer = styled(GridContainer)`
    grid-template-columns: 1fr 1fr 1fr 0.8fr 0.8fr;
    padding: ${({ theme }) => theme.spacing.m};
    border-bottom: ${({ theme }) => `${theme.line.middle} solid ${theme.palette.decorativeColor}`};
    background-color: ${({ theme }) => theme.palette.secondaryBackgroundColor};
    animation-name: ${brightUp};
    animation-duration: 1s;
`;

export const HomepageTableLineContainer = styled(HomepageTableHeaderContainer)`
    border-bottom: ${({ theme }) => `${theme.line.thin} solid ${theme.palette.decorativeColor}`};
`;

export const HomepageTableErrorContainer = styled(HomepageTableHeaderContainer)`
    grid-template-columns: 1fr;
`;

export const DetailesRowsContainer = styled(HomepageTableHeaderContainer)`
    grid-template-columns: 0.5fr 1fr;
    justify-items: start;
    border-bottom: ${({ theme }) => `${theme.line.thin} solid ${theme.palette.decorativeColor}`};
`;

export const DetailesPageHeaderContainer = styled(FlexContainer)`
    justify-content: right;
    margin: ${({ theme }) => `${theme.spacing.l} auto`};
`;

export const DetailesDataContainer = styled(FlexContainer)`
    align-items: center;
    gap: ${({ theme }) => theme.spacing.s};
    padding: ${({ theme }) => `${theme.spacing.s}`};
    background-color: ${({ theme }) => theme.palette.decorativeColorTransparent};
    animation-name: ${zoomIn};
    animation-duration: 1s;
`;
