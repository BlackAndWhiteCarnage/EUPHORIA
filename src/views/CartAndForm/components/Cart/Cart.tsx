import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CartItemInfo from 'views/CartAndForm/components/CartItemInfo/CartItemInfo';
import CartItemControls from 'views/CartAndForm/components/CartItemControls/CartItemControls';
import { CartItems, CartItem, ItemImage } from './Cart.styles';
import { CartType } from 'Root'

export interface TogglePreviewExtrasType {
  togglePreviewExtras: undefined | string | boolean
  setTogglePreviewExtras: React.Dispatch<React.SetStateAction<string | boolean>>
}

export interface ToggleAlertType {
  toggleAlert: boolean | string
  setToggleAlert: React.Dispatch<React.SetStateAction<boolean | string>>
}

interface DeletingItemType {
  deletingItem: string
  setDeletingItem: React.Dispatch<React.SetStateAction<string>>
}

const Cart = ({ cart, setCart }: CartType) => {
  const [togglePreviewExtras, setTogglePreviewExtras] = useState<TogglePreviewExtrasType['togglePreviewExtras']>();
  const [toggleAlert, setToggleAlert] = useState<ToggleAlertType['toggleAlert']>(false);
  const [deletingItem, setDeletingItem] = useState<DeletingItemType['deletingItem']>('');

  const togglePreviewExtrasHandler = (id: string): void => {
    if (id === togglePreviewExtras) {
      setTogglePreviewExtras(false);
    } else {
      setTogglePreviewExtras(id);
      setToggleAlert(false);
    }
  };

  const deleteItemHandler = (itemId: string): void => {
    setDeletingItem(itemId);
    setTimeout(() => {
      setDeletingItem('');
      setCart(cart.filter((i) => i.id !== itemId));
    }, 500);
  };

  const toggleAlertHandler = (id: string): void => {
    if (id === toggleAlert) {
      setToggleAlert(false);
    } else {
      setTogglePreviewExtras(false);
      setToggleAlert(id);
    }
  };

  window.addEventListener('click', (e: MouseEvent): void => {
      if ((e.target as HTMLElement).id !== 'extras') {
        setTogglePreviewExtras(false);
        setToggleAlert(false);
      }
  });

  return (
    <CartItems>
      {cart.map((item) => (
        <CartItem className={`${item.id === deletingItem && 'deleting'}`} key={item.name}>
          <ItemImage src={item.images[0].url} />
          <CartItemInfo item={item} togglePreviewExtras={togglePreviewExtras} toggleAlert={toggleAlert} />
          <CartItemControls
            deleteItemHandler={deleteItemHandler}
            item={item}
            togglePreviewExtrasHandler={togglePreviewExtrasHandler}
            togglePreviewExtras={togglePreviewExtras}
            toggleAlert={toggleAlert}
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
