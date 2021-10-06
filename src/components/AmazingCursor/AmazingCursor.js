import React, { useState, useRef, useEffect } from 'react';
// STYLES
import { Wrapper } from './AmazingCursor.styles';

const AmazingCursor = () => {
  const ref = useRef(null);

  const [isTouchScreen, setIsTouchScreen] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchScreen(true);
    } else {
      setIsTouchScreen(false);
    }
  }, []);

  const mouseMoveHandler = (e) => {
    ref.current.style.top = e.clientY + 'px';
    ref.current.style.left = e.clientX + 'px';

    const item = e.target;

    if (
      item.id === 'active' ||
      item.tagName === 'INPUT' ||
      item.tagName === 'TEXTAREA' ||
      item.tagName === 'LABEL' ||
      item.tagName === 'BUTTON' ||
      item.tagName === 'svg' ||
      item.tagName === 'path' ||
      item.tagName === 'A'
    ) {
      ref.current.classList.add('active');
    } else {
      ref.current.classList.remove('active');
    }

    return;
  };

  const cursorPulseHandler = () => {
    ref.current.classList.add('pulse');

    setTimeout(() => {
      ref.current.classList.remove('pulse');
    }, 150);
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('click', cursorPulseHandler);

    return;
  }, []);

  return <>{!isTouchScreen && <Wrapper ref={ref}></Wrapper>}</>;
};

export default AmazingCursor;
