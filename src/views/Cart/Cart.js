import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  CartItems,
  CartItem,
  Header,
  ItemImage,
  ItemInfoWrapper,
  PickedExtrasWrapper,
  PickedExtras,
  HrefAndDeleteWrapper,
  StyledButton,
  StyledArrowIcon,
  StyledXMarkIcon,
  StyledExtrasIcon,
  FormWrapper,
  CostsInfoWrapper,
  Form,
  Label,
  Input,
  TextArea,
} from './Cart.styles';

const Cart = ({ cart, setCart }) => {
  const [togglePreviewExtras, setTogglePreviewExtras] = useState();

  const togglePreviewExtrasHandler = (id) => {
    if (id === togglePreviewExtras) {
      setTogglePreviewExtras(false);
    } else {
      setTogglePreviewExtras(id);
    }
  };

  const deleteItemHandler = (item) => {
    setCart(cart.filter((i) => i.id !== item.id));
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
              <StyledXMarkIcon onClick={() => deleteItemHandler(item)} />
              {item.pickedExtras.length !== 0 && <StyledExtrasIcon onClick={() => togglePreviewExtrasHandler(item.id)} />}
              <Link to={`/${item.id}`}>
                <StyledArrowIcon />
              </Link>
            </HrefAndDeleteWrapper>
          </CartItem>
        ))}
      </CartItems>
      <FormWrapper>
        <Form>
          <Label>IMIĘ</Label>
          <Input />
          <Label>EMAIL</Label>
          <Input />
          <Label>WIADOMOŚĆ</Label>
          <TextArea />
        </Form>
      </FormWrapper>
      <CostsInfoWrapper>
        <p>RAZEM 60 ZŁ</p>
        <p>DARMOWA WYSYŁKA</p>
      </CostsInfoWrapper>
      <StyledButton text='ZAMAWIAM' />
    </Wrapper>
  );
};

export default Cart;
