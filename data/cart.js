export let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}


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
  saveToStorage();
};


export function removeFromCart(productId){
  const newCart = [];
  cart.forEach((cartItem)=>{
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveToStorage();
};


export function updateQuantity(productId, newQuantity){

  
  let matchingItem;

  cart.forEach((cartitem) => {
    if (productId === cartitem.productId) {
      matchingItem = cartitem;
    }
  });
  if (matchingItem) {
    if(newQuantity >= 0 && newQuantity < 1000){
       matchingItem.quantity = newQuantity;
    }
  }
  

  saveToStorage();
};