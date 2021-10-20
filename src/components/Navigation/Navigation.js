import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
// HELPERS
import { matchMedia } from 'helpers/matchMedia';
import { summary } from 'helpers/summary';
// COMPONENTS
import SocialMediaWrapper from 'components/SocialMediaWrapper/SocialMediaWrapper';
import HamburgerMenuAndModal from 'components/HamburgerMenuAndModal/HamburgerMenuAndModal';
// ICONS
import CartIcon from 'assets/icons/cart-icon.svg';
// STYLES
import {
  Wrapper,
  NavItems,
  NavItem,
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
  const location = useLocation();

  useEffect(() => {
    setCartChange(true);
    setTimeout(() => {
      setCartChange(false);
    }, 500);

    return;
  }, [cart]);

  let displayLogo;

  if (cart.length > 0 && !matchMedia.matches) {
    displayLogo = false;
  } else {
    displayLogo = true;
  }

  return (
    <nav>
      {matchMedia.matches && <FakeWrapper ref={element} className={!view && 'changePosition'} />}
      <Wrapper className={!view && matchMedia.matches && 'stickyNavbar'}>
        <CartAndLogoWrapper>
          {displayLogo && (
            <Link to='/'>
              <StyledLogo id='active' title='EUPHORIA NOSZONA I UŻYWANA BIELIZNA' />
            </Link>
          )}
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
          {location.pathname === '/' ? (
            <li>
              <NavItem to='/' exact>
                STRONA GŁÓWNA
              </NavItem>
            </li>
          ) : (
            <>
              <li>
                <NavItem to='/' exact>
                  STRONA GŁÓWNA
                </NavItem>
              </li>
              <li>
                <NavItem to='/sklepik/majtki' exact>
                  MAJTKI
                </NavItem>
              </li>
              <li>
                <NavItem to='/sklepik/skarpetki' exact>
                  SKARPETKI
                </NavItem>
              </li>
              <li>
                <NavItem to='/sklepik/premium' exact>
                  PREMIUM
                </NavItem>
              </li>
              <li>
                <NavItem to='/sklepik/inne' exact>
                  INNE
                </NavItem>
              </li>
              <li>
                <NavItem to='/sklepik/rajstopy' exact>
                  RAJSTOPY I POŃCZOCHY
                </NavItem>
              </li>
              <li>
                <NavItem to='/sklepik/fotki i nagrania' exact>
                  SESJE, FOTKI I NAGRANIA
                </NavItem>
              </li>
            </>
          )}
          <SocialMediaWrapper desktop />
        </NavItems>
      </Wrapper>
      {/* HAMBURGER MENU */}
      <HamburgerMenuAndModal />
    </nav>
  );
};

Navigation.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Navigation;
