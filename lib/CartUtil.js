const CART_KEY = "deplaceCart";

export function getCart() {
  return (
    JSON.parse(localStorage.getItem(CART_KEY)) || {
      items: [],
      totalAmount: 0,
      totalItems: 0,
    }
  );
}

export function setCart(newCart) {
  localStorage.setItem(CART_KEY, JSON.stringify(newCart));
}
