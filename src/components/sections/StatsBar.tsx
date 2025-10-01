import { useEffect, useState } from 'react';

export default function StatsBar() {
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 8,
    minutes: 34,
    seconds: 22,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;

        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Total Bills Paid', value: '$847,392+' },
    { label: 'Active Holders', value: '2,847+' },
    {
      label: 'Next Draw',
      value: `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m`
    },
    { label: 'Win Rate', value: '1 in 125' },
  ];

  return (
    <div className="w-full border-t border-white/10 bg-surface/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gold mb-2 font-display">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-text">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
