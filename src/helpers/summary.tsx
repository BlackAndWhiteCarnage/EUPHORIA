import { CartType } from "Root";

export let summary = (cart: CartType['cart'], showDiscount?: boolean, showValues?: boolean): any=> {
  if (cart.length === 0){
    return;
  }

  let cartWithDiscount = cart.filter(({ name }): {}[] | [] | boolean => {
      return name.toLowerCase().indexOf('topless') === -1 && name.toLowerCase().indexOf('naga') === -1;
  });

  let cartWithoutDiscount = cart.filter(({ name }): {}[] | [] | boolean => {
    return name.toLowerCase().indexOf('topless') !== -1 || name.toLowerCase().indexOf('naga') !== -1;
  });

  const valuesHandler = (array: {price: number}[] | []): any => {
    if (array.length) {
      let values = array.map((item): number => {
        return item.price;
      });

      return values.reduce((a: number, b: number) => a + b).toFixed(2);
    } else {
      return [];
    }
  };

  if (showValues && Array.isArray(cart)) {
    return valuesHandler(cart);
  }

  if (showDiscount) {
    if (cartWithDiscount.length > 0 && Array.isArray(cart)) {
      return (valuesHandler(cart) - summary(cart)).toFixed(2);
    } else {
      return false;
    }
  }

  const countDiscount = (): string | undefined => {
    if(Array.isArray(cart)){
      let cartWithDiscountValues = valuesHandler(cartWithDiscount);
      let cartValues = valuesHandler(cart);

      if (valuesHandler(cart).length && cartValues < 150) {
        return cartValues;
      } else if (cartValues >= 150 && cartValues < 250) {
        return ((cartWithDiscountValues / 100) * 95).toFixed(2);
      } else if (cartValues >= 250 && cartValues < 500) {
        return ((cartWithDiscountValues / 100) * 90).toFixed(2);
      } else if (cartValues >= 500) {
        return ((cartWithDiscountValues / 100) * 85).toFixed(2);
      } else {
        return '0';
      }
    }
  };

  return Number(countDiscount()) + Number(valuesHandler(cartWithoutDiscount));
};
