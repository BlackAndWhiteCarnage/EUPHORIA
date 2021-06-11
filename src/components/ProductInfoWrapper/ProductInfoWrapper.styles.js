import styled from 'styled-components';
import Button from 'components/Button/Button';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.darkWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px 30px 0 0;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  @media screen and (min-width: 1250px) {
    min-width: 1000px;
    width: 80%;
    max-width: 1300px;
    height: 650px;
    border-radius: 0;
  }
`;

export const Discounts = styled.div`
  position: absolute;
  right: 0;
  background: ${({ theme }) => theme.colors.crimsonRed};
  width: 40px;
  height: 150px;
  z-index: 10;
  writing-mode: vertical-rl;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.darkWhite};
  transition: 0.5s ease-in-out;
  overflow: hidden;
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

export const InfoWrapper = styled.div`
  position: relative;
  width: 95%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  margin-bottom: 100px;
  @media screen and (min-width: 860px) {
    margin: 40px 0;
    margin: 0;
  }
  @media screen and (min-width: 1250px) {
    min-height: 0;
    width: 50%;
    justify-content: center;
  }
`;

export const ProductName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-transform: uppercase;
  letter-spacing: 5px;
  margin: 40px 0;
  @media screen and (min-width: 860px) {
    margin: 60px 0;
  }
  @media screen and (min-width: 1250px) {
    width: 80%;
    margin: 20px auto;
  }
`;

export const ProductDescription = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: uppercase;
  margin: 40px 0;
  @media screen and (min-width: 860px) {
    margin: 60px 0;
  }
  @media screen and (min-width: 1250px) {
    width: 80%;
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 40px auto;
  }
`;

export const PriceAndShippingWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: uppercase;
  margin: 60px 0;
  @media screen and (min-width: 860px) {
    margin: 80px 0;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media screen and (min-width: 1250px) {
    width: 80%;
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 20px auto;
  }
`;

export const ProductPrice = styled.div`
  text-transform: uppercase;
  font-weight: bolder;
  margin-bottom: 10px;
  span {
    color: ${({ theme }) => theme.colors.crimsonRed};
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  bottom: 0;
  @media screen and (min-width: 860px) {
    margin: 40px 0;
  }
  @media screen and (min-width: 1250px) {
    margin: 0;
    min-width: 1000px;
    width: 80%;
    flex-direction: row;
    margin-top: 20px;
    max-width: 1300px;
  }
`;

export const StyledButton = styled(Button)`
  padding: 10px;
  margin: 15px 0;
  z-index: 15;
  @media screen and (max-width: 1250px) {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
