import React, { ReactElement, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Three from 'three/Three';
import { theme } from 'assets/styles/theme';
import Cursor from 'components/Cursor/Cursor';
import Navigation from 'components/Navigation/Navigation';
import { isTouchScreen } from 'helpers/checkIfTouchScreen';
import ScrollTop from 'helpers/ScrollTop';
import VerifyAge from 'components/VerifyAge/VerifyAge';
import { ProviderProps, VerifyAgeType } from './MainProvider.types';

const MainProvider: React.FC<ProviderProps> = ({ children, cart, setCart }): ReactElement => {
  const [verifyAge, setVerifyAge] = useState<VerifyAgeType['verifyAge']>(false);

  useEffect(() => {
    if (localStorage.getItem('ageConfirmed') !== null) {
      setVerifyAge(true);
    }

    if (localStorage.getItem('cartItem') === null) {
      localStorage.setItem('cartItem', JSON.stringify([]));
    } else {
      let cartLocal = JSON.parse(localStorage.getItem('cartItem') || '');
      setCart(cartLocal);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cart));
  }, [cart]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Three />
      {!isTouchScreen() && <Cursor />}
      <Navigation cart={cart} />
      <ScrollTop />
      <VerifyAge verifyAge={verifyAge} setVerifyAge={setVerifyAge} />
      {children}
    </ThemeProvider>
  );
};

MainProvider.propTypes = {
  children: PropTypes.element.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default MainProvider;
