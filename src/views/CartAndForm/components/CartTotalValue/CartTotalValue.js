import React from 'react';
import PropTypes from 'prop-types';
import { summary } from 'helpers/summary';
import { Wrapper } from './CartTotalValue.styles';

const CartTotalValue = ({ cart }) => (
  <Wrapper>
    <p>
      RAZEM <span>{cart.length && summary(cart)}</span> ZŁ {summary(cart) >= 142.5 && summary(cart, true) && `W TYM RABAT ${summary(cart, true)} ZŁ`}
    </p>
    <p>
      <span>DARMOWA</span> WYSYŁKA
    </p>
  </Wrapper>
);

CartTotalValue.propTypes = {
  cart: PropTypes.array.isRequired,
  cartValues: PropTypes.array,
};

export default CartTotalValue;
