import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
// COMPONENTS
import SocialMediaWrapper from 'components/SocialMediaWrapper/SocialMediaWrapper';
// STYLES
import {
  HamburgerMenuWrapper,
  Line,
  Modal,
  ModalLink,
  ModalLinksWrapper,
  ModalNavItem,
  StyledDot,
  NavWrapper,
  LinksWrapper,
  LinesWrapper,
} from './HamburgerMenuAndModal.styles';

const HamburgerMenuAndModal = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflowY = `${toggleModal ? 'hidden' : 'scroll'}`;
  }, [toggleModal]);

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <nav>
      <HamburgerMenuWrapper onClick={toggleModalHandler} className={toggleModal && 'toggle'}>
        <LinesWrapper>
          <Line className={`${toggleModal && 'toggle'} first`} />
          <Line className={`${toggleModal && 'toggle'} second`} />
          <Line className={`${toggleModal && 'toggle'} third`} />
        </LinesWrapper>
      </HamburgerMenuWrapper>
      {/* MODAL */}
      <Modal className={toggleModal && 'toggle'}>
        <ModalLinksWrapper onClick={toggleModalHandler}>
          <NavWrapper>
            <SocialMediaWrapper />
            <LinksWrapper>
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
            </LinksWrapper>
          </NavWrapper>
          <StyledDot className={toggleModal && 'toggle'} />
        </ModalLinksWrapper>
      </Modal>
    </nav>
  );
};

export default HamburgerMenuAndModal;
