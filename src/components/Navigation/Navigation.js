import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
// HELPERS
import { matchMedia } from 'helpers/matchMedia';
// COMPONENTS
import SocialMediaWrapper from 'components/SocialMediaWrapper/SocialMediaWrapper';
import HamburgerMenu from 'components/HamburgerMenu/HamburgerMenu';
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
} from './Navigation.styles';

const Navigation = ({ cart }) => {
  const [element, view] = useInView({ threshold: 0.5 });
  const location = useLocation();

  let cartValues = cart.map((item) => {
    return item.price;
  });

  let cartValueHandler = () => {
    if (cart.length > 0) {
      let values = cartValues.reduce((a, b) => a + b).toFixed(2);
      return values;
    }
  };

  let summary = () => {
    if (cart.length > 0) {
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
    }
  };

  return (
    <nav>
      {matchMedia.matches && <FakeWrapper ref={element} className={!view && 'changePosition'} />}
      <Wrapper className={!view && matchMedia.matches && 'stickyNavbar'}>
        <CartAndLogoWrapper>
          <Link to='/'>
            <StyledLogo id='active' title='EUPHORIA NOSZONA I UŻYWANA BIELIZNA' />
          </Link>
          <Link to='/koszyk'>
            <CartWrapper>
              <Icon src={CartIcon} id='active' title='KOSZYK' />
            </CartWrapper>
          </Link>
          <Count className={cart.length > 0 && 'show'} title='LICZBA PRZEDMIOTÓW W KOSZYKU'>
            {cart.length}
          </Count>
          <CartValue className={cart.length > 0 && 'show'} title='ŁĄCZNA WARTOŚĆ KOSZYKA'>
            RAZEM {cart.length > 0 && summary()} ZŁ
          </CartValue>
          {cartValueHandler() >= 150 && (
            <Discount className={cart.length > 0 && 'show'} title='OBECNY RABAT'>
              {cartValueHandler() < 250 ? '-5%' : cartValueHandler() >= 250 && cartValueHandler() < 500 ? '-10%' : '-15%'}
            </Discount>
          )}
        </CartAndLogoWrapper>
        <NavItems>
          {location.pathname === '/' ? (
            <NavItem to='/' exact>
              STRONA GŁÓWNA
            </NavItem>
          ) : (
            <>
              <NavItem to='/' exact>
                STRONA GŁÓWNA
              </NavItem>
              <NavItem to='/sklepik/majtki' exact>
                MAJTKI
              </NavItem>
              <NavItem to='/sklepik/skarpetki' exact>
                SKARPETKI
              </NavItem>
              <NavItem to='/sklepik/premium' exact>
                PREMIUM
              </NavItem>
              <NavItem to='/sklepik/inne' exact>
                INNE
              </NavItem>
              <NavItem to='/sklepik/rajstopy' exact>
                RAJSTOPY I POŃCZOCHY
              </NavItem>
              <NavItem to='/sklepik/fotki i nagrania' exact>
                SESJE, FOTKI I NAGRANIA
              </NavItem>
            </>
          )}
          <SocialMediaWrapper desktop />
        </NavItems>
      </Wrapper>
      {/* HAMBURGER MENU */}
      <HamburgerMenu />
    </nav>
  );
};

export default Navigation;
