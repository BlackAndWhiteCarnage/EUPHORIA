import React from 'react';
import PropTypes from 'prop-types';
import ImagesWrapper from 'views/Product/components/ProductImagesWrapper/ProductImagesWrapper';
import ExtrasWrapper from 'views/Product/components/ExtrasWrapper/ExtrasWrapper';
import { matchMedia } from 'helpers/matchMedia';
import {
  Wrapper,
  InfoWrapper,
  Info,
  ProductName,
  ProductDescription,
  PriceAndShippingWrapper,
  ProductPrice,
  ButtonsWrapper,
  StyledButton,
} from './ProductInfoWrapper.styles';
import { scaleUp, fade } from 'animations/animations';

const ProductInfoWrapper = ({
  data,
  extrasData,
  toggleExtrasHandler,
  setExtrasData,
  toggleExtras,
  setToggleExtras,
  pickExtras,
  setPickExtras,
  addToCartHandler,
  cart,
  setCart,
}) => (
  <Wrapper variants={scaleUp} animate='show' initial='hidden' exit='exit'>
    <InfoWrapper>
      <Info>
        <ProductName variants={matchMedia && fade}>{data.name}</ProductName>
        <ProductDescription variants={matchMedia && fade}>{data.description}</ProductDescription>
        <PriceAndShippingWrapper variants={matchMedia && fade}>
          <ProductPrice>
            CENA <span>{data.price}</span> zł
          </ProductPrice>
          <ProductPrice>
            <span>DARMOWA</span> WYSYŁKA
          </ProductPrice>
        </PriceAndShippingWrapper>
        {!matchMedia.matches && (
          <ButtonsWrapper>
            {extrasData !== null && (
              <StyledButton
                text={`${extrasData === undefined ? 'SPYTAJ KONIECZNIE O DODATKI PRZY SKŁADANIU ZAMÓWIENIA' : 'WYBIERZ DODATKI'}`}
                click={toggleExtrasHandler}
                id='extras'
              />
            )}
            <StyledButton text='DODAJ DO KOSZYKA' click={addToCartHandler} cart={cart} itemID={data.id} />
          </ButtonsWrapper>
        )}
      </Info>
    </InfoWrapper>
    <ImagesWrapper data={data} desktop />
    <ExtrasWrapper
      cart={cart}
      setCart={setCart}
      data={data}
      setExtrasData={setExtrasData}
      extrasData={extrasData}
      toggleExtras={toggleExtras}
      setToggleExtras={setToggleExtras}
      pickExtras={pickExtras}
      setPickExtras={setPickExtras}
    />
  </Wrapper>
);

ProductInfoWrapper.propTypes = {
  data: PropTypes.object.isRequired,
  extrasData: PropTypes.object,
  toggleExtrasHandler: PropTypes.func.isRequired,
  setExtrasData: PropTypes.func.isRequired,
  toggleExtras: PropTypes.bool.isRequired,
  setToggleExtras: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  addToCartHandler: PropTypes.func.isRequired,
  setPickExtras: PropTypes.func.isRequired,
  pickExtras: PropTypes.object.isRequired,
};

export default ProductInfoWrapper;
