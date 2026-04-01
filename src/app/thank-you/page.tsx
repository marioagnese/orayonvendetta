"use client";

import { useEffect, useState } from "react";

export default function ThankYouPage() {
  const [lang, setLang] = useState<"en" | "es" | "pt">("en");

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();

    if (browserLang.includes("es")) setLang("es");
    else if (browserLang.includes("pt")) setLang("pt");
    else setLang("en");
  }, []);

  const getPrimaryFile = () => {
    if (lang === "es") return "/La_Oportunidad_Humana.pdf";
    if (lang === "pt") return "/A_Oportunidade_Humana.pdf";
    return "/The_Human_Opportunity_Final.pdf";
  };

  const getPrimaryLabel = () => {
    if (lang === "es") return "Descargar el ebook";
    if (lang === "pt") return "Baixar o ebook";
    return "Download the ebook";
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="mb-12">
          <img src="/logo.png" alt="Vendetta" className="mx-auto h-36 w-auto" />
        </div>

        <h1 className="mb-6 text-4xl font-black">
          Your ebook is ready
        </h1>

        <p className="mb-10 text-zinc-300">
          You now have access to{" "}
          <span className="font-semibold">The Human Opportunity</span>.
        </p>

        {/* PRIMARY CTA (dynamic) */}
        <a
          href={getPrimaryFile()}
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-xl bg-amber-300 px-8 py-4 font-semibold text-black transition hover:bg-amber-200"
        >
          {getPrimaryLabel()}
        </a>

        {/* SECONDARY LANGUAGE OPTIONS */}
        <div className="mt-6 text-sm text-zinc-400">
          <p>Other languages:</p>
          <div className="mt-2 flex justify-center gap-4">
            <a href="/The_Human_Opportunity_Final.pdf" className="hover:underline">
              English
            </a>
            <a href="/La_Oportunidad_Humana.pdf" className="hover:underline">
              Español
            </a>
            <a href="/A_Oportunidade_Humana.pdf" className="hover:underline">
              Português
            </a>
          </div>
        </div>

        {/* ORAYON CTA */}
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