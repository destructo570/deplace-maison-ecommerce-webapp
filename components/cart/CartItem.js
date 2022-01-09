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
  const { id, name, price, color, size, img, quantity } = props.item;
  const [hasError, setHasError] = useState(false);

  const quantityChangeHandler = (event) => {
    //Show error if Qty is invalid
    if (
      event.target.value === "" ||
      event.target.value < 0 ||
      event.target.value > 10
    ) {
      setHasError(true);
      return;
    }

    //Remove Item from cart if Qty is 0
    if (event.target.value === "0") {
      props.onRemoveItem(props.item.id);
      return;
    }

    //Remove any error if Qty is valid and dispatch cart update
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
        <img src={img} alt="Product"></img>
        <StyledCartProductDetails>
          <h2>{name}</h2>
          <h4>$ {price}</h4>
          <p>Color: {color}</p>
          <p>Size: {size}</p>
        </StyledCartProductDetails>
        <StytledProductSummary>
          <input
            type="number"
            name="quantity"
            min="0"
            max="10"
            defaultValue={quantity}
            onChange={quantityChangeHandler}
          ></input>
          {hasError && <Tooltip content="Please match the requested format" />}
          <p onClick={props.onRemoveItem.bind(null, id)}>Remove</p>
        </StytledProductSummary>
      </StyledCartProductItem>
      <StyledDivider />
    </StyledCartItem>
  );
}

export default CartItem;
