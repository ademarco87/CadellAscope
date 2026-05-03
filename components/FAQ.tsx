"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What happens in a coaching session?",
    a: "Sessions are 60 minutes over the phone. We review your finances, work through your plan, celebrate wins, and tackle any obstacles you're facing. Every session is focused on your specific situation.",
  },
  {
    q: "How often do we meet?",
    a: "Most clients meet weekly or bi-weekly depending on their goals and schedule. We'll figure out the right cadence for you on the discovery call.",
  },
  {
    q: "Do I need to have money saved to start?",
    a: "Not at all. Many clients come to me with very little — sometimes in the red. We start exactly where you are and build from there.",
  },
  {
    q: "Is this financial advice or therapy?",
    a: "Neither. Financial coaching is action-oriented and focused on your money habits, goals, and behaviors. I'm not a licensed advisor and I won't manage your investments, but I will help you build a rock-solid financial foundation.",
  },
  {
    q: "How do I book a session?",
    a: "Click any \"Book a Session\" button on the page and you'll be taken to the booking calendar. Your first discovery call is completely free.",
  },
  {
    q: "What if I can't afford coaching right now?",
    a: "Book the free discovery call and let's talk. There may be flexible options available. The goal is to make coaching accessible, not exclusive.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left group"
      >
        <span className="text-navy font-semibold pr-8 group-hover:text-gold transition-colors">
          {q}
        </span>
        <span
          className={`text-gold text-2xl font-light shrink-0 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="text-gray-500 leading-relaxed pb-5 text-sm">{a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#c2c2c2] py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="text-navy text-3xl md:text-4xl font-bold mt-3">
            Common Questions
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-8">
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <a
            href="#booking"
            className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Book a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}
