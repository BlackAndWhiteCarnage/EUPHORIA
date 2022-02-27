import  { useState } from 'react';
import PropTypes from 'prop-types';
import infoIcon from 'assets/icons/info-icon.svg';
import infoIconWhite from 'assets/icons/info-icon-white.svg';
import { Wrapper, InfoButton, Info } from './FormInfo.styles';

interface FormInfoProps {
  isHomePage: boolean
}

interface ToggleInfoType {
  toggleInfo: boolean
  setToggleInfo: React.Dispatch<React.SetStateAction<boolean>>
}

const FormInfo = ({ isHomePage }: FormInfoProps) => {
  const [toggleInfo, setToggleInfo] = useState<ToggleInfoType['toggleInfo']>(false);

  const toggleInfoHandler = (): void => {
    setToggleInfo(!toggleInfo);
  };

  return (
    <>
      {!isHomePage && (
        <Wrapper>
          <InfoButton onClick={toggleInfoHandler} id='active' title='Dodatkowe informacje' className={`${toggleInfo && 'active'}`}>
            <img src={infoIcon} alt='info icon black' />
            <img src={infoIconWhite} alt='info icon white' />
          </InfoButton>
          <Info className={`${toggleInfo && 'toggle'}`}>
            <p>
              Dane które podasz w formularzu służą jedynie do kontaktu oraz dalszych ustaleń zamówienia. Sama bardzo cenię anonimowość także nasze
              sekrety pozostaną naszymi sekretami
            </p>
            <p>
              Kupując przez stronę możesz liczyć na automatyczne rabaty które wynoszą:
              <br />
              <br />
              <br />
              Od 150zł otrzymasz 5% rabatu
              <br />
              <br />
              Od 250zł otrzymasz 10% rabatu
              <br />
              <br />
              Od 500zł otrzymasz 15% rabatu
              <br />
              <br />
              <br />
              *Sesje zdjęciowe które są TOPLESS lub NAGIE nie wliczają się do rabatu, mimo to dzięki nim otrzymasz pewne 15% na inne produkty!
            </p>
            <p>
              Ps. Jeśli mi nie ufasz, myślę że dobrym potwierdzeniem na uczciwość mojej działalności będzie Allegro do którego link znajdziesz na
              stronie.
            </p>
          </Info>
        </Wrapper>
      )}
    </>
  );
};

FormInfo.propTypes = {
  isHomePage: PropTypes.bool,
};

export default FormInfo;