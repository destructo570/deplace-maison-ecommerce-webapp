import ClientOnlyPortal from "../global/ClientOnlyPortal/ClientOnlyPortal";
import { StyledBackDrop } from "./styledComponents";

function CartModal(props) {
  return (
    <ClientOnlyPortal selector={"#modal"}>
      <StyledBackDrop
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut" }}
        exit={{ opacity: 0 }}
      >
        {props.children}
      </StyledBackDrop>
    </ClientOnlyPortal>
  );
}
export default CartModal;
