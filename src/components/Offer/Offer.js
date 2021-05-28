import React, { useState } from 'react';
// STYLES
import { Wrapper, OfferTitle, StyledImage } from './Offer.styles';
// PROPTYPES
import PropTypes from 'prop-types';

const Offer = ({ gridArea, content, image }) => {
  const [toggleTitle, setToggleTitle] = useState(false);

  const toggleTitleHandler = () => {
    setToggleTitle(!toggleTitle);
  };

  return (
    <Wrapper props={gridArea} onMouseEnter={toggleTitleHandler} onMouseLeave={toggleTitleHandler}>
      <OfferTitle className={toggleTitle && 'toggleTitle'}>{content}</OfferTitle>
      <StyledImage src={image} className={gridArea === 'RAJSTOPY' && 'tights'} />
    </Wrapper>
  );
};

Offer.propTypes = {
  gridArea: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Offer;
