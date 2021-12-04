import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    *::selection{
        background: ${({ theme }) => theme.colors.darkGrey};
        color: ${({ theme }) => theme.colors.main}
    }
    body{
        font-weight: bolder;
        color: ${({ theme }) => theme.colors.darkGrey};
        overflow-x: hidden;
        background: ${({ theme }) => theme.colors.darkWhite};
    }
    ::-webkit-scrollbar {
    width: 5px;
    background: ${({ theme }) => theme.colors.darkWhite};
    }
    ::-webkit-scrollbar-track {
    width: 5px;
    background: ${({ theme }) => theme.colors.darkWhite};
    }
    ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.main};
    }
    ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.darkGrey};
    }
`;
