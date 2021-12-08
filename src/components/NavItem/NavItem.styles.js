import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled(NavLink).attrs({ activeClassName: 'active-link' })`
  &.desktop {
    position: relative;
    cursor: pointer;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    color: ${({ theme }) => theme.colors.darkGrey};
    text-decoration: none;
    transition: 0.5s ease;
    padding: 10px 0;
    &.active-link {
      background: ${({ theme }) => theme.colors.darkGrey};
      transition: 0.5s ease;
      color: ${({ theme }) => theme.colors.darkWhite};
      padding: 10px;
    }
    &:hover,
    &:focus-visible {
      letter-spacing: 2.5px;
    }
  }
  &.modal {
    font-size: ${({ theme }) => theme.fontSize.l};
    text-align: center;
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.darkWhite};
    transition: 0.5s ease;
    text-decoration: none;
    padding: 10px;
    &.active-link {
      background: ${({ theme }) => theme.colors.darkGrey};
      transition: 1s 1.8s ease;
      color: ${({ theme }) => theme.colors.darkWhite};
    }
    @media screen and (max-width: 680px) {
      text-align: right;
      font-size: ${({ theme }) => theme.fontSize.m};
    }
    @media screen and (min-width: 320px) and (max-width: 820px) and (orientation: landscape) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;
