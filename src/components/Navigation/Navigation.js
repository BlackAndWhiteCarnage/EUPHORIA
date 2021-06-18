import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
// HELPERS
import { matchMedia } from 'helpers/matchMedia';
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
  DiscountsInfo,
  Discounts,
} from './Navigation.styles';

const Navigation = ({ cart }) => {
  const [element, view] = useInView({ threshold: 0.5 });
  const location = useLocation();
  const [toggleDiscounts, setToggleDiscounts] = useState(false);

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

  const toggleDiscountsHandler = () => {
    setToggleDiscounts(!toggleDiscounts);
  };

  return (
    <nav>
      {matchMedia.matches && <FakeWrapper ref={element} className={!view && 'changePosition'} />}
      <Wrapper className={!view && matchMedia.matches && 'stickyNavbar'}>
        <CartAndLogoWrapper>
          <Link to='/'>
            <StyledLogo id='active' title='EUPHORIA NOSZONA I UŻYWANA BIELIZNA' alt='EUPHORIA LOGO' />
          </Link>
          <Link to='/koszyk'>
            <CartWrapper>
              <Icon src={CartIcon} id='active' title='PRZEJDŹ DO KOSZYKA' alt='Koszyk' />
            </CartWrapper>
          </Link>
          <Count className={cart.length > 0 && 'show'} title='LICZBA PRZEDMIOTÓW W KOSZYKU'>
            {cart.length}
          </Count>
          <CartValue className={cart.length > 0 && 'show'} title='ŁĄCZNA WARTOŚĆ KOSZYKA'>
            RAZEM {cart.length > 0 && summary()} ZŁ
          </CartValue>
          <DiscountsInfo onClick={toggleDiscountsHandler} className={cart.length > 0 && matchMedia.matches && 'show'}>
            {matchMedia.matches ? 'RABATY' : '%'}
          </DiscountsInfo>
          <Discounts
            onClick={toggleDiscountsHandler}
            className={`${toggleDiscounts && !cart.length && 'showDiscounts'} ${cart.length > 0 && toggleDiscounts && 'show'}`}
          >
            <p id='active'>OD 150zł RABAT -5%</p>
            <p id='active'>OD 250zł RABAT -10%</p>
            <p id='active'>OD 500zł RABAT -15%</p>
          </Discounts>
          {cartValueHandler() >= 150 && (
            <Discount className={cart.length > 0 && 'show'} title='OBECNY RABAT'>
              {cartValueHandler() < 250 ? '-5%' : cartValueHandler() >= 250 && cartValueHandler() < 500 ? '-10%' : '-15%'}
            </Discount>
          )}
        </CartAndLogoWrapper>
        <NavItems>
          {/* NAV FOR MAIN PAGE */}
          {location.pathname === '/' ? (
            <NavItem to='/' exact>
              STRONA GŁÓWNA
            </NavItem>
          ) : (
            <>
              {/* NAV IN SHOP */}
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
      <HamburgerMenuAndModal />
    </nav>
  );
};

Navigation.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Navigation;
