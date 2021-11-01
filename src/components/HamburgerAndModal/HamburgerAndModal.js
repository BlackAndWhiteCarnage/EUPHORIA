import React, { useState, useEffect } from 'react';
import SocialMediaWrapper from 'components/SocialMediaWrapper/SocialMediaWrapper';
import {
  HamburgerMenuWrapper,
  Line,
  Modal,
  ModalLinksWrapper,
  ModalNavItem,
  StyledDot,
  NavWrapper,
  LinksWrapper,
  LinesWrapper,
} from './HamburgerAndModal.styles';

const HamburgerAndModal = () => {
  const [toggleModal, setToggleModal] = useState(false);

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
      <Modal className={toggleModal && 'toggle'}>
        <ModalLinksWrapper onClick={toggleModalHandler}>
          <NavWrapper>
            <SocialMediaWrapper />
            <LinksWrapper>
              <ModalNavItem className={toggleModal && 'toggle'} to='/' exact>
                STRONA GŁÓWNA
              </ModalNavItem>
              <ModalNavItem className={toggleModal && 'toggle'} to='/sklep/majtki' exact>
                MAJTKI
              </ModalNavItem>
              <ModalNavItem className={toggleModal && 'toggle'} to='/sklep/skarpetki' exact>
                SKARPETKI
              </ModalNavItem>
              <ModalNavItem className={toggleModal && 'toggle'} to='/sklep/premium' exact>
                PREMIUM
              </ModalNavItem>
              <ModalNavItem className={toggleModal && 'toggle'} to='/sklep/inne' exact>
                INNE
              </ModalNavItem>
              <ModalNavItem className={toggleModal && 'toggle'} to='/sklep/rajstopy' exact>
                RAJSTOPY I POŃCZOCHY
              </ModalNavItem>
              <ModalNavItem className={toggleModal && 'toggle'} to='/sklep/fotki i nagrania' exact>
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

export default HamburgerAndModal;
