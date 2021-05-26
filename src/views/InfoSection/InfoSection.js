import React from 'react';
import styled from 'styled-components';
import Step1 from 'assets/icons/1step.svg';
import Step2 from 'assets/icons/2step.svg';
import Step3 from 'assets/icons/3step.svg';
import Step4 from 'assets/icons/4step.svg';
import Step5 from 'assets/icons/5step.svg';

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.darkWhite};
  position: relative;
  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: 40px;
    font-weight: bolder;
    letter-spacing: 2px;
  }
  line-height: 160%;
`;
const WhoAmI = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 95%;
  height: 660px;
  background: ${({ theme }) => theme.colors.crimsonRed};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  div {
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-25%, -50%);
    width: 80%;
    height: 70%;
    color: ${({ theme }) => theme.colors.white};
  }
`;
const HowToBuy = styled.div`
  position: absolute;
  right: 0;
  top: 35%;
  width: 80%;
  height: 650px;
  background: ${({ theme }) => theme.colors.darkGrey};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  div {
    position: absolute;
    top: 50%;
    right: 20%;
    width: 60%;
    height: 85%;
    transform: translate(20%, -50%);
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  li {
    list-style: none;
    display: flex;
    align-items: center;
    p {
      margin: 25px;
    }
  }
`;
const Contact = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40%;
  height: 650px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 80%;
    height: 80%;
  }
`;
const Step = styled.img``;
const Form = styled.form`
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.m};
  label {
    margin: 15px 0;
    font-weight: bolder;
  }
  input {
    width: 100%;
    height: 40px;
    border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  }
  button {
    position: absolute;
    width: 110px;
    height: 40px;
    border: none;
    right: 0;
    bottom: 0;
    font-size: ${({ theme }) => theme.fontSize.m};
    background: ${({ theme }) => theme.colors.crimsonRed};
    color: ${({ theme }) => theme.colors.darkWhite};
    font-weight: bolder;
    letter-spacing: 2px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  }
`;

const InfoSection = () => {
  return (
    <Wrapper>
      <WhoAmI>
        <div>
          <h1>CZYM SIĘ ZAJMUJĘ</h1>
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
      <HowToBuy>
        <div>
          <h1>JAK WYGLĄDA ZAKUP</h1>
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
      <Contact>
        <div>
          <h1>KONTAKT</h1>
          <Form>
            <label>IMIĘ</label>
            <input></input>
            <label>EMAIL</label>
            <input></input>
            <label>WIADOMOŚĆ</label>
            <input></input>
            <button>WYŚLIJ</button>
          </Form>
        </div>
      </Contact>
    </Wrapper>
  );
};

export default InfoSection;
