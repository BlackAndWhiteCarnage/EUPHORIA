import { ReactElement, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { pantiesExtras, socksExtras, premiumExtras, tightsExtras } from 'data/extras';
import { ExtrasProviderProps } from './ExtrasProvider.types';

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
}: ExtrasProviderProps): ReactElement => {
  const findInCart = !Array.isArray(data) && cart.find((item) => item.id === data.id);

  useEffect(() => {
    const getExtrasHandler = () => {
      const name = !Array.isArray(data) && data.category.name;

      if (name === 'majtki') {
        setExtrasData({
          count: 1,
          data: pantiesExtras,
        });
      } else if (name === 'skarpetki') {
        setExtrasData({
          count: 1,
          data: socksExtras,
        });
      } else if (name === 'rajstopy') {
        setExtrasData({
          count: 1,
          data: tightsExtras,
        });
      } else if (name === 'premium') {
        setExtrasData({
          count: premiumExtras.length,
          data: premiumExtras,
        });
      } else if (name === 'inne') {
        setExtrasData(undefined);
      } else {
        setExtrasData(null);
      }
    };

    data !== undefined && getExtrasHandler();

    window.addEventListener('click', (e: MouseEvent): void => {
      if ((e.target as HTMLElement).id !== 'extras') {
        setToggleExtras(false);
      }
    });

    if (findInCart !== undefined && typeof findInCart !== 'boolean') {
      setPickExtras({
        price: findInCart.price - findInCart.initialPrice,
        pickedExtras: [...findInCart.pickedExtras],
      });
    }
  }, [data]);

  const handleChange = (id: string, value: string[] | false, decrement?: boolean) => {
    setCart(prev => prev.map(cart => {
      if (cart.id === id && value) {
        return {
          ...cart,
          pickedExtras: value
        }
      } else if (!value && typeof findInCart === 'object'){
        return {
            ...cart,
            price: decrement ? findInCart.price - 10 : findInCart.price + 10
        }
      }

      return cart;
    }));
  }

  useEffect(() => {
    if (!Array.isArray(data) && cart.find((item) => item.id === data.id) && typeof findInCart === 'object') {
        handleChange(findInCart.id, pickExtras.pickedExtras)
    }
  }, [pickExtras]);

  useEffect(() => {
    if(!Array.isArray(data) && findInCart !== undefined && typeof findInCart === 'object'){
      setPrevCartItem(cart.find((item) => item.id === data.id) && cart.find((item) => item.id === data.id)!.pickedExtras);

      if (prevCartItem) {
        if (prevCartItem.length > cart.find((item) => item.id === data.id)!.pickedExtras.length && findInCart.price > findInCart.initialPrice) {
          handleChange(findInCart.id, false, true)
      } else if (
        prevCartItem.length < cart.find((item) => item.id === data.id)!.pickedExtras.length &&
        findInCart.price >= findInCart.initialPrice &&
        findInCart.pickedExtras.length > findInCart.extrasNumber
        ) {
          handleChange(findInCart.id, false, false)
        }
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
