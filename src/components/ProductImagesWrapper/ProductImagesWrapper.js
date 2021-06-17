import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ImageWrapper, Image, ScrollInfoWrapper, Dot } from './ProductImagesWrapper.styles';

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
    <ImageWrapper>
      {data.images.map((item, index) => (
        <Image
          className={index === current ? 'show' : 'hide'}
          src={data.images[index].url}
          alt='Fetysz Majtki Majteczki Noszone Używane'
          key={item.id}
        />
      ))}
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
