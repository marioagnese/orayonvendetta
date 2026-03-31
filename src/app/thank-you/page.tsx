export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">

        {/* LOGO */}
        <div className="mb-12">
          <img src="/logo.png" className="h-36 mx-auto w-auto" />
        </div>

        <h1 className="text-4xl font-black mb-6">
          Your ebook is ready
        </h1>

        <p className="text-zinc-300 mb-10">
          You now have access to The Human Opportunity.
        </p>

        <a
          href="/The_Human_Opportunity_Final.pdf"
          target="_blank"
          className="bg-amber-300 text-black px-8 py-4 rounded-xl font-semibold"
        >
          Download the ebook
        </a>

        <div className="mt-16">
          <p className="text-zinc-400 mb-4">
            Want to go deeper?
          </p>

          <a
            href="https://app.orayon.ai/register/vendettaglobal?plan_id=2"
            target="_blank"
            className="border border-white/20 px-6 py-3 rounded-xl"
          >
            Explore Orayon
          </a>
        </div>
      </section>
    </main>
  );
}