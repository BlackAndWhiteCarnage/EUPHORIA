import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// STYLES
import { ImageWrapper, Image, ScrollInfoWrapper, Dot } from './ProductImagesWrapper.styles';
// ICONS
import DefaultImage from 'assets/icons/default-icon.svg';
// ANIMATIONS
import { slideFromTop } from 'animations/animations';
// HELPERS
import { matchMedia } from 'helpers/matchMedia';

const ProductImagesWrapper = ({ data, desktop }) => {
  const [current, setCurrent] = useState(0);
  const [imagesLength, setImagesLength] = useState(0);

  setTimeout(() => {
    setCurrent(current === imagesLength - 1 ? 0 : current + 1);
  }, 3500);

  useEffect(() => {
    if (data !== undefined) {
      setImagesLength(data.images.length);
    }
  }, [data]);

  return (
    <ImageWrapper variants={matchMedia.matches && slideFromTop} animate='show' initial='hidden'>
      {data.images.length > 1 ? (
        data.images.map((item, index) => (
          <Image
            className={index === current ? 'show' : 'hide'}
            src={data.images[index].url}
            alt='Fetysz Majtki Majteczki Noszone Używane'
            key={item.id}
          />
        ))
      ) : (
        <Image className='show' src={DefaultImage} alt='Fetysz Majtki Majteczki Noszone Używane' />
      )}
      {!desktop && (
        <ScrollInfoWrapper>
          <Dot />
        </ScrollInfoWrapper>
      )}
    </ImageWrapper>
  );
};

ProductImagesWrapper.propTypes = {
  data: PropTypes.object.isRequired,
  desktop: PropTypes.bool,
};

export default ProductImagesWrapper;
