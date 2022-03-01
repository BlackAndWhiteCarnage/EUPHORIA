import { CartType } from 'Root'

export const isInCartHandler = (itemID: string, cart?: CartType['cart']): string | void => {
  if (cart !== undefined) {
    if (cart.find((item) => item.id === itemID)) {
      return 'added';
    }
  }
};
