import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const OfferWrapper = styled(Link)`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  /* PROPS FROM OFFER SECTION TO DEFINE GRID BY OFFER NAME*/
  grid-area: ${({ props }) => props};
  margin: 12px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.5s ease;
  &::before {
    position: absolute;
    content: '';
    background: ${({ theme }) => theme.colors.darkGrey};
    z-index: 1;
    width: 0;
    height: 0;
    transition: 0.3s ease;
    height: 100%;
  }
  &::after {
    position: absolute;
    content: '';
    background: ${({ theme }) => theme.colors.crimsonRed};
    z-index: 1;
    transition: 0.3s ease;
    height: 100%;
    width: 100%;
    right: -100%;
  }
  &:hover {
    transform: scale(0.95);
    transition: 0.5s ease;
    &::before {
      transition: 0.5s ease;
      width: 100%;
    }
    &::after {
      transition: 1.5s ease;
      right: 100%;
    }
  }
  &:nth-child(1) {
    margin-left: 0;
    @media screen and (max-width: 1700px) {
      margin: 12px;
    }
  }
  &:nth-child(6) {
    margin-right: 0;
    @media screen and (max-width: 1700px) {
      margin: 12px;
    }
  }
  @media screen and (max-width: 1700px) {
    width: calc(33% - 22px);
    height: 300px;
  }
  @media screen and (max-width: 1200px) {
    width: calc(50% - 40px);
    max-height: 280px;
  }
  @media screen and (max-width: 620px) {
    width: 100%;
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
  background: ${({ theme }) => theme.colors.crimsonRed};
  text-align: center;
  z-index: 2;
  transition: 0.3s ease;
  &.toggleTitle {
    letter-spacing: 5px;
    white-space: pre-wrap;
    transition: 0.3s 0.5s ease;
    font-size: ${({ theme }) => theme.fontSize.l};
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.crimsonRed};
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
    @media screen and (max-width: 1200px) {
      width: auto;
      left: 50%;
      transform: translate(-50%, 0) rotate(-90deg);
    }
    @media screen and (min-width: 1920px) {
      width: 90%;
    }
    @media screen and (min-width: 2480px) {
      width: 70%;
    }
  }
`;
