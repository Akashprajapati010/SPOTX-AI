import Razorpay from "razorpay";
import { NextResponse } from "next/server";

// ✅ Debug logs OUTSIDE object
console.log("KEY_ID:", process.env.RAZORPAY_KEY_ID);
console.log("KEY_SECRET:", process.env.RAZORPAY_KEY_SECRET);

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req) {
  try {
    const { event } = await req.json();

    const options = {
      amount: event.ticketPrice * 100,
      currency: "INR",
      receipt: `receipt_${event._id}`,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json(order);

  } catch (error) {
    console.error("RAZORPAY ERROR:", error);

    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}