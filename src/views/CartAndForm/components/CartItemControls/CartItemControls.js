import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// STYLES
import { Wrapper, StyledXMarkIcon, StyledExtrasIcon, StyledAlertIcon, StyledArrowIcon } from './CartItemControls.styles';

const CartItemControls = ({ item, togglePreviewExtrasHandler, toggleAlertHandler, deleteItemHandler }) => (
  <Wrapper>
    <StyledXMarkIcon onClick={() => deleteItemHandler(item)} title='USUŃ PRODUKT Z KOSZYKA' />
    {item.extrasNumber === null || item.extrasNumber === undefined ? null : item.pickedExtras.length !== 0 ? (
      <StyledExtrasIcon onClick={() => togglePreviewExtrasHandler(item.id)} id='extras' title='WYBRANE DODATKI' />
    ) : (
      <StyledAlertIcon onClick={() => toggleAlertHandler(item.id)} id='extras' title='NIE WYBRAŁEŚ ŻADNYCH DODATKÓW' />
    )}
    <Link to={`/${item.id}`} title='PRZEJDŹ DO TEGO PRODUKTU'>
      <StyledArrowIcon />
    </Link>
  </Wrapper>
);

CartItemControls.propTypes = {
  item: PropTypes.object.isRequired,
  togglePreviewExtrasHandler: PropTypes.func.isRequired,
  toggleAlertHandler: PropTypes.func.isRequired,
  deleteItemHandler: PropTypes.func.isRequired,
};

export default CartItemControls;
