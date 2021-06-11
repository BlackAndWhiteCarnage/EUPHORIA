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
  StyledAlertLink,
  Header,
  HeaderInfoWrapper,
  StyledArrowDown,
  EmptyCartInfo,
  Discounts,
  Info,
} from './Cart.styles';
import { matchMedia } from 'helpers/matchMedia';
import ArrowIcon from 'assets/icons/arrow-icon.svg';

const Cart = ({ cart, setCart }) => {
  const [togglePreviewExtras, setTogglePreviewExtras] = useState();
  const [toggleAlert, setToggleAlert] = useState();
  const [toggleInfo, setToggleInfo] = useState(false);

  const togglePreviewExtrasHandler = (id) => {
    if (id === togglePreviewExtras) {
      setTogglePreviewExtras(false);
    } else {
      setTogglePreviewExtras(id);
      setToggleAlert(false);
    }
  };

  const deleteItemHandler = (item) => {
    setCart(cart.filter((i) => i.id !== item.id));
  };

  const toggleAlertHandler = (id) => {
    if (id === toggleAlert) {
      setToggleAlert(false);
    } else {
      setTogglePreviewExtras(false);
      setToggleAlert(id);
    }
  };

  let cartValues = cart.map((item) => {
    return item.price;
  });

  let toggleInfoHandler = () => {
    setToggleInfo(!toggleInfo);
  };

  let summary = () => {
    let values = cartValues.reduce((a, b) => a + b).toFixed(2);
    return values;
  };

  useEffect(() => {
    if (cart.length > 0) {
      summary();
    }
  }, [cart]);

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target.id !== 'extras') {
        setTogglePreviewExtras(false);
        setToggleAlert(false);
      }
    });

    return;
  }, []);

  return (
    <Wrapper>
      {cart.length > 0 ? (
        <>
          <CartItems>
            {cart.map((item) => (
              <CartItem>
                <ItemImage src={item.images[0].url} />
                <ItemInfoWrapper>
                  <p>{item.name}</p>
                  <PickedExtrasWrapper
                    className={`${togglePreviewExtras === item.id && 'show'} ${toggleAlert === item.id && 'showAlert'}`}
                    id='extras'
                  >
                    {togglePreviewExtras ? (
                      <>
                        <PickedExtras>WYBRANE DODATKI</PickedExtras>
                        {item.pickedExtras.map((extras) => (
                          <>
                            <span>{extras}</span>
                          </>
                        ))}
                      </>
                    ) : (
                      toggleAlert && (
                        <StyledAlertLink to={`/${item.id}`} id='extras'>
                          <PickedExtras>
                            NIE WYBRAŁEŚ ŻADNYCH DODATKÓW, <strong>KLIKNIJ</strong> ABY PRZEJŚĆ DO TEGO PRZEDMIOTU I WYBRAĆ.
                            <strong> CHYBA ŻE NIE CHCESZ!</strong>
                          </PickedExtras>
                        </StyledAlertLink>
                      )
                    )}
                  </PickedExtrasWrapper>
                  <p>{item.price} ZŁ</p>
                </ItemInfoWrapper>
                <HrefAndDeleteWrapper>
                  <StyledXMarkIcon onClick={() => deleteItemHandler(item)} />
                  {item.extrasNumber === null || item.extrasNumber === undefined ? null : item.pickedExtras.length !== 0 ? (
                    <StyledExtrasIcon onClick={() => togglePreviewExtrasHandler(item.id)} id='extras' />
                  ) : (
                    <StyledAlertIcon onClick={() => toggleAlertHandler(item.id)} id='extras' />
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
            <Info onClick={toggleInfoHandler} className={toggleInfo && 'show'}>
              {/* <img src={ArrowIcon} /> */}Informacje
            </Info>
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
        </>
      ) : (
        <EmptyCartInfo>TWÓJ KOSZYK JEST PUSTY</EmptyCartInfo>
      )}
    </Wrapper>
  );
};

export default Cart;
