import { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, ExtrasInfoWrapper, ExtrasInfo, ExtrasOption } from './ExtrasWrapper.styles';
import ExtrasProvider from 'providers/ExtrasProvider/ExtrasProvider';
import { PrevCartType, ExtrasWrapperProps } from './ExtrasWrapper.types';

const ExtrasWrapper = ({ data, setExtrasData, extrasData, toggleExtras, setToggleExtras, pickExtras, setPickExtras, cart, setCart }: ExtrasWrapperProps) => {
  const [prevCartItem, setPrevCartItem] = useState<PrevCartType['prevCartItem']>();

  const extrasToPickHandler = (extras: string) => {
      // Add extras
      setPickExtras({
        ...pickExtras,
        price: pickExtras.pickedExtras.length > extrasData.count && pickExtras.price + 10,
        pickedExtras: [...pickExtras.pickedExtras, extras],
      });

      // Substract
      if(pickExtras.pickedExtras.indexOf(extras) > -1) {
        setPickExtras({
          price: pickExtras.pickedExtras.length > extrasData.count && pickExtras.price - 10,
          pickedExtras: pickExtras.pickedExtras.filter((item) => item !== extras),
        });
      }
  };

  return (
      <ExtrasProvider
      cart={cart}
      data={data}
      setExtrasData={setExtrasData}
      setToggleExtras={setToggleExtras}
      setPickExtras={setPickExtras}
      setCart={setCart}
      pickExtras={pickExtras}
      setPrevCartItem={setPrevCartItem}
      prevCartItem={prevCartItem}
    >
      {extrasData !== null && extrasData !== undefined && (
        <Wrapper className={`${toggleExtras && 'toggle'}`} id='extras'>
          <ExtrasInfoWrapper id='extras'>
            {extrasData.count < 5 ? (
              <ExtrasInfo id='extras'>WYBIERZ {extrasData.count + 1} DODATKI, KAŻDY KOLEJNY DODATKOWO PŁATNY +10zł</ExtrasInfo>
            ) : (
              <ExtrasInfo id='extras'>DO MAJTECZEK PREMIUM MOŻESZ WYBRAĆ ILE CHCESZ DODATKÓW</ExtrasInfo>
            )}
            {pickExtras.pickedExtras.length > extrasData.count + 1 && extrasData.count < 5 && (
              <ExtrasInfo id='extras'>DODATKOWO DO ZAPŁATY {pickExtras.price} zł</ExtrasInfo>
            )}
          </ExtrasInfoWrapper>
          {extrasData.data.map((extras: string) => (
            <ExtrasOption
              onClick={() => extrasToPickHandler(extras)}
              className={`${Array.isArray(pickExtras.pickedExtras) && pickExtras.pickedExtras.includes(extras) && 'added'}`}
              key={extras}
              id='extras'
              tabIndex={!toggleExtras ? -1 : 1}
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
