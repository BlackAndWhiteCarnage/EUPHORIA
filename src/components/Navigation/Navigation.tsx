import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import { matchMedia } from 'helpers/matchMedia';
import SocialMediaWrapper from 'components/SocialMediaWrapper/SocialMediaWrapper';
import HamburgerAndModal from 'components/HamburgerAndModal/HamburgerAndModal';
import NavItem from 'components/NavItem/NavItem';
import { Wrapper, NavItems, FakeWrapper } from './Navigation.styles';
import CartAndLogo from 'components/CartAndLogo/CartAndLogo';
import { NavigationProps } from './Navigation.types';
import { ReactElement } from 'react';

const Navigation = ({ cart }: NavigationProps): ReactElement => {
  const [element, view] = useInView({ threshold: 0.5 });

  return (
    <nav>
      {matchMedia.matches && <FakeWrapper ref={element} className={`${!view && 'changePosition'}`} />}
      <Wrapper className={`${!view && matchMedia.matches && 'stickyNavbar'}`}>
        <CartAndLogo cart={cart} />
        <NavItems>
          <NavItem to='/' text='STRONA GŁÓWNA' className='desktop' />
          <NavItem to='/sklepik/majtki' text='MAJTKI' className='desktop' />
          <NavItem to='/sklepik/skarpetki' text='SKARPETKI' className='desktop' />
          <NavItem to='/sklepik/premium' text='PREMIUM' className='desktop' />
          <NavItem to='/sklepik/inne' text='INNE' className='desktop' />
          <NavItem to='/sklepik/rajstopy' text='RAJSTOPY I POŃCZOCHY' className='desktop' />
          <NavItem to='/sklepik/fotki i nagrania' text='SESJE, FOTKI I NAGRANIA' className='desktop' />
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
