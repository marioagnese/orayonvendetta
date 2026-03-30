export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <img src="/logo.png" alt="Vendetta Center" className="mx-auto h-14" />

        <p className="mt-8 text-sm tracking-[0.28em] text-amber-200">ORDER COMPLETE</p>
        <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
          Thank you. Your ebook is ready.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          Your payment was successful. You can access <span className="font-semibold text-white">The Human Opportunity</span> below.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-900 p-8">
          <h2 className="text-2xl font-bold">Download your ebook</h2>
          <p className="mt-3 text-zinc-400">
            Use the button below to open the digital edition.
          </p>

          <a
            href="/The_Human_Opportunity_Final.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-xl bg-amber-300 px-8 py-4 font-semibold text-black hover:bg-amber-200"
          >
            Open the ebook PDF
          </a>
        </div>

        <div className="mt-12 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-8 text-left">
          <p className="text-sm tracking-[0.2em] text-amber-100">NEXT STEP</p>
          <h3 className="mt-3 text-2xl font-bold">Want to go deeper?</h3>
          <p className="mt-4 text-zinc-200 leading-7">
            This ebook is the beginning. If the ideas inside resonate with you, the next step is to explore how the Orayon model can help people turn insight into action.
          </p>

          <a
            href="https://app.orayon.ai/register/vendettaglobal?plan_id=2"
            className="mt-6 inline-flex rounded-xl border border-white/15 px-6 py-3 font-semibold text-white hover:bg-white/10"
          >
            Explore the Orayon opportunity
          </a>
        </div>
      </section>
    </main>
  );
}
