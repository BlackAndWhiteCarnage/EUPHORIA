import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  opacity: 0;
  pointer-events: none;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -60%);
  height: 50%;
  width: 80%;
  transition: 0.5s;
  &.show {
    opacity: 1;
    transition: 0.1s;
    background: ${({ theme }) => theme.colors.crimsonRed};
    z-index: 999999999;
  }
`;

const PageTransitionWrapper = ({ animate }) => {
  return <Wrapper className={'show'}></Wrapper>;
};

export default PageTransitionWrapper;
