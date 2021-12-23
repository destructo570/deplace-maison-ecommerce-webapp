import { buffer } from "micro";
import * as admin from "firebase-admin";

//Connect to firebase from backend
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACC_KEY);
const app = !admin.apps.length
  ? admin.initializeApp({ credential: admin.credential.cert(serviceAccount) })
  : admin.app();

//Establish connection to Stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const completeOrder = async (session) => {
  console.log("Completing Order...");

  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .set({
      userEmail: session.metadata.email,
    })
    .then(() => {
      return app
        .firestore()
        .collection("users")
        .doc(session.metadata.email)
        .collection("orders")
        .doc(session.id)
        .set({
          amount: session.amount_total / 100,
          amount_shipping: session.total_details.amount_shipping / 100,
          images: JSON.parse(session.metadata.images),
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
        });
    })
    .then(() => {
      console.log(
        `Success: Order ${session.id} has been added to the databse.`
      );
    });
};
export default async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;

    //Verify stripe event
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (error) {
      console.log("ERROR".error.message);
      return res.status(400).send(`Webhook error: ${error.message}`);
    }

    //Handle checkout complete session
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      //Complete the order (Store in firebase DB)
      return completeOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send(`Webhook Error: ${err.message}`));
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
