import React from 'react';
import { Wrapper, WhoAmI, HowToBuy, Step, Contact, Form } from './InfoSection.styles';
import Step1 from 'assets/icons/1step.svg';
import Step2 from 'assets/icons/2step.svg';
import Step3 from 'assets/icons/3step.svg';
import Step4 from 'assets/icons/4step.svg';
import Step5 from 'assets/icons/5step.svg';

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
          <Form>
            <h1>KONTAKT</h1>
            <label>IMIĘ</label>
            <input></input>
            <label>EMAIL</label>
            <input></input>
            <label>WIADOMOŚĆ</label>
            <textarea></textarea>
            <button>WYŚLIJ</button>
          </Form>
        </div>
      </Contact>
    </Wrapper>
  );
};

export default InfoSection;
