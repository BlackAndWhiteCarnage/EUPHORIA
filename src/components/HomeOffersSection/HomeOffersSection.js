import React from 'react';
// COMPONENTS
import Offer from 'components/Offer/Offer';
// IMAGES
import SocksImage from 'assets/images/socks.png';
import PantiesImage from 'assets/images/panties.png';
import PremiumImage from 'assets/images/premium.png';
import TightsImage from 'assets/images/tights.png';
import SetsImage from 'assets/images/sets.png';
import SessionsImage from 'assets/images/sessions.png';
// STYLES
import { Wrapper, OffersWrapper, Header } from './HomeOffersSection.styles';
// ANIMATIONS
import { slideFromTop } from 'animations/animations';

const HomeOfferSection = () => (
  <Wrapper variants={slideFromTop} initial='hidden' animate='show' exit='exit'>
    <Header>FETYSZ MAJTKI MAJTECZKI RAJSTOPY SKARPETKI NOSZONA UŻYWANA BIELIZNA</Header>
    <OffersWrapper id='offer'>
      <Offer image={SocksImage} content='SKARPETKI' gridArea='SKARPETKI' linkTo='skarpetki' alt='skarpetki' />
      <Offer image={PantiesImage} content='MAJTKI' gridArea='MAJTKI' linkTo='majtki' alt='majtki' />
      <Offer image={PremiumImage} content='PREMIUM' gridArea='PREMIUM' linkTo='premium' alt='premium' />
      <Offer image={TightsImage} content='RAJSTOPY I POŃCZOCHY' gridArea='RAJSTOPY' linkTo='rajstopy' alt='rajstopy' />
      <Offer image={SetsImage} content='INNE' gridArea='INNE' linkTo='inne' alt='inne' />
      <Offer image={SessionsImage} content='SESJE, FOTKI I NAGRANIA' gridArea='SESJE' linkTo='fotki i nagrania' alt='fotki i nagrania' />
    </OffersWrapper>
  </Wrapper>
);

export default HomeOfferSection;
