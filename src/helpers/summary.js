export let summary = (cart, showDiscount, showValues) => {
  if (cart.length === 0) {
    return;
  }

  let cartWithDiscount = cart.filter(({ name }) => {
    return name.toLowerCase().indexOf('topless') === -1 && name.toLowerCase().indexOf('naga') === -1;
  });

  let cartWithoutDiscount = cart.filter(({ name }) => {
    return name.toLowerCase().indexOf('topless') !== -1 || name.toLowerCase().indexOf('naga') !== -1;
  });

  const valuesHandler = (array) => {
    if (array.length) {
      let values = array.map((item) => {
        return item.price;
      });

      return values.reduce((a, b) => a + b).toFixed(2);
    } else {
      return [];
    }
  };

  if (showValues) {
    return valuesHandler(cart);
  }

  if (showDiscount) {
    return (valuesHandler(cart) - summary(cart)).toFixed(2);
  }

  const countDiscount = () => {
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
  };

  return Number(countDiscount()) + Number(valuesHandler(cartWithoutDiscount));
};
