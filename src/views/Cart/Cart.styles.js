import styled from 'styled-components';
import Button from 'components/Button/Button';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow-icon.svg';
import { ReactComponent as ExtrasIcon } from 'assets/icons/extras-icon.svg';
import { ReactComponent as XMarkIcon } from 'assets/icons/xmark-icon.svg';
import { ReactComponent as AlertIcon } from 'assets/icons/alert-icon.svg';
import { ReactComponent as ArrowDown } from 'assets/icons/arrow-down-icon.svg';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  width: 80%;
  max-width: 1600px;
  height: 58vh;
  display: flex;
  flex-wrap: nowrap;
  margin: auto;
  justify-content: space-between;
  margin-top: 20px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 1200px) {
    margin-top: 0;
    flex-wrap: wrap;
    width: 100%;
    height: 70vh;
  }
`;

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
    /* ::-webkit-scrollbar {
      display: none;
    } */
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

export const FormWrapper = styled.div`
  position: relative;
  width: 70%;
  background: ${({ theme }) => theme.colors.darkGrey};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    width: 100%;
    min-height: 700px;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const HeaderInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  max-height: 60px;
  @media screen and (max-width: 1250px) {
    max-height: unset;
  }
`;
export const Header = styled.h2`
  color: ${({ theme }) => theme.colors.darkWhite};
  width: 70%;
  @media screen and (min-width: 680px) {
    width: 80%;
  }
`;
export const Discounts = styled.div`
  position: absolute;
  right: 0;
  width: 50px;
  height: 30%;
  background: ${({ theme }) => theme.colors.crimsonRed};
  writing-mode: vertical-rl;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.darkWhite};
  transition: 0.5s ease;
  &.show {
    width: 100%;
    height: 100%;
    transition: 0.5s ease;
    writing-mode: unset;
    p {
      margin: 25px;
    }
  }
  @media screen and (max-width: 1250px) {
    bottom: 30px;
    width: 100%;
    height: 50px;
    writing-mode: unset;
  }
`;

export const Form = styled.form`
  width: 50%;
  height: 60%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1600px) {
    width: 80%;
    margin-top: 20px;
    height: 60%;
  }
  @media screen and (max-width: 460px) {
    width: 90%;
  }
`;

export const Info = styled.div`
  position: absolute;
  bottom: 35px;
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.crimsonRed};
  color: ${({ theme }) => theme.colors.darkWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: uppercase;
  transition: 0.5s ease;
  z-index: 20;
  padding: 0 20px;
  &.show {
    transition: 0.5s ease;
    height: calc(100% - 35px);
  }
  @media screen and (min-width: 1250px) {
    width: 150px;
    top: 0;
    right: 0;
    &.show {
      transition: 0.5s ease;
      height: 100%;
      width: 100%;
    }
  }
`;

export const Label = styled.label`
  margin: 20px 0 5px 0;
  width: 100%;
  color: ${({ theme }) => theme.colors.darkWhite};
`;

export const Input = styled.input`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.darkWhite};
  font-family: 'Montserrat', sans-serif;
  padding: 10px;
  background: none;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.darkWhite};
  font-family: 'Montserrat', sans-serif;
  padding: 10px;
  background: none;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  resize: none;
`;

export const CostsInfoWrapper = styled.div`
  position: absolute;
  width: auto;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  bottom: -80px;
  font-weight: bolder;
  span {
    color: ${({ theme }) => theme.colors.crimsonRed};
  }
  @media screen and (max-width: 1200px) {
    /* display: none; */
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 0;
    width: 100%;
    background: ${({ theme }) => theme.colors.darkWhite};
    text-align: right;
    padding: 10px;
  }
`;

export const StyledButton = styled(Button)`
  position: absolute;
  bottom: -80px;
  right: 0;
  padding: 10px;
  min-width: 200px;
  z-index: 15;
  @media screen and (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 0;
    width: auto;
    white-space: nowrap;
  }
  @media screen and (max-width: 1200px) {
    position: relative;
    width: 80%;
  }
  @media screen and (max-width: 460px) {
    width: 90%;
  }
`;

export const StyledXMarkIcon = styled(XMarkIcon)`
  min-width: 18px;
`;
export const StyledExtrasIcon = styled(ExtrasIcon)`
  min-width: 18px;
`;
export const StyledArrowIcon = styled(ArrowIcon)`
  min-width: 18px;
`;
export const StyledAlertIcon = styled(AlertIcon)`
  min-width: 18px;
`;
export const StyledArrowDown = styled(ArrowDown)`
  width: 30%;
  height: 80px;
  @media screen and (min-width: 680px) {
    width: 20%;
  }
`;
export const StyledAlertLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.crimsonRed};
`;
export const EmptyCartInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255, 90%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: center;
  @media screen and (max-width: 1250px) {
    position: fixed;
  }
`;
