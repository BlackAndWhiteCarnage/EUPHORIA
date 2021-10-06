export const isTouchScreen = () => {
  if (window.matchMedia('(pointer: coarse)').matches) {
    return true;
  } else {
    return false;
  }
};
