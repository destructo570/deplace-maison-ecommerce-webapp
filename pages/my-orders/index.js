import MyOrders from "../../components/myOrders/MyOrders";
import db from "../../firebase";
import { collection, query, getDocs } from "firebase/firestore";
import moment from "moment";
import { getSession } from "next-auth/react";

function MyOrdersPage(props) {
  return <MyOrders orders={props.orders} />;
}

export default MyOrdersPage;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  //Firebase Orders data
  const usersOrders = query(
    collection(db, "users", session.user.email, "orders")
  );
  const querySnapshot = await getDocs(usersOrders);

  //Stripe Orders
  const orders = await Promise.all(
    querySnapshot.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: {
      orders,
    },
  };
}
