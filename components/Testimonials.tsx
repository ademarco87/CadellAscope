const testimonials = [
  {
    quote:
      "I came in overwhelmed with $18,000 in debt and no idea where to start. Eight months later, I paid it all off. This coaching changed my life.",
    name: "Marcus T.",
    label: "Paid off $18K in 8 months",
  },
  {
    quote:
      "For the first time I actually know where my money is going. I have a budget I stick to and I'm saving every month. I never thought that was possible for me.",
    name: "Janelle R.",
    label: "Now saving $500/month consistently",
  },
  {
    quote:
      "My credit score went from 563 to 714 in under a year. I was able to qualify for a car loan with a great rate. Worth every penny.",
    name: "David K.",
    label: "Credit score up 151 points",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-gold text-lg">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-navy py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Client Results
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-bold mt-3">
            Real People, Real Results
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Don&apos;t take our word for it — here&apos;s what clients have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-navy-light/50 border border-white/10 rounded-2xl p-8 flex flex-col"
            >
              <Stars />
              <p className="text-white/80 leading-relaxed text-sm flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-gold text-xs mt-1">{t.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
