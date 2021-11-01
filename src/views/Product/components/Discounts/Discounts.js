import React, { useState } from 'react';
import { DiscountsInfoWrapper, DiscountsWrapper } from './Discounts.styles';

const Discounts = () => {
  const [toggleDiscounts, setToggleDiscounts] = useState(false);

  const setToggleDiscountsHandler = () => {
    setToggleDiscounts(!toggleDiscounts);
  };

  return (
    <DiscountsInfoWrapper onClick={setToggleDiscountsHandler} className={toggleDiscounts && 'showDiscounts'}>
      <span className={toggleDiscounts && 'showDiscounts'}>RABATY %</span>
      <DiscountsWrapper className={toggleDiscounts && 'showDiscounts'}>
        <p id='active'>OD 150zł RABAT -5%</p>
        <p id='active'>OD 250zł RABAT -10%</p>
        <p id='active'>OD 500zł RABAT -15%</p>
      </DiscountsWrapper>
    </DiscountsInfoWrapper>
  );
};

export default Discounts;
