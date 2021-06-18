import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.section)`
  position: relative;
  width: 80%;
  max-width: 1600px;
  height: 58vh;
  display: flex;
  flex-wrap: nowrap;
  margin: auto;
  justify-content: space-between;
  margin-top: 20px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 1200px) {
    margin-top: 0;
    flex-wrap: wrap;
    width: 100%;
    height: 70vh;
  }
`;

export const CostsInfoWrapper = styled.div`
  position: absolute;
  width: auto;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  bottom: -80px;
  font-weight: bolder;
  span {
    color: ${({ theme }) => theme.colors.crimsonRed};
  }
  @media screen and (max-width: 1200px) {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 0;
    width: 100%;
    background: ${({ theme }) => theme.colors.darkWhite};
    text-align: right;
    padding: 10px;
  }
`;

export const EmptyCartInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255, 90%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: center;
  @media screen and (max-width: 1250px) {
    position: fixed;
  }
`;
