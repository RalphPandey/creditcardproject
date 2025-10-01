import { Users, TrendingUp, Award } from 'lucide-react';
import StarBorder from '../ui/StarBorder';
import GooeyText from '../ui/GooeyText';

export default function ReferralProgram() {
  const tiers = [
    { referrals: 0, multiplier: '1x', boost: 'Base entries' },
    { referrals: 1, multiplier: '2x', boost: '100% boost' },
    { referrals: 5, multiplier: '10x', boost: '1000% boost' },
    { referrals: '10+', multiplier: '25x', boost: '2500% boost' },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Multiply Your Chances
          </h2>
          <p className="text-xl text-gray-text max-w-2xl mx-auto">
            Share your referral code and exponentially increase your entry count
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">How It Works</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Share Your Code</div>
                  <div className="text-sm text-gray-text">
                    Every friend who joins with your code counts as a referral
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Watch It Multiply</div>
                  <div className="text-sm text-gray-text">
                    Each tier dramatically increases your entry multiplier
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Better Odds</div>
                  <div className="text-sm text-gray-text">
                    More entries means higher chances of winning bill payments
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center py-8">
            <div className="text-center mb-6">
              <div className="text-sm text-gray-text mb-4">
                Your code will look like this
              </div>
              <GooeyText
                texts={[
                  'SAVE2024XR',
                  'CRYPTO9K3L',
                  'DEBT4FREE7',
                  'WIN1000PQ',
                  'LUCKY8M2Z',
                  'FREEDOM3X',
                  'BILLS0UT9',
                  'HOPE5REAL',
                ]}
                morphTime={1.5}
                cooldownTime={0.5}
                className="mb-4"
                textClassName="text-gold"
              />
              <div className="text-sm text-gray-text">
                Share your code, boost your odds
              </div>
            </div>

            <StarBorder className="mt-4">
              Generate My Code
            </StarBorder>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Referral Tiers</h3>
            {tiers.map((tier, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-gold/30 hover:bg-gold/5 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-mono text-sm text-gray-text mb-1">
                      {tier.referrals} referrals
                    </div>
                    <div className="text-2xl font-bold text-gold group-hover:scale-105 transition-transform">
                      {tier.multiplier}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-text">
                      {tier.boost}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
