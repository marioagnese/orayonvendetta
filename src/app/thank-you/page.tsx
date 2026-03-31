export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="mb-12">
          <img
            src="/logo.png"
            alt="Vendetta"
            className="mx-auto h-36 w-auto"
          />
        </div>

        <h1 className="mb-6 text-4xl font-black">
          Your ebook is ready
        </h1>

        <p className="mb-10 text-zinc-300">
          You now have access to <span className="font-semibold">The Human Opportunity</span>.
        </p>

        <a
          href="/The_Human_Opportunity_Final.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-xl bg-amber-300 px-8 py-4 font-semibold text-black transition hover:bg-amber-200"
        >
          Download the ebook
        </a>

        <div className="mt-16">
          <p className="mb-4 text-zinc-400">
            Want to go deeper?
          </p>

          <a
            href="https://app.orayon.ai/register/vendettaglobal?plan_id=2"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-xl border border-white/20 px-6 py-3 transition hover:bg-white/10"
          >
            Explore Orayon
          </a>
        </div>
      </section>
    </main>
  );
}