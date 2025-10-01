import { useState } from 'react';
import { FileText, Zap, Trophy, ExternalLink, ChevronDown } from 'lucide-react';

export default function ProofOfFairness() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps = [
    {
      icon: FileText,
      title: 'Smart Contract',
      description: 'Immutable rules stored on blockchain',
      details:
        'Our smart contract contains all draw rules and is permanently stored on the blockchain. Once deployed, no one can modify the rules or manipulate outcomes.',
    },
    {
      icon: Zap,
      title: 'Chainlink VRF',
      description: 'Verifiable random number generation',
      details:
        'We use Chainlink VRF (Verifiable Random Function) to generate provably random numbers. This cryptographic proof ensures the randomness cannot be predicted or manipulated.',
    },
    {
      icon: Trophy,
      title: 'Winner Selected',
      description: 'Transparent selection process',
      details:
        'The random number from Chainlink VRF is used to select winners from all eligible entries. The selection algorithm is open-source and auditable by anyone.',
    },
    {
      icon: ExternalLink,
      title: 'Blockchain Proof',
      description: 'Publicly verifiable results',
      details:
        'Every draw is recorded on the blockchain with a unique transaction hash. Anyone can verify the fairness by checking the smart contract execution on a blockchain explorer.',
    },
  ];

  const recentDraws = [
    { date: 'Oct 1, 2025', txHash: '0x7f3a...d82e', winners: 10, amount: '$50,000' },
    { date: 'Sep 1, 2025', txHash: '0x9c2b...f91a', winners: 10, amount: '$50,000' },
    { date: 'Aug 1, 2025', txHash: '0x4d8e...a3c7', winners: 10, amount: '$50,000' },
  ];

  return (
    <section className="py-24 px-4 bg-surface/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Provably Fair System
          </h2>
          <p className="text-xl text-gray-text max-w-2xl mx-auto">
            Complete transparency through blockchain technology
          </p>
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isExpanded = expandedStep === index;

              return (
                <div key={index} className="relative">
                  <button
                    onClick={() => setExpandedStep(isExpanded ? null : index)}
                    className="w-full text-left"
                  >
                    <div
                      className={`p-6 rounded-xl border transition-all duration-300 ${
                        isExpanded
                          ? 'border-gold bg-gold/5'
                          : 'border-white/10 bg-white/[0.02] hover:border-gold/30'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-gold" />
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-text transition-transform ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </div>

                      <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-text mb-3">{step.description}</p>

                      {isExpanded && (
                        <p className="text-sm text-gray-100 mt-4 pt-4 border-t border-gold/20">
                          {step.details}
                        </p>
                      )}
                    </div>
                  </button>

                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="w-6 h-0.5 bg-gradient-to-r from-gold to-gold/20" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>Recent Draws</span>
            </h3>
            <div className="space-y-4">
              {recentDraws.map((draw, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-text">{draw.date}</span>
                    <span className="font-bold text-gold">{draw.amount}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-text">{draw.winners} winners</span>
                    <button className="flex items-center gap-1 text-gold hover:text-gold/80 transition-colors font-mono">
                      {draw.txHash}
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Security Audits</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <div className="font-bold mb-1">CertiK Audit</div>
                  <div className="text-sm text-gray-text mb-2">
                    Smart contract security verified by leading blockchain auditor
                  </div>
                  <button className="text-sm text-gold hover:text-gold/80 transition-colors flex items-center gap-1">
                    View Report <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <div className="font-bold mb-1">OpenZeppelin</div>
                  <div className="text-sm text-gray-text mb-2">
                    Built using industry-standard secure contract libraries
                  </div>
                  <button className="text-sm text-gold hover:text-gold/80 transition-colors flex items-center gap-1">
                    View Documentation <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
