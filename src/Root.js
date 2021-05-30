import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { matchMedia } from 'helpers/matchMedia';
import AmazingCursor from 'components/AmazingCursor/AmazingCursor';
import OfferSection from 'views/OfferSection/OfferSection';
import InfoSection from 'views/InfoSection/InfoSection';
import Navigation from 'components/Navigation/Navigation';
import Shop from 'views/Shop/Shop';

const Root = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navigation />
        {matchMedia.matches && <AmazingCursor />}
        <Switch>
          <Route exact path='/'>
            <OfferSection />
            <InfoSection />
          </Route>
          <Route>
            <Shop />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
