import CartModal from "./CartModal";

function Cart(props) {
  const onCloseHandler = () => {
    props.onHideCart();
  };
  return (
    <CartModal onClose={onCloseHandler}>
      <div>Hello</div>
    </CartModal>
  );
}

export default Cart;
