import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { panties, socks, premium, tights } from 'data/extras';
import { Wrapper, ExtrasInfoWrapper, ExtrasInfo, ExtrasOption } from './ExtrasWrapper.styles';

const ExtrasWrapper = ({ data, setExtrasDataAndTimes, extrasDataAndTimes, toggleExtras, setToggleExtras }) => {
  const [pickExtras, setPickExtras] = useState({
    price: 0,
    pickedExtras: [],
  });

  useEffect(() => {
    data !== undefined && getExtrasHandler();

    return () => {};
  }, [data]);

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target.id !== 'extras') {
        setToggleExtras(false);
      }
    });

    return;
  }, []);

  const getExtrasHandler = () => {
    const name = data.category.name;

    if (name === 'majtki') {
      setExtrasDataAndTimes({
        times: 1,
        data: panties,
      });
    } else if (name === 'skarpetki') {
      setExtrasDataAndTimes({
        times: 1,
        data: socks,
      });
    } else if (name === 'rajstopy') {
      setExtrasDataAndTimes({
        times: 1,
        data: tights,
      });
    } else if (name === 'premium') {
      setExtrasDataAndTimes({
        times: premium.length,
        data: premium,
      });
    } else if (name === 'inne') {
      setExtrasDataAndTimes(undefined);
    } else {
      setExtrasDataAndTimes(null);
    }
  };

  const extrasToPickHandler = (extras) => {
    setPickExtras({
      ...pickExtras,
      price: pickExtras.pickedExtras.length > extrasDataAndTimes.times && pickExtras.price + 10,
      pickedExtras: [...pickExtras.pickedExtras, extras],
    });

    if (pickExtras.pickedExtras.indexOf(extras) > -1) {
      setPickExtras({
        price: pickExtras.pickedExtras.length > extrasDataAndTimes.times && pickExtras.price - 10,
        pickedExtras: pickExtras.pickedExtras.filter((item) => item !== extras),
      });
    }
  };

  return (
    <>
      {extrasDataAndTimes !== null && extrasDataAndTimes !== undefined && (
        <Wrapper className={toggleExtras && 'toggle'} id='extras'>
          <ExtrasInfoWrapper id='extras'>
            {extrasDataAndTimes.times < 5 ? (
              <ExtrasInfo id='extras'>WYBIERZ {extrasDataAndTimes.times + 1} DODATKI, KAŻDY KOLEJNY DODATKOWO PŁATNY +10zł</ExtrasInfo>
            ) : (
              <ExtrasInfo id='extras'>DO MAJTECZEK PREMIUM MOŻESZ WYBRAĆ ILE CHCESZ DODATKÓW</ExtrasInfo>
            )}
            {pickExtras.pickedExtras.length > extrasDataAndTimes.times + 1 && extrasDataAndTimes.times < 5 && (
              <ExtrasInfo id='extras'>DODATKOWO DO ZAPŁATY {pickExtras.price} zł</ExtrasInfo>
            )}
          </ExtrasInfoWrapper>
          {extrasDataAndTimes.data.map((extras) => (
            <ExtrasOption
              onClick={() => extrasToPickHandler(extras)}
              className={pickExtras.pickedExtras.includes(extras) && 'added'}
              key={extras}
              id='extras'
            >
              {extras}
            </ExtrasOption>
          ))}
        </Wrapper>
      )}
    </>
  );
};

ExtrasWrapper.propTypes = {
  data: PropTypes.object.isRequired,
  setExtrasDataAndTimes: PropTypes.func.isRequired,
  extrasDataAndTimes: PropTypes.object,
  toggleExtras: PropTypes.bool.isRequired,
};

export default ExtrasWrapper;
