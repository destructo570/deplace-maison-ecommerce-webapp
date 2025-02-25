import { useContext, useRef } from "react";
import CartContext from "../../store/cart-context";
import {
  StyledCheckout,
  StyledSubmitOrder,
  StyledSubCheckoutForm,
  StyledCheckoutDetails,
} from "./styledComponents";
import TextInput from "../global/TextInput/TextInput";
import CheckoutProductList from "./CheckoutProductList";
import CheckoutSummary from "./CheckoutSummary";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Wrapper from "../wrapper/Wrapper";

//TODO: Import public key using environment variables
const stripePromise = loadStripe(
  "pk_test_51K6THjSHw2d4uoKkCWjB5qbUf3ZG1aaSqyEkO5sgKNxTu4cE8tjWUEinla6MwWuH9l7UUirRe4zgVLDgvSFojmPf002UhOkJBi"
);

function Checkout() {
  const cartCtx = useContext(CartContext);
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const streetAddressInputRef = useRef();
  const telephoneInputRef = useRef();
  const cityInputRef = useRef();
  const stateInputRef = useRef();
  const zipcodeInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    //Send request to stripe to create a checkout session
    const stripe = await stripePromise;
    const response = await axios.post("/api/create-checkout-session", {
      cartInfo: cartCtx,
      customerInfo: {
        email: emailInputRef.current.value,
        name: nameInputRef.current.value,
        address: streetAddressInputRef.current.value,
        phone: telephoneInputRef.current.value,
        zipcode: zipcodeInputRef.current.value,
        city: cityInputRef.current.value,
        state: stateInputRef.current.value,
      },
    });

    const result = await stripe.redirectToCheckout({
      sessionId: response.data.id,
    });

    //Show an alert if stripe connection fails
    if (result.error) alert(result.error.message);
  };
  return (
    <Wrapper>
      <StyledCheckout>
        <form onSubmit={submitHandler}>
          <div>
            <h2>General information</h2>
            <TextInput
              label="email"
              type="email"
              placeholder=""
              name="email"
              ref={emailInputRef}
            />
            <h2>Shipping Address</h2>
            <TextInput
              label="full name"
              name="fullname"
              type="text"
              placeholder=""
              ref={nameInputRef}
            />
            <TextInput
              label="street address"
              name="street address"
              type="text"
              placeholder=""
              ref={streetAddressInputRef}
            />

            <StyledSubCheckoutForm>
              <TextInput
                label="city"
                name="city"
                type="text"
                placeholder=""
                ref={cityInputRef}
              />
              <TextInput
                label="state/province"
                name="state/province"
                type="text"
                placeholder=""
                ref={stateInputRef}
              />
              <TextInput
                label="zip/postal code"
                name="zip/postal"
                type="number"
                placeholder=""
                ref={zipcodeInputRef}
              />
            </StyledSubCheckoutForm>
            <h2>Additional information</h2>

            <TextInput
              label="telephone"
              name="telephone"
              type="text"
              placeholder="Enter telephone number"
              ref={telephoneInputRef}
            />
          </div>
          <StyledCheckoutDetails>
            <CheckoutProductList
              productList={cartCtx.items}
            ></CheckoutProductList>
            <CheckoutSummary
              subTotal={cartCtx.totalAmount}
              discount="0"
              total={cartCtx.totalAmount}
            />
            <StyledSubmitOrder type="submit">Confirm and Pay</StyledSubmitOrder>
          </StyledCheckoutDetails>
        </form>
      </StyledCheckout>
    </Wrapper>
  );
}

export default Checkout;
