import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
      colors: {
        white: string,
        black: string,
        main: string,
        darkGrey: string,
        darkWhite: string,
        active: string,
      },
      fontSize: {
        xl: string,
        l: string,
        m: string,
        s: string,
      }
    }
  }
