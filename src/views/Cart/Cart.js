import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import ValidIcon from 'assets/icons/valid-icon.svg';
// ANIMATIONS
import { pageAnimation } from 'animations/animations';

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
  HeaderInfoWrapper,
  StyledArrowDown,
  EmptyCartInfo,
  Discounts,
  Info,
  Checkbox,
  CheckboxWrapper,
  SendingInProgress,
  StyledProgressIcon,
  StyledCheckIcon,
} from './Cart.styles';
import { Header } from 'views/OfferSection/OfferSection.styles';
import { matchMedia } from 'helpers/matchMedia';
import ArrowIcon from 'assets/icons/arrow-icon.svg';

const Cart = ({ cart, setCart }) => {
  const [togglePreviewExtras, setTogglePreviewExtras] = useState();
  const [toggleAlert, setToggleAlert] = useState();
  const [toggleInfo, setToggleInfo] = useState(false);
  const [deletingItem, setDeletingItem] = useState('');
  const [emailSend, setEmailSend] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validMessage, setValidMessage] = useState(false);
  const [validCart, setValidCart] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const togglePreviewExtrasHandler = (id) => {
    if (id === togglePreviewExtras) {
      setTogglePreviewExtras(false);
    } else {
      setTogglePreviewExtras(id);
      setToggleAlert(false);
    }
  };

  const deleteItemHandler = (item) => {
    setDeletingItem(item.id);
    setTimeout(() => {
      setDeletingItem('');
      setCart(cart.filter((i) => i.id !== item.id));
    }, 500);
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
    if (cartValues.length !== 0 && values < 150) {
      return values;
    } else if (values >= 150 && values < 250) {
      return ((values / 100) * 95).toFixed(2);
    } else if (values >= 250 && values < 500) {
      return ((values / 100) * 90).toFixed(2);
    } else if (values >= 500) {
      return ((values / 100) * 85).toFixed(2);
    } else {
      return '0';
    }
  };

  let discountValue = () => {
    let values = cartValues.reduce((a, b) => a + b).toFixed(2);

    return values - summary();
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

  //Form and emailjs logic
  const emailHandler = (e) => {
    const valid = /\S+@\S+\.\S+/;
    if (valid.test(e.target.value)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const nameHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value.length >= 5) {
      setValidName(true);
    } else {
      setValidName(false);
    }
  };

  const messageHandler = (e) => {
    if (e.target.value.length >= 20) {
      setValidMessage(true);
    } else {
      setValidMessage(false);
    }
  };

  function sendEmail(e) {
    e.preventDefault();

    if (validEmail && validMessage && checkbox && validName && validCart) {
      emailjs.sendForm('service_pkn9ez9', 'template_btr6t4a', e.target, 'user_wfAnEXgFR6wa0u7anAPJf').then(
        (result) => {
          console.log(result.text);
          setEmailSend(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  }

  const checkValid = () => {
    if (validEmail && validMessage && checkbox && validName && validCart) {
      setFeedback(1);
    } else {
      setFeedback(2);
      setTimeout(() => {
        setFeedback(0);
      }, 2000);
    }
  };

  //After checkbox marked, assign carts ID's as a input value
  const cartItemsHandler = (e) => {
    setCheckbox(!checkbox);
    setValidCart(!validCart);
    let ids = cart.map((item) => {
      return item.images[0].url + ' + DODATKI:' + item.pickedExtras;
    });
    let sum = summary();
    e.target.value = ids + ' cena ' + sum;
  };

  return (
    <Wrapper exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
      <Header>Fetysz majtki majteczki kup zamów noszone używane pięknie pachnące</Header>
      {cart.length > 0 ? (
        <>
          <CartItems>
            {cart.map((item) => (
              <CartItem className={item.id === deletingItem && 'deleting'}>
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
                  <StyledXMarkIcon onClick={() => deleteItemHandler(item)} title='USUŃ PRODUKT Z KOSZYKA' />
                  {item.extrasNumber === null || item.extrasNumber === undefined ? null : item.pickedExtras.length !== 0 ? (
                    <StyledExtrasIcon onClick={() => togglePreviewExtrasHandler(item.id)} id='extras' title='WYBRANE DODATKI' />
                  ) : (
                    <StyledAlertIcon onClick={() => toggleAlertHandler(item.id)} id='extras' title='NIE WYBRAŁEŚ ŻADNYCH DODATKÓW' />
                  )}
                  <Link to={`/${item.id}`} title='PRZEJDŹ DO TEGO PRODUKTU'>
                    <StyledArrowIcon />
                  </Link>
                </HrefAndDeleteWrapper>
              </CartItem>
            ))}
          </CartItems>
          <FormWrapper>
            <SendingInProgress className={feedback === 1 && 'SENDING'}>
              {!emailSend && <StyledProgressIcon />}
              {emailSend && <StyledCheckIcon />}
            </SendingInProgress>
            <Form onSubmit={sendEmail}>
              <Label className={validName && 'valid'} htmlFor='name'>
                IMIĘ
              </Label>
              <Input
                onChange={nameHandler}
                id='name'
                name='name'
                className={`${feedback === 2 && !validName && 'ERROR'} ${validName && 'VALID'}`}
                placeholder='PRZYNAJMNEJ 5 ZNAKÓW'
              />
              <Label className={validName && 'valid'} htmlFor='email'>
                EMAIL
              </Label>
              <Input
                onChange={emailHandler}
                className={`${feedback === 2 && !validEmail && 'ERROR'} ${validEmail && 'VALID'}`}
                name='email'
                id='email'
                placeholder={'EMAIL'}
              />
              <Label className={validName && 'valid'} htmlFor='message'>
                WIADOMOŚĆ
              </Label>
              <TextArea
                className={`${feedback === 2 && !validMessage && 'ERROR'} ${validMessage && 'VALID'}`}
                onChange={messageHandler}
                name='message'
                id='message'
                placeholder={'PRZYNEJMNIEJ 20 ZNAKÓW'}
              />
              <CheckboxWrapper className={feedback === 2 && !validCart && 'ERROR'}>
                <p>WYRAŻAM ZGODĘ NA PRZETWAŻANIE MOJEGO KOSZYKA</p>
                <Checkbox type='checkbox' onChange={cartItemsHandler} name='cart' />
              </CheckboxWrapper>
              <StyledButton text='ZAMAWIAM' className={feedback === 1 ? 'OK' : feedback === 2 && 'ERROR'} type='submit' click={checkValid} />
            </Form>
            {/* {!matchMedia.matches && ( */}
            {/* )} */}
            <Info onClick={toggleInfoHandler} className={toggleInfo && 'show'}>
              {/* <img src={ArrowIcon} /> */}Informacje
            </Info>
          </FormWrapper>
          <CostsInfoWrapper>
            <p>
              RAZEM <span>{cart.length > 0 && summary()}</span> ZŁ {summary() >= 142.5 && `W TYM RABAT ${discountValue().toFixed(2)} ZŁ`}
            </p>
            <p>
              <span>DARMOWA</span> WYSYŁKA
            </p>
          </CostsInfoWrapper>
          {/* {matchMedia.matches && (
            <StyledButton text='ZAMAWIAM' className={feedback === 1 ? 'OK' : feedback === 2 && 'ERROR'} type='submit' click={checkValid} />
          )} */}
        </>
      ) : (
        <EmptyCartInfo>TWÓJ KOSZYK JEST PUSTY</EmptyCartInfo>
      )}
    </Wrapper>
  );
};

export default Cart;
