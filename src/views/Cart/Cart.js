import Button from 'components/Button/Button';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow-icon.svg';
import { ReactComponent as ExtrasIcon } from 'assets/icons/extras-icon.svg';
import { ReactComponent as XMarkIcon } from 'assets/icons/xmark-icon.svg';

const Wrapper = styled.div`
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

const CartItems = styled.div`
  width: 30%;
  /* min-width: 800px; */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  background: ${({ theme }) => theme.colors.white};
`;

const Header = styled.h4`
  margin: 30px 0;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const CartItem = styled.div`
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

const ItemImage = styled.img`
  max-width: 120px;
  height: 90%;
  object-fit: cover;
  margin-left: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
`;

const ItemInfoWrapper = styled.div`
  min-width: 180px;
  height: 90%;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.darkWhite};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PickedExtras = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
  margin: 5px 0;
`;

const PickedExtrasWrapper = styled.div`
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

const HrefAndDeleteWrapper = styled.div`
  min-width: 60px;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Form = styled.form`
  width: 70%;
  /* min-width: 800px; */
  background: ${({ theme }) => theme.colors.darkGrey};
  height: 100%;
`;

const CostsInfoWrapper = styled.div`
  position: absolute;
  width: auto;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  bottom: -80px;
`;

const StyledButton = styled(Button)`
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

const StyledXMarkIcon = styled(XMarkIcon)`
  min-width: 18px;
`;
const StyledExtrasIcon = styled(ExtrasIcon)`
  min-width: 18px;
`;
const StyledArrowIcon = styled(ArrowIcon)`
  min-width: 18px;
`;

const Cart = ({ cart, setCart }) => {
  console.log(cart);
  const [togglePreviewExtras, setTogglePreviewExtras] = useState();

  const togglePreviewExtrasHandler = (id) => {
    if (id === togglePreviewExtras) {
      setTogglePreviewExtras(false);
    } else {
      setTogglePreviewExtras(id);
    }
  };

  return (
    <Wrapper>
      <CartItems>
        <Header>KOSZYK</Header>
        {cart.map((item) => (
          <CartItem>
            <ItemImage src={item.images[0].url} />
            <ItemInfoWrapper>
              <p>{item.name}</p>
              <PickedExtrasWrapper className={togglePreviewExtras === item.id && 'show'}>
                <PickedExtras>WYBRANE DODATKI</PickedExtras>
                {item.pickedExtras.map((extras) => (
                  <>
                    <span>{extras}</span>
                  </>
                ))}
              </PickedExtrasWrapper>
              <p>{item.price} ZŁ</p>
            </ItemInfoWrapper>
            <HrefAndDeleteWrapper>
              <StyledXMarkIcon />
              <StyledExtrasIcon onClick={() => togglePreviewExtrasHandler(item.id)} />
              <StyledArrowIcon />
            </HrefAndDeleteWrapper>
          </CartItem>
        ))}
      </CartItems>
      <Form>dd</Form>
      <CostsInfoWrapper>
        <p>RAZEM 60 ZŁ</p>
        <p>DARMOWA WYSYŁKA</p>
      </CostsInfoWrapper>
      <StyledButton text='ZAMAWIAM' />
    </Wrapper>
  );
};

export default Cart;
