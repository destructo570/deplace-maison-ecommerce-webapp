import { Fragment } from "react";
import ReactDOM from "react-dom";
import BackDrop from "../global/Backdrop/BackDrop";
import CartOverlay from "./CartOverlay";

function CartModal(props) {
  const portalElement = document.getElementById("overlay-root");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <CartOverlay onClose={props.onClose}>{props.children}</CartOverlay>,
        portalElement
      )}
    </Fragment>
  );
}
export default CartModal;
