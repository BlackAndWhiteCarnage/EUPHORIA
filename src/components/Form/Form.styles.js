import styled, { keyframes } from 'styled-components';
import { ReactComponent as ProgressIcon } from 'assets/icons/progress-icon.svg';
import { ReactComponent as CheckIcon } from 'assets/icons/check-icon.svg';
import Button from 'components/Button/Button';

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
    min-height: 800px;
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

export const AccualForm = styled.form`
  width: 60%;
  /* height: 70%; */
  display: flex;
  flex-direction: column;
  color: white;
  @media screen and (max-width: 1600px) {
    width: 80%;
    margin-top: 20px;
    /* height: 60%; */
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
  cursor: pointer;
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
  margin: 25px 0 5px 0;
  width: 100%;
  color: ${({ theme }) => theme.colors.darkWhite};
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  /* border: 2px solid ${({ theme }) => theme.colors.darkWhite}; */
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkWhite};
  font-family: 'Montserrat', sans-serif;
  padding: 10px 0;
  background: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  transition: 0.5s ease;
  color: ${({ theme }) => theme.colors.darkWhite};
  outline: none;
  &.ERROR {
    transform: scale(0.99);
    background: rgba(240, 25, 25, 40%);
    padding: 10px;
    transition: 0.5s ease;
  }
  &.VALID {
    transform: scale(1.01);
    border: none;
    border-bottom: 2px solid #46f037;
    transition: 0.5s ease;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.darkWhite};
  font-size: ${({ theme }) => theme.fontSize.m};
  transition: 0.5s ease;
  outline: none;
  &.ERROR {
    transform: scale(0.99);
    background: rgba(240, 25, 25, 40%);
    transition: 0.5s ease;
    padding: 10px;
  }
`;

export const Checkbox = styled.input`
  min-width: 25px;
  min-height: 25px;
  margin-left: 10px;
  cursor: pointer;
`;

export const SendingInProgress = styled.div`
  opacity: 0;
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  transition: 0.5s ease;
  &.SENDING {
    transition: 0.5s ease;
    opacity: 1;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  /* border: 2px solid ${({ theme }) => theme.colors.darkWhite}; */
  border: 2px solid ${({ theme }) => theme.colors.darkWhite};
  font-family: 'Montserrat', sans-serif;
  padding: 10px;
  background: none;
  min-height: 200px;
  margin-bottom: 30px;
  font-size: ${({ theme }) => theme.fontSize.m};
  resize: none;
  transition: 0.5s ease;
  color: ${({ theme }) => theme.colors.darkWhite};
  &.ERROR {
    transform: scale(0.99);
    background: rgba(240, 25, 25, 40%);
    transition: 0.5s ease;
    padding: 10px;
  }
  &.VALID {
    transform: scale(1.01);
    border: none;
    border: 2px solid #46f037;
    transition: 0.5s ease;
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledProgressIcon = styled(ProgressIcon)`
  width: 20%;
  height: 20%;
  animation: ${rotate} 1.5s infinite;
`;

export const StyledCheckIcon = styled(CheckIcon)`
  width: 30%;
  height: 30%;
  /* animation: ${rotate} 1.5s infinite; */
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
