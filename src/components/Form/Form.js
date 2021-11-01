import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'helpers/useForm';
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
  const [toggleInfo, setToggleInfo] = useState(false);

  const {
    sendEmail,
    nameHandler,
    validName,
    feedback,
    emailHandler,
    validEmail,
    messageHandler,
    validMessage,
    validCart,
    cartItemsHandler,
    checkValid,
    emailSend,
  } = useForm(cart);

  let toggleInfoHandler = () => {
    setToggleInfo(!toggleInfo);
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
          className={emailSend ? 'OK' : feedback === 2 ? 'ERROR' : feedback === 1 && 'SENDING'}
          type='submit'
          click={checkValid}
        />
      </AccualForm>
      {!homePage && (
        <Info onClick={toggleInfoHandler} className={toggleInfo && 'show'} id='active'>
          {!toggleInfo
            ? 'Informacje'
            : 'PODAJĄC DANE NIE MUSISZ WPISYWAĆ SWOJEGO PRAWDZIWEGO IMIENIA A INFORMACJĘ KTÓRE DOSTANĘ BĘDĄ WYKORZYSTANE JEDYNIE W CELACH KONTAKTOWO/WYSYŁKOWYCH. NIE MARTW SIĘ DOSTANĘ ZAWARTOŚĆ TWOJEGO KOSZYKA NA MAILA. JEŚLI NIE CZUJESZ SIĘ KOMFORTOWO WYPEŁNIAJĄC FORMULARZ MOŻESZ SKONTAKTOWAĆ SIĘ ZE MNĄ POPRZEZ KTÓRĄŚ Z INNYCH OPCJI DOSTĘPNYCH NA STRONIE. GDY TYLKO ZOBACZĘ TWOJĄ WIADOMOŚĆ NA PEWNO ODPISZĘ I USTALIMY SZCZEGÓLY. PRAGNĘ RÓWNIESZ POINFOROWAĆ ŻE NIE UDOSTĘPNIAM SWOJEJ NAGOŚCI.'}
        </Info>
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
