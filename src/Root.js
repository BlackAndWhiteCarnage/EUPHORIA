import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import AmazingCursor from 'components/AmazingCursor/AmazingCursor';
import OfferSection from 'views/OfferSection/OfferSection';
import InfoSection from 'views/InfoSection/InfoSection';
import Navigation from 'components/Navigation/Navigation';

const Root = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navigation />
        <AmazingCursor />
        <Switch>
          <Route exact path='/'>
            <OfferSection />
            <InfoSection />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
