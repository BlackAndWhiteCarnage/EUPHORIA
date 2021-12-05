import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';

export const Wrapper = styled.div`
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

export const Cart = styled.button`
  width: 75px;
  height: 30px;
  position: absolute;
  cursor: pointer;
  top: 30px;
  right: 0;
  border: none;
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
  background: ${({ theme }) => theme.colors.main};
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
    color: ${({ theme }) => theme.colors.main};
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
    display: none;
  }
`;

export const CartInfo = styled.div`
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

export const Icon = styled.img`
  min-width: 20px;
  transition: 0.3s ease;
  pointer-events: none;
`;
