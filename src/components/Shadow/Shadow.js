import React from 'react';
import styled from 'styled-components';

const ShadowWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 0;
  bottom: 0;
  z-index: 1000;
  box-shadow: 0px 0px 100px 50px ${({ theme }) => theme.colors.darkWhite};
`;

const Shadow = () => <ShadowWrapper />;

export default Shadow;
