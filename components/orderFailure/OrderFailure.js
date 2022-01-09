import Wrapper from "../wrapper/Wrapper";
import { StyledOrderFailure } from "./styledComponents";

// TODO: Style the page better with more info.
// TODO: Make the page accessible only via backend.

function OrderFailure() {
  return (
    <Wrapper>
      <StyledOrderFailure>
        <h1>Sorry, Your order was unsuccesfull.</h1>
      </StyledOrderFailure>
    </Wrapper>
  );
}

export default OrderFailure;
