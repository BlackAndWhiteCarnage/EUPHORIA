import React from 'react';
import OnlyfansIcon from 'assets/icons/onlyfans-icon.svg';
import { OnlyFansWrapper, OnlyFans } from './Onlyfans.style';

const Onlyfans = () => {
  return (
    <OnlyFansWrapper href='https://onlyfans.com/u147186729' target='_blank' title='PRZEJDŹ DO ONLYFANS'>
      <OnlyFans src={OnlyfansIcon} id='active' alt='onlyfans logo' />
    </OnlyFansWrapper>
  );
};

export default Onlyfans;
