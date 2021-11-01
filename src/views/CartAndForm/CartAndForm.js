import React from 'react';
import Form from 'components/Form/Form';
import Cart from 'views/CartAndForm/components/Cart/Cart';
import CartTotalValue from 'views/CartAndForm/components/CartTotalValue/CartTotalValue';
import { Wrapper, EmptyCartInfo } from './CartAndForm.styles';
import { scaleUp } from 'animations/animations';

const CartAndForm = ({ cart, setCart }) => (
  <Wrapper variants={scaleUp} animate='show' initial='hidden' exit='exit'>
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

export default CartAndForm;
