import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HamburgerMenuWrapper = styled.div`
  position: fixed;
  height: 55px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  background: ${({ theme }) => theme.colors.white};
  top: 0;
  left: 0;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: 0.8s ease;
  cursor: pointer;
  min-width: 60px;
  @media screen and (min-width: 1250px) {
    display: none;
  }
  @media screen and (max-width: 620px) {
    height: 40px;
  }
  &.toggle {
    box-shadow: none;
    transition: 1s ease;
    background: none;
  }
`;

const pulse = keyframes`
  50% {
    width: 50%;
  }
`;

export const LinesWrapper = styled.div`
  width: 70%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Line = styled.div`
  width: 100%;
  height: 4px;
  background: ${({ theme }) => theme.colors.crimsonRed};
  transition: 0.5s ease;
  &.first {
    width: 100%;
  }
  &.second {
    width: 20%;
  }
  &.third {
    width: 60%;
  }
  &.toggle {
    background: ${({ theme }) => theme.colors.darkWhite};
    &.first {
      width: 20%;
    }
    &.second {
      width: 50%;
    }
    &.third {
      width: 100%;
    }
  }
  &.midDot {
    animation: ${pulse} 1.5s linear infinite;
  }
  &.sideDot {
    animation: ${pulse} 1s 0.2s linear infinite;
  }
  &.sideDotMin {
    animation: ${pulse} 1s 0.5s linear infinite;
  }
`;

export const Modal = styled.div`
  transition: 0.5s ease;
  position: fixed;
  width: 100%;
  height: 100%;
  top: -130vh;
  z-index: 9999;
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
  @media screen and (min-width: 1250px) {
    display: none;
  }
`;

export const StyledDot = styled.div`
  position: fixed;
  transform: translate(-50%, 0);
  bottom: -50px;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50% 50% 0 0;
  background: ${({ theme }) => theme.colors.crimsonRed};
  z-index: -1;
  width: 300%;
  pointer-events: none;
  &.toggle {
    transition: 2.5s 0.5s ease;
    height: 2000px;
  }
`;

export const ModalLinksWrapper = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  list-style: none;
`;

export const NavWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const LinksWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 5%;
`;

export const ModalLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.darkWhite};
  transition: 0.5s ease;
  text-decoration: none;
  @media screen and (max-width: 680px) {
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const ModalNavItem = styled(NavLink).attrs({ activeClassName: 'active-link' })`
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.darkWhite};
  transition: 0.5s ease;
  text-decoration: none;
  padding: 10px;
  &.toggle {
    &.active-link {
      background: ${({ theme }) => theme.colors.darkGrey};
      transition: 1s 1.8s ease;
      color: ${({ theme }) => theme.colors.darkWhite};
    }
  }
  @media screen and (max-width: 680px) {
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
