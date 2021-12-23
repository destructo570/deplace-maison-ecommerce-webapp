import {
  StyledMyOrders,
  StyledOrderItem,
  StyledOrderInfo,
  StyledOrderPriceInfo,
} from "./styledComponents";
import { useSession } from "next-auth/react";

function MyOrders(props) {
  const orders = props.orders;
  const { data: session } = useSession();

  let ordersContent = <p>Please SignIn to see your orders.</p>;
  let ordersList = <li>No orders found.</li>;

  if (orders) {
    <StyledOrderItem>
      <img src="https://picsum.photos/300/300" alt=""></img>
      <StyledOrderInfo>
        <h3>Order: #cs43..</h3>
        <p>Items: 3</p>
        <p>Color: Black</p>
        <p>Ordered On: 12/12/21</p>
      </StyledOrderInfo>
      <StyledOrderPriceInfo>
        <p>$ 500 USD</p>
      </StyledOrderPriceInfo>
    </StyledOrderItem>;
  }
  if (session) {
    ordersContent = <ul>{ordersList}</ul>;
  }
  return (
    <StyledMyOrders>
      <h1>My Orders</h1>
      {ordersContent}
    </StyledMyOrders>
  );
}

export default MyOrders;
