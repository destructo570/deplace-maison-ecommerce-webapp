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
  const amountChangeHandler = (event) => {
    props.onAmountChange(props.id, event.target.value);
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
            name="amount"
            min="0"
            max="10"
            value={props.amount}
            onChange={amountChangeHandler}
          ></input>
          <p onClick={cartCtx.removeItem.bind(null, props.id)}>Remove</p>
        </StytledProductSummary>
      </StyledCartProductItem>
      <StyledDivider />
    </StyledCartItem>
  );
}

export default CartItem;
