import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
// COMPONENTS
import AmazingCursor from 'components/AmazingCursor/AmazingCursor';
import Navigation from 'components/Navigation/Navigation';
// HELPERS
import { isTouchScreen } from 'helpers/checkIfTouchScreen';

const Provider = ({ children, cart, setCart }) => {
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation cart={cart} />
      {!isTouchScreen() && <AmazingCursor />}
      {children}
    </ThemeProvider>
  );
};

Provider.propTypes = {
  children: PropTypes.element.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Provider;