import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './NavItem.styles';

const NavItem = ({ className, text, to }) => (
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
