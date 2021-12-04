import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Wrapper, StyledXMarkIcon, StyledExtrasIcon, StyledAlertIcon, StyledArrowIcon, StyledButton } from './CartItemControls.styles';

const CartItemControls = ({ item, togglePreviewExtrasHandler, toggleAlertHandler, deleteItemHandler }) => (
  <Wrapper>
    <StyledButton onClick={() => deleteItemHandler(item)}>
      <StyledXMarkIcon title='USUŃ PRODUKT Z KOSZYKA' />
    </StyledButton>
    {item.extrasNumber === null || item.extrasNumber === undefined ? null : item.pickedExtras.length !== 0 ? (
      <StyledButton id='extras' onClick={() => togglePreviewExtrasHandler(item.id)}>
        <StyledExtrasIcon id='extras' title='WYBRANE DODATKI' />
      </StyledButton>
    ) : (
      <StyledButton id='extras' onClick={() => toggleAlertHandler(item.id)}>
        <StyledAlertIcon id='extras' title='NIE WYBRAŁEŚ ŻADNYCH DODATKÓW' />
      </StyledButton>
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
