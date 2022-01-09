import {
  StyledMyOrders,
  StyledOrderItem,
  StyledOrderInfo,
} from "./styledComponents";
import { useSession } from "next-auth/react";
import moment from "moment";
import Wrapper from "../../components/wrapper/Wrapper";

function MyOrders(props) {
  const orders = props.orders;
  const { data: session } = useSession();

  //Show this if user is not logged in yet
  let ordersContent = <p>Please login to see your orders.</p>;

  //Show this if there are no orders
  let ordersList = <li>No orders found.</li>;

  //Map the order data
  if (orders) {
    ordersList = orders.map((order) => {
      let itemsString = "Items: ";

      order.items.forEach((item) => {
        itemsString = itemsString + `${item.quantity} ${item.description}, `;
      });

      return (
        <StyledOrderItem key={order.id}>
          <img src={order.images[0]} alt=""></img>
          <StyledOrderInfo>
            <h3>{order.id.slice(0, 20) + "..."}</h3>
            <p>{itemsString}</p>
            <p>Total: ${order.amount} USD</p>
            <p>
              Ordered On: {moment.unix(order.timestamp).format("DD MMM YYYY")}
            </p>
          </StyledOrderInfo>
        </StyledOrderItem>
      );
    });
  }

  //Set the orders content if user is logged in
  if (session) {
    ordersContent = <ul>{ordersList}</ul>;
  }
  return (
    <Wrapper>
      <StyledMyOrders>
        <h1>My Orders</h1>
        {ordersContent}
      </StyledMyOrders>
    </Wrapper>
  );
}

export default MyOrders;
