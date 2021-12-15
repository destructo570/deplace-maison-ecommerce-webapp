import { StyledCheckoutSummary } from "./styledComponents";

function CheckoutSummary(props) {
  return (
    <StyledCheckoutSummary>
      <div>
        <p>subtotal</p>
        <p>$ {props.subTotal} USD</p>
      </div>
      <div>
        <p>discount</p>
        <p>$ {props.discount} USD</p>
      </div>
      <div>
        <h3>total</h3>
        <h3>$ {props.total} USD</h3>
      </div>
    </StyledCheckoutSummary>
  );
}

export default CheckoutSummary;
