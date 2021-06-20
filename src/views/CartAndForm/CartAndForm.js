import React from 'react';
// COMPONENTS
import Form from 'components/Form/Form';
import Cart from 'components/Cart/Cart';
import CartTotalValue from 'components/CartTotalValue/CartTotalValue';
// STYLES
import { Header } from 'views/OfferSection/OfferSection.styles';
import { Wrapper, EmptyCartInfo } from './CartAndForm.styles';
// ANIMATIONS
import { slideFromTop } from 'animations/animations';

const CartAndForm = ({ cart, setCart }) => {
  let cartValues = cart.map((item) => {
    return item.price;
  });

  let summary = () => {
    let values = cartValues.reduce((a, b) => a + b).toFixed(2);
    if (cartValues.length !== 0 && values < 150) {
      return values;
    } else if (values >= 150 && values < 250) {
      return ((values / 100) * 95).toFixed(2);
    } else if (values >= 250 && values < 500) {
      return ((values / 100) * 90).toFixed(2);
    } else if (values >= 500) {
      return ((values / 100) * 85).toFixed(2);
    } else {
      return '0';
    }
  };

  return (
    <Wrapper variants={slideFromTop} initial='hidden' animate='show'>
      <Header>Fetysz majtki majteczki kup zamów noszone używane pięknie pachnące</Header>
      {cart.length > 0 ? (
        <>
          <Cart cart={cart} setCart={setCart} />
          <Form cart={cart} summary={summary} />
          <CartTotalValue cart={cart} summary={summary} cartValues={cartValues} />
        </>
      ) : (
        <EmptyCartInfo>TWÓJ KOSZYK JEST PUSTY</EmptyCartInfo>
      )}
    </Wrapper>
  );
};

export default CartAndForm;
