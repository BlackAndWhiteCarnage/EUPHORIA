import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

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
  &.active {
    transform: scale(1.5);
  }
`;

const AmazingCursor = () => {
  const ref = useRef(null);

  const mouseMoveHandler = (e) => {
    ref.current.style.top = e.clientY + 'px';
    ref.current.style.left = e.clientX + 'px';

    return;
  };

  const activeCursorHandler = (e) => {
    const item = e.target;
    if (item.id === 'active' || item.tagName === 'INPUT' || item.tagName === 'TEXTAREA' || item.tagName === 'LABEL' || item.tagName === 'BUTTON') {
      ref.current.classList.add('active');
    } else {
      ref.current.classList.remove('active');
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mouseover', activeCursorHandler);

    return;
  }, []);

  return <Cursor ref={ref}></Cursor>;
};

export default AmazingCursor;
