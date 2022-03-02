import PropTypes from 'prop-types';
import { useForm } from 'helpers/useForm';
import FormInfo from 'components/FormInfo/FormInfo';
import { FormWrapper, Label, Input, TextArea, Checkbox, CheckboxWrapper, StyledButton, AccualForm } from './Form.styles';
import { CartType } from 'Root'

interface FormProps {
  cart?: CartType['cart']
  isHomePage: boolean
}

const Form = ({ cart, isHomePage }: FormProps) => {
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

  return (
    <FormWrapper className={`${isHomePage && 'homePage'}`}>
      <AccualForm onSubmit={sendEmail} className={`${isHomePage && 'homePage'}`}>
        <Label htmlFor='name'>IMIĘ</Label>
        <Input
          onChange={nameHandler}
          id='name'
          name='name'
          className={`${feedback === 2 && !validName && 'ERROR'} ${validName && 'VALID'}`}
          placeholder='Min. 5 znaków'
        />
        <Label htmlFor='email'>EMAIL</Label>
        <Input onChange={emailHandler} className={`${feedback === 2 && !validEmail && 'ERROR'} ${validEmail && 'VALID'}`} name='email' id='email' />
        <Label htmlFor='message'>WIADOMOŚĆ</Label>
        <TextArea
          className={`${feedback === 2 && !validMessage && 'ERROR'} ${validMessage && 'VALID'}`}
          onChange={messageHandler}
          name='message'
          id='message'
          placeholder='Min. 20 zanków'
        />
        {!isHomePage && (
          <CheckboxWrapper className={`${feedback === 2 && !validCart && 'ERROR'}`}>
            <label htmlFor='checkbox'>WYRAŻAM ZGODĘ NA PRZETWAŻANIE MOJEGO KOSZYKA</label>
            <Checkbox type='checkbox' id='checkbox' onChange={cartItemsHandler} name='cart' />
          </CheckboxWrapper>
        )}
        <StyledButton
          text={!isHomePage ? 'ZAMAWIAM' : 'WYŚLIJ'}
          className={`${emailSend ? 'OK' : feedback === 2 ? 'ERROR' : feedback === 1 && 'SENDING'}`}
          click={checkValid}
        />
        <FormInfo isHomePage={isHomePage} />
      </AccualForm>
    </FormWrapper>
  );
};

Form.propTypes = {
  cart: PropTypes.array,
  isHomePage: PropTypes.bool.isRequired,
};

export default Form;
