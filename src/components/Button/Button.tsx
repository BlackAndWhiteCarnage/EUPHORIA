import PropTypes from 'prop-types';
import { isInCartHandler } from 'helpers/isInCartHandler';
import { Wrapper } from './Button.styles';
import { ReactElement } from 'react';
import { ButtonProps } from './Button.types';

const Button = ({ text, className, click, id, itemID, cart }: ButtonProps): ReactElement => (
  <Wrapper className={`${className} ${isInCartHandler(itemID, cart)}`} onClick={click} id={id}>
    {text}
  </Wrapper>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  click: PropTypes.func.isRequired,
  id: PropTypes.string,
  itemID: PropTypes.string,
  cart: PropTypes.array,
};

export default Button;
