import React from 'react';
import styled from 'styled-components';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram-icon.svg';
import { ReactComponent as WhatsAppIcon } from 'assets/icons/whatsapp-icon.svg';
import { ReactComponent as EmailIcon } from 'assets/icons/email-icon.svg';

const Wrapper = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.colors.crimsonRed};
  margin-bottom: 15px;
`;

const NavItems = styled.ul`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bolder;
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

const Navigation = () => {
  return (
    <Wrapper>
      <NavItems>
        <NavItem>OFERTA</NavItem>
        <NavItem>CZYM SIĘ ZAJMUJĘ</NavItem>
        <NavItem>JAK WYGLĄDA ZAKUP</NavItem>
        <NavItem>KONTAKT</NavItem>
      </NavItems>
      <SocialMediaWrapper>
        <InstagramIcon />
        <EmailIcon />
        <WhatsAppIcon />
      </SocialMediaWrapper>
    </Wrapper>
  );
};

export default Navigation;
