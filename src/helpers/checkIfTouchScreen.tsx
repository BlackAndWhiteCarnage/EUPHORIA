export const isTouchScreen = (): boolean => {
  if (window.matchMedia('(pointer: coarse)').matches) {
    return true;
  } else {
    return false;
  }
};
