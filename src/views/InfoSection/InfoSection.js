import React, { useState } from 'react';
import emailjs from 'emailjs-com';
// COMPONENTS
import StyledButton from 'components/Button/Button';
// STYLES
import { Wrapper, WhoAmI, HowToBuy, Step, Contact, Form } from './InfoSection.styles';
// ICONS
import Step1 from 'assets/icons/1step.svg';
import Step2 from 'assets/icons/2step.svg';
import Step3 from 'assets/icons/3step.svg';
import Step4 from 'assets/icons/4step.svg';
import Step5 from 'assets/icons/5step.svg';

const InfoSection = () => {
  const [emailSend, setEmailSend] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validMessage, setValidMessage] = useState(false);
  const [feedback, setFeedback] = useState(null);

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

    if (validEmail && validMessage && validName) {
      setEmailSend(true);
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
    if (validEmail && validMessage && validName) {
      setFeedback(1);
    } else {
      setFeedback(2);
      setTimeout(() => {
        setFeedback(0);
      }, 2000);
    }
  };

  return (
    <Wrapper>
      {/* WHO AM I CONTENT BOX */}
      <WhoAmI id='whoAmI'>
        <div>
          <header>CZYM SIĘ ZAJMUJĘ</header>
          <p>
            Zacznę od tego że do każdego klienta podchodzę indywidualnie. Kupując majteczki lub inny produkt masz gwarancję dyskrecji oraz tego że
            pozostaniesz anonimowy a ja będę mogła zaangażować się w Twoje zamówienie. Ba! Składając je, nie musisz nawet podawać imienia. Zamówienia
            zawsze są zapakowane starannie w pudełeczko oraz owinięte papierem prezentowym ze wstążeczką a do tego całość zawsze akcentuje zapachem
            moich ulubionych perfum. Same majteczki także są wysokich lotów bo większość z nich jest bawełniana a co za tym idzie lepiej chłoną mój
            zapach i dłużej go utrzymują. Ponadto każda sztuka pakowana jest w woreczek strunowy. A tak o sobie samej powiem że mam 20 lat więc jestem
            młodziutka, seksowna i cholernie zboczona. O więcej szczegółów będziesz musiał spytać sam.
          </p>
        </div>
      </WhoAmI>
      {/* HOW TO BOY CONTENT BOX */}
      <HowToBuy id='howToBuy'>
        <div>
          <header>JAK WYGLĄDA ZAKUP</header>
          <ul>
            <li>
              <Step src={Step1} />
              <p>Aby złożyć zamówienie wejdź w interesującą Cię kategorię, dodaj produkt do koszyka po czym wypełnij formularz kontaktowy</p>
            </li>
            <li>
              <Step src={Step2} />
              <p>Następnie zamówienie trafia do mnie gdzie ustalamy szczegóły oraz koszta</p>
            </li>
            <li>
              <Step src={Step3} />
              <p>Po tym otrzymasz ode mnie numer konta bankowego na które przelejesz ustaloną kwotę</p>
            </li>
            <li>
              <Step src={Step4} />
              <p>Zaczynam przygotowywać Twoje majteczki, skarpetki lub inną wybraną rzecz według naszych ustaleń</p>
            </li>
            <li>
              <Step src={Step5} />
              <p>Paczuszka zostaje do Ciebie wysłana!</p>
            </li>
          </ul>
        </div>
      </HowToBuy>
      {/* CONTACT BOX */}
      <Contact id='contact'>
        <div>
          <Form onSubmit={sendEmail}>
            <header>KONTAKT</header>
            <label htmlFor='Name'>IMIĘ</label>
            <input
              id='Name'
              onChange={nameHandler}
              name='name'
              className={`${feedback === 2 && !validName && 'ERROR'} ${validName && 'VALID'}`}
              placeholder='PRZYNAJMNEJ 5 ZNAKÓW'
            ></input>
            <label htmlFor='Email'>EMAIL</label>
            <input
              id='Email'
              onChange={emailHandler}
              className={`${feedback === 2 && !validEmail && 'ERROR'} ${validEmail && 'VALID'}`}
              name='email'
              placeholder={'EMAIL'}
            ></input>
            <label htmlFor='Message'>WIADOMOŚĆ</label>
            <textarea
              id='Message'
              className={`${feedback === 2 && !validMessage && 'ERROR'} ${validMessage && 'VALID'}`}
              onChange={messageHandler}
              name='message'
              placeholder={'PRZYNEJMNIEJ 20 ZNAKÓW'}
            ></textarea>
            <StyledButton text='WYŚLIJ' className={feedback === 1 ? 'OK' : feedback === 2 && 'ERROR'} type='submit' click={checkValid} />
          </Form>
        </div>
      </Contact>
    </Wrapper>
  );
};

export default InfoSection;
