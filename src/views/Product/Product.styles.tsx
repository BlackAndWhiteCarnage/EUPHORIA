import styled from 'styled-components';
import Button from 'components/Button/Button';
import { motion } from 'framer-motion';

export const ProductWrapper = styled(motion.section)`
  width: 100%;
  max-width: 1400px;
  height: 55vh;
  max-height: auto;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1600px) {
    width: 95%;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: 1250px) {
    position: relative;
    height: auto;
    margin: 20px auto auto auto;
  }
  @media screen and (max-width: 1250px) {
    width: 100%;
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
    width: 100%;
    flex-direction: row;
    margin-top: 20px;
  }
`;

export const StyledButton = styled(Button)`
  padding: 10px;
  margin: 15px 0;
  z-index: 15;
  &.active {
    background: ${({ theme }) => theme.colors.active};
  }
  @media screen and (min-width: 1250px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 0;
    width: auto;
    white-space: nowrap;
  }
`;
