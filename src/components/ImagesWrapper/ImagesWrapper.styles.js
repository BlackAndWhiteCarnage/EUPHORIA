import styled, { keyframes } from 'styled-components';
import { ReactComponent as ScrollIcon } from 'assets/icons/scroll-icon-white.svg';
import { ReactComponent as ScrollIconDark } from 'assets/icons/scroll-icon.svg';

export const ImageWrapper = styled.div`
  position: relative;
  width: 0;
  min-height: 100vh;
  @media screen and (min-width: 1250px) {
    width: 50%;
    min-height: 0;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
`;

export const showDirection = keyframes`
  0% {
      transform: translate(-50%, -50%);
  }
  50% {
      transform: translate(-50%, -50%);
      top: 80%;
  }
  70% {
      transform: translate(-50%, -50%) scale(1.1);
      top: 85%
  }
  100% {
      transform: translate(-50%, -50%) scale(1);
  }
`;

export const Image = styled.img`
  position: fixed;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: 1;
  transition: 0.5s ease;
  @media screen and (max-width: 1250px) {
    &.show {
      transition: 0.5s ease-out;
      opacity: 1;
    }
    &.hide {
      opacity: 0;
      width: 0%;
      transition: 0.5s ease-in-out;
    }
  }
  @media screen and (min-width: 1250px) {
    position: absolute;
    height: 80%;
    width: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    max-width: 550px;
    transition: 0.5s ease;
    &.show {
      transition: 0.5s ease-out;
      opacity: 1;
    }
    &.hide {
      opacity: 0;
      left: 100%;
      transition: 0.5s ease-in-out;
    }
  }
`;

export const StyledScrollIcon = styled(ScrollIcon)`
  position: fixed;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -80%);
  width: 25px;
  height: 25px;
  z-index: 2;
  transform-origin: center;
  animation: ${showDirection} 4s ease-in-out infinite;
  transition: 0.5s ease;
  @media screen and (min-width: 860px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (min-width: 1250px) {
    display: none;
  }
`;

export const StyledScrollIconDark = styled(ScrollIconDark)`
  position: fixed;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -70%);
  width: 25px;
  height: 25px;
  z-index: 2;
  transform-origin: center;
  animation: ${showDirection} 4s 0.2s ease-in-out infinite;
  transition: 0.5s ease;
  @media screen and (min-width: 860px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (min-width: 1250px) {
    display: none;
  }
`;
