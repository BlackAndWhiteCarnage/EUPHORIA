import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Montserrat', sans-serif;
        color: ${({ theme }) => theme.colors.darkGrey};
        overflow-x: hidden;
    }
    ::-webkit-scrollbar {
    width: 15px;
    background: ${({ theme }) => theme.colors.darkWhite};
    border-left: 4px dashed;
    }
    ::-webkit-scrollbar-track {
    width: 15px;
    background: ${({ theme }) => theme.colors.darkWhite};
    border-left: 4px dashed;

    }
    ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.crimsonRed};
    }
    ::-webkit-scrollbar-thumb:hover {
    background: #830000;
    }
`;
