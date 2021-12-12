const getRandomMainColor = () => {
  const randomColors = ['#B80202', '#ED9C00', '#F15524', '#BC47E5', '#CB1557', '#641E8E', '#469928', '#2B4890', '#55BFED'];

  return randomColors[Math.floor(Math.random() * 9)];
};

export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    main: getRandomMainColor(),
    darkGrey: '#2D2D2D',
    darkWhite: '#F9F9F9',
    active: '#6C6C6C',
  },
  fontSize: {
    xl: '28px',
    l: '24px',
    m: '14px',
    s: '12px',
  },
};
