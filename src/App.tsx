import { FactoryDisplay } from './components/FactoryDisplay';
import { UpgradeStore } from './components/UpgradeStore';
import { useGameLoop } from './hooks/useGameLoop';

function App() {
  useGameLoop();

  return (
    <div className="flex h-screen w-full bg-slate-900 overflow-hidden font-sans text-slate-200">
      <FactoryDisplay />
      <UpgradeStore />
    </div>
  );
}

export default App;
