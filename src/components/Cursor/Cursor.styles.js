import styled from 'styled-components';

export const StyledCursor = styled.div`
  width: 20px;
  height: 20px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999999;
  border-radius: 50%;
  pointer-events: none;
  backdrop-filter: invert(100%);
  &.notSupported {
    border: 2px solid ${({ theme }) => theme.colors.darkGrey};
    background: ${({ theme }) => theme.colors.white};
    &.secondary {
      border: 2px solid ${({ theme }) => theme.colors.darkGrey};
    }
  }
  &.secondary {
    width: 60px;
    height: 60px;
    position: fixed;
    backdrop-filter: invert(100%);
    top: -20px;
    left: -20px;
    z-index: 999999;
    border-radius: 50%;
    pointer-events: none;
    background: none;
  }
`;
