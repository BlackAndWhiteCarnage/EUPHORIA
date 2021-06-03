import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

const Cursor = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.5s ease;
  transition-property: transform;
  transform-origin: 130% 130%;
  backdrop-filter: invert(100%);
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.3s ease;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
  &.active {
    transform: scale(1.5);
  }
  &.pulse {
    &::before {
      content: '';
      position: absolute;
      width: 130px;
      height: 130px;
      top: 50%;
      left: 50%;
      background: rgba(0, 0, 0, 0.1);
      transform: translate(-50%, -50%);
      transition: 0.1s ease;
    }
  }
`;

const AmazingCursor = () => {
  const ref = useRef(null);

  const mouseMoveHandler = (e) => {
    ref.current.style.top = e.clientY + 'px';
    ref.current.style.left = e.clientX + 'px';

    return;
  };

  const cursorPulseHandler = () => {
    ref.current.classList.add('pulse');
    setTimeout(() => {
      ref.current.classList.remove('pulse');
    }, 300);
  };

  const activeCursorHandler = (e) => {
    const item = e.target;
    if (
      item.id === 'active' ||
      item.tagName === 'INPUT' ||
      item.tagName === 'TEXTAREA' ||
      item.tagName === 'LABEL' ||
      item.tagName === 'BUTTON' ||
      item.tagName === 'A'
    ) {
      ref.current.classList.add('active');
    } else {
      ref.current.classList.remove('active');
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mouseover', activeCursorHandler);
    window.addEventListener('click', cursorPulseHandler);

    return;
  }, []);

  return <Cursor ref={ref}></Cursor>;
};

export default AmazingCursor;
