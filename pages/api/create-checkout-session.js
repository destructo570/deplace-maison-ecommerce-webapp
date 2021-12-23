const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (cart) => {
  //Calculate order amount on the backend
};

export default async (req, res) => {
  const { cartInfo, customerInfo } = req.body;

  const transformedItems = cartInfo.items.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.name,
        images: [item.img],
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["US", "GB"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/order-success`,
    cancel_url: `${process.env.HOST}/order-failure`,
    metadata: {
      email: customerInfo.email,
      name: customerInfo.name,
      address: customerInfo.address,
      phone: customerInfo.phone,
      zipcode: customerInfo.zipcode,
      city: customerInfo.city,
      state: customerInfo.state,
      images: JSON.stringify(cartInfo.items.map((item) => item.img)),
    },
  });

  res.status(200).json({ id: session.id });
};
