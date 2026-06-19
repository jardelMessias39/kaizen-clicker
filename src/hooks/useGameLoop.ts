import { useEffect } from 'react';
import { useGameStore } from '../store/gameStore';

export const useGameLoop = () => {
  const tick = useGameStore((state) => state.tick);

  useEffect(() => {
    // 1Hz Tickrate (Regra 1)
    const interval = setInterval(() => {
      tick();
    }, 1000);

    // Regra 2: Recalculate immediately when tab regains focus
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        tick();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [tick]);
};
