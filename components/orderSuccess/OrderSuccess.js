import { useEffect } from "react";
import { setCart } from "../../lib/CartUtil";
import { StyledOrderSuccess } from "./styledComponents";

// TODO: Style the page better with more info.
// TODO: Make the page accessible only via backend.
function OrderSuccess() {
  useEffect(() => {
    //Clear the cart from localStorage if order was successfull
    setCart({ items: [], totalAmount: 0, totalItems: 0 });
  }, []);
  return (
    <StyledOrderSuccess>
      <h1>Thank you, Your order was successfull.</h1>
    </StyledOrderSuccess>
  );
}

export default OrderSuccess;
