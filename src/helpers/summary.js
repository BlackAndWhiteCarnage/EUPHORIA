export let summary = (cart, showDiscount, showValues) => {
  if (cart.length === 0) {
    return;
  }

  let cartValues = cart.map((item) => {
    return item.price;
  });

  let values = cartValues.reduce((a, b) => a + b).toFixed(2);

  if (showValues) {
    return values;
  }

  if (showDiscount) {
    return (values - summary(cart)).toFixed(2);
  }

  if (cartValues.length !== 0 && values < 150) {
    return values;
  } else if (values >= 150 && values < 250) {
    return ((values / 100) * 95).toFixed(2);
  } else if (values >= 250 && values < 500) {
    return ((values / 100) * 90).toFixed(2);
  } else if (values >= 500) {
    return ((values / 100) * 85).toFixed(2);
  } else {
    return '0';
  }
};
