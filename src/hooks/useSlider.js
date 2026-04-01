import { useState, useCallback } from 'react';

/**
 * Gère la logique de navigation du slider de projets.
 * @param {number} total - nombre total de cartes
 */
export function useSlider(total) {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback(
    (index) => {
      // Gestion du wrap-around dans les deux sens
      setCurrent(((index % total) + total) % total);
    },
    [total]
  );

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  return { current, goTo, prev, next };
}
