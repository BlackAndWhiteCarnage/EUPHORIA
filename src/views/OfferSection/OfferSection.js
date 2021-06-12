import React from 'react';
// STYLES
import { Wrapper, OffersWrapper, OnlyFansWrapper, OnlyFans } from './OfferSection.styles';
// COMPONENTS
import Offer from 'components/Offer/Offer';
// IMAGES
import SocksImage from 'assets/images/socks.png';
import PantiesImage from 'assets/images/panties.png';
import PremiumImage from 'assets/images/premium.png';
import TightsImage from 'assets/images/tights.png';
import SetsImage from 'assets/images/sets.png';
import SessionsImage from 'assets/images/sessions.png';
// ICONS
import OnlyfansIcon from 'assets/icons/onlyfans-icon.svg';

const OfferSection = ({ element }) => (
  <Wrapper ref={element}>
    <OnlyFansWrapper>
      <OnlyFans src={OnlyfansIcon} />
    </OnlyFansWrapper>
    <OffersWrapper id='offer'>
      <Offer image={SocksImage} content='SKARPETKI' gridArea='SKARPETKI' linkTo='skarpetki' />
      <Offer image={PantiesImage} content='MAJTKI' gridArea='MAJTKI' linkTo='majtki' />
      <Offer image={PremiumImage} content='PREMIUM' gridArea='PREMIUM' linkTo='premium' />
      <Offer image={TightsImage} content='RAJSTOPY I POŃCZOCHY' gridArea='RAJSTOPY' linkTo='rajstopy' />
      <Offer image={SetsImage} content='INNE' gridArea='INNE' linkTo='inne' />
      <Offer image={SessionsImage} content='SESJE, FOTKI I NAGRANIA' gridArea='SESJE' linkTo='fotki i nagrania' />
    </OffersWrapper>
  </Wrapper>
);

export default OfferSection;
