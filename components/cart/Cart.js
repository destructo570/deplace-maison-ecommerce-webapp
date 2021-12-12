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

  const quantityChangeHandler = (item) => {
    cartCtx.updateItemQuantity(item);
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
            item={item}
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
          <h4>$ {cartCtx.totalAmount} USD</h4>
        </div>
        <Button title="Continue To Checkout" />
      </StyledCheckoutSummary>
    </CartModal>
  );
}

export default Cart;
