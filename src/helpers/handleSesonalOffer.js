export const handleSesonalOffer = () => {
  const date = new Date().getMonth();

  if (date < 6 || date >= 9) {
    return true;
  } else {
    return false;
  }
};
