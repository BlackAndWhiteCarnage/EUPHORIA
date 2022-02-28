import PropTypes from 'prop-types';
import { isInCartHandler } from 'helpers/isInCartHandler';
import { Wrapper } from './Button.styles';
import { CartType } from 'Root'

interface ButtonProps {
  text: string
  className?: string
  click: () => void
  id?: string
  itemID?: any
  cart?: CartType['cart']
}

const Button = ({ text, className, click, id, itemID, cart }: ButtonProps) => (
  <Wrapper className={`${className} ${isInCartHandler(itemID, cart)}`} onClick={click} id={id}>
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
