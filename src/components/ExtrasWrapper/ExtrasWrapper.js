import React, { useState } from 'react';
import PropTypes from 'prop-types';
// STYLES
import { Wrapper, ExtrasInfoWrapper, ExtrasInfo, ExtrasOption } from './ExtrasWrapper.styles';
// COMPONENTS
import ExtrasProvider from 'hoc/ExtrasProvider';

const ExtrasWrapper = ({ data, setExtrasData, extrasData, toggleExtras, setToggleExtras, pickExtras, setPickExtras, cart, setCart }) => {
  const [prevCartItem, setPrevCartItem] = useState();

  const extrasToPickHandler = (extras) => {
    setPickExtras({
      ...pickExtras,
      price: pickExtras.pickedExtras.length > extrasData.times && pickExtras.price + 10,
      pickedExtras: [...pickExtras.pickedExtras, extras],
    });

    if (pickExtras.pickedExtras.indexOf(extras) > -1) {
      setPickExtras({
        price: pickExtras.pickedExtras.length > extrasData.times && pickExtras.price - 10,
        pickedExtras: pickExtras.pickedExtras.filter((item) => item !== extras),
      });
    }
  };

  return (
    <ExtrasProvider
      cart={cart}
      data={data}
      extrasData={extrasData}
      setExtrasData={setExtrasData}
      setToggleExtras={setToggleExtras}
      setPickExtras={setPickExtras}
      setCart={setCart}
      pickExtras={pickExtras}
      setPrevCartItem={setPrevCartItem}
      prevCartItem={prevCartItem}
    >
      {extrasData !== null && extrasData !== undefined && (
        <Wrapper className={toggleExtras && 'toggle'} id='extras'>
          <ExtrasInfoWrapper id='extras'>
            {extrasData.times < 5 ? (
              <ExtrasInfo id='extras'>WYBIERZ {extrasData.times + 1} DODATKI, KAŻDY KOLEJNY DODATKOWO PŁATNY +10zł</ExtrasInfo>
            ) : (
              <ExtrasInfo id='extras'>DO MAJTECZEK PREMIUM MOŻESZ WYBRAĆ ILE CHCESZ DODATKÓW</ExtrasInfo>
            )}
            {pickExtras.pickedExtras.length > extrasData.times + 1 && extrasData.times < 5 && (
              <ExtrasInfo id='extras'>DODATKOWO DO ZAPŁATY {pickExtras.price} zł</ExtrasInfo>
            )}
          </ExtrasInfoWrapper>
          {extrasData.data.map((extras) => (
            <ExtrasOption
              onClick={() => extrasToPickHandler(extras)}
              className={pickExtras.pickedExtras.includes(extras) && 'added'}
              key={extras}
              id='extras'
            >
              {extras}
            </ExtrasOption>
          ))}
          <ExtrasOption className='back'>WYBRAŁEM/NIE CHCĘ WYBIERAĆ</ExtrasOption>
        </Wrapper>
      )}
    </ExtrasProvider>
  );
};

ExtrasWrapper.propTypes = {
  data: PropTypes.object.isRequired,
  setExtrasData: PropTypes.func.isRequired,
  extrasData: PropTypes.object,
  toggleExtras: PropTypes.bool.isRequired,
  setToggleExtras: PropTypes.func.isRequired,
  pickExtras: PropTypes.object.isRequired,
  setPickExtras: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default ExtrasWrapper;
