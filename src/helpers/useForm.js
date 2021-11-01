import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom';
import { summary } from 'helpers/summary';

export const useForm = (cart) => {
  const [emailSend, setEmailSend] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validMessage, setValidMessage] = useState(false);
  const [validCart, setValidCart] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const location = useLocation();

  const emailHandler = (e) => {
    const valid = /\S+@\S+\.\S+/;
    if (valid.test(e.target.value)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const nameHandler = (e) => {
    if (e.target.value.length >= 5) {
      setValidName(true);
    } else {
      setValidName(false);
    }
  };

  const messageHandler = (e) => {
    if (e.target.value.length >= 20) {
      setValidMessage(true);
    } else {
      setValidMessage(false);
    }
  };

  function sendEmail(e) {
    e.preventDefault();

    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userID = process.env.REACT_APP_USER_ID;

    const handleSendEmail = () => {
      emailjs.sendForm(`${serviceID}`, `${templateID}`, e.target, `${userID}`).then(() => {
        setEmailSend(true);
        setFeedback(2);
      });
    };

    if (location.pathname !== '/') {
      if (validEmail && validMessage && checkbox && validName && validCart) {
        handleSendEmail();
      }
    } else {
      if (validEmail && validMessage && validName) {
        handleSendEmail();
      }
    }
  }

  const checkValid = () => {
    if (location.pathname !== '/') {
      if (validEmail && validMessage && checkbox && validName && validCart) {
        setFeedback(1);
      } else {
        setFeedback(2);
        setTimeout(() => {
          setFeedback(0);
        }, 2000);
      }
    } else {
      if (validEmail && validMessage && validName) {
        setFeedback(1);
      } else {
        setFeedback(2);
        setTimeout(() => {
          setFeedback(0);
        }, 2000);
      }
    }
  };

  const cartItemsHandler = (e) => {
    setCheckbox(!checkbox);
    setValidCart(!validCart);

    let ids = cart.map((item) => {
      return item.images[0].url + ' + DODATKI:' + item.pickedExtras;
    });

    let sum = summary(cart);

    e.target.value = ids + ' cena ' + sum;
  };

  return {
    sendEmail,
    nameHandler,
    validName,
    feedback,
    emailHandler,
    validEmail,
    messageHandler,
    validMessage,
    validCart,
    cartItemsHandler,
    checkValid,
    emailSend,
  };
};
