import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { matchMedia } from 'helpers/matchMedia';
import { useInView } from 'react-intersection-observer';
// ICONS
import InstagramIcon from 'assets/icons/instagram-icon.svg';
import WhatsAppIcon from 'assets/icons/whatsapp-icon.svg';
import EmailIcon from 'assets/icons/email-icon.svg';
import CartIcon from 'assets/icons/cart-icon.svg';
import DarkmodeIcon from 'assets/icons/darkmode-icon.svg';
// STYLES
import {
  Wrapper,
  NavItems,
  NavItem,
  SocialMediaWrapper,
  Icon,
  HamburgerMenu,
  Dot,
  Modal,
  ModalLinksWrapper,
  ModalLink,
  StyledDot,
  CartAndLogoWrapper,
  StyledLogo,
  CartWrapper,
  ModalNavItem,
  Count,
  CartValue,
  OnlyFans,
  OnlyFansWrapper,
  Discount,
  FakeWrapper,
} from './Navigation.styles';

const Navigation = ({ cart }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [element, view] = useInView({ threshold: 0.5 });

  let cartValues = cart.map((item) => {
    return item.price;
  });

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

  useEffect(() => {
    if (cart.length > 0) {
      summary();
    }
  }, [cart]);

  const location = useLocation();

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <nav>
      {matchMedia.matches && <FakeWrapper ref={element} className={!view && 'changePosition'} />}
      <Wrapper className={!view && matchMedia.matches && 'stickyNavbar'}>
        <CartAndLogoWrapper>
          <Link to='/'>
            <StyledLogo id='active' />
          </Link>
          <Link to='/koszyk'>
            <CartWrapper>
              <Icon src={CartIcon} id='active' />
            </CartWrapper>
          </Link>
          <Count className={cart.length > 0 && 'show'}>{cart.length}</Count>
          <CartValue className={cart.length > 0 && 'show'}>RAZEM {cart.length > 0 && summary()} ZŁ</CartValue>
          {summary() >= 142.5 && (
            <Discount className={cart.length > 0 && 'show'}>
              {summary() < 225 ? '-5%' : summary() >= 225 && summary() < 425 ? '-10%' : '-15%'}
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
          <SocialMediaWrapper>
            <Icon src={InstagramIcon} />
            <Icon src={EmailIcon} />
            <Icon src={WhatsAppIcon} />
          </SocialMediaWrapper>
        </NavItems>
      </Wrapper>
      {/* HAMBURGER MENU */}
      <HamburgerMenu onClick={toggleModalHandler} className={toggleModal && 'toggle'}>
        <Dot className='sideDotMin' />
        <Dot className='sideDot' />
        <Dot className='midDot' />
        <Dot className='sideDot' />
        <Dot className='sideDotMin' />
      </HamburgerMenu>
      {/* MODAL */}
      <Modal className={toggleModal && 'toggle'}>
        <ModalLinksWrapper onClick={toggleModalHandler}>
          {location.pathname === '/' ? (
            <>
              <ModalLink className={toggleModal && 'toggle'} href='#offer'>
                OFERTA
              </ModalLink>
              <ModalLink className={toggleModal && 'toggle'} href='#whoAmI'>
                CZYM SIĘ ZAJMUJĘ
              </ModalLink>
              <ModalLink className={toggleModal && 'toggle'} href='#howToBuy'>
                JAK WYGLĄDA ZAKUP
              </ModalLink>
              <ModalLink className={toggleModal && 'toggle'} href='#contact'>
                KONTAKT
              </ModalLink>
              <SocialMediaWrapper>
                <Icon src={InstagramIcon} />
                <Icon src={EmailIcon} />
                <Icon src={WhatsAppIcon} />
              </SocialMediaWrapper>
            </>
          ) : (
            <>
              <ModalNavItem className={toggleModal && 'toggle'} to='/' exact>
                STRONA GŁÓWNA
              </ModalNavItem>
              <ModalNavItem className={toggleModal && 'toggle'} to='/sklepik/majtki' exact>
                MAJTKI
              </ModalNavItem>
              <ModalNavItem className={toggleModal && 'toggle'} to='/sklepik/skarpetki' exact>
                SKARPETKI
              </ModalNavItem>
              <ModalNavItem className={toggleModal && 'toggle'} to='/sklepik/premium' exact>
                PREMIUM
              </ModalNavItem>
              <ModalNavItem className={toggleModal && 'toggle'} to='/sklepik/inne' exact>
                INNE
              </ModalNavItem>
              <ModalNavItem className={toggleModal && 'toggle'} to='/sklepik/rajstopy' exact>
                RAJSTOPY I POŃCZOCHY
              </ModalNavItem>
              <ModalNavItem className={toggleModal && 'toggle'} to='/sklepik/fotki i nagrania' exact>
                SESJE, FOTKI I NAGRANIA
              </ModalNavItem>
              <SocialMediaWrapper>
                <Icon src={InstagramIcon} />
                <Icon src={EmailIcon} />
                <Icon src={WhatsAppIcon} />
              </SocialMediaWrapper>
            </>
          )}
          <StyledDot className={toggleModal && 'toggle'} />
        </ModalLinksWrapper>
      </Modal>
    </nav>
  );
};

export default Navigation;
