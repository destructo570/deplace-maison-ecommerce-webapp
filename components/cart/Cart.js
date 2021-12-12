import Button from "../global/Button/Button";
import CartItem from "./CartItem";
import CartModal from "./CartModal";
import { StyledCheckoutSummary } from "./styledComponents";

function Cart(props) {
  const onCloseHandler = () => {
    props.onHideCart();
  };

  const quantityChangeHandler = (item) => {};

  const removeItemHandler = (id) => {};

  // const CartItems = (
  //   <ul>
  //     {cartState.items.map((item) => {
  //       return (
  //         <CartItem
  //           key={item.id}
  //           item={item}
  //           onQuantityChange={quantityChangeHandler}
  //           onRemoveItem={removeItemHandler}
  //         >
  //           {item.name}
  //         </CartItem>
  //       );
  //     })}
  //   </ul>
  // );

  return (
    <CartModal onClose={onCloseHandler}>
      {/* {CartItems} */}
      <StyledCheckoutSummary>
        <div>
          <h4>Subtotal</h4>
          <h4>$ 0 USD</h4>
        </div>
        <Button title="Continue To Checkout" />
      </StyledCheckoutSummary>
    </CartModal>
  );
}

export default Cart;
