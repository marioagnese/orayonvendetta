export default function Page() {
  const highlights = [
    "A clear mental model of AI + human leverage",
    "Why most people are looking at AI the wrong way",
    "How work is shifting from doing to deciding",
    "Where real opportunity is emerging",
    "How to start thinking in systems",
    "What separates those who adapt vs those who stall",
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">

        {/* LOGO */}
        <div className="mb-12">
          <img src="/logo.png" alt="Vendetta" className="h-48 w-auto" />
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-5xl font-black leading-tight">
              The Human Opportunity
            </h1>

            <p className="mb-6 text-xl text-zinc-300">
              A short premium ebook on AI, business transformation, and the shift
              from effort to leverage.
            </p>

            <p className="mb-10 text-zinc-400">
              Most people still see AI as a tool. A few are starting to see it as
              a system. This ebook is about the difference — and why it changes
              who wins.
            </p>

            <a
              href="#ebook"
              className="rounded-xl border border-white/20 px-6 py-3 transition hover:bg-white/10"
            >
              Preview the ebook
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">
            <h2 className="mb-4 text-xl font-bold">The Human Opportunity</h2>

            <p className="mb-6 text-sm text-zinc-400">
              Read in under 60 minutes. Designed to shift how you see work,
              value, and leverage.
            </p>

            <ul className="mb-6 space-y-3 text-sm text-zinc-300">
              <li>• Why AI changes structure, not just speed</li>
              <li>• The move from effort to judgment</li>
              <li>• Where real opportunity is forming</li>
              <li>• How to think in systems, not tasks</li>
            </ul>

            <div className="mb-4 text-2xl font-bold">$4.99</div>

            <a
              href="/checkout"
              className="block rounded-xl bg-amber-300 py-3 text-center font-semibold text-black hover:bg-amber-200 transition"
            >
              Continue to checkout
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl border-t border-white/10 px-6 py-20 text-center">
        <h2 className="mb-6 text-3xl font-bold">
          The shift already happened.
        </h2>

        <p className="text-lg text-zinc-300">
          AI is removing the effort that used to justify work. When effort
          disappears, value moves. And when value moves, opportunity follows.
        </p>
      </section>

      <section
        id="ebook"
        className="mx-auto max-w-5xl border-t border-white/10 px-6 py-20"
      >
        <h2 className="mb-10 text-center text-3xl font-bold">
          What this ebook gives you
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-zinc-900 p-6"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 py-20 text-center">
        <h2 className="mb-6 text-3xl font-bold">
          Start with the right perspective.
        </h2>

        <p className="mb-8 text-zinc-400">
          This is not about tools. It is about seeing what most people still do not.
        </p>

        <a
          href="/checkout"
          className="rounded-xl bg-amber-300 px-8 py-4 font-semibold text-black hover:bg-amber-200 transition"
        >
          Get the ebook — $4.99
        </a>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-xs text-zinc-500">
        Educational material only. No earnings claims.
      </footer>
    </main>
  );
}