export default function OrayonLeadFunnelLandingPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(181,146,42,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(10,92,54,0.16),transparent_35%)]" />
        <header className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.28em] text-amber-200">
              Vendetta Center
            </div>
            <div className="text-xs text-zinc-400">The Human Opportunity</div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
            <a href="#shift" className="transition hover:text-amber-200">
              The Shift
            </a>
            <a href="#ebook" className="transition hover:text-amber-200">
              The Ebook
            </a>
            <a href="#faq" className="transition hover:text-amber-200">
              FAQ
            </a>
          </nav>

          <a
            href="#buy"
            className="hidden rounded-xl border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:bg-amber-300/20 md:inline-flex"
          >
            Get the ebook
          </a>
        </header>

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
              Premium ebook • AI + human leverage • instant access
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              The Human Opportunity
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-200 sm:text-2xl">
              A short premium ebook on AI, business transformation, and the shift from effort to leverage.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Most people are still thinking about AI as a tool. A few are starting to see it as a system. This ebook is about the difference — and why it changes who wins.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#buy"
                className="inline-flex items-center justify-center rounded-2xl bg-amber-300 px-7 py-4 text-base font-bold text-zinc-950 transition hover:scale-[1.01] hover:bg-amber-200"
              >
                Get the ebook — $4.99
              </a>
              <a
                href="#ebook"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Read what it covers
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-400">
              <span className="rounded-full border border-white/10 px-3 py-1">Instant access</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Thought-provoking</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Built for clarity, not hype</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[2rem] border border-amber-300/20 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 shadow-[0_0_60px_rgba(181,146,42,0.12)]">
              <div className="rounded-[1.5rem] border border-white/10 bg-zinc-900/90 p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Featured ebook</p>
                    <h2 className="mt-2 text-2xl font-bold">The Human Opportunity</h2>
                    <p className="mt-2 text-sm text-zinc-400">AI, business transformation, and the new leverage economy.</p>
                  </div>
                  <div className="rounded-2xl border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-right">
                    <div className="text-xs uppercase tracking-[0.18em] text-amber-100">Today</div>
                    <div className="text-2xl font-black text-amber-200">$4.99</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <ul className="space-y-3 text-sm leading-6 text-zinc-300">
                    <li>• A premium short-form ebook</li>
                    <li>• Read in under 60 minutes</li>
                    <li>• Strategic, conceptual, and practical</li>
                    <li>• Designed to change how you see work</li>
                    <li>• A gateway into deeper opportunity</li>
                  </ul>
                </div>

                <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-6 text-amber-50">
                  Educational material only. No earnings claims or guaranteed outcomes.
                </div>

                <a
                  id="buy"
                  href="https://buy.stripe.com/"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-amber-300 px-6 py-4 text-base font-bold text-zinc-950 transition hover:bg-amber-200"
                >
                  Buy the ebook now
                </a>

                <p className="mt-4 text-center text-xs leading-5 text-zinc-500">
                  Replace this Stripe link with your live checkout URL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="shift" className="border-b border-white/10 bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">The shift</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The shift already happened. Most just have not seen it clearly yet.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              AI is not simply replacing work. It is removing the effort that used to justify it. When effort disappears, value moves, decisions move, and opportunity moves.
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-300">
              The question is no longer “How do I do this better?” It becomes “Why does this exist at all?” That is where leverage begins.
            </p>
          </div>
        </div>
      </section>

      <section id="ebook" className="border-b border-white/10 bg-black py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">What this ebook is</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                This is not a tutorial. It is a lens.
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                Inside this short premium ebook, readers explore why AI feels like efficiency but behaves like disruption, how work is shifting from production to judgment, and what human leverage really means in a world where tools think with you.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                "Why AI feels like efficiency but behaves like disruption",
                "How work is shifting from production to judgment",
                "The gap between AI capability and organizational structure",
                "Why smart companies stay stuck even after adopting AI",
                "What human leverage really means now",
                "How to start seeing systems instead of tasks",
                "Why value is shifting away from effort",
                "How perspective becomes opportunity",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="text-base font-semibold text-white">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">This ebook is for</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-emerald-50">
                <li>• Professionals sensing something is changing</li>
                <li>• Business-minded people exploring AI beyond surface tools</li>
                <li>• Readers who want to understand where leverage is shifting</li>
                <li>• Those willing to think before acting</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-rose-400/20 bg-rose-400/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-200">This is not for</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-rose-50">
                <li>• People looking for guaranteed income</li>
                <li>• Get-rich-with-AI shortcuts</li>
                <li>• Step-by-step technical tutorials</li>
                <li>• Passive consumption without action</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">Why this exists</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            This ebook is itself proof of the shift.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            It was created through structured interaction with multiple AI systems, then shaped through human judgment. Not written by AI. Not written without AI. Built through leverage.
          </p>
        </div>
      </section>

      <section id="faq" className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">FAQ</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A few questions before you buy
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {[
              [
                "Is this a course or software?",
                "No. This is a short premium ebook.",
              ],
              [
                "Do I need technical knowledge?",
                "No. This is conceptual, strategic, and beginner-friendly.",
              ],
              [
                "Does this teach how to make money with AI?",
                "Indirectly. It helps readers understand where opportunity is shifting, which comes before execution.",
              ],
              [
                "What happens after I buy?",
                "You receive the ebook and can choose whether to explore deeper opportunities later.",
              ],
              [
                "How long is it?",
                "It is designed to be concise, premium, and readable in under an hour.",
              ],
            ].map(([question, answer]) => (
              <div key={question} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">{question}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-amber-300/20 bg-amber-300/10 p-8 text-center shadow-[0_0_50px_rgba(181,146,42,0.10)]">
            <h3 className="text-2xl font-bold text-white">Start with the perspective most people do not yet have.</h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-200">
              Get instant access to a short ebook designed to change how you see work, value, and leverage in the AI era.
            </p>
            <a
              href="#buy"
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-amber-300 px-7 py-4 text-base font-bold text-zinc-950 transition hover:bg-amber-200"
            >
              Get the ebook — $4.99
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-zinc-400 lg:flex-row lg:items-start lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <div className="font-semibold text-white">Vendetta Center</div>
            <p className="mt-3 leading-6">
              Educational material only. No earnings claims or guarantees. Results depend on individual decisions and execution.
            </p>
          </div>
          <div className="grid gap-2 text-sm">
            <a href="#" className="transition hover:text-amber-200">Privacy Policy</a>
            <a href="#" className="transition hover:text-amber-200">Terms of Use</a>
            <a href="#" className="transition hover:text-amber-200">Refund Policy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
