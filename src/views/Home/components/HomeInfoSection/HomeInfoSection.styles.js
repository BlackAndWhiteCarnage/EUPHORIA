import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.section)`
  width: 100%;
  max-width: 1400px;
  margin: auto;
  height: 100vh;
  position: relative;
  @media screen and (max-width: 1600px) {
    width: 95%;
  }
  header {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: 40px;
    font-weight: bolder;
    letter-spacing: 2px;
    @media screen and (max-width: 1600px) {
      margin-bottom: 20px;
      font-size: ${({ theme }) => theme.fontSize.l};
    }
    @media screen and (max-width: 1250px) {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
  line-height: 160%;
  div,
  article {
    @media screen and (max-width: 1250px) {
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
  background: ${({ theme }) => theme.colors.main};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 620px) {
    height: auto;
    padding: 100px 0;
  }
  div {
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-25%, -50%);
    width: 80%;
    height: 70%;
    color: ${({ theme }) => theme.colors.white};
    @media screen and (max-width: 1600px) {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
    @media screen and (max-width: 1250px) {
      position: static;
      width: 85%;
      transform: none;
      height: auto;
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
  @media screen and (max-width: 1600px) {
    top: 50%;
  }
  @media screen and (max-width: 620px) {
    height: auto;
    padding: 100px 0;
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
    @media screen and (max-width: 1600px) {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
    @media screen and (max-width: 1250px) {
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
      @media screen and (max-width: 620px) {
        margin: 18px;
        font-size: ${({ theme }) => theme.fontSize.m};
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
  @media screen and (max-width: 1600px) {
    bottom: -30%;
  }
  @media screen and (max-width: 620px) {
    height: auto;
    padding: 100px 0;
  }
  div {
    width: 80%;
    max-width: 800px;
    height: 80%;
    @media screen and (max-width: 1600px) {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
    @media screen and (max-width: 1250px) {
      width: 85%;
      max-width: none;
    }
  }
`;

export const Step = styled.img``;
