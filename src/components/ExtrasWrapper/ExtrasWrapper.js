import React, { useState, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
// DATA
import { panties, socks, premium, tights } from 'data/extras';
// STYLES
import { Wrapper, ExtrasInfoWrapper, ExtrasInfo, ExtrasOption } from './ExtrasWrapper.styles';

const ExtrasWrapper = ({
  data,
  setExtrasDataAndTimes,
  extrasDataAndTimes,
  toggleExtras,
  setToggleExtras,
  pickExtras,
  setPickExtras,
  cart,
  setCart,
}) => {
  const [prevCartItem, setPrevCartItem] = useState();

  const findInCart = cart.find((item) => item.id === data.id);

  useEffect(() => {
    const getExtrasHandler = () => {
      const name = data.category.name;

      if (name === 'majtki') {
        setExtrasDataAndTimes({
          times: 1,
          data: panties,
        });
      } else if (name === 'skarpetki') {
        setExtrasDataAndTimes({
          times: 1,
          data: socks,
        });
      } else if (name === 'rajstopy') {
        setExtrasDataAndTimes({
          times: 1,
          data: tights,
        });
      } else if (name === 'premium') {
        setExtrasDataAndTimes({
          times: premium.length,
          data: premium,
        });
      } else if (name === 'inne') {
        setExtrasDataAndTimes(undefined);
      } else {
        setExtrasDataAndTimes(null);
      }
    };

    data !== undefined && getExtrasHandler();
  }, [data]);

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target.id !== 'extras') {
        setToggleExtras(false);
      }
    });

    if (findInCart !== undefined) {
      setPickExtras({
        price: findInCart.price - findInCart.initialPrice,
        pickedExtras: [...findInCart.pickedExtras],
      });
    }
  }, []);

  useEffect(() => {
    if (cart.find((item) => item.id === data.id)) {
      setCart([...cart], (findInCart.pickedExtras = pickExtras.pickedExtras));
    }
  }, [pickExtras]);

  const extrasToPickHandler = (extras) => {
    setPickExtras({
      ...pickExtras,
      price: pickExtras.pickedExtras.length > extrasDataAndTimes.times && pickExtras.price + 10,
      pickedExtras: [...pickExtras.pickedExtras, extras],
    });

    if (pickExtras.pickedExtras.indexOf(extras) > -1) {
      setPickExtras({
        price: pickExtras.pickedExtras.length > extrasDataAndTimes.times && pickExtras.price - 10,
        pickedExtras: pickExtras.pickedExtras.filter((item) => item !== extras),
      });
    }
  };

  useLayoutEffect(() => {
    setPrevCartItem(cart.find((item) => item.id === data.id) && cart.find((item) => item.id === data.id).pickedExtras);

    if (prevCartItem) {
      if (prevCartItem.length > cart.find((item) => item.id === data.id).pickedExtras.length && findInCart.price > findInCart.initialPrice) {
        setCart([...cart], (findInCart.price = findInCart.price - 10));
      } else if (
        prevCartItem.length < cart.find((item) => item.id === data.id).pickedExtras.length &&
        findInCart.price >= findInCart.initialPrice &&
        findInCart.pickedExtras.length > findInCart.extrasNumber
      ) {
        setCart([...cart], (findInCart.price = findInCart.price + 10));
      }
    }
  }, [cart]);

  return (
    <>
      {extrasDataAndTimes !== null && extrasDataAndTimes !== undefined && (
        <Wrapper className={toggleExtras && 'toggle'} id='extras'>
          <ExtrasInfoWrapper id='extras'>
            {extrasDataAndTimes.times < 5 ? (
              <ExtrasInfo id='extras'>WYBIERZ {extrasDataAndTimes.times + 1} DODATKI, KAŻDY KOLEJNY DODATKOWO PŁATNY +10zł</ExtrasInfo>
            ) : (
              <ExtrasInfo id='extras'>DO MAJTECZEK PREMIUM MOŻESZ WYBRAĆ ILE CHCESZ DODATKÓW</ExtrasInfo>
            )}
            {pickExtras.pickedExtras.length > extrasDataAndTimes.times + 1 && extrasDataAndTimes.times < 5 && (
              <ExtrasInfo id='extras'>DODATKOWO DO ZAPŁATY {pickExtras.price} zł</ExtrasInfo>
            )}
          </ExtrasInfoWrapper>
          {extrasDataAndTimes.data.map((extras) => (
            <ExtrasOption
              onClick={() => extrasToPickHandler(extras)}
              className={pickExtras.pickedExtras.includes(extras) && 'added'}
              key={extras}
              id='extras'
            >
              {extras}
            </ExtrasOption>
          ))}
          <ExtrasOption className='back'>WYBRAŁEM/NIE CHCĘ WYBIERAĆ</ExtrasOption>
        </Wrapper>
      )}
    </>
  );
};

ExtrasWrapper.propTypes = {
  data: PropTypes.object.isRequired,
  setExtrasDataAndTimes: PropTypes.func.isRequired,
  extrasDataAndTimes: PropTypes.object,
  toggleExtras: PropTypes.bool.isRequired,
  setToggleExtras: PropTypes.func.isRequired,
  pickExtras: PropTypes.object.isRequired,
  setPickExtras: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default ExtrasWrapper;
