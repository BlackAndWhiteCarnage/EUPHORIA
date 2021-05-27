import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import InstagramIcon from 'assets/icons/instagram-icon.svg';
import WhatsAppIcon from 'assets/icons/whatsapp-icon.svg';
import EmailIcon from 'assets/icons/email-icon.svg';

const Wrapper = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.colors.crimsonRed};
  margin-bottom: 15px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const NavItems = styled.ul`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bolder;
  @media screen and (max-width: 1550px) {
    width: 80%;
  }
`;

const NavItem = styled.li`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 110px;
  height: 100%;
  margin-left: auto;
`;

const Icon = styled.img`
  min-width: 18px;
`;

const Modal = styled.nav`
  transition: 0.5s ease;
  position: fixed;
  width: 100%;
  height: 100%;
  top: -100vh;
  z-index: 9;
  background: ${({ theme }) => theme.colors.darkWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  &.toggle {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: 0.5s ease;
  }
`;

const HamburgerMenu = styled.div`
  position: fixed;
  width: 40%;
  height: 35px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  background: ${({ theme }) => theme.colors.white};
  transform: translate(-50%, 0);
  bottom: 30px;
  left: 50%;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.8s ease;
  cursor: pointer;
  padding: 20px;
  @media screen and (min-width: 1200px) {
    display: none;
  }
  &.toggle {
    box-shadow: none;
    transition: 0.8s ease;
    background: ${({ theme }) => theme.colors.darkWhite};
    width: 110%;
    div {
      background: ${({ theme }) => theme.colors.darkGrey};
      transition: 0.5s ease;
    }
  }
`;

const pulse = keyframes`
  50% {
    transform: scale(1.3);
  }
`;

const Dot = styled.div`
  min-width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.crimsonRed};
  transition: 0.5s ease;
  &.midDot {
    min-width: 18px;
    height: 18px;
    margin: 0 5px;
    animation: ${pulse} 1.5s linear infinite;
  }
  &.sideDot {
    min-width: 10px;
    height: 10px;
    margin: 0 5px;
    animation: ${pulse} 1s 0.2s linear infinite;
  }
  &.sideDotMin {
    min-width: 5px;
    height: 5px;
    margin: 0 5px;
    animation: ${pulse} 1s 0.5s linear infinite;
  }
`;

const StyledDot = styled.div`
  position: fixed;
  transform: translate(-50%, 0);
  bottom: -50px;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.crimsonRed};
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  &.toggle {
    transition: 1s 0.2s ease;
    opacity: 1;
    width: 10000px;
    height: 2000px;
  }
`;

const ModalLinksWrapper = styled.ul`
  width: 95%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  list-style: none;
`;

const ModalLink = styled.li`
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.darkGrey};
  transform: scale(0);
  transition: 0.5s ease;
  &.toggle {
    transform: scale(1);
    transition: 1.2s ease;
    color: ${({ theme }) => theme.colors.darkWhite};
    &:nth-child(1) {
      transition: 0.8s ease;
    }
    &:nth-child(2) {
      transition: 1s ease;
    }
    &:nth-child(3) {
      transition: 1.2s ease;
    }
    &:nth-child(4) {
      transition: 1.6s ease;
    }
  }
`;

const Navigation = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const modalHandler = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <>
      <Wrapper>
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
      <HamburgerMenu onClick={modalHandler} className={toggleModal && 'toggle'}>
        <Dot className='sideDotMin' />
        <Dot className='sideDot' />
        <Dot className='midDot' />
        <Dot className='sideDot' />
        <Dot className='sideDotMin' />
      </HamburgerMenu>
      <Modal className={toggleModal && 'toggle'}>
        <ModalLinksWrapper>
          <ModalLink className={toggleModal && 'toggle'}>OFERTA</ModalLink>
          <ModalLink className={toggleModal && 'toggle'}>CZYM SIĘ ZAJMUJĘ</ModalLink>
          <ModalLink className={toggleModal && 'toggle'}>JAK WYGLĄDA ZAKUP</ModalLink>
          <ModalLink className={toggleModal && 'toggle'}>KONTAKT</ModalLink>
          <StyledDot className={toggleModal && 'toggle'} />
        </ModalLinksWrapper>
      </Modal>
    </>
  );
};

export default Navigation;
