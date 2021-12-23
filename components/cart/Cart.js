import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../global/Button/Button";
import CartItem from "./CartItem";
import CartModal from "./CartModal";
import { StyledCheckoutSummary } from "./styledComponents";
import { signIn, signOut, useSession } from "next-auth/react";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const router = useRouter();
  const { data: session } = useSession();

  const onCloseHandler = () => {
    props.onHideCart();
  };

  const quantityChangeHandler = (item) => {
    cartCtx.updateItemQuantity(item);
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const checkoutHandler = () => {
    router.push("/checkout");
    props.onHideCart();
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
        <Button
          onClick={session ? checkoutHandler : signIn}
          title={session ? "Continue To Checkout" : "Login to checkout"}
        />
      </StyledCheckoutSummary>
    </CartModal>
  );
}

export default Cart;
