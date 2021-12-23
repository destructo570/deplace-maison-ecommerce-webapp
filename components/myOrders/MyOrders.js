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
    ordersList = orders.map((order) => {
      return (
        <StyledOrderItem key={order.id}>
          <img src={order.images[0]} alt=""></img>
          <StyledOrderInfo>
            <h3>Order: {`${order.id.slice(0, 7)}` + "..."}</h3>
            <p>Items: {order.items.length}</p>
            <p>Total: {order.amount}</p>
            <p>Ordered On: {order.timestamp}</p>
          </StyledOrderInfo>
          <StyledOrderPriceInfo>
            <p>$ {order.amount} USD</p>
          </StyledOrderPriceInfo>
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
