"use client";

import { FormEvent, useState } from "react";

type State = "idle" | "loading" | "success" | "error";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setState("error");
      } else {
        setState("success");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setState("error");
    }
  }

  return (
    <section id="waitlist" className="py-24 lg:py-36" style={{ background: "#2E2E2E" }}>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-6">
          Early access
        </p>
        <h2
          className="font-headline font-extrabold uppercase leading-none text-white mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
        >
          Join the early
          <br />
          access list.
        </h2>
        <p className="text-white/50 text-base font-sans mb-10 leading-relaxed">
          We&apos;re rolling out access gradually. Drop your email and you&apos;ll be
          first to know when Safar is ready.
        </p>

        {state === "success" ? (
          <div className="bg-accent/20 border border-accent/30 rounded-2xl py-6 px-8">
            <p className="text-white font-medium text-lg">You&apos;re on the list.</p>
            <p className="text-white/50 text-sm mt-1 font-sans">
              We&apos;ll reach out to {email} when it&apos;s time.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={state === "loading"}
              className="flex-1 rounded-full px-5 py-3.5 bg-white text-dark text-sm font-sans placeholder:text-dark/30 outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={state === "loading"}
              className="rounded-full px-6 py-3.5 bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {state === "loading" ? "Sending…" : "Notify me →"}
            </button>
          </form>
        )}

        {state === "error" && (
          <p className="text-red-400 text-sm mt-3 font-sans">{errorMsg}</p>
        )}
      </div>
    </section>
  );
}
