import React, { useState } from 'react';
// ICONS
import InstagramIcon from 'assets/icons/instagram-icon.svg';
import WhatsAppIcon from 'assets/icons/whatsapp-icon.svg';
import EmailIcon from 'assets/icons/email-icon.svg';
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
} from './Navigation.styles';

const Navigation = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <nav>
      <Wrapper>
        {/* NAVIGATION FOR DESKTOPS */}
        <NavItems>
          <NavItem>OFERTA</NavItem>
          <NavItem>CZYM SIĘ ZAJMUJĘ</NavItem>
          <NavItem>JAK WYGLĄDA ZAKUP</NavItem>
          <NavItem>KONTAKT</NavItem>
        </NavItems>
        <SocialMediaWrapper>
          <Icon src={InstagramIcon} />
          <Icon src={EmailIcon} />
          <Icon src={WhatsAppIcon} />
        </SocialMediaWrapper>
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
        <ModalLinksWrapper>
          <ModalLink className={toggleModal && 'toggle'}>OFERTA</ModalLink>
          <ModalLink className={toggleModal && 'toggle'}>CZYM SIĘ ZAJMUJĘ</ModalLink>
          <ModalLink className={toggleModal && 'toggle'}>JAK WYGLĄDA ZAKUP</ModalLink>
          <ModalLink className={toggleModal && 'toggle'}>KONTAKT</ModalLink>
          <StyledDot className={toggleModal && 'toggle'} />
        </ModalLinksWrapper>
      </Modal>
    </nav>
  );
};

export default Navigation;
