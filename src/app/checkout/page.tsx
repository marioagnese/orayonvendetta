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
      fullName: String(form.get("fullName") || "").trim(),
      email: String(form.get("email") || "").trim(),
      phone: String(form.get("phone") || "").trim(),
      country: String(form.get("country") || "").trim(),
      stateRegion: String(form.get("stateRegion") || "").trim(),
      role: String(form.get("role") || "").trim(),
      consentEmail: form.get("consentEmail") === "on",
      consentSms: form.get("consentSms") === "on",
    };

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error || "Unable to create checkout session.");
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10 flex items-center gap-3">
          <img src="/logo.png" alt="Vendetta Center" className="h-10" />
          <div>
            <div className="text-sm tracking-widest text-amber-200">VENDETTA CENTER</div>
            <div className="text-xs text-zinc-400">Checkout</div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="text-4xl font-black leading-tight">Complete your order</h1>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Enter your details below to continue to secure payment for <span className="font-semibold text-white">The Human Opportunity</span>.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5 rounded-2xl border border-white/10 bg-zinc-900 p-6">
              <div>
                <label className="mb-2 block text-sm font-medium">Full name</label>
                <input name="fullName" required className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 outline-none focus:border-amber-300" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>
                <input name="email" type="email" required className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 outline-none focus:border-amber-300" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Phone</label>
                <input name="phone" required className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 outline-none focus:border-amber-300" />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">Country</label>
                  <input name="country" required className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 outline-none focus:border-amber-300" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">State / Region</label>
                  <input name="stateRegion" required className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 outline-none focus:border-amber-300" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">What best describes you?</label>
                <select name="role" className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 outline-none focus:border-amber-300">
                  <option>Professional</option>
                  <option>Business owner</option>
                  <option>Freelancer</option>
                  <option>Student</option>
                  <option>Exploring AI opportunity</option>
                </select>
              </div>

              <div className="space-y-3 rounded-xl border border-white/10 bg-zinc-950 p-4 text-sm text-zinc-300">
                <label className="flex items-start gap-3">
                  <input name="consentEmail" type="checkbox" className="mt-1" required />
                  <span>I agree to receive email updates, delivery details, and follow-up information related to this purchase.</span>
                </label>
                <label className="flex items-start gap-3">
                  <input name="consentSms" type="checkbox" className="mt-1" />
                  <span>I agree to receive optional text messages or phone follow-up about related opportunities.</span>
                </label>
              </div>

              {error ? <p className="text-sm text-red-400">{error}</p> : null}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-amber-300 px-6 py-4 font-semibold text-black transition hover:bg-amber-200 disabled:opacity-70"
              >
                {loading ? "Redirecting..." : "Continue to secure payment"}
              </button>
            </form>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 h-fit">
            <h2 className="text-2xl font-bold">Order summary</h2>
            <p className="mt-3 text-zinc-400">The Human Opportunity</p>
            <p className="mt-1 text-sm text-zinc-500">Premium ebook on AI, leverage, and business transformation.</p>

            <div className="my-6 h-px bg-white/10" />

            <ul className="space-y-3 text-sm text-zinc-300">
              <li>• Instant access after payment</li>
              <li>• Thank-you delivery page</li>
              <li>• Follow-up email sequence</li>
              <li>• Early access to deeper opportunities</li>
            </ul>

            <div className="my-6 h-px bg-white/10" />

            <div className="flex items-center justify-between text-lg">
              <span>Total</span>
              <span className="font-bold text-amber-200">$4.99</span>
            </div>

            <p className="mt-6 text-xs leading-6 text-zinc-500">
              Educational material only. No earnings claims or guarantees. Your details are collected for order fulfillment and, where consented, future follow-up.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
