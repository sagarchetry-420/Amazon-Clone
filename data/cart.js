export const cart =[];


export function addToCart(productId) {
  const quantityValue = document.querySelector(`.js-quantity-selector-${productId}`);
  let matchingItem;
  cart.forEach((cartitem) => {
    if (productId === cartitem.productId) {
      matchingItem = cartitem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += Number(quantityValue.value);
  }
  else {
    cart.push({ productId: productId, quantity: Number(quantityValue.value) });
  }
};