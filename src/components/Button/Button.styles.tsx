import styled from 'styled-components';

export const Wrapper = styled.button`
  cursor: pointer;
  position: relative;
  border: none;
  min-width: 250px;
  min-height: 35px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.darkWhite};
  font-weight: bolder;
  letter-spacing: 2px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  z-index: 1;
  overflow: hidden;
  transition: 0.5s ease;
  &::before {
    content: '';
    transition: 0.5s ease;
    position: absolute;
    width: 0%;
    height: 0%;
    background: ${({ theme }) => theme.colors.darkGrey};
    top: 100%;
    left: -100%;
    z-index: -1;
    border-radius: 50%;
  }
  @media screen and (min-width: 1200px) {
    &:hover,
    &:focus-visible {
      transition: 0.5s ease;
      transform: scale(1.015);
      &::before {
        width: calc(100% + 200px);
        height: calc(100% + 200px);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: 0.5s ease;
      }
    }
  }
  &::after {
    top: -120%;
    left: 0%;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.darkGrey};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s ease;
  }
  &.added {
    pointer-events: none;
    transition: 0.5s ease;
    &::after {
      transition: 0.5s ease;
      top: 0%;
      left: 0%;
      position: absolute;
      content: 'DODANO';
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.colors.darkGrey};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &.ERROR {
    &::after {
      transition: 0.3s ease;
      top: 0%;
      left: 0%;
      position: absolute;
      content: 'COŚ ŹLE WYPEŁNIŁEŚ';
      width: 100%;
      height: 100%;
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &.SENDING {
    pointer-events: none;
    &::after {
      pointer-events: none;
      transition: 0.3s ease;
      top: 0%;
      left: 0%;
      position: absolute;
      content: 'WYSYŁAM...';
      width: 100%;
      height: 100%;
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &.OK {
    pointer-events: none;
    &::after {
      pointer-events: none;
      transition: 0.3s ease;
      top: 0%;
      left: 0%;
      position: absolute;
      content: 'WYSŁANO';
      width: 100%;
      height: 100%;
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
