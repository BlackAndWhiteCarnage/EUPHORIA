import Form from 'components/Form/Form';
import { Wrapper, WhoAmI, HowToBuy, Step, Contact } from './HomeInfoSection.styles';
import Step1 from 'assets/icons/1step.svg';
import Step2 from 'assets/icons/2step.svg';
import Step3 from 'assets/icons/3step.svg';
import Step4 from 'assets/icons/4step.svg';
import Step5 from 'assets/icons/5step.svg';
import { ReactElement } from 'react';

const HomeInfoSection = (): ReactElement => (
  <Wrapper>
    <WhoAmI id='whoAmI'>
      <div>
        <header>CZYM SIĘ ZAJMUJĘ</header>
        <p>
          Hejka! Zajmuję się sprzedażą noszonej oraz używanej bielizny. W świat fetyszyzmu wkroczyłam z wielkim przytupem całe dwa lata temu a swoją
          działaność dalej poszerzam i rozwijam o różne nowości czy portale takie jak Allegro lub Onlyfans. Znajdziesz w mojej ofercie majtki,
          skarpetki, rajstopy, pończochy, zestawy bielizny oraz sesje zdjęciowe. Sporadycznie pojawiają się także buty! Nie uważam się za żadną
          królową tego świata aczkolwiek uprzedzam, dostając ode mnie paczuszkę sam mnie nią mianujesz. Lubię to co robię i mnie to cholernie
          podnieca, stąd także przywiązuję do tego ogromną wagę a przygotowując zamówienia do każdego klienta podchodzę indywidualnie. Jeśli nie masz
          pojęcia z czym to się wiążę lub jak to wszystko działa, serdecznie zapraszam do kontaktu gdyż chętnie pomogę i wprowadzę Cię w świat
          fetyszy.
        </p>
      </div>
    </WhoAmI>
    <HowToBuy id='howToBuy'>
      <div>
        <header>JAK WYGLĄDA ZAKUP</header>
        <ul>
          <li>
            <Step src={Step1} alt='krok pierwszy' />
            <p>
              Aby złożyć zamówienie wejdź w interesującą Cię kategorię, dodaj produkt do koszyka i wybierz dodatki po czym wyślij formularz kontaktowy
              w koszyku
            </p>
          </li>
          <li>
            <Step src={Step2} alt='krok drugi' />
            <p>Następnie zamówienie trafia do mnie więc mogę się do Ciebie odezwać aby omówić szczegóły</p>
          </li>
          <li>
            <Step src={Step3} alt='krok trzeci' />
            <p>Ustalamy razem formę płatności, i rezerwujemy termin wysyłki po wpłacie</p>
          </li>
          <li>
            <Step src={Step4} alt='krok czwarty' />
            <p>Kiedy przyjdzie czas na Twoje zamówienie zaczynam je przygotowywać według naszych ustaleń</p>
          </li>
          <li>
            <Step src={Step5} alt='krok piąty' />
            <p>Paczuszka zostaje do Ciebie wysłana!</p>
          </li>
        </ul>
      </div>
    </HowToBuy>
    <Contact id='contact'>
      <div>
        <Form isHomePage={true} />
      </div>
    </Contact>
  </Wrapper>
);

export default HomeInfoSection;
