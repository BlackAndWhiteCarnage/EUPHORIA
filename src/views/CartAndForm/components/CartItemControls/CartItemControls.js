import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Wrapper, StyledXMarkIcon, StyledExtrasIcon, StyledAlertIcon, StyledArrowIcon, StyledButton } from './CartItemControls.styles';

const CartItemControls = ({ item, togglePreviewExtrasHandler, toggleAlertHandler, deleteItemHandler }) => (
  <Wrapper>
    <StyledButton onClick={() => deleteItemHandler(item)} title='Usuń z koszyka'>
      <StyledXMarkIcon />
    </StyledButton>
    {item.extrasNumber === null || item.extrasNumber === undefined ? null : item.pickedExtras.length !== 0 ? (
      <StyledButton id='extras' onClick={() => togglePreviewExtrasHandler(item.id)} title='Wybrane dodatki'>
        <StyledExtrasIcon id='extras' />
      </StyledButton>
    ) : (
      <StyledButton id='extras' onClick={() => toggleAlertHandler(item.id)} title='Nie wybrałeś żadnych dadatków'>
        <StyledAlertIcon id='extras' />
      </StyledButton>
    )}
    <Link to={`/${item.id}`} title={`Przejdź do: ${item.name}`}>
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
