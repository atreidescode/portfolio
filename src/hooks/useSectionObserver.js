import { useEffect, useRef } from 'react';

/**
 * Observe l'entrée d'un élément dans le viewport.
 * Déclenche onVisible(sectionId) quand l'élément devient visible.
 * Gère aussi l'animation fade-in via les classes CSS.
 *
 * @param {Function} onVisible - callback appelé avec l'id de la section
 * @param {Object}   options   - options IntersectionObserver
 */
export function useSectionObserver(onVisible, options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const opts = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      // Anime l'apparition
      el.style.opacity   = '1';
      el.style.transform = 'translateY(0)';
      // Notifie le parent pour le terminal
      if (el.id && onVisible) onVisible(el.id);
      // On désactive l'observation après le premier déclenchement
      observer.unobserve(el);
    }, opts);

    observer.observe(el);

    return () => observer.disconnect();
  }, [onVisible, options]);

  return ref;
}
