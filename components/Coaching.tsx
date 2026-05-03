const areas = [
  {
    icon: "💰",
    title: "Budgeting & Cash Flow",
    desc: "Learn exactly where your money goes and build a budget you'll actually follow.",
  },
  {
    icon: "💳",
    title: "Debt Elimination",
    desc: "Create a strategy to pay off debt faster and stop the cycle once and for all.",
  },
  {
    icon: "📈",
    title: "Credit Building",
    desc: "Understand how to improve your credit score and open doors to better financial opportunities.",
  },
  {
    icon: "🏦",
    title: "Savings & Emergency Funds",
    desc: "Build a financial cushion so unexpected expenses don't derail your progress.",
  },
  {
    icon: "🎯",
    title: "Financial Goal Setting",
    desc: "Turn big financial dreams into achievable milestones with a clear roadmap.",
  },
  {
    icon: "🧠",
    title: "Financial Mindset",
    desc: "Address the habits and beliefs around money that have been holding you back.",
  },
];

export default function Coaching() {
  return (
    <section id="coaching" className="bg-gold py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-navy/60 text-sm font-semibold tracking-widest uppercase">
            What We Cover
          </span>
          <h2 className="text-navy text-3xl md:text-4xl font-bold mt-3">
            Your 1-on-1 Coaching Sessions
          </h2>
          <p className="text-navy/70 mt-4 max-w-xl mx-auto">
            Every session is tailored to where you are right now and where you
            want to go. Here's what we work through together.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <div
              key={area.title}
              className="group p-6 rounded-2xl border border-navy/10 bg-white/20 hover:bg-white/40 transition-all duration-200"
            >
              <div className="text-3xl mb-4">{area.icon}</div>
              <h3 className="text-navy font-bold text-lg mb-2">{area.title}</h3>
              <p className="text-navy/70 text-sm leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-navy rounded-2xl p-10 text-center">
          <h3 className="text-white text-2xl font-bold mb-3">
            Ready to take the first step?
          </h3>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Your first session is a free discovery call — no commitment, no
            pressure. Just an honest conversation about your financial goals.
          </p>
          <a
            href="#booking"
            className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-10 py-4 rounded-full transition-colors"
          >
            Book Your Free Session
          </a>
        </div>
      </div>
    </section>
  );
}
