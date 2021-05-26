import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import OfferSection from 'views/OfferSection/OfferSection';
import Wrapper from 'components/SectionsWrapper/SectionsWrapper';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <OfferSection />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
