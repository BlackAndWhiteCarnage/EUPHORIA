import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CartIcon from 'assets/icons/cart-icon.svg';
import { summary } from 'helpers/summary';
import { Link } from 'react-router-dom';
import { Wrapper, StyledLogo, CartInfo, Cart, Icon, Count, CartValue, Discount } from './CartAndLogo.styles';
import { CartType } from 'Root'

interface CartAndLogoProps {
  cart: CartType['cart']
}

interface CartChangeType {
  cartChange: boolean
  setCartChange: React.Dispatch<React.SetStateAction<boolean>>
}

const CartAndLogo = ({ cart }: CartAndLogoProps) => {
  const [cartChange, setCartChange] = useState<CartChangeType['cartChange']>(false);

  useEffect(() => {
    setCartChange(true);

    setTimeout(() => {
      setCartChange(false);
    }, 500);
  }, [cart]);

  return (
    <Wrapper>
      <Link to='/'>
        <StyledLogo id='active' title='Euphoria noszona i używana bielizna' />
      </Link>
      <CartInfo>
        <Link to='/koszyk' title='Twój koszyk'>
          <Cart>
            <Icon src={CartIcon} id='active' />
          </Cart>
        </Link>
        <Count className={`${cart.length && 'show'}`} title='Liczba przedmiotów w koszyku'>
          {cart.length}
        </Count>
        <CartValue className={`${cart.length && 'show'} ${cartChange && 'change'}`} title='Łączna wartość koszyka'>
          RAZEM {cart.length && summary(cart)} ZŁ
        </CartValue>
        {summary(cart, false, true) >= 150 && summary(cart, true) && (
          <Discount className={`${cart.length && 'show'}`} title='Obecny rabat'>
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
