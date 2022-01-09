import { useRouter } from "next/router";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { StyledCheckoutSummary } from "./styledComponents";
import Button from "../global/Button/Button";
import { signIn, useSession } from "next-auth/react";

function CartSummary(props) {
  const cartCtx = useContext(CartContext);
  const router = useRouter();
  const { data: session } = useSession();

  const checkoutHandler = () => {
    router.push("/checkout");
    props.onClose();
  };
  return (
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
  );
}

export default CartSummary;
