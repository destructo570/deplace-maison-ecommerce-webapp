import {
  StyledCartItem,
  StyledCartProductDetails,
  StyledCartProductItem,
  StyledDivider,
  StytledProductSummary,
} from "./styledComponents";

import { useContext } from "react";
import CartContext from "../../store/cart-context";

function CartItem(props) {
  const cartCtx = useContext(CartContext);
  const quantityChangeHandler = (event) => {
    if (
      event.target.value === "" ||
      event.target.value < 0 ||
      event.target.value > 10
    ) {
      return;
    }

    if (event.target.value === "0") {
      cartCtx.removeItem(props.id);
      return;
    }
    props.onQuantityChange(props.id, event.target.value);
  };

  return (
    <StyledCartItem>
      <StyledCartProductItem>
        <img src={props.img} alt="Product"></img>
        <StyledCartProductDetails>
          <h2>{props.name}</h2>
          <h4>$ {props.price}</h4>
          <p>Color: {props.color}</p>
          <p>Size: {props.size}</p>
        </StyledCartProductDetails>
        <StytledProductSummary>
          <input
            type="number"
            name="quantity"
            min="0"
            max="10"
            defaultValue={props.quantity}
            onChange={quantityChangeHandler}
          ></input>
          <p onClick={cartCtx.removeItem.bind(null, props.id)}>Remove</p>
        </StytledProductSummary>
      </StyledCartProductItem>
      <StyledDivider />
    </StyledCartItem>
  );
}

export default CartItem;
