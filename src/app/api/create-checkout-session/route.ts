import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-02-24.acacia",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      country,
      stateRegion,
      role,
      consentEmail,
      consentSms,
    } = body || {};

    if (!fullName || !email || !phone || !country || !stateRegion) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${baseUrl}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout`,
      customer_email: email,
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      metadata: {
        fullName,
        email,
        phone,
        country,
        stateRegion,
        role: role || "",
        consentEmail: String(Boolean(consentEmail)),
        consentSms: String(Boolean(consentSms)),
      },
      custom_text: {
        submit: {
          message: "You will get instant access to the ebook after payment.",
        },
      },
      phone_number_collection: {
        enabled: true,
      },
      billing_address_collection: "required",
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Unable to create checkout session." }, { status: 500 });
  }
}
