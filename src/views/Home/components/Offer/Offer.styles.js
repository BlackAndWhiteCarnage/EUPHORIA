import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  margin: 12px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  /* PROPS FROM OFFER SECTION TO DEFINE GRID BY OFFER NAME*/
  grid-area: ${({ props }) => props};
  background: ${({ theme }) => theme.colors.white};
  position: relative;
  overflow: hidden;
  &:nth-child(1) {
    margin-left: 0;
  }
  &:nth-child(6) {
    margin-right: 0;
  }
  @media screen and (max-width: 1600px) {
    width: calc(33% - 22px);
    height: 300px;
    margin: 0;
  }
  @media screen and (max-width: 1250px) {
    width: calc(50% - 5px);
    max-height: 280px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;

export const OfferWrapper = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: 0.8s ease;
  &::before {
    position: absolute;
    content: '';
    background: ${({ theme }) => theme.colors.darkGrey};
    z-index: 1;
    width: 0;
    height: 0;
    transition: 1s ease;
    height: 100%;
  }
  &::after {
    position: absolute;
    content: '';
    background: ${({ theme }) => theme.colors.main};
    z-index: 1;
    transition: 1s ease;
    height: 100%;
    width: 100%;
    right: -100%;
  }
  @media screen and (min-width: 1250px) {
    &:hover,
    &:focus-visible {
      transition: 0.8s ease;
      &::before {
        transition: 0.5s ease;
        width: 100%;
      }
      &::after {
        transition: 1.5s ease;
        right: 100%;
      }
    }
  }
`;

export const OfferTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 20px;
  background: ${({ theme }) => theme.colors.main};
  text-align: center;
  z-index: 2;
  transition: 0.3s ease;
  &.toggleTitle {
    white-space: pre-wrap;
    transition: 0.3s 0.5s ease;
    font-size: ${({ theme }) => theme.fontSize.l};
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.main};
    text-align: center;
    padding: 10px;
    height: 100%;
  }
`;

export const OfferImage = styled.img`
  position: absolute;
  left: 50%;
  bottom: 0;
  right: 0;
  height: 100%;
  z-index: 1;
  object-fit: cover;
  transform: translate(-50%, 0);
  /* CLASS NAME FOR TIGHTS CAUSE IMAGE WASNT PROPERLY SCALING  */
  &.tights {
    width: 100%;
    height: auto;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
  }
`;
