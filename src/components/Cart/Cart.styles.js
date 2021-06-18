import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow-icon.svg';
import { ReactComponent as ExtrasIcon } from 'assets/icons/extras-icon.svg';
import { ReactComponent as XMarkIcon } from 'assets/icons/xmark-icon.svg';
import { ReactComponent as AlertIcon } from 'assets/icons/alert-icon.svg';
import { Link } from 'react-router-dom';

export const CartItems = styled.div`
  width: 30%;
  min-width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  background: ${({ theme }) => theme.colors.white};
  @media screen and (max-width: 1200px) {
    min-width: unset;
    width: 100%;
  }
`;

export const CartItem = styled.div`
  position: relative;
  width: 400px;
  background: ${({ theme }) => theme.colors.crimsonRed};
  min-height: 180px;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.m};
  @media screen and (max-width: 1200px) {
    width: 80%;
    min-height: 300px;
    &:last-child {
      margin-bottom: 140px;
    }
  }
  @media screen and (max-width: 780px) {
    width: 95%;
    justify-content: space-around;
    /* flex-wrap: wrap; */
    min-height: 300px;
    margin: 40px 0;
  }
  &.deleting {
    transition: 0.5s;
    transform: scale(0) translateY(-300px);
    opacity: 0;
  }
`;

export const ItemImage = styled.img`
  max-width: 120px;
  height: 90%;
  object-fit: cover;
  margin-left: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 1200px) {
    max-width: 200px;
  }
  @media screen and (max-width: 780px) {
    margin: 20px;
  }
  @media screen and (max-width: 460px) {
    margin: 0;
    height: 100%;
    min-width: 40%;
    box-shadow: none;
  }
`;

export const ItemInfoWrapper = styled.div`
  min-width: 180px;
  height: 90%;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.darkWhite};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 1200px) {
    width: 50%;
    height: 100%;
    /* font-size: ${({ theme }) => theme.fontSize.l}; */
    background: ${({ theme }) => theme.colors.darkGrey};
    margin: 0 10px;
  }
  @media screen and (max-width: 780px) {
    min-width: 50%;
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 0;
    padding: 0 30px;
  }
  @media screen and (max-width: 460px) {
    padding: 0 10px;
    /* font-size: ${({ theme }) => theme.fontSize.s}; */
  }
`;

export const PickedExtras = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
  margin: 5px 0;
  &.itsAlert {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PickedExtrasWrapper = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: 0;
  background: ${({ theme }) => theme.colors.darkGrey};
  opacity: 0;
  transition: 0.5s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  &.show {
    opacity: 1;
    width: calc(100% - 60px);
    transition: 0.5s ease;
    overflow-y: scroll;
    @media screen and (max-width: 780px) {
      width: 100%;
    }
  }
  &.showAlert {
    opacity: 1;
    width: calc(100% - 60px);
    transition: 0.5s ease;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: ${({ theme }) => theme.colors.darkWhite};
    color: ${({ theme }) => theme.colors.crimsonRed};
    @media screen and (max-width: 780px) {
      width: 100%;
    }
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 5px;
    background: ${({ theme }) => theme.colors.darkWhite};
    color: ${({ theme }) => theme.colors.darkGrey};
    padding: 10px;
  }
`;

export const HrefAndDeleteWrapper = styled.div`
  min-width: 60px;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 780px) {
    position: absolute;
    bottom: -40px;
    left: 0;
    width: 100%;
    height: 40px;
    flex-direction: row;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
  }
`;

export const StyledAlertIcon = styled(AlertIcon)`
  min-width: 18px;
  transition: 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
    transition: 0.5s ease;
  }
`;

export const StyledXMarkIcon = styled(XMarkIcon)`
  min-width: 18px;
  transition: 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.5) rotate(360deg);
    transition: 0.5s ease;
  }
`;
export const StyledExtrasIcon = styled(ExtrasIcon)`
  min-width: 18px;
  transition: 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: rotate(70deg) skew(20deg) scale(1.5);
    transition: 0.5s ease;
  }
`;
export const StyledArrowIcon = styled(ArrowIcon)`
  min-width: 18px;
  transition: 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateX(5px) rotate(-10deg) scale(1.5);
    transition: 0.5s ease;
  }
`;

export const StyledAlertLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.crimsonRed};
`;
