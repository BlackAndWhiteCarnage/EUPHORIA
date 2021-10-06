import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.section)`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.darkWhite};
  position: relative;
  header {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: 40px;
    font-weight: bolder;
    letter-spacing: 2px;
    @media screen and (max-width: 1360px) {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
  line-height: 160%;
  div,
  article {
    @media screen and (max-width: 1360px) {
      position: static;
      width: 100%;
    }
  }
`;

export const WhoAmI = styled(motion.article)`
  position: absolute;
  left: 0;
  top: 0;
  width: 95%;
  height: 660px;
  background: ${({ theme }) => theme.colors.crimsonRed};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 540px) {
    height: 850px;
  }
  div {
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-25%, -50%);
    width: 80%;
    height: 70%;
    color: ${({ theme }) => theme.colors.white};
    @media screen and (max-width: 1360px) {
      position: static;
      width: 85%;
      transform: none;
      height: auto;
    }
    @media screen and (max-width: 860px) {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
    @media screen and (max-width: 330px) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

export const HowToBuy = styled(motion.article)`
  position: absolute;
  right: 0;
  top: 35%;
  width: 80%;
  height: 650px;
  background: ${({ theme }) => theme.colors.darkGrey};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 540px) {
    height: 850px;
  }
  div {
    position: absolute;
    top: 50%;
    right: 20%;
    width: 60%;
    height: 85%;
    transform: translate(20%, -50%);
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 1360px) {
      position: static;
      transform: none;
      width: 85%;
    }
  }
  li {
    list-style: none;
    display: flex;
    align-items: center;
    p {
      margin: 25px;
      @media screen and (max-width: 860px) {
        margin: 18px;
        font-size: ${({ theme }) => theme.fontSize.m};
      }
      @media screen and (max-width: 330px) {
        font-size: ${({ theme }) => theme.fontSize.s};
      }
    }
  }
`;

export const Contact = styled(motion.div)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40%;
  height: 650px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 540px) {
    height: 850px;
  }
  div {
    width: 80%;
    max-width: 800px;
    height: 80%;
    @media screen and (max-width: 1360px) {
      width: 85%;
      max-width: none;
    }
  }
`;

export const Step = styled.img``;