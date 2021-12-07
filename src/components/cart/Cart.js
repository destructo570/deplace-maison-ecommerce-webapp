import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../global/Button/Button";
import CartItem from "./CartItem";
import CartModal from "./CartModal";
import { StyledCheckoutSummary } from "./styledComponents";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const onCloseHandler = () => {
    props.onHideCart();
  };

  const quantityChangeHandler = (id, newQuantity) => {
    cartCtx.updateItemQuantity(id, newQuantity);
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const CartItems = (
    <ul>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            img={item.img}
            size={item.size}
            color={item.color}
            onQuantityChange={quantityChangeHandler}
            onRemoveItem={removeItemHandler}
          >
            {item.name}
          </CartItem>
        );
      })}
    </ul>
  );

  return (
    <CartModal onClose={onCloseHandler}>
      {CartItems}
      <StyledCheckoutSummary>
        <div>
          <h4>Subtotal</h4>
          <h4>$ {cartCtx.finalPrice} USD</h4>
        </div>
        <Button title="Continue To Checkout" />
      </StyledCheckoutSummary>
    </CartModal>
  );
}

export default Cart;
