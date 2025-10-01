import { Lock, Ticket, CreditCard } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Lock,
      title: 'Buy & Hold Tokens',
      features: [
        '$150 minimum investment',
        'Your tokens, your control',
      ],
    },
    {
      icon: Ticket,
      title: 'Automatic Entry',
      features: [
        'Every month, automatic entry',
        'More tokens = better odds',
      ],
    },
    {
      icon: CreditCard,
      title: 'Win Bill Payments',
      features: [
        'Up to $1,000 per winner',
        'Verified on blockchain',
      ],
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-text max-w-2xl mx-auto">
            A simple, transparent way to turn your crypto holdings into opportunities for financial relief
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div
                  className="h-full p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-gold/30"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-gold" strokeWidth={2} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {step.title}
                  </h3>

                  <ul className="space-y-3">
                    {step.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="text-gray-text flex items-start gap-2"
                      >
                        <span className="text-gold mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-gold/50 to-transparent" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
