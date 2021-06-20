import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const ImageWrapper = styled(motion.div)`
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
      top: 0;
  }
  30% {
      top: 50%;
  }
  100% {
      top: 0;
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

export const ScrollInfoWrapper = styled.div`
  position: fixed;
  top: 80vh;
  left: 50%;
  transform: translate(-50%, 0);
  width: 25px;
  height: 55px;
  z-index: 2;
  transform-origin: center;
  border-radius: 25px;
  border: 2px solid ${({ theme }) => theme.colors.darkWhite};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transition: 0.5s ease;
  @media screen and (min-width: 1250px) {
    display: none;
  }
`;

export const Dot = styled.div`
  position: absolute;
  min-width: 13px;
  min-height: 13px;
  margin: 5px;
  background: ${({ theme }) => theme.colors.darkWhite};
  animation: ${showDirection} 1.5s 0.2s ease-in-out infinite;
  border-radius: 50%;
  transition: 0.5s ease;
`;
