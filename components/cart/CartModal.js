import ClientOnlyPortal from "../global/ClientOnlyPortal/ClientOnlyPortal";
import { StyledBackDrop } from "./styledComponents";

function CartModal(props) {
  return (
    <ClientOnlyPortal selector={"#modal"}>
      <StyledBackDrop>{props.children}</StyledBackDrop>
    </ClientOnlyPortal>
  );
}
export default CartModal;
