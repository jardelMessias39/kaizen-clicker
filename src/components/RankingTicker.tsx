import { useRankingStore } from '../store/rankingStore';
import { formatNumber } from '../utils/formatters';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useGameStore } from '../store/gameStore';

export const RankingTicker = ({ onClick }: { onClick: () => void }) => {
  const { scores, currentPlayerName, saveScore } = useRankingStore();
  
  useEffect(() => {
    if (!currentPlayerName) return;
    const interval = setInterval(() => {
      const currentPoints = Math.floor(useGameStore.getState().points);
      saveScore(currentPlayerName, currentPoints);
    }, 15000); // 15 seconds for testing
    return () => clearInterval(interval);
  }, [currentPlayerName, saveScore]);

  if (scores.length === 0) return null;

  const tickerItems = scores.map((s, i) => {
    let medal = '';
    if (i === 0) medal = '🥇 ';
    else if (i === 1) medal = '🥈 ';
    else if (i === 2) medal = '🥉 ';
    return `${medal}${i + 1}º ${s.name}: ${formatNumber(s.score)} pts`;
  });

  return (
    <div 
      className="w-full h-8 bg-slate-950 border-b border-indigo-500/30 flex items-center overflow-hidden cursor-pointer hover:bg-slate-900 transition-colors shrink-0 relative z-50"
      onClick={onClick}
    >
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black text-xs px-4 h-full flex items-center z-10 shrink-0 gap-2 shadow-[4px_0_15px_rgba(0,0,0,0.5)]">
        <Trophy size={14} /> RANKING GLOBAL
      </div>
      
      {/* Marquee container */}
      <div className="flex-1 overflow-hidden relative h-full flex items-center bg-slate-900/50">
        <motion.div 
          className="flex whitespace-nowrap gap-12 text-[11px] font-bold text-slate-300"
          animate={{ x: ["100vw", "-100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {tickerItems.join('   ✦   ')}
          {'   ✦   '}
          {tickerItems.join('   ✦   ')}
        </motion.div>
      </div>
    </div>
  );
};
