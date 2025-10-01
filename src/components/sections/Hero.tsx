import { Play } from 'lucide-react';
import StarBorder from '../ui/StarBorder';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center z-10">
        <h1 className="font-display text-5xl md:text-7xl lg:text-[72px] font-bold mb-6 leading-tight">
          Turn Savings Into Freedom
        </h1>
        <p className="text-xl md:text-2xl text-gray-text mb-12 max-w-3xl mx-auto leading-relaxed">
          Hold crypto tokens. Win bill payments. Build wealth.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <StarBorder>
            Start Your Journey
          </StarBorder>

          <button className="flex items-center gap-3 px-6 py-4 rounded-[20px] border-2 border-white/10 hover:border-white/30 transition-all duration-200 hover:scale-[1.02] bg-white/5 backdrop-blur-sm">
            <Play className="w-5 h-5 text-gold" fill="currentColor" />
            <span className="font-semibold">Watch How It Works</span>
          </button>
        </div>
      </div>
    </section>
  );
}
