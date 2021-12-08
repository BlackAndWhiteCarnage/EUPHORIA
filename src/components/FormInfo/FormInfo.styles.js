import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;

export const InfoButton = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 55px;
  border: none;
  background: ${({ theme }) => theme.colors.white};
  transition: 0.15s ease;
  z-index: 20;
  cursor: pointer;
  pointer-events: all;
  @media screen and (min-width: 1250px) {
    &:hover,
    &:focus-visible {
      transition: 0.15s ease;
      background: ${({ theme }) => theme.colors.main};
      img {
        &:nth-child(1) {
          opacity: 0;
        }
        &:nth-child(2) {
          opacity: 1;
        }
      }
    }
  }
  @media screen and (min-width: 1250px) {
    width: 55px;
    top: 0;
    right: 0;
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &:nth-child(1) {
      opacity: 1;
    }
    &:nth-child(2) {
      opacity: 0;
    }
  }
`;

export const Info = styled.div`
  position: absolute;
  top: -100%;
  background: rgba(0, 0, 0, 0.9);
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  width: 100%;
  height: 100%;
  transition: 0.5s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 15;
  pointer-events: all;
  p {
    width: 60%;
  }
  @media screen and (max-width: 680px) {
    height: calc(100% - 55px);
    font-size: ${({ theme }) => theme.fontSize.s};
    p {
      width: 90%;
    }
  }
  &.toggle {
    transition: 0.5s ease;
    top: 0%;
  }
`;
