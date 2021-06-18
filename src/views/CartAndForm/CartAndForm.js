import React, { useEffect } from 'react';
import Form from 'components/Form/Form';
import Cart from 'components/Cart/Cart';
// ANIMATIONS
import { pageAnimation } from 'animations/animations';
import { Wrapper, CostsInfoWrapper, EmptyCartInfo } from './CartAndForm.styles';
import { Header } from 'views/OfferSection/OfferSection.styles';

const CartAndForm = ({ cart, setCart }) => {
  let cartValues = cart.map((item) => {
    return item.price;
  });

  let summary = () => {
    let values = cartValues.reduce((a, b) => a + b).toFixed(2);
    if (cartValues.length !== 0 && values < 150) {
      return values;
    } else if (values >= 150 && values < 250) {
      return ((values / 100) * 95).toFixed(2);
    } else if (values >= 250 && values < 500) {
      return ((values / 100) * 90).toFixed(2);
    } else if (values >= 500) {
      return ((values / 100) * 85).toFixed(2);
    } else {
      return '0';
    }
  };

  let discountValue = () => {
    let values = cartValues.reduce((a, b) => a + b).toFixed(2);

    return values - summary();
  };

  useEffect(() => {
    if (cart.length > 0) {
      summary();
    }
  }, [cart]);

  return (
    <Wrapper exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
      <Header>Fetysz majtki majteczki kup zamów noszone używane pięknie pachnące</Header>
      {cart.length > 0 ? (
        <>
          <Cart cart={cart} setCart={setCart} />
          <Form cart={cart} summary={summary} />
          <CostsInfoWrapper>
            <p>
              RAZEM <span>{cart.length > 0 && summary()}</span> ZŁ {summary() >= 142.5 && `W TYM RABAT ${discountValue().toFixed(2)} ZŁ`}
            </p>
            <p>
              <span>DARMOWA</span> WYSYŁKA
            </p>
          </CostsInfoWrapper>
        </>
      ) : (
        <EmptyCartInfo>TWÓJ KOSZYK JEST PUSTY</EmptyCartInfo>
      )}
    </Wrapper>
  );
};

export default CartAndForm;
