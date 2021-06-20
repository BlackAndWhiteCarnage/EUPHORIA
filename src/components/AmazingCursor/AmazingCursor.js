import React, { useRef, useEffect } from 'react';
// STYLES
import { Cursor } from './AmazingCursor.styles';

const AmazingCursor = () => {
  const ref = useRef(null);

  const mouseMoveHandler = (e) => {
    ref.current.style.top = e.clientY + 'px';
    ref.current.style.left = e.clientX + 'px';

    return;
  };

  const cursorPulseHandler = (e) => {
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
      item.tagName === 'svg' ||
      item.tagName === 'path' ||
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
