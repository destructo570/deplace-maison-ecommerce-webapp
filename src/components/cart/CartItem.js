import {
  StyledCartItem,
  StyledCartProductItem,
  StyledDivider,
  StytledProductSummary,
} from "./styledComponents";

import productImage from "../../assets/images/products/trek-shoe-1.jpeg";

function CartItem(props) {
  return (
    <StyledCartItem>
      <StyledCartProductItem>
        <img src={productImage} alt="Product"></img>
        <div>
          <h2>{props.name}</h2>
          <h4>$ {props.price}</h4>
          <p>Color: {props.color}</p>
          <p>Size: {props.size}</p>
        </div>
        <StytledProductSummary>
          <input type="number" name="amount"></input>
          <p>Remove</p>
        </StytledProductSummary>
      </StyledCartProductItem>
      <StyledDivider />
    </StyledCartItem>
  );
}

export default CartItem;
