import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollTop = (): null => {
  const location = useLocation().pathname;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [location]);

  return null;
};

export default ScrollTop;
