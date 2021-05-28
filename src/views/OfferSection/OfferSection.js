import React from 'react';
// STYLES
import { Wrapper, CartAndLogoWrapper, StyledLogo, CartWrapper, Icon, OffersWrapper } from './OfferSection.styles';
// COMPONENTS
import Navigation from 'components/Navigation/Navigation';
import Offer from 'components/Offer/Offer';
// ICONS
import CartIcon from 'assets/icons/cart-icon.svg';
import DarkmodeIcon from 'assets/icons/darkmode-icon.svg';
// IMAGES
import SocksImage from 'assets/images/socks.png';
import PantiesImage from 'assets/images/panties.png';
import PremiumImage from 'assets/images/premium.png';
import TightsImage from 'assets/images/tights.png';
import SetsImage from 'assets/images/sets.png';
import SessionsImage from 'assets/images/sessions.png';

const OfferSection = () => (
  <Wrapper>
    <CartAndLogoWrapper>
      <StyledLogo />
      <CartWrapper>
        <Icon src={CartIcon} />
        <Icon src={DarkmodeIcon} />
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

export default OfferSection;
