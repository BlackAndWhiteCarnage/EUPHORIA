import React, { useState } from 'react';
import PropTypes from 'prop-types';
// STYLES
import { OfferWrapper, OfferTitle, OfferImage } from './Offer.styles';

const Offer = ({ gridArea, content, image, linkTo, alt }) => {
  const [toggleTitle, setToggleTitle] = useState(false);

  const toggleTitleHandler = () => {
    setToggleTitle(!toggleTitle);
  };

  return (
    <OfferWrapper props={gridArea} onMouseEnter={toggleTitleHandler} onMouseLeave={toggleTitleHandler} to={`sklepik/${linkTo}`} id='active'>
      <OfferTitle className={toggleTitle && 'toggleTitle'} id='active'>
        {content}
      </OfferTitle>
      <OfferImage src={image} className={gridArea === 'RAJSTOPY' && 'tights'} id='offerItem' alt={alt} />
    </OfferWrapper>
  );
};

Offer.propTypes = {
  gridArea: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default Offer;
