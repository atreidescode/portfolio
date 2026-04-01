import { useState, useCallback } from 'react';

/**
 * Gère l'état global d'activation de la pluie de bits.
 * Retourne l'état rainEnabled et le toggle.
 */
export function useRain() {
  const [rainEnabled, setRainEnabled] = useState(true);

  const toggleRain = useCallback(() => {
    setRainEnabled((prev) => !prev);
  }, []);

  return { rainEnabled, toggleRain };
}
