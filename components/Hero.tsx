export default function Hero() {
  return (
    <section className="relative bg-navy min-h-screen flex items-center overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy-light/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-32 flex items-center">
        {/* Text */}
        <div className="max-w-2xl">
          <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Financial Coaching
          </span>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Where Financial Clarity Meets a{" "}
            <span className="text-gold">New Spectrum of Possibility</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg">
            Personalized 1-on-1 coaching to help you budget smarter, eliminate
            debt, and build the financial life you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#booking"
              className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-4 rounded-full text-center transition-colors"
            >
              Book Your Free Session
            </a>
            <a
              href="#how-it-works"
              className="border border-white/30 hover:border-gold text-white hover:text-gold font-semibold px-8 py-4 rounded-full text-center transition-colors"
            >
              See How It Works
            </a>
          </div>

        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/20" />
      </div>
    </section>
  );
}
