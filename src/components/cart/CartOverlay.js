import {
  StyledCartHeader,
  StyledCartOverlay,
  StyledDivider,
} from "./styledComponents";
import closeIcon from "../../assets/icons/close-fill.svg";
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
    </StyledCartOverlay>
  );
}

export default CartOverlay;
