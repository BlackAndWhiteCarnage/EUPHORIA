import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import { matchMedia } from 'helpers/matchMedia';
import { summary } from 'helpers/summary';
import SocialMediaWrapper from 'components/SocialMediaWrapper/SocialMediaWrapper';
import HamburgerAndModal from 'components/HamburgerAndModal/HamburgerAndModal';
import CartIcon from 'assets/icons/cart-icon.svg';
import NavItem from 'components/NavItem/NavItem';
import {
  Wrapper,
  NavItems,
  Icon,
  CartAndLogoWrapper,
  StyledLogo,
  CartWrapper,
  Count,
  CartValue,
  Discount,
  FakeWrapper,
  CartInfoWrapper,
} from './Navigation.styles';

const Navigation = ({ cart }) => {
  const [element, view] = useInView({ threshold: 0.5 });
  const [cartChange, setCartChange] = useState(false);

  useEffect(() => {
    setCartChange(true);
    setTimeout(() => {
      setCartChange(false);
    }, 500);

    return;
  }, [cart]);

  return (
    <nav>
      {matchMedia.matches && <FakeWrapper ref={element} className={!view && 'changePosition'} />}
      <Wrapper className={!view && matchMedia.matches && 'stickyNavbar'}>
        <CartAndLogoWrapper>
          <Link to='/'>
            <StyledLogo id='active' title='EUPHORIA NOSZONA I UŻYWANA BIELIZNA' />
          </Link>
          <CartInfoWrapper>
            <Link to='/koszyk'>
              <CartWrapper>
                <Icon src={CartIcon} id='active' title='KOSZYK' />
              </CartWrapper>
            </Link>
            <Count className={cart.length > 0 && 'show'} title='LICZBA PRZEDMIOTÓW W KOSZYKU'>
              {cart.length}
            </Count>
            <CartValue className={`${cart.length > 0 && 'show'} ${cartChange && 'change'}`} title='ŁĄCZNA WARTOŚĆ KOSZYKA'>
              RAZEM {cart.length > 0 && summary(cart)} ZŁ
            </CartValue>
            {summary(cart, false, true) >= 150 && (
              <Discount className={cart.length > 0 && 'show'} title='OBECNY RABAT'>
                {summary(cart, false, true) < 250 ? '-5%' : summary(cart, false, true) >= 250 && summary(cart, false, true) < 500 ? '-10%' : '-15%'}
              </Discount>
            )}
          </CartInfoWrapper>
        </CartAndLogoWrapper>
        <NavItems>
          <NavItem to='/' text='STRONA GŁÓWNA' className='desktop' />
          <NavItem to='/sklep/majtki' text='MAJTKI' className='desktop' />
          <NavItem to='/sklep/skarpetki' text='SKARPETKI' className='desktop' />
          <NavItem to='/sklep/premium' text='PREMIUM' className='desktop' />
          <NavItem to='/sklep/inne' text='INNE' className='desktop' />
          <NavItem to='/sklep/rajstopy' text='RAJSTOPY I POŃCZOCHY' className='desktop' />
          <NavItem to='/sklep/fotki i nagrania' text='SESJE, FOTKI I NAGRANIA' className='desktop' />
          <SocialMediaWrapper desktop />
        </NavItems>
      </Wrapper>
      <HamburgerAndModal />
    </nav>
  );
};

Navigation.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Navigation;
