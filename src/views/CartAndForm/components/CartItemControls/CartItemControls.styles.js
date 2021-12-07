import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  min-width: 60px;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 780px) {
    position: absolute;
    bottom: -40px;
    left: 0;
    width: 100%;
    height: 40px;
    flex-direction: row;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
  }
`;

export const StyledButton = styled.button`
  position: relative;
  border: none;
  cursor: pointer;
  height: 33.3333%;
  width: 100%;
  transition: 0.1s ease;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  @media screen and (max-width: 780px) {
    width: 33.3333%;
    height: 100%;
    z-index: 0;
  }
  @media screen and (min-width: 1250px) {
    &:hover,
    &:focus-visible {
      transform: scale(1.1);
      transition: 0.15s ease;
      background: ${({ theme }) => theme.colors.darkGrey};
      z-index: 3;
      .defaultIcon {
        opacity: 0;
      }
      .hoverIcon {
        opacity: 1;
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  position: relative;
  height: 33.3333%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  transition: 0.1s ease;
  background: ${({ theme }) => theme.colors.white};
  @media screen and (max-width: 780px) {
    width: 33.3333%;
    height: 100%;
  }
  @media screen and (min-width: 1250px) {
    &:hover,
    &:focus-visible {
      transform: scale(1.1);
      transition: 0.15s ease;
      background: ${({ theme }) => theme.colors.darkGrey};
      z-index: 3;
      .defaultIcon {
        opacity: 0;
      }
      .hoverIcon {
        opacity: 1;
      }
    }
  }
`;

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25px;
  height: 25px;
  z-index: 2;
  transition: 0.25s ease;
  @media screen and (max-width: 780px) {
    z-index: 0;
  }
  &.hoverIcon {
    opacity: 0;
    transition: 0.25s ease;
  }
`;
