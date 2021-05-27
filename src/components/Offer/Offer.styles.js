import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  grid-area: ${({ props }) => props};
  margin: 12px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
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
`;

export const StyledImage = styled.img`
  position: absolute;
  left: 50%;
  bottom: 0;
  right: 0;
  height: 100%;
  z-index: 1;
  object-fit: cover;
  transform: translate(-50%, 0);
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
