import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CartModal from "./CartModal";
import { StyledCart } from "./styledComponents";
import CartHeader from "./CartHeader";
import CartSummary from "./CartSummary";

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
      <StyledCart
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.15 }}
        exit={{ opacity: 0 }}
      >
        <CartHeader onClose={onCloseHandler} />
        {CartItems}
        <CartSummary onClose={onCloseHandler} />
      </StyledCart>
    </CartModal>
  );
}

export default Cart;
