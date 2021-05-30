import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
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
} from './Navigation.styles';

const Navigation = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const location = useLocation();

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <nav>
      <Wrapper>
        <CartAndLogoWrapper>
          <StyledLogo />
          <CartWrapper>
            <Icon src={CartIcon} />
            <Icon src={DarkmodeIcon} />
          </CartWrapper>
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
              <NavItem to='/majtki' exact>
                MAJTKI
              </NavItem>
              <NavItem to='/skarpetki' exact>
                SKARPETKI
              </NavItem>
              <NavItem to='/premium' exact>
                PREMIUM
              </NavItem>
              <NavItem to='/inne' exact>
                INNE
              </NavItem>
              <NavItem to='/rajstopy' exact>
                RAJSTOPY I POŃCZOCHY
              </NavItem>
              <NavItem to='/fotki i nagrania' exact>
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
            </>
          ) : (
            <>
              <ModalNavItem className={toggleModal && 'toggle'} to='/' exact>
                STRONA GŁÓWNA
              </ModalNavItem>
              <ModalNavItem className={toggleModal && 'toggle'} to='/majtki' exact>
                MAJTKI
              </ModalNavItem>
              <ModalNavItem className={toggleModal && 'toggle'} to='/skarpetki' exact>
                SKARPETKI
              </ModalNavItem>
              <ModalNavItem className={toggleModal && 'toggle'} to='/premium' exact>
                PREMIUM
              </ModalNavItem>
              <ModalNavItem className={toggleModal && 'toggle'} to='/inne' exact>
                INNE
              </ModalNavItem>
              <ModalNavItem className={toggleModal && 'toggle'} to='/rajstopy' exact>
                RAJSTOPY I POŃCZOCHY
              </ModalNavItem>
              <ModalNavItem className={toggleModal && 'toggle'} to='/fotki i nagrania' exact>
                SESJE, FOTKI I NAGRANIA
              </ModalNavItem>
            </>
          )}

          <StyledDot className={toggleModal && 'toggle'} />
        </ModalLinksWrapper>
      </Modal>
    </nav>
  );
};

export default Navigation;
