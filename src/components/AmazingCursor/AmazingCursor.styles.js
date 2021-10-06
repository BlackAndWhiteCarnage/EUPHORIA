import styled from 'styled-components';

export const Wrapper = styled.div`
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
  }
  &.active {
    transform: scale(1.5);
  }
  &.pulse {
    &::before {
      content: '';
      position: absolute;
      width: 150px;
      height: 150px;
      top: 50%;
      left: 50%;
      background: rgba(0, 0, 0, 0.25);
      transform: translate(-50%, -50%);
      transition: 0.1s ease;
    }
  }
`;
