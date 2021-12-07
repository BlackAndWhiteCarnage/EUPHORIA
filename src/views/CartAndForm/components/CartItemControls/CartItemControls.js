import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledButton, StyledLink, Icon } from './CartItemControls.styles';
import ArrowIcon from 'assets/icons/arrow-icon.svg';
import ExtrasIcon from 'assets/icons/extras-icon.svg';
import XMarkIcon from 'assets/icons/xmark-icon.svg';
import AlertIcon from 'assets/icons/alert-icon.svg';
import ArrowIconWhite from 'assets/icons/arrow-icon-white.svg';
import ExtrasIconWhite from 'assets/icons/extras-icon-white.svg';
import XMarkIconWhite from 'assets/icons/xmark-icon-white.svg';
import AlertIconWhite from 'assets/icons/alert-icon-white.svg';

const CartItemControls = ({ item, togglePreviewExtrasHandler, toggleAlertHandler, deleteItemHandler }) => (
  <Wrapper>
    <StyledButton onClick={() => deleteItemHandler(item)} title='Usuń z koszyka' className='delete'>
      <Icon src={XMarkIcon} className='defaultIcon' />
      <Icon src={XMarkIconWhite} className='hoverIcon' />
    </StyledButton>
    {item.extrasNumber === null || item.extrasNumber === undefined ? null : item.pickedExtras.length !== 0 ? (
      <StyledButton id='extras' onClick={() => togglePreviewExtrasHandler(item.id)} title='Wybrane dodatki' className='extras'>
        <Icon src={ExtrasIcon} id='extras' className='defaultIcon' />
        <Icon src={ExtrasIconWhite} id='extras' className='hoverIcon' />
      </StyledButton>
    ) : (
      <StyledButton id='extras' onClick={() => toggleAlertHandler(item.id)} title='Nie wybrałeś żadnych dadatków' className='alert'>
        <Icon src={AlertIcon} id='extras' className='defaultIcon' />
        <Icon src={AlertIconWhite} id='extras' className='hoverIcon' />
      </StyledButton>
    )}
    <StyledLink to={`/${item.id}`} title={`Przejdź do: ${item.name}`}>
      <Icon src={ArrowIcon} className='defaultIcon' />
      <Icon src={ArrowIconWhite} className='hoverIcon' />
    </StyledLink>
  </Wrapper>
);

CartItemControls.propTypes = {
  item: PropTypes.object.isRequired,
  togglePreviewExtrasHandler: PropTypes.func.isRequired,
  toggleAlertHandler: PropTypes.func.isRequired,
  deleteItemHandler: PropTypes.func.isRequired,
};

export default CartItemControls;
