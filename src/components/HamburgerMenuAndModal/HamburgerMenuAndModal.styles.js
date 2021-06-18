import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HamburgerMenuWrapper = styled.div`
  position: fixed;
  width: 100%;
  /* width: 40%; */
  height: 35px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  background: ${({ theme }) => theme.colors.white};
  transform: translate(-50%, 0);
  /* bottom: 30px; */
  bottom: 0;
  left: 50%;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.8s ease;
  cursor: pointer;
  padding: 10px;
  @media screen and (min-width: 1250px) {
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

export const Dot = styled.div`
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

export const Modal = styled.div`
  transition: 0.5s ease;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: -130vh;
  z-index: 9999;
  background: ${({ theme }) => theme.colors.darkWhite};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  &.toggle {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: 0.5s ease;
  }
`;

export const StyledDot = styled.div`
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

export const ModalLinksWrapper = styled.ul`
  width: 95%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin-top: 20px;
  @media screen and (max-width: 680px) {
    align-items: flex-start;
    width: 90%;
  }
`;

export const ModalLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.l};
  /* text-align: center; */
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.darkGrey};
  transform: scale(0);
  transition: 0.5s ease;
  text-decoration: none;
  @media screen and (max-width: 680px) {
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
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

export const ModalNavItem = styled(NavLink).attrs({ activeClassName: 'active-link' })`
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.darkGrey};
  transform: scale(0);
  transition: 0.5s ease;
  text-decoration: none;
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
  &.active-link {
    background: ${({ theme }) => theme.colors.darkGrey};
    transition: 0.5s ease;
    color: ${({ theme }) => theme.colors.darkWhite};
    padding: 10px;
  }
  @media screen and (max-width: 680px) {
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
