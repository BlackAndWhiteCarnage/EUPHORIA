import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  border-radius: 50%;
  transform: translate(-30%, -30%);
  pointer-events: none;
  transition: all 0.5s ease;
  transition-property: transform;
  transform-origin: 130% 130%;
  backdrop-filter: invert(100%);
  &::before {
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 1s ease;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.25);
  }
  &.active {
    transform: scale(1.3);
  }
  &.pulse {
    &::before {
      content: '';
      width: 150px;
      height: 150px;
      transition: 0.5s ease;
    }
  }
`;
