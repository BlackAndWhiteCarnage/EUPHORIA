import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, OfferWrapper, OfferTitle, OfferImage } from './Offer.styles';
import { fade } from 'animations/animations';

const Offer = ({ gridArea, content, image, linkTo, alt }) => {
  const [toggleTitle, setToggleTitle] = useState(false);

  const toggleTitleHandler = () => {
    setToggleTitle(!toggleTitle);
  };

  return (
    <Wrapper props={gridArea} variants={fade}>
      <OfferWrapper onMouseEnter={toggleTitleHandler} onMouseLeave={toggleTitleHandler} to={`sklepik/${linkTo}`} id='active'>
        <OfferTitle className={toggleTitle && 'toggleTitle'} id='active'>
          {content}
        </OfferTitle>
        <OfferImage src={image} className={gridArea === 'RAJSTOPY' && 'tights'} alt={alt} id='active' />
      </OfferWrapper>
    </Wrapper>
  );
};

Offer.propTypes = {
  gridArea: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Offer;
