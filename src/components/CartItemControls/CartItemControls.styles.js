import styled from 'styled-components';
import { Link } from 'react-router-dom';
// ICONS
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow-icon.svg';
import { ReactComponent as ExtrasIcon } from 'assets/icons/extras-icon.svg';
import { ReactComponent as XMarkIcon } from 'assets/icons/xmark-icon.svg';
import { ReactComponent as AlertIcon } from 'assets/icons/alert-icon.svg';

export const Wrapper = styled.div`
  min-width: 60px;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 780px) {
    position: absolute;
    bottom: -40px;
    left: 0;
    width: 100%;
    height: 40px;
    flex-direction: row;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
  }
`;

export const StyledAlertIcon = styled(AlertIcon)`
  min-width: 18px;
  transition: 0.3s ease;
  cursor: pointer;
  @media screen and (min-width: 1200px) {
    &:hover {
      transform: scale(1.3);
      transition: 0.5s ease;
    }
  }
`;

export const StyledXMarkIcon = styled(XMarkIcon)`
  min-width: 18px;
  transition: 0.3s ease;
  cursor: pointer;
  @media screen and (min-width: 1200px) {
    &:hover {
      transform: scale(1.3) rotate(360deg);
      transition: 0.5s ease;
    }
  }
`;
export const StyledExtrasIcon = styled(ExtrasIcon)`
  min-width: 18px;
  transition: 0.3s ease;
  cursor: pointer;
  @media screen and (min-width: 1200px) {
    &:hover {
      transform: rotate(70deg) scale(1.3);
      transition: 0.5s ease;
    }
  }
`;
export const StyledArrowIcon = styled(ArrowIcon)`
  min-width: 18px;
  transition: 0.3s ease;
  cursor: pointer;
  @media screen and (min-width: 1200px) {
    &:hover {
      transform: translateX(5px) rotate(-10deg) scale(1.3);
      transition: 0.5s ease;
    }
  }
`;

export const StyledAlertLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
