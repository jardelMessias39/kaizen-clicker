import { useState } from 'react';
import { FactoryDisplay } from './components/FactoryDisplay';
import { UpgradeStore } from './components/UpgradeStore';
import { Dashboard } from './components/Dashboard';
import { RankingModal } from './components/RankingModal';
import { RankingTicker } from './components/RankingTicker';
import { useGameLoop } from './hooks/useGameLoop';
import { Toaster } from 'sonner';

function App() {
  useGameLoop();
  const [showRanking, setShowRanking] = useState(false);

  return (
    <div className="flex flex-col h-screen w-full bg-slate-900 overflow-hidden font-sans text-slate-200">
      <RankingTicker onClick={() => setShowRanking(true)} />
      
      <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto lg:overflow-hidden">
        <Toaster position="bottom-left" />
        {showRanking && <RankingModal onClose={() => setShowRanking(false)} />}
        
        <div className="flex flex-col flex-1 relative bg-slate-950 pb-12 w-full">
          <FactoryDisplay />
          <div className="mt+1
          ">
            <Dashboard />
          </div>
        </div>
        <UpgradeStore />
      </div>
    </div>
  );
}

export default App;
