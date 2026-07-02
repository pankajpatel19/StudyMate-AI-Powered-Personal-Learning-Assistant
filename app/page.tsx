"use client"

import * as React from "react"

// StudyMate — Home Page
// Fonts needed in your project (add to app/layout.tsx or globals.css):
// Fraunces (display serif), Inter (body), JetBrains Mono (utility)

// Example next/font setup:
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google"
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display" })
const inter = Inter({ subsets: ["latin"], variable: "--font-body" })
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

const steps = [
  {
    number: "01",
    title: "Upload your notes",
    desc: `PDFs, docs, or lecture slides — drop in whatever you've got.`,
  },
  {
    number: "02",
    title: "AI reads through them",
    desc: "StudyMate processes the content and builds a knowledge base.",
  },
  {
    number: "03",
    title: "Ask anything",
    desc: "Get answers, summaries, and practice questions from your own notes.",
  },
]

const features = [
  {
    title: "Instant Answers",
    desc: "Sourced answers straight from your uploaded material — no more googling.",
  },
  {
    title: "Auto Flashcards",
    desc: "Revision cards generated automatically from your notes.",
  },
  {
    title: "Progress Tracking",
    desc: "See what you've mastered and what still needs review.",
  },
]

function FlashcardDemo() {
  const [flipped, setFlipped] = React.useState(false)

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="group relative h-64 w-full max-w-sm cursor-pointer select-none perspective-[distant]"
    >
      <div
        className="relative h-full w-full transition-transform duration-500 [transform-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-[#1C2541]/10 bg-white p-6 shadow-[0_2px_0_#1C2541] backface-hidden">
          <span className="font-mono text-xs uppercase tracking-wide text-[#5C6784]">
            Question
          </span>
          <p className="font-serif text-xl text-[#1C2541]">
            {`What's the basic equation for photosynthesis?`}
          </p>
          <span className="text-xs text-[#5C6784]">Tap to flip →</span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-[#1C2541]/10 bg-[#1C2541] p-6 shadow-[0_2px_0_#FFC857]backface-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          <span className="font-mono text-xs uppercase tracking-wide text-[#FFC857]">
            Answer
          </span>
          <p className="font-serif text-xl text-white">
            6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂
          </p>
          <span className="text-xs text-white/60">Generated from your notes</span>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F5F6FB] font-sans text-[#1C2541]">
      {/* Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-serif text-xl font-semibold">StudyMate</span>
        <div className="flex items-center gap-6 text-sm">
          <a href="#how" className="text-[#5C6784] hover:text-[#1C2541]">
            How it works
          </a>
          <a href="#features" className="text-[#5C6784] hover:text-[#1C2541]">
            Features
          </a>
          <a
            href="/signup"
            className="rounded-full bg-[#1C2541] px-4 py-2 font-medium text-white hover:bg-[#1C2541]/90"
          >
            Try free
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-14 px-6 py-16 md:flex-row md:py-24">
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">
            Turn your notes into{" "}
            <span className="relative inline-block">
              answers
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,6 Q25,2 50,6 T100,6"
                  stroke="#FFC857"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg text-[#5C6784] md:mx-0">
            StudyMate reads through your study material and becomes an AI
            tutor that only knows your course content.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <a
              href="/signup"
              className="w-full rounded-full bg-[#1C2541] px-6 py-3 text-center font-medium text-white hover:bg-[#1C2541]/90 sm:w-auto"
            >
              Get started free
            </a>
            <a
              href="#how"
              className="w-full rounded-full border border-[#1C2541]/20 px-6 py-3 text-center font-medium text-[#1C2541] hover:bg-white sm:w-auto"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="flex flex-1 justify-center">
          <FlashcardDemo />
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-y border-[#1C2541]/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-center font-serif text-3xl">
            Three simple steps
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="font-mono text-sm text-[#FFC857]">
                  {step.number}
                </span>
                <h3 className="mt-2 font-serif text-xl">{step.title}</h3>
                <p className="mt-2 text-sm text-[#5C6784]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center font-serif text-3xl">What you get</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-[#1C2541]/10 bg-white p-6"
            >
              <div className="h-2 w-8 rounded-full bg-[#4C9A78]" />
              <h3 className="mt-4 font-serif text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-[#5C6784]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1C2541] py-16 text-center text-white">
        <h2 className="font-serif text-3xl">
          Ready to make your notes smarter?
        </h2>
        <a
          href="/signup"
          className="mt-6 inline-block rounded-full bg-[#FFC857] px-8 py-3 font-medium text-[#1C2541] hover:bg-[#FFC857]/90"
        >
          Start your free trial
        </a>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-8 text-center text-xs text-[#5C6784]">
        © {new Date().getFullYear()} StudyMate
      </footer>
    </main>
  )
}