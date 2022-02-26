import PropTypes from 'prop-types';
import { Wrapper } from './NavItem.styles';

interface NavItemProps {
  className: string
  text: string
  to: string
}

const NavItem = ({ className, text, to }: NavItemProps) => (
  <Wrapper className={className} to={to} exact>
    {text}
  </Wrapper>
);

NavItem.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavItem;
