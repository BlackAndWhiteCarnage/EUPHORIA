import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-between;
  margin-bottom: 100px;
  @media screen and (max-width: 1200px) {
    width: 95%;
  }
`;

export const ProductWrapper = styled(Link)`
  position: relative;
  width: 400px;
  height: 500px;
  margin: 50px 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  &::before {
    position: absolute;
    bottom: -100%;
    width: 100%;
    height: 0;
    transition: 0.5s ease;
    content: '';
    z-index: -1;
  }
  &:hover {
    &::before {
      content: '';
      transition: 0.5s ease;
      height: 100%;
      background: ${({ theme }) => theme.colors.crimsonRed};
      bottom: 0;
    }
  }
  @media screen and (min-width: 1925px) {
    margin: 50px 0;
    width: 500px;
    height: 600px;
  }
  @media screen and (max-width: 1655px) {
    width: 300px;
    height: 400px;
    margin: 40px 10px;
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
  &:hover {
    opacity: 0;
    transition: 0.5s ease;
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