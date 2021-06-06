import React, { useState } from 'react';
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
import Product from 'views/Product/Product';

const Root = () => {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navigation cart={cart} />
        {matchMedia.matches && <AmazingCursor />}
        <Switch>
          <Route exact path='/'>
            <OfferSection />
            <InfoSection />
          </Route>
          <Route path='/sklepik/:id' exact>
            <Shop />
          </Route>
          <Route path='/:id' exact>
            <Product cart={cart} setCart={setCart} />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
