import { Fragment } from "react";
import ClientOnlyPortal from "../global/ClientOnlyPortal/ClientOnlyPortal";
import CartOverlay from "./CartOverlay";
import styled from "styled-components";
import { StyledBackDrop } from "./styledComponents";

// const StyledBackDrop = styled.div`
//   background-color: rgba(0, 0, 0, 0.6);
//   position: fixed;
//   top: 0px;
//   height: 100vh;
//   width: 100vw;
//   z-index: 100;
// `;

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
