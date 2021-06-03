import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.button`
  cursor: pointer;
  position: relative;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  background: ${({ theme }) => theme.colors.crimsonRed};
  color: ${({ theme }) => theme.colors.darkWhite};
  font-weight: bolder;
  letter-spacing: 2px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  z-index: 1;
  overflow: hidden;
  transition: 0.5s ease;
  &::before {
    content: '';
    transition: 0.5s ease;
    position: absolute;
    width: 0;
    height: 0;
    background: ${({ theme }) => theme.colors.darkGrey};
    top: 100%;
    left: -100%;
    z-index: -1;
    border-radius: 50%;
  }
  &:hover {
    transition: 0.5s ease;
    transform: scale(0.95);
    &::before {
      width: calc(100% + 200px);
      height: calc(100% + 200px);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: 0.5s ease;
    }
  }
`;

const Button = ({ text, className, click }) => (
  <Wrapper className={className} onClick={click}>
    {text}
  </Wrapper>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
