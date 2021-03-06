import styled from 'styled-components';
import Button from 'components/Button/Button';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
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
    height: 650px;
    border-radius: 0;
  }
`;

export const InfoWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  @media screen and (min-width: 860px) {
    margin: 40px 0;
    margin: 0;
  }
  @media screen and (min-width: 1250px) {
    width: 50%;
    justify-content: center;
  }
`;

export const Info = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ProductName = styled(motion.h3)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-transform: uppercase;
  letter-spacing: 5px;
  margin: 40px 0;
  width: 70%;
  @media screen and (min-width: 860px) {
    margin: 60px 0;
  }
  @media screen and (min-width: 1250px) {
    width: 80%;
    margin: 20px auto;
  }
`;

export const ProductDescription = styled(motion.div)`
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

export const PriceAndShippingWrapper = styled(motion.div)`
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
    color: ${({ theme }) => theme.colors.main};
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
