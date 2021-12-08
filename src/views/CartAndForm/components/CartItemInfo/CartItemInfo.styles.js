import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  min-width: 180px;
  height: 90%;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.darkWhite};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 1250px) {
    width: 80%;
    height: 100%;
    background: ${({ theme }) => theme.colors.darkGrey};
    margin: 0 10px;
  }
  @media screen and (max-width: 780px) {
    min-width: 50%;
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 0;
    padding: 0 30px;
  }
  @media screen and (max-width: 460px) {
    padding: 0 10px;
  }
`;

export const PickedExtras = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
  margin: 5px 0;
  strong {
    color: ${({ theme }) => theme.colors.main};
  }
  &.itsAlert {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PickedExtrasWrapper = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: calc(100% - 60px);
  background: ${({ theme }) => theme.colors.darkGrey};
  opacity: 0;
  transition: 0.5s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 780px) {
    width: 100%;
  }
  &.show {
    opacity: 1;
    width: calc(100% - 60px);
    transition: 0.5s ease;
    overflow-y: scroll;
    @media screen and (max-width: 780px) {
      width: 100%;
    }
  }
  &.showAlert {
    opacity: 1;
    transition: 0.5s ease;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: ${({ theme }) => theme.colors.darkWhite};
    color: ${({ theme }) => theme.colors.main};
    @media screen and (max-width: 780px) {
      width: 100%;
    }
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 5px;
    background: ${({ theme }) => theme.colors.darkWhite};
    color: ${({ theme }) => theme.colors.darkGrey};
    padding: 10px;
  }
`;

export const StyledAlertLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
