import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CartIcon from 'assets/icons/cart-icon.svg';
import { summary } from 'helpers/summary';
import { Link } from 'react-router-dom';
import { Wrapper, StyledLogo, CartInfo, Cart, Icon, Count, CartValue, Discount } from './CartAndLogo.styles';

const CartAndLogo = ({ cart }) => {
  const [cartChange, setCartChange] = useState(false);

  useEffect(() => {
    setCartChange(true);

    setTimeout(() => {
      setCartChange(false);
    }, 500);
  }, [cart]);

  return (
    <Wrapper>
      <Link to='/'>
        <StyledLogo id='active' title='EUPHORIA NOSZONA I UŻYWANA BIELIZNA' />
      </Link>
      <CartInfo>
        <Link to='/koszyk'>
          <Cart>
            <Icon src={CartIcon} id='active' title='KOSZYK' />
          </Cart>
        </Link>
        <Count className={cart.length && 'show'} title='LICZBA PRZEDMIOTÓW W KOSZYKU'>
          {cart.length}
        </Count>
        <CartValue className={`${cart.length && 'show'} ${cartChange && 'change'}`} title='ŁĄCZNA WARTOŚĆ KOSZYKA'>
          RAZEM {cart.length && summary(cart)} ZŁ
        </CartValue>
        {summary(cart, false, true) >= 150 && (
          <Discount className={cart.length && 'show'} title='OBECNY RABAT'>
            {summary(cart, false, true) < 250 ? '-5%' : summary(cart, false, true) >= 250 && summary(cart, false, true) < 500 ? '-10%' : '-15%'}
          </Discount>
        )}
      </CartInfo>
    </Wrapper>
  );
};

CartAndLogo.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default CartAndLogo;
