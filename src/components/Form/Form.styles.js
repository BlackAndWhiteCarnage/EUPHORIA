import styled from 'styled-components';
import Button from 'components/Button/Button';
import { motion } from 'framer-motion';

export const FormWrapper = styled.div`
  position: relative;
  width: 70%;
  background: ${({ theme }) => theme.colors.darkGrey};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1250px) {
    width: 100%;
    min-height: 800px;
    flex-direction: column;
    justify-content: flex-start;
  }
  &.homePage {
    width: 100%;
    height: 90%;
    background: none;
    @media screen and (max-width: 1250px) {
      min-height: 80%;
    }
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
  background: ${({ theme }) => theme.colors.main};
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

export const AccualForm = styled(motion.form)`
  width: 60%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1600px) {
    width: 80%;
  }
  @media screen and (max-width: 1250px) {
    width: 90%;
    margin-top: 50px;
  }
  label,
  input,
  textarea {
    color: ${({ theme }) => theme.colors.darkWhite};
    font-weight: bolder;
    background: none;
    position: relative;
    &:focus {
      background: ${({ theme }) => theme.colors.darkWhite};
      color: ${({ theme }) => theme.colors.darkGrey};
      padding: 10px;
    }
  }
  &.homePage {
    width: 100%;
    height: 100%;
    margin: 0;
    input,
    textarea,
    label {
      color: ${({ theme }) => theme.colors.darkGrey};
      font-weight: bolder;
      &:focus {
        background: ${({ theme }) => theme.colors.darkGrey};
        color: ${({ theme }) => theme.colors.darkWhite};
        padding: 10px;
      }
    }
    input {
      border-bottom: 2px solid ${({ theme }) => theme.colors.darkGrey};
      &.VALID {
        transform: scale(1.01);
        border: none;
        border-bottom: 2px solid #46f037;
        transition: 0.5s ease;
      }
    }
    textarea {
      border: 2px solid ${({ theme }) => theme.colors.darkGrey};
      &.VALID {
        transform: scale(1.01);
        border: none;
        border: 2px solid #46f037;
        transition: 0.5s ease;
      }
    }
  }
`;

export const Info = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.main};
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
  overflow: hidden;
  &:hover {
    letter-spacing: 2.5px;
  }
  &.show {
    transition: 0.5s ease;
    height: calc(100% - 35px);
    padding: 0 40px;
    font-size: ${({ theme }) => theme.fontSize.l};
    background: ${({ theme }) => theme.colors.darkGrey};
    @media screen and (max-width: 460px) {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
    &:hover {
      letter-spacing: normal;
    }
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
  cursor: pointer;
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkWhite};
  padding: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  transition: 0.5s ease;
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
  &.homePage {
    left: 0;
    top: 0;
  }
  &.SENDING {
    transition: 0.5s ease;
    opacity: 1;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.darkWhite};
  padding: 10px;
  min-height: 130px;
  margin-bottom: 30px;
  font-size: ${({ theme }) => theme.fontSize.m};
  resize: none;
  transition: 0.5s ease;
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

export const StyledButton = styled(Button)`
  position: absolute;
  bottom: -50px;
  right: 0;
  padding: 10px;
  min-width: 200px;
  z-index: 15;
  @media screen and (min-width: 1250px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 0;
    width: auto;
    white-space: nowrap;
  }
  @media screen and (max-width: 1250px) {
    position: relative;
    width: 100%;
    min-height: 35px;
  }
`;
