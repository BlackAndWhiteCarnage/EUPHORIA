import React from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import { matchMedia } from 'helpers/matchMedia';
import SocialMediaWrapper from 'components/SocialMediaWrapper/SocialMediaWrapper';
import HamburgerAndModal from 'components/HamburgerAndModal/HamburgerAndModal';
import NavItem from 'components/NavItem/NavItem';
import { Wrapper, NavItems, FakeWrapper } from './Navigation.styles';
import CartAndLogo from 'components/CartAndLogo/CartAndLogo';

const Navigation = ({ cart }) => {
  const [element, view] = useInView({ threshold: 0.5 });

  return (
    <nav>
      {matchMedia.matches && <FakeWrapper ref={element} className={!view && 'changePosition'} />}
      <Wrapper className={!view && matchMedia.matches && 'stickyNavbar'}>
        <CartAndLogo cart={cart} />
        <NavItems>
          <NavItem to='/' text='STRONA GŁÓWNA' className='desktop' />
          <NavItem to='/sklep/majtki' text='MAJTKI' className='desktop' />
          <NavItem to='/sklep/skarpetki' text='SKARPETKI' className='desktop' />
          <NavItem to='/sklep/premium' text='PREMIUM' className='desktop' />
          <NavItem to='/sklep/inne' text='INNE' className='desktop' />
          <NavItem to='/sklep/rajstopy' text='RAJSTOPY I POŃCZOCHY' className='desktop' />
          <NavItem to='/sklep/fotki i nagrania' text='SESJE, FOTKI I NAGRANIA' className='desktop' />
          <SocialMediaWrapper desktop />
        </NavItems>
      </Wrapper>
      <HamburgerAndModal />
    </nav>
  );
};

Navigation.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Navigation;
