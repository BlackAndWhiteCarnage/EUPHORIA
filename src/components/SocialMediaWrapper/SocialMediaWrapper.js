import React from 'react';
import PropTypes from 'prop-types';
// ICONS
import AllegroIcon from 'assets/icons/allegro-icon.svg';
import WhatsAppIcon from 'assets/icons/whatsapp-icon.svg';
import WhatsAppIconWhite from 'assets/icons/whatsapp-icon-white.svg';
import EmailIcon from 'assets/icons/email-icon.svg';
import EmailIconWhite from 'assets/icons/email-icon-white.svg';
// STYLES
import { Wrapper, Icon } from './SocialMediaWrapper.styles';

const SocialMediaWrapper = ({ desktop }) => {
  return (
    <Wrapper>
      <a href='https://allegro.pl/uzytkownik/EUPHORIA_2001?bmatch=cl-e2101-d3794-c3683-uni-1-1-0611' target='_blank' rel='noreferrer'>
        <Icon src={AllegroIcon} />
      </a>
      <a href='mailto:weronikarepsch@gmail.com' target='_blank' rel='noreferrer'>
        <Icon src={desktop ? EmailIcon : EmailIconWhite} />
      </a>
      <a href='https://wa.me/+48661488428' target='_blank' rel='noreferrer'>
        <Icon src={desktop ? WhatsAppIcon : WhatsAppIconWhite} />
      </a>
    </Wrapper>
  );
};

SocialMediaWrapper.propTypes = {
  desktop: PropTypes.bool,
};

export default SocialMediaWrapper;
