import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import Navigation from 'components/Navigation/Navigation';
import { ReactComponent as CartIcon } from 'assets/icons/cart-icon.svg';
import { ReactComponent as DarkmodeIcon } from 'assets/icons/darkmode-icon.svg';
import Offer from 'components/Offer/Offer';

const Wrapper = styled.section`
  width: 1700px;
  height: 780px;
  /* border: 1px solid blueviolet; */
  position: relative;
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100%;
  }
`;

const CartAndLogoWrapper = styled.div`
  width: 100%;
  height: 90px;
  /* border: 1px solid blueviolet; */
`;

const CartWrapper = styled.div`
  width: 75px;
  height: 30px;
  /* border: 1px solid blueviolet; */
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

const StyledLogo = styled(Logo)`
  width: 270px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  /* border: 1px solid blueviolet; */
`;

const OffersWrapper = styled.div`
  width: 100%;
  height: calc(100% - 30px - 90px - 20px - 15px);
  display: grid;
  grid-template-areas:
    'SKARPETKI MAJTKI MAJTKI MAJTKI INNE INNE SESJE SESJE'
    'SKARPETKI MAJTKI MAJTKI MAJTKI INNE INNE SESJE SESJE'
    'SKARPETKI PREMIUM PREMIUM RAJSTOPY RAJSTOPY RAJSTOPY SESJE SESJE'
    'SKARPETKI PREMIUM PREMIUM RAJSTOPY RAJSTOPY RAJSTOPY SESJE SESJE';
  @media screen and (max-width: 1700px) {
    grid-template-areas: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const OfferSection = () => {
  return (
    <Wrapper>
      <CartAndLogoWrapper>
        <StyledLogo />
        <CartWrapper>
          <CartIcon />
          <DarkmodeIcon />
        </CartWrapper>
      </CartAndLogoWrapper>
      <Navigation />
      <OffersWrapper>
        <Offer content='SKARPETKI' gridArea='SKARPETKI' />
        <Offer content='MAJTKI' gridArea='MAJTKI' />
        <Offer content='PREMIUM' gridArea='PREMIUM' />
        <Offer content='RAJSTOPY I POŃCZOCHY' gridArea='RAJSTOPY' />
        <Offer content='INNE' gridArea='INNE' />
        <Offer content='SESJE, FOTKI I NAGRANIA' gridArea='SESJE' />
      </OffersWrapper>
    </Wrapper>
  );
};

export default OfferSection;
