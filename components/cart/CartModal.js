import { Fragment } from "react";
import ClientOnlyPortal from "../global/ClientOnlyPortal/ClientOnlyPortal";
import CartOverlay from "./CartOverlay";
import { StyledBackDrop } from "./styledComponents";

function CartModal(props) {
  return (
    <Fragment>
      <ClientOnlyPortal selector={"#modal"}>
        <StyledBackDrop>
          <CartOverlay onClose={props.onClose}>{props.children}</CartOverlay>
        </StyledBackDrop>
      </ClientOnlyPortal>
    </Fragment>
  );
}
export default CartModal;
