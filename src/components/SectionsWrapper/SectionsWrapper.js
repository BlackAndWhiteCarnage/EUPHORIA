import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  background: ${({ theme }) => theme.colors.darkWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 2px;
  justify-content: center;
`;

const Wrapper = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
