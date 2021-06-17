import styled from 'styled-components';

export const DiscountsInfoWrapper = styled.div`
  position: absolute;
  right: 0;
  background: ${({ theme }) => theme.colors.crimsonRed};
  width: 40px;
  height: 110px;
  z-index: 10;
  writing-mode: vertical-rl;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.darkWhite};
  transition: 0.5s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    /* width: 50px;
    transition: 0.3 ease; */
  }
  @media screen and (max-width: 1250px) {
    top: 0;
    z-index: 200;
  }
  &.showDiscounts {
    writing-mode: horizontal-tb;
    width: 100%;
    height: 100%;
    transition: 0.5s ease;
    span {
      display: none;
    }
  }
`;

export const DiscountsWrapper = styled.div`
  position: absolute;
  width: 200%;
  height: 200%;
  background: ${({ theme }) => theme.colors.darkWhite};
  opacity: 0;
  transition: 1s ease;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 1250px) {
    flex-direction: column;
  }
  &:hover {
    transform: scale(1.05);
    transition: 0.1 ease;
  }
  &.showDiscounts {
    height: 60%;
    width: 100%;
    opacity: 1;
    transition: 1s ease-in-out;
    p {
      display: block;
      color: ${({ theme }) => theme.colors.darkGrey};
      font-size: ${({ theme }) => theme.fontSize.l};
      @media screen and (max-width: 1250px) {
        font-size: ${({ theme }) => theme.fontSize.l};
      }
    }
  }
`;
