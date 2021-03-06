import { ReactElement, useState } from 'react';
import SocialMediaWrapper from 'components/SocialMediaWrapper/SocialMediaWrapper';
import NavItem from 'components/NavItem/NavItem';
import { HamburgerMenuWrapper, Line, Modal, ModalLinksWrapper, StyledDot, NavWrapper, LinksWrapper, LinesWrapper } from './HamburgerAndModal.styles';
import { ToggleModalType } from './HamburgerAndModal.types';

const HamburgerAndModal = (): ReactElement => {
  const [toggleModal, setToggleModal] = useState<ToggleModalType['toggleModal']>(false);

  const toggleModalHandler = (): void => {
    setToggleModal(!toggleModal);

    document.body.style.overflowY = `${!toggleModal ? 'hidden' : 'scroll'}`;
  };

  return (
    <>
      <HamburgerMenuWrapper onClick={toggleModalHandler} className={`${toggleModal && 'toggle'}`}>
        <LinesWrapper>
          <Line className={`${toggleModal && 'toggle'} first`} />
          <Line className={`${toggleModal && 'toggle'} second`} />
          <Line className={`${toggleModal && 'toggle'} third`} />
        </LinesWrapper>
      </HamburgerMenuWrapper>
      <Modal className={`${toggleModal && 'toggle'}`}>
        <ModalLinksWrapper onClick={toggleModalHandler}>
          <NavWrapper>
            <SocialMediaWrapper />
            <LinksWrapper>
              <NavItem to='/' text='STRONA GŁÓWNA' className='modal' />
              <NavItem to='/sklepik/majtki' text='MAJTKI' className='modal' />
              <NavItem to='/sklepik/skarpetki' text='SKARPETKI' className='modal' />
              <NavItem to='/sklepik/premium' text='PREMIUM' className='modal' />
              <NavItem to='/sklepik/inne' text='INNE' className='modal' />
              <NavItem to='/sklepik/rajstopy' text='RAJSTOPY I POŃCZOCHY' className='modal' />
              <NavItem to='/sklepik/fotki i nagrania' text='SESJE, FOTKI I NAGRANIA' className='modal' />
            </LinksWrapper>
          </NavWrapper>
          <StyledDot className={`${toggleModal && 'toggle'}`} />
        </ModalLinksWrapper>
      </Modal>
    </>
  );
};

export default HamburgerAndModal;
