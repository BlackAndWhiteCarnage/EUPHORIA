import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
// COMPONENTS
import ProductInfoWrapper from 'components/ProductInfoWrapper/ProductInfoWrapper';
import ProductImagesWrapper from 'components/ProductImagesWrapper/ProductImagesWrapper';
import LoadingIcon from 'components/LoadingIcon/LoadingIcon';
// STYLES
import { ProductWrapper, ButtonsWrapper, StyledButton } from './Product.styles';
// HELPERS
import { matchMedia } from 'helpers/matchMedia';
// ANIMATIONS
import { fade, slideFromTop } from 'animations/animations';

const Product = ({ cart, setCart }) => {
  const [data, setData] = useState();
  const [toggleExtras, setToggleExtras] = useState(false);
  const [extrasDataAndTimes, setExtrasDataAndTimes] = useState({
    data: [],
    times: 0,
  });
  const [pickExtras, setPickExtras] = useState({
    price: 0,
    pickedExtras: [],
  });

  const location = useLocation();
  const path = location.pathname.replace('/', '');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://euphoria-backend-strapi.herokuapp.com/products/${path}`);
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, [path]);

  const toggleExtrasHandler = () => {
    setToggleExtras(!toggleExtras);
  };

  const addToCartHandler = () => {
    const newItem = {
      name: data.name,
      images: data.images,
      price: pickExtras.price !== false ? data.price + pickExtras.price : data.price,
      id: data.id,
      pickedExtras: pickExtras.pickedExtras,
      extrasNumber: extrasDataAndTimes && extrasDataAndTimes.times + 1,
      initialPrice: data.price,
    };

    setCart([...cart, newItem]);
  };

  return (
    <>
      {data !== undefined ? (
        <ProductWrapper variants={matchMedia.matches ? slideFromTop : fade} animate='show' initial='hidden'>
          <ProductImagesWrapper data={data} />
          <ProductInfoWrapper
            data={data}
            extrasDataAndTimes={extrasDataAndTimes}
            toggleExtrasHandler={toggleExtrasHandler}
            toggleExtras={toggleExtras}
            setToggleExtras={setToggleExtras}
            setExtrasDataAndTimes={setExtrasDataAndTimes}
            pickExtras={pickExtras}
            setPickExtras={setPickExtras}
            addToCartHandler={addToCartHandler}
            cart={cart}
            setCart={setCart}
          />
          {matchMedia.matches && (
            <ButtonsWrapper>
              {extrasDataAndTimes !== null && (
                <StyledButton
                  text={`${extrasDataAndTimes === undefined ? 'SPYTAJ KONIECZNIE O DODATKI PRZY SKŁADANIU ZAMÓWIENIA' : 'WYBIERZ DODATKI'}`}
                  click={toggleExtrasHandler}
                  id='extras'
                />
              )}
              <StyledButton text='DODAJ DO KOSZYKA' click={addToCartHandler} itemID={data.id} cart={cart} />
            </ButtonsWrapper>
          )}
        </ProductWrapper>
      ) : (
        <LoadingIcon />
      )}
    </>
  );
};

Product.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default Product;
