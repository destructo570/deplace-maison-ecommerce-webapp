import {
  StyledCartItem,
  StyledCartProductDetails,
  StyledCartProductItem,
  StyledDivider,
  StytledProductSummary,
} from "./styledComponents";

function CartItem(props) {
  const quantityChangeHandler = (event) => {
    // props.onAddItem({
    //   id: props.id,
    //   quantity: event.target.value,
    //   name: props.name,
    //   color: props.color,
    //   type: props.type,
    //   size: props.size,
    //   price: props.price,
    //   discount: props.discount,
    //   img: props.img,
    // });
    if (
      event.target.value === "" ||
      event.target.value < 0 ||
      event.target.value > 10
    ) {
      return;
    }

    if (event.target.value === "0") {
      props.onRemoveItem(props.id);
      return;
    }
    props.onQuantityChange({
      id: props.id,
      quantity: parseInt(event.target.value),
      name: props.name,
      color: props.color,
      type: props.type,
      size: props.size,
      price: props.price,
      discount: props.discount,
      img: props.img,
    });
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
          <p onClick={props.onRemoveItem.bind(null, props.id)}>Remove</p>
        </StytledProductSummary>
      </StyledCartProductItem>
      <StyledDivider />
    </StyledCartItem>
  );
}

export default CartItem;
