import { useState } from 'react';
import { CheckCircle2, Shield, FileCheck } from 'lucide-react';
import StarBorder from '../ui/StarBorder';

export default function TokenPurchase() {
  const [amount, setAmount] = useState(150);

  const calculateEntries = (tokenAmount: number) => {
    return Math.floor(tokenAmount / 150);
  };

  return (
    <section className="py-24 px-4 bg-surface/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Start With $150
          </h2>
          <p className="text-xl text-gray-text max-w-2xl mx-auto">
            Purchase tokens and automatically enter monthly draws for bill payment relief
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="p-8 rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">What You Get</h3>

            <ul className="space-y-4 mb-8">
              {[
                'Instant automatic entry',
                'Token value may appreciate',
                'Withdraw anytime*',
                'Provably fair draws',
                'Blockchain verified',
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-100">{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-gray-text italic">
              *Withdrawal removes draw eligibility
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Purchase Tokens</h3>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-3 text-gray-text">
                Token Amount (USD)
              </label>
              <input
                type="range"
                min="150"
                max="10000"
                step="50"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-gold"
              />
              <div className="flex justify-between mt-2 text-sm text-gray-text">
                <span>$150</span>
                <span className="text-2xl font-bold text-gold">${amount}</span>
                <span>$10,000</span>
              </div>
            </div>

            <div className="mb-6 p-4 rounded-xl bg-gold/10 border border-gold/30">
              <div className="text-center">
                <div className="text-sm text-gray-text mb-1">Monthly Entries</div>
                <div className="text-3xl font-bold text-gold font-display">
                  {calculateEntries(amount)}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-3 text-gray-text">
                Payment Method
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button className="py-3 px-4 rounded-xl border-2 border-gold bg-gold/10 font-medium text-gold">
                  Crypto
                </button>
                <button className="py-3 px-4 rounded-xl border border-white/20 hover:border-white/40 transition-colors">
                  Card
                </button>
              </div>
            </div>

            <StarBorder className="w-full">
              Purchase Tokens
            </StarBorder>

            <div className="flex items-center justify-center gap-4 mt-6 text-xs text-gray-text">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>SSL Secure</span>
              </div>
              <div className="flex items-center gap-1">
                <FileCheck className="w-4 h-4" />
                <span>KYC Verified</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Audited</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
