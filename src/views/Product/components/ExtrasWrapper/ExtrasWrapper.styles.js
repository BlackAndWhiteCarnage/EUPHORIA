import styled from 'styled-components';

export const Wrapper = styled.div`
  top: 0;
  width: 0;
  left: 0;
  transition: 0.3s ease;
  position: absolute;
  background: ${({ theme }) => theme.colors.darkGrey};
  pointer-events: none;
  opacity: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 40px;
  overflow: hidden;
  z-index: 10;
  height: 100%;
  overflow-y: scroll;
  z-index: 990;
  @media screen and (max-width: 1250px) {
    height: 100%;
    border-radius: 30px 0 0 0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    width: 100%;
  }
  @media screen and (max-width: 680px) {
    height: calc(100% - 35px);
    padding: 10px;
  }
  &.toggle {
    pointer-events: all;
    width: 100%;
    transition: 0.5s ease;
    opacity: 1;
  }
`;

export const ExtrasInfo = styled.div`
  width: 100%;
  height: 40px;
  color: ${({ theme }) => theme.colors.darkWhite};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 10px;
  @media screen and (max-width: 1250px) {
    letter-spacing: 0px;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const ExtrasInfoWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  font-weight: bolder;
  letter-spacing: 5px;
  padding: 10px;
  @media screen and (max-width: 1250px) {
    letter-spacing: 0px;
  }
`;

export const ExtrasOption = styled.button`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: bolder;
  text-align: left;
  background: ${({ theme }) => theme.colors.darkWhite};
  text-transform: uppercase;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  padding: 20px;
  cursor: pointer;
  width: 100%;
  transition: 0.5s ease;
  @media screen and (max-width: 680px) {
    padding: 15px;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  &.added {
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.3);
    color: ${({ theme }) => theme.colors.darkWhite};
  }
  &.back {
    text-align: center;
    background: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.darkWhite};
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
