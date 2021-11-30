import {
  StyledCartHeader,
  StyledCartOverlay,
  StyledDivider,
} from "./styledComponents";
import closeIcon from "../../assets/icons/close-fill.svg";
import { Fragment } from "react";
function CartOverlay(props) {
  return (
    <StyledCartOverlay>
      <StyledCartHeader>
        <h1>
          Your <br />
          <span>Cart</span>
        </h1>
        <img src={closeIcon} onClick={props.onClose} alt="Close cart" />
      </StyledCartHeader>
      <StyledDivider />
      <Fragment>{props.children}</Fragment>
    </StyledCartOverlay>
  );
}

export default CartOverlay;
