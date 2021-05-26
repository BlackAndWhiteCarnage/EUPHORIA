import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  grid-area: ${({ props }) => props};
  margin: 12px;
  position: relative;
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
    width: 100%;
    min-height: 350px;
  }
`;

const OfferTitle = styled.h2`
  position: absolute;
  bottom: 0;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 20px;
  background: ${({ theme }) => theme.colors.crimsonRed};
  text-align: center;
`;

const Offer = ({ gridArea, content }) => {
  return (
    <Wrapper props={gridArea}>
      <OfferTitle>{content}</OfferTitle>
    </Wrapper>
  );
};

export default Offer;
