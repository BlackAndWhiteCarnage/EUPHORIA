import React, { useState } from 'react';
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
} from './Navigation.styles';

const Navigation = () => {
  const [toggleModal, setToggleModal] = useState(false);

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
          <NavItem></NavItem>
          <NavItem>
            <SocialMediaWrapper>
              <Icon src={InstagramIcon} />
              <Icon src={EmailIcon} />
              <Icon src={WhatsAppIcon} />
            </SocialMediaWrapper>
          </NavItem>
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
          <StyledDot className={toggleModal && 'toggle'} />
        </ModalLinksWrapper>
      </Modal>
    </nav>
  );
};

export default Navigation;
