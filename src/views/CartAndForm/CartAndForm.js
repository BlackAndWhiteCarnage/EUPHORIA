import React from 'react';
// COMPONENTS
import Form from 'components/Form/Form';
import Cart from 'components/Cart/Cart';
import CartTotalValue from 'components/CartTotalValue/CartTotalValue';
// STYLES
import { Header } from 'components/HomeOffersSection/HomeOffersSection.styles';
import { Wrapper, EmptyCartInfo } from './CartAndForm.styles';
// ANIMATIONS
import { slideFromTop } from 'animations/animations';

const CartAndForm = ({ cart, setCart }) => {
  return (
    <Wrapper variants={slideFromTop} animate='show' initial='hidden' exit='exit'>
      <Header>Fetysz majtki majteczki kup zamów noszone używane pięknie pachnące</Header>
      {cart.length > 0 ? (
        <>
          <Cart cart={cart} setCart={setCart} />
          <Form cart={cart} />
          <CartTotalValue cart={cart} />
        </>
      ) : (
        <EmptyCartInfo>TWÓJ KOSZYK JEST PUSTY</EmptyCartInfo>
      )}
    </Wrapper>
  );
};

export default CartAndForm;
