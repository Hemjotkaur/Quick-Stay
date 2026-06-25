import stripe from "stripe";
import Booking from "../models/Booking.js";
// API to handle Stripe Webhooks

export const stripeWebhooks = async (request, response) => {
  // Stripe Gateway Initialize
  console.log("Webhook Hit");
  const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);
  const sig = request.headers["stripe-signature"];
  let event;
console.log("Content-Type:", request.headers["content-type"]);
console.log("Body:", request.body);
  try {
    event = stripeInstance.webhooks.constructEvent(
      request.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET ,
    );
  }catch (err) {
  console.log("Webhook Error:", err.message);
  return response.status(400).send(`Webhook Error: ${err.message}`);
}
console.log("Event Type:", event.type);
  //handle the event
  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object;
    const paymentIntentId = paymentIntent.id;

    // Getting Session Metadata
    const session = await stripeInstance.checkout.sessions.list({
      payment_intent: paymentIntentId,
    });

    const { bookingId } = session.data[0].metadata;
    // Mark Payment as Paid
    await Booking.findByIdAndUpdate(bookingId, {
      isPaid: true,
      paymentMethod: "Stripe",
    });
  } else {
    console.log("Unhandled event type: ", event.type);
  }
  response.json({ received: true });
};





