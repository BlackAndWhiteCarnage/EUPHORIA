export const isInCartHandler = (itemID, cart) => {
  if (cart !== undefined) {
    if (cart.find((item) => item.id === itemID)) {
      return 'added';
    }
  }
};
