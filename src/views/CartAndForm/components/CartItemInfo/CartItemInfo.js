import React from 'react';
import { Wrapper, PickedExtrasWrapper, PickedExtras, StyledAlertLink } from './CartItemInfo.styles';

const CartItemInfo = ({ item, togglePreviewExtras, toggleAlert }) => (
  <Wrapper>
    <p>{item.name}</p>
    <PickedExtrasWrapper className={`${togglePreviewExtras === item.id && 'show'} ${toggleAlert === item.id && 'showAlert'}`} id='extras'>
      {togglePreviewExtras ? (
        <>
          <PickedExtras>WYBRANE DODATKI</PickedExtras>
          {item.pickedExtras.map((extras) => (
            <span key={extras}>{extras}</span>
          ))}
        </>
      ) : (
        toggleAlert && (
          <StyledAlertLink to={`/${item.id}`} id='extras'>
            <PickedExtras>
              NIE WYBRAŁEŚ ŻADNYCH DODATKÓW, <strong>KLIKNIJ</strong> ABY PRZEJŚĆ DO TEGO PRZEDMIOTU I WYBRAĆ.
              <strong> CHYBA ŻE NIE CHCESZ!</strong>
            </PickedExtras>
          </StyledAlertLink>
        )
      )}
    </PickedExtrasWrapper>
    <p>{item.price} ZŁ</p>
  </Wrapper>
);

export default CartItemInfo;
