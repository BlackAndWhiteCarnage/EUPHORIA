import React, { useState } from 'react';
// STYLES
import { Wrapper, OfferTitle, StyledImage } from './Offer.styles';
// PROPTYPES
import PropTypes from 'prop-types';

const Offer = ({ gridArea, content, image, linkTo }) => {
  const [toggleTitle, setToggleTitle] = useState(false);

  const toggleTitleHandler = () => {
    setToggleTitle(!toggleTitle);
  };

  return (
    <Wrapper props={gridArea} onMouseEnter={toggleTitleHandler} onMouseLeave={toggleTitleHandler} to={linkTo} id='active'>
      <OfferTitle className={toggleTitle && 'toggleTitle'} id='active'>
        {content}
      </OfferTitle>
      <StyledImage src={image} className={gridArea === 'RAJSTOPY' && 'tights'} id='offerItem' />
    </Wrapper>
  );
};

Offer.propTypes = {
  gridArea: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Offer;
