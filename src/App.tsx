import FinancialNeuralNetwork from './components/FinancialNeuralNetwork';
import Hero from './components/sections/Hero';
import StatsBar from './components/sections/StatsBar';
import HowItWorks from './components/sections/HowItWorks';
import TokenPurchase from './components/sections/TokenPurchase';
import ReferralProgram from './components/sections/ReferralProgram';
import ProofOfFairness from './components/sections/ProofOfFairness';
import WinnerStories from './components/sections/WinnerStories';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      <FinancialNeuralNetwork />

      <main className="relative z-10">
        <Hero />
        <StatsBar />
        <HowItWorks />
        <TokenPurchase />
        <ReferralProgram />
        <ProofOfFairness />
        <WinnerStories />
      </main>

      <Footer />
    </div>
  );
}

export default App;
