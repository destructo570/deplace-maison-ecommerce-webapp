import { StyledCartHeader } from "./styledComponents";
import closeIcon from "../../assets/icons/close-fill.svg";

function CartHeader(props) {
  return (
    <StyledCartHeader>
      <h1>
        Your <br />
        <span>Cart</span>
      </h1>
      <img src={closeIcon.src} onClick={props.onClose} alt="close cart" />
    </StyledCartHeader>
  );
}

export default CartHeader;
