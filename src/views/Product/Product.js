import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductInfoWrapper from 'views/Product/components/ProductInfoWrapper/ProductInfoWrapper';
import ProductImagesWrapper from 'views/Product/components/ProductImagesWrapper/ProductImagesWrapper';
import LoadingIcon from 'components/LoadingIcon/LoadingIcon';
import { ProductWrapper, ButtonsWrapper, StyledButton } from './Product.styles';
import { matchMedia } from 'helpers/matchMedia';
import { scaleUp } from 'animations/animations';
import { useFetch } from 'helpers/useFetch';

const Product = ({ cart, setCart }) => {
  const path = useLocation().pathname.replace('/', '');

  const [toggleExtras, setToggleExtras] = useState(false);
  const { data } = useFetch(process.env.REACT_APP_PRODUCT_URL, path, false);

  const [extrasData, setExtrasData] = useState({
    data: [],
    count: 0,
  });

  const [pickExtras, setPickExtras] = useState({
    price: 0,
    pickedExtras: [],
  });

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
      extrasNumber: extrasData && extrasData.count + 1,
      initialPrice: data.price,
    };

    setCart([...cart, newItem]);
  };

  return (
    <>
      {data !== undefined ? (
        <ProductWrapper variants={scaleUp} animate='show' initial='hidden' exit='exit'>
          <ProductImagesWrapper data={data} />
          <ProductInfoWrapper
            data={data}
            extrasData={extrasData}
            toggleExtrasHandler={toggleExtrasHandler}
            toggleExtras={toggleExtras}
            setToggleExtras={setToggleExtras}
            setExtrasData={setExtrasData}
            pickExtras={pickExtras}
            setPickExtras={setPickExtras}
            addToCartHandler={addToCartHandler}
            cart={cart}
            setCart={setCart}
          />
          {matchMedia.matches && (
            <ButtonsWrapper>
              {extrasData !== null && (
                <StyledButton
                  text={`${extrasData === undefined ? 'SPYTAJ KONIECZNIE O DODATKI PRZY SKŁADANIU ZAMÓWIENIA' : 'WYBIERZ DODATKI'}`}
                  click={toggleExtrasHandler}
                  className={toggleExtras && 'active'}
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
