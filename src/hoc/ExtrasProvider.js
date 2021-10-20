import React, { useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
// DATA
import { pantiesExtras, socksExtras, premiumExtras, tightsExtras } from 'data/extras';

const ExtrasProvider = ({
  children,
  cart,
  data,
  setExtrasData,
  setToggleExtras,
  setPickExtras,
  setCart,
  pickExtras,
  setPrevCartItem,
  prevCartItem,
}) => {
  const findInCart = cart.find((item) => item.id === data.id);

  useEffect(() => {
    const getExtrasHandler = () => {
      const name = data.category.name;

      if (name === 'majtki') {
        setExtrasData({
          times: 1,
          data: pantiesExtras,
        });
      } else if (name === 'skarpetki') {
        setExtrasData({
          times: 1,
          data: socksExtras,
        });
      } else if (name === 'rajstopy') {
        setExtrasData({
          times: 1,
          data: tightsExtras,
        });
      } else if (name === 'premium') {
        setExtrasData({
          times: premiumExtras.length,
          data: premiumExtras,
        });
      } else if (name === 'inne') {
        setExtrasData(undefined);
      } else {
        setExtrasData(null);
      }
    };

    data !== undefined && getExtrasHandler();

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
  }, [data]);

  useEffect(() => {
    if (cart.find((item) => item.id === data.id)) {
      setCart([...cart], (findInCart.pickedExtras = pickExtras.pickedExtras));
    }
  }, [pickExtras]);

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

  return <>{children}</>;
};

ExtrasProvider.propTypes = {
  children: PropTypes.element.isRequired,
  cart: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  setExtrasData: PropTypes.func.isRequired,
  setToggleExtras: PropTypes.func.isRequired,
  setCart: PropTypes.func.isRequired,
  pickExtras: PropTypes.object.isRequired,
  setPrevCartItem: PropTypes.func.isRequired,
  prevCartItem: PropTypes.array,
};

export default ExtrasProvider;
