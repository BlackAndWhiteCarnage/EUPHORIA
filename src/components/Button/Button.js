import React from 'react';
import PropTypes from 'prop-types';
// HELPERS
import { isInCartHandler } from 'helpers/isInCartHandler';
// STYLES
import { Wrapper } from './Button.styles';

const Button = ({ text, className, click, id, itemID, cart, type }) => (
  <Wrapper className={`${className} ${isInCartHandler(itemID, cart)}`} onClick={click} id={id} type={type}>
    {text}
  </Wrapper>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  click: PropTypes.func,
  id: PropTypes.string,
  itemID: PropTypes.string,
  cart: PropTypes.array,
  type: PropTypes.string,
};

export default Button;
