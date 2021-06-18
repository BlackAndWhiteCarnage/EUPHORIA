import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { AnimatePresence } from 'framer-motion';
// HELPERS
import { matchMedia } from 'helpers/matchMedia';
// COMPONENTS
import AmazingCursor from 'components/AmazingCursor/AmazingCursor';
import OfferSection from 'views/OfferSection/OfferSection';
import InfoSection from 'views/InfoSection/InfoSection';
import Navigation from 'components/Navigation/Navigation';
import Onlyfans from 'components/Onlyfans/Onlyfans';
import Shop from 'views/Shop/Shop';
import Product from 'views/Product/Product';
import CartAndForm from 'views/CartAndForm/CartAndForm';

const Root = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cart));
  }, [cart]);

  const getProducts = () => {
    if (localStorage.getItem('cartItem') === null) {
      localStorage.setItem('cartItem', JSON.stringify([]));
    } else {
      let cartLocal = JSON.parse(localStorage.getItem('cartItem'));
      setCart(cartLocal);
    }
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Navigation cart={cart} />
          {matchMedia.matches && <AmazingCursor />}
          <Switch>
            <Route exact path='/'>
              <OfferSection />
              <InfoSection />
              <Onlyfans />
            </Route>
            <Route path='/koszyk' exact>
              <CartAndForm cart={cart} setCart={setCart} />
            </Route>
            <Route path='/sklepik/:id' exact>
              <Shop cart={cart} />
            </Route>
            <Route path='/:id' exact>
              <Product cart={cart} setCart={setCart} />
            </Route>
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </AnimatePresence>
  );
};

export default Root;
