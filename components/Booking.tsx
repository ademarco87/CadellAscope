"use client";

import Script from "next/script";

const CALENDLY_URL = "https://calendly.com/representative-cadell?timezone=America/Los_Angeles&background_color=c2c2c2&text_color=0d1b3e&primary_color=c9a84c";

export default function Booking() {
  return (
    <section id="booking" className="bg-navy py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Book a Session
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-bold mt-3">
            Let&apos;s Get Started
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Choose a time that works for you. Your first call is free — just an
            honest conversation about your goals.
          </p>
        </div>

        {/* Calendly inline widget */}
        <div className="rounded-2xl overflow-hidden border-4 border-gold">
          <div
            className="calendly-inline-widget w-full"
            data-url={CALENDLY_URL}
            style={{ minWidth: "320px", height: "550px" }}
          />
        </div>

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </div>
    </section>
  );
}
