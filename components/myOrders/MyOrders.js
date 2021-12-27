import {
  StyledMyOrders,
  StyledOrderItem,
  StyledOrderInfo,
} from "./styledComponents";
import { useSession } from "next-auth/react";
import moment from "moment";

function MyOrders(props) {
  const orders = props.orders;
  const { data: session } = useSession();
  let ordersContent = <p>Please login to see your orders.</p>;
  let ordersList = <li>No orders found.</li>;

  if (orders) {
    ordersList = orders.map((order) => {
      return (
        <StyledOrderItem key={order.id}>
          <img src={order.images[0]} alt=""></img>
          <StyledOrderInfo>
            <h3>{order.id.slice(0, 20) + "..."}</h3>
            <p>Items: {order.items.length}</p>
            <p>Total: ${order.amount} USD</p>
            <p>
              Ordered On: {moment.unix(order.timestamp).format("DD MMM YYYY")}
            </p>
          </StyledOrderInfo>
        </StyledOrderItem>
      );
    });
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
