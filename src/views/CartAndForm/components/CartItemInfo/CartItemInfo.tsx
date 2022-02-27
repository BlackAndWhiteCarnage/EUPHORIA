import React from 'react';
import { Wrapper, PickedExtrasWrapper, PickedExtras, StyledAlertLink } from './CartItemInfo.styles';
import { TogglePreviewExtrasType, ToggleAlertType } from 'views/CartAndForm/components/Cart/Cart'

interface CartItemInfoProps {
  item: {
    extrasNumber: number
    id: string
    images: {
      url: string
    }[]
    initialPrice: number
    name: string
    pickedExtras: string[] | []
    price: number
  }
  togglePreviewExtras: TogglePreviewExtrasType['togglePreviewExtras']
  toggleAlert: ToggleAlertType['toggleAlert']
}

const CartItemInfo = ({ item, togglePreviewExtras, toggleAlert }: CartItemInfoProps) => (
  <Wrapper>
    <p>{item.name}</p>
    <PickedExtrasWrapper className={`${togglePreviewExtras === item.id && 'show'} ${toggleAlert === item.id && 'showAlert'}`} id='extras'>
      {togglePreviewExtras ? (
        <>
          <PickedExtras>WYBRANE DODATKI</PickedExtras>
          {item.pickedExtras.map((extras: string): React.ReactNode => (
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
