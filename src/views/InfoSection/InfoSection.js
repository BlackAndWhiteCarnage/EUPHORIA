import React from 'react';
import Form from 'components/Form/Form';
// STYLES
import { InfoSectionWrapper, WhoAmI, HowToBuy, Step, Contact } from './InfoSection.styles';
import { Header } from 'views/OfferSection/OfferSection.styles';
// ICONS
import Step1 from 'assets/icons/1step.svg';
import Step2 from 'assets/icons/2step.svg';
import Step3 from 'assets/icons/3step.svg';
import Step4 from 'assets/icons/4step.svg';
import Step5 from 'assets/icons/5step.svg';
// ANIMATIONS
import { slideFromLeft, slideFromRight, fade } from 'animations/animations';
import { useScroll } from 'helpers/useScroll';
// HELPERS
import { matchMedia } from 'helpers/matchMedia';

const InfoSection = () => {
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();

  return (
    <InfoSectionWrapper>
      {/* WHO AM I BOX */}
      <WhoAmI id='whoAmI' variants={matchMedia.matches ? slideFromLeft : fade} animate={controls1} initial='hidden' ref={element1}>
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
      {/* HOW TO BUY BOX */}
      <HowToBuy id='howToBuy' variants={matchMedia.matches ? slideFromRight : fade} animate={controls2} initial='hidden' ref={element2}>
        <div>
          <header>JAK WYGLĄDA ZAKUP</header>
          <ul>
            <li>
              <Step src={Step1} />
              <p>
                Aby złożyć zamówienie wejdź w interesującą Cię kategorię, dodaj produkt do koszyka i wybierz dodatki po czym wyślij formularz
                kontaktowy w koszyku
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
      <Contact id='contact' variants={matchMedia.matches ? slideFromLeft : fade} animate={controls3} initial='hidden' ref={element3}>
        <div>
          <Form mainPage />
        </div>
      </Contact>
    </InfoSectionWrapper>
  );
};

export default InfoSection;
