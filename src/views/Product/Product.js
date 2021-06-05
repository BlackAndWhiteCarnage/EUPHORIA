import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingIcon from 'components/LoadingIcon/LoadingIcon';
import { ProductWrapper, ButtonsWrapper, StyledButton } from './Product.styles';
import ImagesWrapper from 'components/ImagesWrapper/ImagesWrapper';
import ProductInfoWrapper from 'components/ProductInfoWrapper/ProductInfoWrapper';

const Product = () => {
  const [data, setData] = useState();
  const [toggleExtras, setToggleExtras] = useState(false);
  const [extrasDataAndTimes, setExtrasDataAndTimes] = useState({
    data: [],
    times: 0,
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
    return () => {};
  }, [location.pathname]);

  const toggleExtrasHandler = () => {
    setToggleExtras(!toggleExtras);
  };

  return (
    <>
      {data !== undefined ? (
        <ProductWrapper>
          <ImagesWrapper data={data} />
          <ProductInfoWrapper
            data={data}
            extrasDataAndTimes={extrasDataAndTimes}
            toggleExtrasHandler={toggleExtrasHandler}
            toggleExtras={toggleExtras}
            setExtrasDataAndTimes={setExtrasDataAndTimes}
          />
          {window.innerWidth > 1250 && (
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
        </ProductWrapper>
      ) : (
        <LoadingIcon />
      )}
    </>
  );
};

export default Product;
