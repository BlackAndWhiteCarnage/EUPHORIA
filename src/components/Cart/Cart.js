import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// COMPONENTS
import CartItemInfo from 'components/CartItemInfo/CartItemInfo';
import CartItemControls from 'components/CartItemControls/CartItemControls';
// STYLES
import { CartItems, CartItem, ItemImage } from './Cart.styles';

const Cart = ({ cart, setCart }) => {
  const [togglePreviewExtras, setTogglePreviewExtras] = useState();
  const [toggleAlert, setToggleAlert] = useState();
  const [deletingItem, setDeletingItem] = useState('');

  const togglePreviewExtrasHandler = (id) => {
    if (id === togglePreviewExtras) {
      setTogglePreviewExtras(false);
    } else {
      setTogglePreviewExtras(id);
      setToggleAlert(false);
    }
  };

  const deleteItemHandler = (item) => {
    setDeletingItem(item.id);
    setTimeout(() => {
      setDeletingItem('');
      setCart(cart.filter((i) => i.id !== item.id));
    }, 500);
  };

  const toggleAlertHandler = (id) => {
    if (id === toggleAlert) {
      setToggleAlert(false);
    } else {
      setTogglePreviewExtras(false);
      setToggleAlert(id);
    }
  };

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target.id !== 'extras') {
        setTogglePreviewExtras(false);
        setToggleAlert(false);
      }
    });

    return;
  }, []);

  return (
    <CartItems>
      {cart.map((item) => (
        <CartItem className={item.id === deletingItem && 'deleting'} key={item.name}>
          <ItemImage src={item.images[0].url} />
          <CartItemInfo item={item} togglePreviewExtras={togglePreviewExtras} toggleAlert={toggleAlert} />
          <CartItemControls
            deleteItemHandler={deleteItemHandler}
            item={item}
            togglePreviewExtrasHandler={togglePreviewExtrasHandler}
            toggleAlertHandler={toggleAlertHandler}
          />
        </CartItem>
      ))}
    </CartItems>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Cart;
