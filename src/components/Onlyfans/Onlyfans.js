import React from 'react';
import { OnlyFansWrapper, OnlyFans } from './Onlyfans.style';
import OnlyfansIcon from 'assets/icons/onlyfans-icon.svg';

const Onlyfans = () => {
  return (
    <OnlyFansWrapper href='https://onlyfans.com/u147186729' target='_blank' title='PRZEJDŹ DO ONLYFANS'>
      <OnlyFans src={OnlyfansIcon} id='active' />
    </OnlyFansWrapper>
  );
};

export default Onlyfans;
