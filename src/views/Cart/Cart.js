import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  CartItems,
  CartItem,
  ItemImage,
  ItemInfoWrapper,
  PickedExtrasWrapper,
  PickedExtras,
  HrefAndDeleteWrapper,
  StyledButton,
  StyledArrowIcon,
  StyledXMarkIcon,
  StyledExtrasIcon,
  StyledAlertIcon,
  FormWrapper,
  CostsInfoWrapper,
  Form,
  Label,
  Input,
  TextArea,
} from './Cart.styles';
import { matchMedia } from 'helpers/matchMedia';

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

  let cartValues = cart.map((item) => {
    return item.price;
  });

  let summary = () => {
    let values = cartValues.reduce((a, b) => a + b).toFixed(2);
    return values;
  };

  useEffect(() => {
    if (cart.length > 0) {
      summary();
    }
  }, [cart]);

  return (
    <Wrapper>
      <CartItems>
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
              {item.extrasNumber === null ? null : item.pickedExtras.length !== 0 ? (
                <StyledExtrasIcon onClick={() => togglePreviewExtrasHandler(item.id)} />
              ) : (
                <StyledAlertIcon />
              )}
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
        {!matchMedia.matches && <StyledButton text='ZAMAWIAM' />}
      </FormWrapper>
      <CostsInfoWrapper>
        <p>
          RAZEM <span>{cart.length > 0 && summary()}</span> ZŁ
        </p>
        <p>
          <span>DARMOWA</span> WYSYŁKA
        </p>
      </CostsInfoWrapper>
      {matchMedia.matches && <StyledButton text='ZAMAWIAM' />}
    </Wrapper>
  );
};

export default Cart;
