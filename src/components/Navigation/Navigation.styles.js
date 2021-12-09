import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  min-height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-bottom: 2px solid ${({ theme }) => theme.colors.main};
  margin: auto;
  z-index: 999999;
  @media screen and (max-width: 1600px) {
    width: 95%;
  }
  @media screen and (max-width: 1250px) {
    width: 0;
    z-index: 99;
    min-height: 100px;
    border-bottom: none;
  }
  &.stickyNavbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: unset;
    background: ${({ theme }) => theme.colors.darkWhite};
    padding: 5px 80px;
    height: 150px;
    min-height: unset;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    @media screen and (max-width: 1600px) {
      padding: 5px 20px;
    }
  }
`;

export const FakeWrapper = styled.div`
  position: absolute;
  width: 80%;
  min-height: 25vh;
  margin: auto;
  @media screen and (max-width: 1250px) {
    display: none;
  }
  &.changePosition {
    position: static;
  }
`;

export const NavItems = styled.div`
  min-height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bolder;
  transition: 1s ease;
  @media screen and (max-width: 1250px) {
    &:last-child {
      display: none;
    }
  }
`;
