const steps = [
  {
    number: "01",
    title: "Book a Free Discovery Call",
    desc: "Schedule your first session in minutes. We'll talk about your goals, your challenges, and whether coaching is the right fit for you — zero pressure.",
    icon: "📅",
  },
  {
    number: "02",
    title: "Build Your Custom Plan",
    desc: "Together we'll create a personalized financial roadmap built around your actual income, expenses, and goals — not a generic template.",
    icon: "📋",
  },
  {
    number: "03",
    title: "Transform Your Finances",
    desc: "With regular 1-on-1 sessions and ongoing accountability, you'll build the habits and mindset that create lasting financial change.",
    icon: "🚀",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#c2c2c2] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            The Process
          </span>
          <h2 className="text-navy text-3xl md:text-4xl font-bold mt-3">
            How It Works
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Three straightforward steps to go from financial stress to financial
            clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <span className="text-6xl font-black text-gold/10 absolute top-6 right-6 leading-none select-none">
                {step.number}
              </span>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-navy font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 text-gold/40 text-2xl z-10">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#booking"
            className="inline-block bg-navy hover:bg-navy-light text-white font-semibold px-10 py-4 rounded-full transition-colors"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
}
