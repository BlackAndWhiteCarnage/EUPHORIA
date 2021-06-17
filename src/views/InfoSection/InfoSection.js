import React, { useState } from 'react';
import emailjs from 'emailjs-com';
// COMPONENTS
import StyledButton from 'components/Button/Button';
// STYLES
import { InfoSectionWrapper, WhoAmI, HowToBuy, Step, Contact, Form } from './InfoSection.styles';
import { Header } from 'views/OfferSection/OfferSection.styles';
// ICONS
import Step1 from 'assets/icons/1step.svg';
import Step2 from 'assets/icons/2step.svg';
import Step3 from 'assets/icons/3step.svg';
import Step4 from 'assets/icons/4step.svg';
import Step5 from 'assets/icons/5step.svg';

const InfoSection = () => {
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
      emailjs.sendForm('service_pkn9ez9', 'template_btr6t4a', e.target, 'user_wfAnEXgFR6wa0u7anAPJf').then(
        (result) => {
          console.log(result.text);
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
    <InfoSectionWrapper>
      {/* WHO AM I CONTENT BOX */}
      <WhoAmI id='whoAmI'>
        <Header>Używana noszona bielizna fetysz euphoria</Header>
        <div>
          <header>CZYM SIĘ ZAJMUJĘ</header>
          <p>
            Hejka! Zajmuję się sprzedażą noszonej oraz używanej bielizny. W świat fetyszyzmu wkroczyłam z wielkim przytupem całe dwa lata temu a swoją
            działaność dalej poszerzam i rozwijam o różne nowości czy portale takie jak Allegro lub Onlyfans. Znajdziesz w mojej ofercie majtki,
            skarpetki, rajstopy, pończochy, zestawy bielizny oraz sesje zdjęciowe. Sporadycznie pojawiają się także buty! Nie uważam się za żadną
            królową tego świata aczkolwiek uprzedzam, dostając ode mnie paczuszkę sam mnie nią mianujesz. Lubię to co robię i mnie to cholernie
            podnieca, stąd także przywiązuję do tego ogromną wagę a przygotowując zamówienia do każdego klienta podchodzę indywidualnie. Jeśli nie
            masz pojęcia z czym to się wiążę lub jak to wszystko działa, serdecznie zapraszam do kontaktu gdyż chętnie pomogę i wprowadzę Cię w świat
            fetyszy.
          </p>
        </div>
      </WhoAmI>
      {/* HOW TO BUY CONTENT BOX */}
      <HowToBuy id='howToBuy'>
        <div>
          <header>JAK WYGLĄDA ZAKUP</header>
          <ul>
            <li>
              <Step src={Step1} />
              <p>
                Aby złożyć zamówienie wejdź w interesującą Cię kategorię, dodaj produkt do koszyka i wybierz dodatki po czym wypełnij formularz
                kontaktowy
              </p>
            </li>
            <li>
              <Step src={Step2} />
              <p>Następnie zamówienie trafia do mnie więc mogę się do Ciebie odezwać aby omówić szczegóły</p>
            </li>
            <li>
              <Step src={Step3} />
              <p>Ustalamy razem formę płatności, i rezerwujemy termin wysyłki po wpłacie</p>
            </li>
            <li>
              <Step src={Step4} />
              <p>Kiedy przyjdzie czas na Twoje zamówienie zaczynam je przygotowywać według naszych ustaleń</p>
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
            />
            <label htmlFor='Email'>EMAIL</label>
            <input
              id='Email'
              onChange={emailHandler}
              className={`${feedback === 2 && !validEmail && 'ERROR'} ${validEmail && 'VALID'}`}
              name='email'
              placeholder={'EMAIL'}
            />
            <label htmlFor='Message'>WIADOMOŚĆ</label>
            <textarea
              id='Message'
              className={`${feedback === 2 && !validMessage && 'ERROR'} ${validMessage && 'VALID'}`}
              onChange={messageHandler}
              name='message'
              placeholder={'PRZYNEJMNIEJ 20 ZNAKÓW'}
            />
            <StyledButton text='WYŚLIJ' className={feedback === 1 ? 'OK' : feedback === 2 && 'ERROR'} type='submit' click={checkValid} />
          </Form>
        </div>
      </Contact>
    </InfoSectionWrapper>
  );
};

export default InfoSection;
