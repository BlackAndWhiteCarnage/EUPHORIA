import React from 'react';
import PropTypes from 'prop-types';
// COMPONENTS
import ImagesWrapper from 'components/ProductImagesWrapper/ProductImagesWrapper';
import ExtrasWrapper from 'components/ExtrasWrapper/ExtrasWrapper';
import Discounts from 'components/Discounts/Discounts';
// STYLES
import {
  Wrapper,
  InfoWrapper,
  ProductName,
  ProductDescription,
  PriceAndShippingWrapper,
  ProductPrice,
  ButtonsWrapper,
  StyledButton,
} from './ProductInfoWrapper.styles';
// ANIMATIONS
import { slideFromTop } from 'animations/animations';
// HELPERS
import { matchMedia } from 'helpers/matchMedia';

const ProductInfoWrapper = ({
  data,
  extrasDataAndTimes,
  toggleExtrasHandler,
  setExtrasDataAndTimes,
  toggleExtras,
  setToggleExtras,
  pickExtras,
  setPickExtras,
  addToCartHandler,
  cart,
  setCart,
}) => {
  return (
    <Wrapper>
      <Discounts />
      <InfoWrapper>
        <ProductName variants={matchMedia.matches && slideFromTop} animate='show' initial='hidden'>
          {data.name}
        </ProductName>
        <ProductDescription variants={matchMedia.matches && slideFromTop} animate='show' initial='hidden'>
          {data.description}
        </ProductDescription>
        <PriceAndShippingWrapper variants={matchMedia.matches && slideFromTop} animate='show' initial='hidden'>
          <ProductPrice>
            CENA <span>{data.price}</span> zł
          </ProductPrice>
          <ProductPrice>
            <span>DARMOWA</span> WYSYŁKA
          </ProductPrice>
        </PriceAndShippingWrapper>
        {window.innerWidth < 1250 && (
          <ButtonsWrapper>
            {extrasDataAndTimes !== null && (
              <StyledButton
                text={`${extrasDataAndTimes === undefined ? 'SPYTAJ KONIECZNIE O DODATKI PRZY SKŁADANIU ZAMÓWIENIA' : 'WYBIERZ DODATKI'}`}
                click={toggleExtrasHandler}
                id='extras'
              />
            )}
            <StyledButton text='DODAJ DO KOSZYKA' click={addToCartHandler} cart={cart} itemID={data.id} />
          </ButtonsWrapper>
        )}
      </InfoWrapper>
      <ImagesWrapper data={data} desktop />
      <ExtrasWrapper
        cart={cart}
        setCart={setCart}
        data={data}
        setExtrasDataAndTimes={setExtrasDataAndTimes}
        extrasDataAndTimes={extrasDataAndTimes}
        toggleExtras={toggleExtras}
        setToggleExtras={setToggleExtras}
        pickExtras={pickExtras}
        setPickExtras={setPickExtras}
      />
    </Wrapper>
  );
};

ProductInfoWrapper.propTypes = {
  data: PropTypes.object.isRequired,
  extrasDataAndTimes: PropTypes.object,
  toggleExtrasHandler: PropTypes.func.isRequired,
  setExtrasDataAndTimes: PropTypes.func.isRequired,
  toggleExtras: PropTypes.bool.isRequired,
  setToggleExtras: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  addToCartHandler: PropTypes.func.isRequired,
  setPickExtras: PropTypes.func.isRequired,
  pickExtras: PropTypes.object.isRequired,
};

export default ProductInfoWrapper;
