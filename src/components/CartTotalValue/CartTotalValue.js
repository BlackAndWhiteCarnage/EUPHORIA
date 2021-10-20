import React from 'react';
import PropTypes from 'prop-types';
// HELPERS
import { summary } from 'helpers/summary';
// STYLES
import { Wrapper } from './CartTotalValue.styles';

const CartTotalValue = ({ cart }) => (
  <Wrapper>
    <p>
      RAZEM <span>{cart.length > 0 && summary(cart)}</span> ZŁ {summary(cart) >= 142.5 && `W TYM RABAT ${summary(cart, true)} ZŁ`}
    </p>
    <p>
      <span>DARMOWA</span> WYSYŁKA
    </p>
  </Wrapper>
);

CartTotalValue.propTypes = {
  cart: PropTypes.array.isRequired,
  summary: PropTypes.func.isRequired,
  cartValues: PropTypes.array,
};

export default CartTotalValue;
