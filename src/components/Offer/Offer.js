import React from 'react';
import { Wrapper, OfferTitle, StyledImage } from './Offer.styles';

const Offer = ({ gridArea, content, image }) => {
  return (
    <Wrapper props={gridArea}>
      <OfferTitle>{content}</OfferTitle>
      <StyledImage src={image} className={gridArea === 'RAJSTOPY' && 'tights'} />
    </Wrapper>
  );
};

export default Offer;
