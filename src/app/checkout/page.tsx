"use client";

import { FormEvent, useState } from "react";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);

    const payload = {
      fullName: String(form.get("fullName") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      country: String(form.get("country") || ""),
      stateRegion: String(form.get("stateRegion") || ""),
      role: String(form.get("role") || ""),
      consentEmail: form.get("consentEmail") === "on",
      consentSms: form.get("consentSms") === "on",
    };

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!data.url) throw new Error("Stripe error");

      window.location.href = data.url;
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">

        {/* LOGO */}
        <div className="mb-14">
          <img src="/logo.png" alt="Vendetta" className="h-40 w-auto" />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <form onSubmit={handleSubmit} className="space-y-4">

            <h1 className="text-4xl font-black">Complete your order</h1>

            <input name="fullName" placeholder="Full name" required className="w-full p-3 bg-zinc-900 rounded" />
            <input name="email" placeholder="Email" required className="w-full p-3 bg-zinc-900 rounded" />
            <input name="phone" placeholder="Phone" required className="w-full p-3 bg-zinc-900 rounded" />
            <input name="country" placeholder="Country" required className="w-full p-3 bg-zinc-900 rounded" />
            <input name="stateRegion" placeholder="State / Region" required className="w-full p-3 bg-zinc-900 rounded" />

            <select name="role" className="w-full p-3 bg-zinc-900 rounded">
              <option>Professional</option>
              <option>Business owner</option>
              <option>Student</option>
            </select>

            <button className="w-full bg-amber-300 text-black py-4 rounded font-semibold">
              {loading ? "Redirecting..." : "Continue to payment"}
            </button>

            {error && <p className="text-red-400">{error}</p>}
          </form>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h2 className="text-xl font-bold">Order summary</h2>
            <p className="mt-2 text-zinc-400">The Human Opportunity</p>
            <p className="mt-4 text-2xl">$4.99</p>
          </div>
        </div>
      </section>
    </main>
  );
}