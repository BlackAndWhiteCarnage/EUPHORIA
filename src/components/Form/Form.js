import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
// HELPERS
import { summary } from 'helpers/summary';
// STYLES
import {
  FormWrapper,
  SendingInProgress,
  StyledProgressIcon,
  StyledCheckIcon,
  Label,
  Input,
  TextArea,
  Checkbox,
  CheckboxWrapper,
  StyledButton,
  Info,
  AccualForm,
} from './Form.styles';

const Form = ({ cart, homePage }) => {
  const [emailSend, setEmailSend] = useState(false);
  const [toggleInfo, setToggleInfo] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validMessage, setValidMessage] = useState(false);
  const [validCart, setValidCart] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const location = useLocation();

  let toggleInfoHandler = () => {
    setToggleInfo(!toggleInfo);
  };

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

    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userID = process.env.REACT_APP_USER_ID;

    const handleSendEmail = () => {
      emailjs.sendForm(`${serviceID}`, `${templateID}`, e.target, `${userID}`).then(
        (result) => {
          console.log(result.text);
          setEmailSend(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    };

    if (location.pathname !== '/') {
      if (validEmail && validMessage && checkbox && validName && validCart) {
        handleSendEmail();
      }
    } else {
      if (validEmail && validMessage && validName) {
        handleSendEmail();
      }
    }
  }

  const checkValid = () => {
    if (location.pathname !== '/') {
      if (validEmail && validMessage && checkbox && validName && validCart) {
        setFeedback(1);
      } else {
        setFeedback(2);
        setTimeout(() => {
          setFeedback(0);
        }, 2000);
      }
    } else {
      if (validEmail && validMessage && validName) {
        setFeedback(1);
      } else {
        setFeedback(2);
        setTimeout(() => {
          setFeedback(0);
        }, 2000);
      }
    }
  };

  //After checkbox marked, assign carts ID's as a input value
  const cartItemsHandler = (e) => {
    setCheckbox(!checkbox);
    setValidCart(!validCart);

    let ids = cart.map((item) => {
      return item.images[0].url + ' + DODATKI:' + item.pickedExtras;
    });

    let sum = summary(cart);

    e.target.value = ids + ' cena ' + sum;
  };

  return (
    <FormWrapper className={homePage && 'homePage'}>
      <AccualForm onSubmit={sendEmail} className={homePage && 'homePage'}>
        <Label htmlFor='name'>IMIĘ</Label>
        <Input
          onChange={nameHandler}
          id='name'
          name='name'
          className={`${feedback === 2 && !validName && 'ERROR'} ${validName && 'VALID'}`}
          placeholder='PRZYNAJMNEJ 5 ZNAKÓW'
        />
        <Label htmlFor='email'>EMAIL</Label>
        <Input
          onChange={emailHandler}
          className={`${feedback === 2 && !validEmail && 'ERROR'} ${validEmail && 'VALID'}`}
          name='email'
          id='email'
          placeholder='EMAIL'
        />
        <Label htmlFor='message'>WIADOMOŚĆ</Label>
        <TextArea
          className={`${feedback === 2 && !validMessage && 'ERROR'} ${validMessage && 'VALID'}`}
          onChange={messageHandler}
          name='message'
          id='message'
          placeholder='PRZYNEJMNIEJ 20 ZNAKÓW'
        />
        {!homePage && (
          <CheckboxWrapper className={feedback === 2 && !validCart && 'ERROR'}>
            <p>WYRAŻAM ZGODĘ NA PRZETWAŻANIE MOJEGO KOSZYKA</p>
            <Checkbox type='checkbox' onChange={cartItemsHandler} name='cart' />
          </CheckboxWrapper>
        )}
        <StyledButton
          text={!homePage ? 'ZAMAWIAM' : 'WYŚLIJ'}
          className={feedback === 1 ? 'OK' : feedback === 2 && 'ERROR'}
          type='submit'
          click={checkValid}
        />
      </AccualForm>
      {!homePage && (
        <>
          <SendingInProgress className={feedback === 1 && 'SENDING'}>
            {!emailSend && <StyledProgressIcon />}
            {emailSend && <StyledCheckIcon />}
          </SendingInProgress>
          <Info onClick={toggleInfoHandler} className={toggleInfo && 'show'} id='active'>
            {!toggleInfo
              ? 'Informacje'
              : 'PODAJĄC DANE NIE MUSISZ WPISYWAĆ SWOJEGO PRAWDZIWEGO IMIENIA A INFORMACJĘ KTÓRE DOSTANĘ BĘDĄ WYKORZYSTANE JEDYNIE W CELACH KONTAKTOWO/WYSYŁKOWYCH. NIE MARTW SIĘ DOSTANĘ ZAWARTOŚĆ TWOJEGO KOSZYKA NA MAILA. JEŚLI NIE CZUJESZ SIĘ KOMFORTOWO WYPEŁNIAJĄC FORMULARZ MOŻESZ SKONTAKTOWAĆ SIĘ ZE MNĄ POPRZEZ KTÓRĄŚ Z INNYCH OPCJI DOSTĘPNYCH NA STRONIE. GDY TYLKO ZOBACZĘ TWOJĄ WIADOMOŚĆ NA PEWNO ODPISZĘ I USTALIMY SZCZEGÓLY. PRAGNĘ RÓWNIESZ POINFOROWAĆ ŻE NIE UDOSTĘPNIAM SWOJEJ NAGOŚCI.'}
          </Info>
        </>
      )}
    </FormWrapper>
  );
};

Form.propTypes = {
  cart: PropTypes.array,
  summary: PropTypes.func,
  homePage: PropTypes.bool,
};

export default Form;
