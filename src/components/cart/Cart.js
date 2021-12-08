import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";
import Button from "../global/Button/Button";
import CartItem from "./CartItem";
import CartModal from "./CartModal";
import { StyledCheckoutSummary } from "./styledComponents";

function Cart(props) {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  const onCloseHandler = () => {
    props.onHideCart();
  };

  const quantityChangeHandler = (item) => {
    dispatch(cartActions.updateItemQuantity(item));
  };

  const removeItemHandler = (id) => {
    dispatch(cartActions.removeItem(id));
  };

  const CartItems = (
    <ul>
      {cartState.items.map((item) => {
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
          <h4>$ {cartState.totalAmount} USD</h4>
        </div>
        <Button title="Continue To Checkout" />
      </StyledCheckoutSummary>
    </CartModal>
  );
}

export default Cart;
