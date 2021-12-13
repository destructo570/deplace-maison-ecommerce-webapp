import { useState } from "react";
import Tooltip from "../global/Tooltip/Tooltip";
import {
  StyledCartItem,
  StyledCartProductDetails,
  StyledCartProductItem,
  StyledDivider,
  StytledProductSummary,
} from "./styledComponents";

function CartItem(props) {
  const [hasError, setHasError] = useState(false);

  const quantityChangeHandler = (event) => {
    if (
      event.target.value === "" ||
      event.target.value < 0 ||
      event.target.value > 10
    ) {
      setHasError(true);
      return;
    }

    if (event.target.value === "0") {
      props.onRemoveItem(props.item.id);
      return;
    }
    setHasError(false);

    const updatedItem = {
      ...props.item,
      quantity: parseInt(event.target.value),
    };

    props.onQuantityChange(updatedItem);
  };

  return (
    <StyledCartItem>
      <StyledCartProductItem>
        <img src={props.item.img} alt="Product"></img>
        <StyledCartProductDetails>
          <h2>{props.item.name}</h2>
          <h4>$ {props.item.price}</h4>
          <p>Color: {props.item.color}</p>
          <p>Size: {props.item.size}</p>
        </StyledCartProductDetails>
        <StytledProductSummary>
          <input
            type="number"
            name="quantity"
            min="0"
            max="10"
            defaultValue={props.item.quantity}
            onChange={quantityChangeHandler}
          ></input>
          {hasError && <Tooltip content="Please match the requested format" />}
          <p onClick={props.onRemoveItem.bind(null, props.item.id)}>Remove</p>
        </StytledProductSummary>
      </StyledCartProductItem>
      <StyledDivider />
    </StyledCartItem>
  );
}

export default CartItem;