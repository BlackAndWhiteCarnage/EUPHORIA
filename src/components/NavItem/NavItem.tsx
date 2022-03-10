import PropTypes from 'prop-types';
import { ReactElement } from 'react';
import { Wrapper } from './NavItem.styles';
import { NavItemProps } from './NavItem.types';

const NavItem = ({ className, text, to }: NavItemProps): ReactElement => (
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
