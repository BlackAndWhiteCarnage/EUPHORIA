import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  min-height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-bottom: 2px solid ${({ theme }) => theme.colors.crimsonRed};
  margin: auto;
  z-index: 999999;
  background: ${({ theme }) => theme.colors.darkWhite};
  @media screen and (max-width: 1600px) {
    width: 95%;
  }
  @media screen and (max-width: 1250px) {
    width: 0;
    z-index: 99;
    min-height: 100px;
    border-bottom: none;
  }
  &.stickyNavbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: unset;
    background: ${({ theme }) => theme.colors.darkWhite};
    padding: 5px 80px;
    height: 150px;
    min-height: unset;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  }
`;

export const FakeWrapper = styled.div`
  position: absolute;
  width: 80%;
  min-height: 25vh;
  margin: auto;
  @media screen and (max-width: 1250px) {
    display: none;
  }
  &.changePosition {
    position: static;
  }
`;

export const CartAndLogoWrapper = styled.div`
  min-height: 65px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1250px) {
    position: fixed;
    top: 0;
    left: 0;
    min-height: unset;
    height: 55px;
    background: ${({ theme }) => theme.colors.darkWhite};
    z-index: 200;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    justify-content: flex-end;
  }
  @media screen and (max-width: 620px) {
    height: 40px;
  }
  img {
    margin: 0;
  }
`;

export const CartWrapper = styled.div`
  width: 75px;
  height: 30px;
  position: absolute;
  top: 30px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  @media screen and (min-width: 1250px) {
    &:hover {
      img {
        transform: scale(1.6);
        transition: 0.5s ease;
      }
    }
  }
  @media screen and (max-width: 1250px) {
    position: fixed;
    z-index: 5;
    top: 0;
    right: 0;
    width: 55px;
    height: 55px;
  }
  @media screen and (max-width: 620px) {
    height: 40px;
  }
`;

export const Count = styled.div`
  position: absolute;
  top: 30px;
  right: 75px;
  z-index: -1;
  width: 0;
  height: 30px;
  background: ${({ theme }) => theme.colors.crimsonRed};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.darkWhite};
  font-size: ${({ theme }) => theme.fontSize.M};
  transition: 0.5s ease;
  opacity: 0;
  &.show {
    opacity: 1;
    width: 80px;
    transition: 0.5s ease;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  }
  @media screen and (max-width: 1250px) {
    position: fixed;
    z-index: 3;
    top: 0;
    right: 0;
    width: 20px;
    height: 55px;
    &.show {
      width: 105px;
      right: 55px;
      transition: 0.5s ease;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    }
  }
  @media screen and (max-width: 620px) {
    height: 40px;
  }
`;

export const Discount = styled.div`
  position: absolute;
  top: 0;
  right: 75px;
  z-index: -1;
  width: 0;
  height: 30px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.M};
  transition: 0.5s ease;
  &.show {
    width: 50px;
    top: 0;
    right: 155px;
    height: 60px;
    transition: 0.5s ease;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkGrey};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  }
  @media screen and (max-width: 1250px) {
    position: fixed;
    z-index: 3;
    top: 0;
    right: 0;
    width: 20px;
    height: 40px;
    &.show {
      width: 55px;
      height: 25px;
      right: 0;
      top: 85px;
      transition: 0.5s ease;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    }
  }
  @media screen and (max-width: 620px) {
    height: 40px;
    &.show {
      top: 70px;
    }
  }
`;

export const CartValue = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  width: 155px;
  height: 0;
  background: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.darkWhite};
  font-size: ${({ theme }) => theme.fontSize.m};
  transition: 0.5s ease;
  opacity: 0;
  &.show {
    transition: 0.5s ease;
    height: 30px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    opacity: 1;
  }
  &.change {
    color: ${({ theme }) => theme.colors.crimsonRed};
  }
  @media screen and (max-width: 1250px) {
    position: fixed;
    z-index: 3;
    top: 0;
    right: 0;
    width: 20px;
    height: 40px;
    &.show {
      top: 55px;
      width: 160px;
      transition: 0.5s ease;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    }
  }
  @media screen and (max-width: 620px) {
    &.show {
      top: 40px;
    }
  }
`;

export const StyledLogo = styled(Logo)`
  width: 270px;
  height: 50px;
  bottom: 0;
  left: 0;
  @media screen and (max-width: 1250px) {
    width: 140px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    /* margin: 0 5px;
    margin-left: 50px; */
  }
`;

export const NavItems = styled.ul`
  min-height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bolder;
  transition: 1s ease;
  @media screen and (max-width: 1250px) {
    &:last-child {
      display: none;
    }
  }
`;

export const NavItem = styled(NavLink).attrs({ activeClassName: 'active-link' })`
  position: relative;
  cursor: pointer;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-decoration: none;
  transition: 0.5s ease;
  padding: 10px 0;
  &.active-link {
    background: ${({ theme }) => theme.colors.darkGrey};
    transition: 0.5s ease;
    color: ${({ theme }) => theme.colors.darkWhite};
    padding: 10px;
  }
  &:hover {
    letter-spacing: 2.5px;
  }
`;

export const Icon = styled.img`
  min-width: 20px;
  transition: 0.3s ease;
  @media screen and (max-width: 1250px) {
    min-width: 25px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 1250px) {
    &:hover {
      transform: none;
    }
  }
`;

export const CartInfoWrapper = styled.div`
  position: relative;
  width: 205px;
  height: 60px;
  z-index: 1;
  @media screen and (max-width: 1250px) {
    height: 100%;
  }
  @media screen and (max-width: 620px) {
    width: 160px;
    height: 150px;
  }
`;
