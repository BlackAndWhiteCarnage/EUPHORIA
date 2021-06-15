import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Button.styles';

const Button = ({ text, className, click, id, itemID, cart, type }) => {
  const checkIDHandler = () => {
    if (cart !== undefined && cart !== false) {
      if (cart.find((item) => item.id === itemID)) {
        return 'added';
      }
    }
  };

  return (
    <Wrapper className={`${className} ${checkIDHandler()}`} onClick={click} id={id} type={type}>
      {text}
    </Wrapper>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  click: PropTypes.func,
  id: PropTypes.string,
};

export default Button;
