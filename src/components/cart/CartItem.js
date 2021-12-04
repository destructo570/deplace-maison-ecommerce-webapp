import {
  StyledCartItem,
  StyledCartProductItem,
  StyledDivider,
  StytledProductSummary,
} from "./styledComponents";

import { useContext } from "react";
import CartContext from "../../store/cart-context";

function CartItem(props) {
  console.log(props.img);
  const cartCtx = useContext(CartContext);
  return (
    <StyledCartItem>
      <StyledCartProductItem>
        <img src={props.img} alt="Product"></img>
        <div>
          <h2>{props.name}</h2>
          <h4>$ {props.price}</h4>
          <p>Color: {props.color}</p>
          <p>Size: {props.size}</p>
        </div>
        <StytledProductSummary>
          <input type="number" name="amount"></input>
          <p onClick={cartCtx.removeItem.bind(null, props.id)}>Remove</p>
        </StytledProductSummary>
      </StyledCartProductItem>
      <StyledDivider />
    </StyledCartItem>
  );
}

export default CartItem;
