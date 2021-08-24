import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  width: 80%;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-bottom: 2px solid ${({ theme }) => theme.colors.crimsonRed};
  margin: auto;
  transition: 0.5s ease;
  z-index: 999999;
  background: ${({ theme }) => theme.colors.darkWhite};
  @media screen and (max-width: 1250px) {
    width: 0;
    z-index: 99;
    min-height: 100px;
    border-bottom: none;
  }
  &.stickyNavbar {
    transition: 0.5s ease;
    position: fixed;
    top: -50%;
    left: 0;
    transform: translate(0, 100%);
    width: 100%;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(5px);
    padding: 5px 80px;
    height: 330px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  }
`;

export const FakeWrapper = styled.div`
  position: absolute;
  width: 80%;
  min-height: 30vh;
  margin: auto;
  @media screen and (max-width: 1250px) {
    display: none;
  }
  &.changePosition {
    position: static;
  }
`;

export const CartAndLogoWrapper = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
  @media screen and (max-width: 1250px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 55px;
    background: ${({ theme }) => theme.colors.darkWhite};
    z-index: 200;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
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
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
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
    width: 60px;
  }
`;

export const Count = styled.div`
  position: absolute;
  bottom: 0;
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
    height: 40px;
    &.show {
      width: 105px;
      right: 50px;
      transition: 0.5s ease;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    }
  }
`;

export const Discount = styled.div`
  position: absolute;
  bottom: 0;
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
    top: -60px;
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
      width: 45px;
      height: 25px;
      right: 0;
      top: 70px;
      transition: 0.5s ease;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    }
  }
`;

export const CartValue = styled.div`
  position: absolute;
  bottom: 30px;
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
      top: 40px;
      width: 155px;
      transition: 0.5s ease;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    }
  }
`;

export const StyledLogo = styled(Logo)`
  width: 270px;
  height: 50px;
  position: absolute;
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
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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

export const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  margin-bottom: 5px;
  @media screen and (max-width: 1250px) {
    padding-top: 20px;
    flex-direction: column;
    position: absolute;
    height: 100%;
    justify-content: flex-start;
    top: 50%;
    transform: translate(0, -50%);
    right: 0;
    background: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const Icon = styled.img`
  min-width: 18px;
  transition: 0.3s ease;
  @media screen and (max-width: 1250px) {
    min-width: 25px;
    margin-bottom: 50px;
  }
  &:hover {
    transform: scale(1.6);
    transition: 0.5s ease;
  }
  @media screen and (max-width: 1200px) {
    &:hover {
      transform: none;
    }
  }
`;
