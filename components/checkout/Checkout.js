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
    const eneteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredStreet = streetAddressInputRef.current.value;
    const enteredTelephone = telephoneInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredState = stateInputRef.current.value;
    const enteredZipcode = zipcodeInputRef.current.value;

    const stripe = await stripePromise;
    const response = await axios.post("/api/create-checkout-session", {
      cartInfo: cartCtx,
      customerInfo: {
        email: enteredEmail,
        name: eneteredName,
        address: enteredStreet,
        phone: enteredTelephone,
        zipcode: enteredZipcode,
        city: enteredCity,
        state: enteredState,
      },
    });

    const result = await stripe.redirectToCheckout({
      sessionId: response.data.id,
    });

    if (result.error) alert(result.error.message);
  };
  return (
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
  );
}

export default Checkout;
