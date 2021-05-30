import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        scroll-behavior: smooth;
        /* cursor: none; */
    }
    body{
        font-family: 'Montserrat', sans-serif;
        color: ${({ theme }) => theme.colors.darkGrey};
        overflow-x: hidden;
        background: ${({ theme }) => theme.colors.darkWhite};
    }
    ::-webkit-scrollbar {
    width: 10px;
    background: ${({ theme }) => theme.colors.darkWhite};
    }
    ::-webkit-scrollbar-track {
    width: 10px;
    background: ${({ theme }) => theme.colors.darkWhite};

    }
    ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.crimsonRed};
    }
    ::-webkit-scrollbar-thumb:hover {
    background: #830000;
    }
`;
