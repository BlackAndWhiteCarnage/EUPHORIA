import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as DoneIcon } from 'assets/icons/done-icon.svg';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.section)`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-between;
  margin-bottom: 100px;
  @media screen and (max-width: 1600px) {
    width: 95%;
  }
`;

export const ProductWrapper = styled(motion.div)`
  position: relative;
  width: 400px;
  height: 500px;
  margin: 50px 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 1600px) {
    width: 30%;
  }
  @media screen and (max-width: 1210px) {
    width: 30%;
    height: 400px;
  }
  @media screen and (max-width: 830px) {
    width: 45%;
    height: 300px;
    margin: 15px 5px;
  }
  @media screen and (max-width: 420px) {
    width: 45%;
    height: 200px;
    margin: 15px 5px;
  }
`;

export const Product = styled(Link)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: 0.3s ease;
  &::before {
    position: absolute;
    bottom: -100%;
    width: 100%;
    height: 0;
    transition: 0.5s ease;
    content: '';
    z-index: -1;
  }
  &.added {
    &::after {
      position: absolute;
      content: '';
      transition: 0.5s ease;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.5);
      bottom: 0;
      opacity: 1;
      z-index: 20;
    }
  }
  @media screen and (min-width: 1200px) {
    &:hover {
      transform: scale(1.025);
      transition: 0.5s ease;
      &::before {
        content: '';
        transition: 0.5s ease;
        height: 100%;
        background: ${({ theme }) => theme.colors.main};
        bottom: 0;
      }
    }
  }
`;

export const ProductImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s ease;
  z-index: 5;
  @media screen and (min-width: 1200px) {
    &:hover {
      opacity: 0.1;
      transition: 0.5s ease;
    }
  }
`;

export const ProductName = styled.h4`
  z-index: 1;
  padding: 20px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkWhite};
  text-transform: uppercase;
  letter-spacing: 5px;
  @media screen and (max-width: 830px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const AddedIcon = styled(DoneIcon)`
  position: absolute;
  width: 40%;
  height: 40%;
  z-index: 25;
`;

export const SeasonOfferInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: center;
  letter-spacing: 5px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const NewestItem = styled.div`
  position: absolute;
  width: 120px;
  height: 30px;
  z-index: 25;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  white-space: nowrap;
  background: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.darkWhite};
  font-size: ${({ theme }) => theme.fontSize.m};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 830px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 10px;
    width: 100px;
  }
`;

export const SearchBarWrapper = styled.div`
  z-index: 1;
  width: 100%;
  height: 40px;
  display: flex;
  @media screen and (max-width: 620px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const SearchBar = styled.input`
  height: 40px;
  width: 220px;
  padding: 20px 15px;
  background: ${({ theme }) => theme.colors.darkWhite};
  border: 2px solid ${({ theme }) => theme.colors.main};
  border-top: none;
  transition: 0.25s ease;
  text-transform: uppercase;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  :focus-visible {
    background: ${({ theme }) => theme.colors.main};
    transition: 0.25s ease;
    color: ${({ theme }) => theme.colors.darkWhite};
  }
  @media screen and (max-width: 1250px) {
    border: 2px solid ${({ theme }) => theme.colors.main};
  }
  @media screen and (max-width: 620px) {
    width: 98%;
  }
`;

export const SearchFeedback = styled.p`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  opacity: 0;
  transition: 0.25s ease;
  &.show {
    opacity: 1;
    transition: 0.25s 0.5s ease;
  }
`;
