import React from 'react';
import PropTypes from 'prop-types';
import ImagesWrapper from 'components/ImagesWrapper/ImagesWrapper';
import ExtrasWrapper from 'components/ExtrasWrapper/ExtrasWrapper';
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
      <InfoWrapper>
        <ProductName>{data.name}</ProductName>
        <ProductDescription>{data.description}</ProductDescription>
        <PriceAndShippingWrapper>
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
        addToCartHandler={addToCartHandler}
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
};

export default ProductInfoWrapper;
