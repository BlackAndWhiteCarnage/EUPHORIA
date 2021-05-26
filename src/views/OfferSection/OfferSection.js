import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ReactComponent as CartIcon } from 'assets/icons/cart-icon.svg';
import { ReactComponent as DarkmodeIcon } from 'assets/icons/darkmode-icon.svg';
import Navigation from 'components/Navigation/Navigation';
import Offer from 'components/Offer/Offer';
import SocksImage from 'assets/images/socks.png';
import PantiesImage from 'assets/images/panties.png';
import PremiumImage from 'assets/images/premium.png';
import TightsImage from 'assets/images/tights.png';
import SetsImage from 'assets/images/sets.png';
import SessionsImage from 'assets/images/sessions.png';

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
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
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
    'SKARPETKI SKARPETKI MAJTKI MAJTKI MAJTKI INNE INNE SESJE SESJE'
    'SKARPETKI SKARPETKI MAJTKI MAJTKI MAJTKI INNE INNE SESJE SESJE'
    'SKARPETKI SKARPETKI PREMIUM PREMIUM RAJSTOPY RAJSTOPY RAJSTOPY SESJE SESJE'
    'SKARPETKI SKARPETKI PREMIUM PREMIUM RAJSTOPY RAJSTOPY RAJSTOPY SESJE SESJE';
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
        <Offer image={SocksImage} content='SKARPETKI' gridArea='SKARPETKI' />
        <Offer image={PantiesImage} content='MAJTKI' gridArea='MAJTKI' />
        <Offer image={PremiumImage} content='PREMIUM' gridArea='PREMIUM' />
        <Offer image={TightsImage} content='RAJSTOPY I POŃCZOCHY' gridArea='RAJSTOPY' />
        <Offer image={SetsImage} content='INNE' gridArea='INNE' />
        <Offer image={SessionsImage} content='SESJE, FOTKI I NAGRANIA' gridArea='SESJE' />
      </OffersWrapper>
    </Wrapper>
  );
};

export default OfferSection;
