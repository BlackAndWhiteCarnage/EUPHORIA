import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.darkWhite};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

export default Wrapper;
