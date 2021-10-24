const getRandomMainColor = () => {
  let random = Math.floor(Math.random() * 9);

  if (random === 0) {
    return '#B80202';
  } else if (random === 1) {
    return '#ED9C00';
  } else if (random === 2) {
    return '#E85C30';
  } else if (random === 3) {
    return '#B362CF';
  } else if (random === 4) {
    return '#CB1557';
  } else if (random === 5) {
    return '#641E8E';
  } else if (random === 6) {
    return '#2E8E1E';
  } else if (random === 7) {
    return '#2B4890';
  } else if (random === 8) {
    return '#55BFED';
  }
};

export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    primary: getRandomMainColor(),
    darkGrey: '#2D2D2D',
    darkWhite: '#F9F9F9',
  },
  fontSize: {
    xl: '28px',
    l: '24px',
    m: '14px',
    s: '12px',
  },
};
