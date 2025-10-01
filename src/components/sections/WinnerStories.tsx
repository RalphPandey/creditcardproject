import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';

interface Winner {
  avatar: string;
  quote: string;
  amount: string;
  date: string;
  odds: string;
}

export default function WinnerStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const winners: Winner[] = [
    {
      avatar: '🎯',
      quote: 'Paid off $847 in credit card debt',
      amount: '$847',
      date: 'Sep 15, 2025',
      odds: '1 in 234',
    },
    {
      avatar: '⭐',
      quote: 'Finally cleared my medical bills',
      amount: '$1,000',
      date: 'Sep 10, 2025',
      odds: '1 in 189',
    },
    {
      avatar: '💎',
      quote: 'This changed everything for my family',
      amount: '$950',
      date: 'Sep 5, 2025',
      odds: '1 in 312',
    },
    {
      avatar: '🚀',
      quote: 'Never thought I would actually win',
      amount: '$725',
      date: 'Aug 28, 2025',
      odds: '1 in 267',
    },
    {
      avatar: '🎪',
      quote: 'Worth every token I invested',
      amount: '$880',
      date: 'Aug 22, 2025',
      odds: '1 in 198',
    },
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % winners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, winners.length]);

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Real Winners, Real Relief
          </h2>
          <p className="text-xl text-gray-text max-w-2xl mx-auto">
            Join thousands who have found financial freedom through our platform
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {winners.map((winner, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="p-8 md:p-12 rounded-2xl border border-white/10 bg-gradient-to-br from-surface/40 to-gold/5 backdrop-blur-sm shadow-card">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center text-4xl mb-6 border-2 border-gold/30">
                        {winner.avatar}
                      </div>

                      <Quote className="w-8 h-8 text-gold/50 mb-4" />

                      <blockquote className="text-2xl md:text-3xl font-bold mb-8 max-w-2xl leading-tight">
                        "{winner.quote}"
                      </blockquote>

                      <div className="grid grid-cols-3 gap-8 w-full max-w-md">
                        <div>
                          <div className="text-sm text-gray-text mb-1">Amount Won</div>
                          <div className="text-xl font-bold text-gold">{winner.amount}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-text mb-1">Date</div>
                          <div className="text-xl font-bold">{winner.date}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-text mb-1">Odds</div>
                          <div className="text-xl font-bold text-gold">{winner.odds}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {winners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gold w-8'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
