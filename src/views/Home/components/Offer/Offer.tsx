import { ReactElement, useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, OfferWrapper, OfferTitle, OfferImage } from './Offer.styles';
import { fade } from 'animations/animations';
import { OfferProps, ToggleTitleType } from './Offer.types';

const Offer = ({ gridArea, content, image, linkTo, alt }: OfferProps): ReactElement => {
  const [toggleTitle, setToggleTitle] = useState<ToggleTitleType['toggleTitle']>(false);

  const toggleTitleHandler = (): void => {
    setToggleTitle(!toggleTitle);
  };

  return (
    <Wrapper props={gridArea} variants={fade}>
      <OfferWrapper
        onMouseEnter={toggleTitleHandler}
        onFocus={toggleTitleHandler}
        onBlur={toggleTitleHandler}
        onMouseLeave={toggleTitleHandler}
        to={`sklepik/${linkTo}`}
        id='active'
      >
        <OfferTitle className={`${toggleTitle && 'toggleTitle'}`} id='active'>
          {content}
        </OfferTitle>
        <OfferImage src={image} className={`${gridArea === 'RAJSTOPY' && 'tights'}`} alt={alt} id='active' />
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
