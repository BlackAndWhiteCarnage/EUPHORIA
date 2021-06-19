import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// COMPONENTS
import Shadow from 'components/Shadow/Shadow';
// STYLES
import {
  CartItems,
  CartItem,
  ItemImage,
  ItemInfoWrapper,
  PickedExtras,
  PickedExtrasWrapper,
  StyledAlertIcon,
  StyledAlertLink,
  HrefAndDeleteWrapper,
  StyledXMarkIcon,
  StyledExtrasIcon,
  StyledArrowIcon,
} from './Cart.styles';

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
          <ItemInfoWrapper>
            <p>{item.name}</p>
            <PickedExtrasWrapper className={`${togglePreviewExtras === item.id && 'show'} ${toggleAlert === item.id && 'showAlert'}`} id='extras'>
              {togglePreviewExtras ? (
                <>
                  <PickedExtras>WYBRANE DODATKI</PickedExtras>
                  {item.pickedExtras.map((extras) => (
                    <span key={extras}>{extras}</span>
                  ))}
                </>
              ) : (
                toggleAlert && (
                  <StyledAlertLink to={`/${item.id}`} id='extras'>
                    <PickedExtras>
                      NIE WYBRAŁEŚ ŻADNYCH DODATKÓW, <strong>KLIKNIJ</strong> ABY PRZEJŚĆ DO TEGO PRZEDMIOTU I WYBRAĆ.
                      <strong> CHYBA ŻE NIE CHCESZ!</strong>
                    </PickedExtras>
                  </StyledAlertLink>
                )
              )}
            </PickedExtrasWrapper>
            <p>{item.price} ZŁ</p>
          </ItemInfoWrapper>
          <HrefAndDeleteWrapper>
            <StyledXMarkIcon onClick={() => deleteItemHandler(item)} title='USUŃ PRODUKT Z KOSZYKA' />
            {item.extrasNumber === null || item.extrasNumber === undefined ? null : item.pickedExtras.length !== 0 ? (
              <StyledExtrasIcon onClick={() => togglePreviewExtrasHandler(item.id)} id='extras' title='WYBRANE DODATKI' />
            ) : (
              <StyledAlertIcon onClick={() => toggleAlertHandler(item.id)} id='extras' title='NIE WYBRAŁEŚ ŻADNYCH DODATKÓW' />
            )}
            <Link to={`/${item.id}`} title='PRZEJDŹ DO TEGO PRODUKTU'>
              <StyledArrowIcon />
            </Link>
          </HrefAndDeleteWrapper>
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
