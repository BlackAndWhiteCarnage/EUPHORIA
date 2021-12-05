import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import { Wrapper } from './VerifyAge.styles';

const VerifyAge = ({ verifyAge, setVerifyAge }) => {
  const confirmAgeHandler = (bool) => {
    if (bool) {
      setVerifyAge(bool);
      localStorage.setItem('ageConfirmed', JSON.stringify(bool));
    } else {
      window.location = 'http://google.com';
    }
  };

  return (
    <Wrapper className={verifyAge && 'hide'}>
      <p>
        Wchodzisz na stronę która zawiera także treści erotyczne. <span>Portwiedź swój wiek klikając mam 18 lat</span>, jeśli nie spełniasz tego
        wymogu natychmiast opuść stronę!
      </p>
      <div>
        <Button text='Mam 18 lat' click={() => confirmAgeHandler(true)} />
        <Button text='Opuść stronę' click={() => confirmAgeHandler(false)} />
      </div>
    </Wrapper>
  );
};

VerifyAge.propTypes = {
  verifyAge: PropTypes.bool.isRequired,
  setVerifyAge: PropTypes.func.isRequired,
};

export default VerifyAge;
