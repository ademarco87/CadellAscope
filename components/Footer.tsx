import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="CadellAscope Enterprises"
              width={120}
              height={42}
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Helping individuals build stronger financial profiles — one
              session at a time.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </p>
            <ul className="space-y-2">
              {[
                ["About", "#about"],
                ["How It Works", "#how-it-works"],
                ["Coaching", "#coaching"],
                ["Testimonials", "#testimonials"],
                ["FAQ", "#faq"],
                ["Book a Session", "#booking"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/50 hover:text-gold text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Get Started
            </p>
            <p className="text-white/50 text-sm mb-5">
              Ready to transform your finances? Book your free discovery call
              today.
            </p>
            <a
              href="#booking"
              className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold text-sm px-6 py-3 rounded-full transition-colors"
            >
              Book a Free Call
            </a>
            <a
              href="mailto:Representative.Cadell@gmail.com"
              className="block mt-4 text-white/50 hover:text-gold text-sm transition-colors"
            >
              Representative.Cadell@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {year} CadellAscope Enterprises. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            cadellascope.com
          </p>
        </div>
      </div>
    </footer>
  );
}
