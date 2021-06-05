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

const ProductInfoWrapper = ({ data, extrasDataAndTimes, toggleExtrasHandler, setExtrasDataAndTimes, toggleExtras }) => {
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
              />
            )}
            <StyledButton text='DODAJ DO KOSZYKA' />
          </ButtonsWrapper>
        )}
      </InfoWrapper>
      <ImagesWrapper data={data} desktop />
      <ExtrasWrapper data={data} setExtrasDataAndTimes={setExtrasDataAndTimes} extrasDataAndTimes={extrasDataAndTimes} toggleExtras={toggleExtras} />
    </Wrapper>
  );
};

ProductInfoWrapper.propTypes = {};

export default ProductInfoWrapper;
