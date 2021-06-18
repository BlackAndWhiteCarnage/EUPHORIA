import React from 'react';
import PropTypes from 'prop-types';
// STYLES
import { CostsInfoWrapper } from './CartTotalValue.styles';

const CartTotalValue = ({ cart, summary, cartValues }) => {
  let discountValue = () => {
    let values = cartValues.reduce((a, b) => a + b).toFixed(2);

    return values - summary();
  };

  return (
    <CostsInfoWrapper>
      <p>
        RAZEM <span>{cart.length > 0 && summary()}</span> ZŁ {summary() >= 142.5 && `W TYM RABAT ${discountValue().toFixed(2)} ZŁ`}
      </p>
      <p>
        <span>DARMOWA</span> WYSYŁKA
      </p>
    </CostsInfoWrapper>
  );
};

CartTotalValue.propTypes = {
  cart: PropTypes.array.isRequired,
  summary: PropTypes.func.isRequired,
  cartValues: PropTypes.array,
};

export default CartTotalValue;
