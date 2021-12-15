import { StyledCheckoutProductItem } from "./styledComponents";

function CheckoutProductItem(props) {
  return (
    <StyledCheckoutProductItem>
      <div>
        <h1>{props.name}</h1>
        <p>${props.price} USD</p>
        <p>Quantity: {props.quantity}</p>
        <p>Color: {props.color}</p>
        <p>Size: {props.size}</p>
      </div>
      <img src={props.imgUrl} alt="" />
    </StyledCheckoutProductItem>
  );
}

export default CheckoutProductItem;
