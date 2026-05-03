import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-gold py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <div className="w-80 h-96 rounded-2xl border-4 border-navy/20 overflow-hidden relative">
              <Image
                src="/nicole.png"
                alt="Nicole Cadell — Financial Coach"
                fill
                className="object-cover"
                style={{ objectPosition: "35% 10%" }}
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-navy text-white text-xs font-semibold px-4 py-2 rounded-lg shadow">
              20+ Years of Experience
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="text-navy/60 text-sm font-semibold tracking-widest uppercase">
            About Your Coach
          </span>
          <h2 className="text-navy text-3xl md:text-4xl font-bold mt-3 mb-6">
            20+ Years Turning Financial Complexity Into Clarity
          </h2>
          <p className="text-navy/80 leading-relaxed mb-4">
            Nicole is a high-impact financial coach with over 20 years of experience
            driving results, optimizing performance, and leading with both precision
            and empathy. She specializes in turning financial challenges into
            opportunities — helping individuals build stronger profiles through
            strategic execution and an unwavering commitment to exceptional outcomes.
          </p>
          <p className="text-navy/80 leading-relaxed mb-4">
            Known for her impeccable standards and highly attuned listening skills,
            Nicole has a unique ability to understand your situation, build trust
            quickly, and deliver a tailored plan that maximizes both your confidence
            and your results.
          </p>
          <p className="text-navy/80 leading-relaxed mb-8">
            Her consultative approach consistently improves financial outcomes,
            strengthens money habits, and drives long-term growth — ensuring every
            interaction delivers value and every client receives the best possible outcome.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "20+ Years Experience", desc: "Executive-level expertise" },
              { label: "Consultative Approach", desc: "Tailored to your situation" },
              { label: "Results-Driven", desc: "Measurable financial gains" },
              { label: "Judgement-Free", desc: "Meet you where you are" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 shrink-0" />
                <div>
                  <p className="text-navy font-semibold text-sm">{item.label}</p>
                  <p className="text-navy/60 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
