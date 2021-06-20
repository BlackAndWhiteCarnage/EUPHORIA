import React from 'react';
import styled, { keyframes } from 'styled-components';
import Arrow from 'assets/icons/scroll-arrow-icon.svg';

const showDirection = keyframes`
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1) translate(0, 50%);
  }
  100% {
    transform: scale(0.8);
  }
`;

const ScrollInfoWrapper = styled.div`
  position: fixed;
  width: auto;
  height: auto;
  font-size: 86px;
  writing-mode: vertical-rl;
  bottom: 100px;
  letter-spacing: 40px;
  background: ${({ theme }) => theme.colors.darkWhite};
  display: flex;
  align-items: center;
  @media screen and (max-width: 1250px) {
    display: none;
  }
`;
const ArrowImage = styled.img`
  width: 80px;
  height: 100px;
  animation: ${showDirection} 5s infinite;
`;

const ScrollInfo = () => {
  return (
    <>
      <ScrollInfoWrapper>
        SCROLL
        <ArrowImage src={Arrow} />
      </ScrollInfoWrapper>
    </>
  );
};

export default ScrollInfo;
