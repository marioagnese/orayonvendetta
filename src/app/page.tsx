export default function OrayonLeadFunnelLandingPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        {/* Top bar */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <img src="/logo.png" className="h-10" />
            <span className="text-sm tracking-widest text-amber-200">VENDETTA CENTER</span>
          </div>

          <a
            href="#buy"
            className="text-sm border border-amber-300/30 px-4 py-2 rounded-lg hover:bg-amber-300/10 transition"
          >
            Get the ebook
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-black leading-tight mb-6">
              The Human Opportunity
            </h1>

            <p className="text-xl text-zinc-300 mb-6">
              A short premium ebook on AI, business transformation, and the shift from effort to leverage.
            </p>

            <p className="text-zinc-400 mb-10">
              Most people still see AI as a tool. A few are starting to see it as a system. This ebook is about the difference — and why it changes who wins.
            </p>

            <div className="flex gap-4">
              <a
                href="#buy"
                className="bg-amber-300 text-black font-semibold px-6 py-3 rounded-xl hover:bg-amber-200 transition"
              >
                Get the ebook — $4.99
              </a>

              <a
                href="#ebook"
                className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="border border-white/10 rounded-2xl p-8 bg-zinc-900">

            <h2 className="text-xl font-bold mb-4">
              The Human Opportunity
            </h2>

            <p className="text-zinc-400 mb-6 text-sm">
              Read in under 60 minutes. Designed to shift how you see work, value, and leverage.
            </p>

            <ul className="space-y-3 text-sm text-zinc-300 mb-6">
              <li>• Why AI changes structure, not just speed</li>
              <li>• The move from effort → judgment</li>
              <li>• Where real opportunity is forming</li>
              <li>• How to think in systems, not tasks</li>
            </ul>

            <div className="text-2xl font-bold mb-4">$4.99</div>

            <a
              id="buy"
              href="https://buy.stripe.com/28E4gy0HR3lU3z936193y00"
              className="block text-center bg-amber-300 text-black font-semibold py-3 rounded-xl hover:bg-amber-200 transition"
            >
              Buy the ebook
            </a>

          </div>
        </div>
      </section>


      {/* SHIFT */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center border-t border-white/10">

        <h2 className="text-3xl font-bold mb-6">
          The shift already happened.
        </h2>

        <p className="text-zinc-300 text-lg">
          AI is removing the effort that used to justify work. When effort disappears, value moves. And when value moves, opportunity follows.
        </p>

      </section>


      {/* WHAT IS INSIDE */}
      <section id="ebook" className="max-w-5xl mx-auto px-6 py-20 border-t border-white/10">

        <h2 className="text-3xl font-bold mb-10 text-center">
          What this ebook gives you
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            "A clear mental model of AI + human leverage",
            "Why most people are looking at AI the wrong way",
            "How work is shifting from doing to deciding",
            "Where real opportunity is emerging",
            "How to start thinking in systems",
            "What separates those who adapt vs those who stall",
          ].map((item) => (
            <div key={item} className="border border-white/10 p-6 rounded-xl bg-zinc-900">
              {item}
            </div>
          ))}

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="text-center py-20 border-t border-white/10">

        <h2 className="text-3xl font-bold mb-6">
          Start with the right perspective.
        </h2>

        <p className="text-zinc-400 mb-8">
          This is not about tools. It’s about seeing what most people still don’t.
        </p>

        <a
          href="#buy"
          className="bg-amber-300 text-black font-semibold px-8 py-4 rounded-xl hover:bg-amber-200 transition"
        >
          Get the ebook — $4.99
        </a>

      </section>


      {/* FOOTER */}
      <footer className="text-center text-xs text-zinc-500 py-10 border-t border-white/10">
        Educational material only. No earnings claims.
      </footer>

    </main>
  );
}
