import React, { useState } from 'react';
import { HamburgerMenuWrapper, Dot, Modal, ModalLink, ModalLinksWrapper, ModalNavItem, StyledDot } from './HamburgerMenu.styles';
import SocialMediaWrapper from 'components/SocialMediaWrapper/SocialMediaWrapper';
import { useLocation } from 'react-router';

const HamburgerMenu = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const location = useLocation();

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <nav>
      <HamburgerMenuWrapper onClick={toggleModalHandler} className={toggleModal && 'toggle'}>
        <Dot className='sideDotMin' />
        <Dot className='sideDot' />
        <Dot className='midDot' />
        <Dot className='sideDot' />
        <Dot className='sideDotMin' />
      </HamburgerMenuWrapper>
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
              <SocialMediaWrapper />
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
              <SocialMediaWrapper />
            </>
          )}
          <StyledDot className={toggleModal && 'toggle'} />
        </ModalLinksWrapper>
      </Modal>
    </nav>
  );
};

export default HamburgerMenu;
