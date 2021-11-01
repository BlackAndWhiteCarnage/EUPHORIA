import React, { useState } from 'react';
import SocialMediaWrapper from 'components/SocialMediaWrapper/SocialMediaWrapper';
import NavItem from 'components/NavItem/NavItem';
import { HamburgerMenuWrapper, Line, Modal, ModalLinksWrapper, StyledDot, NavWrapper, LinksWrapper, LinesWrapper } from './HamburgerAndModal.styles';

const HamburgerAndModal = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal);

    document.body.style.overflowY = `${!toggleModal ? 'hidden' : 'scroll'}`;
  };

  return (
    <>
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
              <NavItem to='/' text='STRONA GŁÓWNA' className='modal' />
              <NavItem to='/sklep/majtki' text='MAJTKI' className='modal' />
              <NavItem to='/sklep/skarpetki' text='SKARPETKI' className='modal' />
              <NavItem to='/sklep/premium' text='PREMIUM' className='modal' />
              <NavItem to='/sklep/inne' text='INNE' className='modal' />
              <NavItem to='/sklep/rajstopy' text='RAJSTOPY I POŃCZOCHY' className='modal' />
              <NavItem to='/sklep/fotki i nagrania' text='SESJE, FOTKI I NAGRANIA' className='modal' />
            </LinksWrapper>
          </NavWrapper>
          <StyledDot className={toggleModal && 'toggle'} />
        </ModalLinksWrapper>
      </Modal>
    </>
  );
};

export default HamburgerAndModal;
