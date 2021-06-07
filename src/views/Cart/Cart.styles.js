import styled from 'styled-components';
import Button from 'components/Button/Button';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow-icon.svg';
import { ReactComponent as ExtrasIcon } from 'assets/icons/extras-icon.svg';
import { ReactComponent as XMarkIcon } from 'assets/icons/xmark-icon.svg';

export const Wrapper = styled.div`
  position: relative;
  width: 80%;
  height: 55vh;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-between;
  margin-top: 20px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 1200px) {
    width: 95%;
  }
`;

export const CartItems = styled.div`
  width: 30%;
  /* min-width: 800px; */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  background: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.h4`
  margin: 30px 0;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const CartItem = styled.div`
  position: relative;
  width: 400px;
  background: ${({ theme }) => theme.colors.crimsonRed};
  min-height: 180px;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const ItemImage = styled.img`
  max-width: 120px;
  height: 90%;
  object-fit: cover;
  margin-left: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
`;

export const ItemInfoWrapper = styled.div`
  min-width: 180px;
  height: 90%;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.darkWhite};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const PickedExtras = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
  margin: 5px 0;
`;

export const PickedExtrasWrapper = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: 0;
  background: ${({ theme }) => theme.colors.darkGrey};
  opacity: 0;
  transition: 0.5s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  &.show {
    opacity: 1;
    width: calc(100% - 60px);
    transition: 0.5s ease;
    overflow-y: scroll;
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 5px;
    background: ${({ theme }) => theme.colors.darkWhite};
    color: ${({ theme }) => theme.colors.darkGrey};
    padding: 10px;
  }
`;

export const HrefAndDeleteWrapper = styled.div`
  min-width: 60px;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const FormWrapper = styled.div`
  width: 70%;
  background: ${({ theme }) => theme.colors.darkGrey};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 50%;
  /* background: ${({ theme }) => theme.colors.darkWhite}; */
  height: 60%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin: 10px 0 20px 0;
  width: 100%;
  color: ${({ theme }) => theme.colors.darkWhite};
`;

export const Input = styled.input`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.darkWhite};
  font-family: 'Montserrat', sans-serif;
  padding: 10px;
  background: none;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.darkWhite};
  font-family: 'Montserrat', sans-serif;
  padding: 10px;
  background: none;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  resize: none;
`;

export const CostsInfoWrapper = styled.div`
  position: absolute;
  width: auto;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  bottom: -80px;
`;

export const StyledButton = styled(Button)`
  position: absolute;
  bottom: -80px;
  right: 0;
  padding: 10px;
  min-width: 200px;
  z-index: 15;
  @media screen and (min-width: 1250px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 0;
    width: auto;
    white-space: nowrap;
  }
`;

export const StyledXMarkIcon = styled(XMarkIcon)`
  min-width: 18px;
`;
export const StyledExtrasIcon = styled(ExtrasIcon)`
  min-width: 18px;
`;
export const StyledArrowIcon = styled(ArrowIcon)`
  min-width: 18px;
`;
