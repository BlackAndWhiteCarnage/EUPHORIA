import OnlyfansIcon from 'assets/icons/onlyfans-icon.svg';
import { ReactElement } from 'react';
import { OnlyFansWrapper, OnlyFans } from './Onlyfans.style';

const Onlyfans = (): ReactElement => (
  <OnlyFansWrapper href='https://onlyfans.com/u147186729' target='_blank' title='Zajrzyj na Onlyfans'>
    <OnlyFans src={OnlyfansIcon} id='active' alt='onlyfans logo' />
  </OnlyFansWrapper>
);

export default Onlyfans;
