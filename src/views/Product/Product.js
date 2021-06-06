import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingIcon from 'components/LoadingIcon/LoadingIcon';
import { ProductWrapper, ButtonsWrapper, StyledButton } from './Product.styles';
import ImagesWrapper from 'components/ImagesWrapper/ImagesWrapper';
import ProductInfoWrapper from 'components/ProductInfoWrapper/ProductInfoWrapper';
import styled from 'styled-components';

const Product = ({ cart, setCart }) => {
  const [data, setData] = useState();
  const [toggleExtras, setToggleExtras] = useState(false);
  const [warn, setWarn] = useState(false);
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
    return () => {};
  }, [location.pathname]);

  const toggleExtrasHandler = () => {
    setToggleExtras(!toggleExtras);
  };

  if (warn) {
    setTimeout(() => {
      setWarn(!warn);
    }, 2000);
  }

  const addToCartHandler = () => {
    const newItem = {
      name: data.name,
      images: data.images,
      price: data.price,
      id: data.id,
      pickedExtras: pickExtras.pickedExtras,
    };

    if (!extrasDataAndTimes) {
      setCart([...cart, newItem]);
    } else if (newItem.pickedExtras.length !== 0) {
      setCart([...cart, newItem]);
    } else {
      setWarn(true);
    }
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
            setToggleExtras={setToggleExtras}
            setExtrasDataAndTimes={setExtrasDataAndTimes}
            pickExtras={pickExtras}
            setPickExtras={setPickExtras}
            addToCartHandler={addToCartHandler}
            warn={warn}
            cart={cart}
          />
          {window.innerWidth > 1250 && (
            <ButtonsWrapper>
              {extrasDataAndTimes !== null && (
                <StyledButton
                  text={`${extrasDataAndTimes === undefined ? 'SPYTAJ KONIECZNIE O DODATKI PRZY SKŁADANIU ZAMÓWIENIA' : 'WYBIERZ DODATKI'}`}
                  click={toggleExtrasHandler}
                  id='extras'
                />
              )}
              <StyledButton text='DODAJ DO KOSZYKA' click={addToCartHandler} className={warn && 'warn'} itemID={data.id} cart={cart} />
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
