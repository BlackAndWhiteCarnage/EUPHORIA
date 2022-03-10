import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ImageWrapper, Image, ScrollInfoWrapper, Dot } from './ProductImagesWrapper.styles';
import DefaultImage from 'assets/icons/default-icon.svg';
import { fade } from 'animations/animations';
import { matchMedia } from 'helpers/matchMedia';
import { ProductImagesWrapperProps } from './ProductImagesWrapper.types';

const ProductImagesWrapper = ({ data, desktop }: ProductImagesWrapperProps) => {
  const [current, setCurrent] = useState(0);
  const [imagesLength, setImagesLength] = useState(0);

  setTimeout(() => {
    setCurrent(current === imagesLength - 1 ? 0 : current + 1);
  }, 2500);

  useEffect(() => {
    if (data !== undefined && !Array.isArray(data)) {
      setImagesLength(data.images.length);
    }
  }, [data]);

  const handleImages = () => {
    if(!Array.isArray(data)){
      if (data.images.length === 2) {
        return data.images.map((item, index) => (
          <Image className={index === current ? 'show' : 'hide'} src={data.images[index].url} alt={data.name} key={data.images[index].url} />
          ));
        } else if (data.images.length === 1) {
          return <Image className='show' src={data.images[0].url} alt={data.name} />;
        } else {
          return <Image className='show' src={DefaultImage} alt='Fetysz Majtki Majteczki Noszone Używane' />;
        }
    }
  };

  return (
    <ImageWrapper variants={matchMedia && fade}>
      {handleImages()}
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
