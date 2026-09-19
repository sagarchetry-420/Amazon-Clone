import { cart } from '../../data/cart.js';

export function updateCartQuantity() {
  let cartQuantity =0;
  cart.forEach((cartitem) => {
    cartQuantity += cartitem.quantity;
  });
  document.querySelector('.js-cart-quantity').innerText = cartQuantity;
 
};