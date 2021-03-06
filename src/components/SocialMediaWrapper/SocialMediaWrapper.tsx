import PropTypes from 'prop-types';
import AllegroIcon from 'assets/icons/allegro-icon.svg';
import WhatsAppIcon from 'assets/icons/whatsapp-icon.svg';
import WhatsAppIconWhite from 'assets/icons/whatsapp-icon-white.svg';
import EmailIcon from 'assets/icons/email-icon.svg';
import EmailIconWhite from 'assets/icons/email-icon-white.svg';
import { Wrapper, Icon } from './SocialMediaWrapper.styles';
import { SocialMediaWrapperProps } from './SocialMediaWrapper.types';
import { ReactElement } from 'react';

const SocialMediaWrapper = ({ desktop }: SocialMediaWrapperProps): ReactElement => (
  <Wrapper>
    <a
      href='https://allegro.pl/uzytkownik/EUPHORIA_2001?bmatch=cl-e2101-d3794-c3683-uni-1-1-0611'
      target='_blank'
      rel='noreferrer'
      title='Przejdź do Allegro'
    >
      <Icon src={AllegroIcon} id='active' alt='Ikona Allegro' />
    </a>
    <a href='mailto:weronikarepsch@gmail.com' target='_blank' rel='noreferrer' title='Wyślij maila'>
      <Icon src={desktop ? EmailIcon : EmailIconWhite} id='active' alt='Ikona Emaila' />
    </a>
    <a href='https://wa.me/+48661488428' target='_blank' rel='noreferrer' title='Napisz na WhatsApp'>
      <Icon src={desktop ? WhatsAppIcon : WhatsAppIconWhite} id='active' alt='Ikona Whatsappa' />
    </a>
  </Wrapper>
);

SocialMediaWrapper.propTypes = {
  desktop: PropTypes.bool,
};

export default SocialMediaWrapper;
