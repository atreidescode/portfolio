import { useState, useEffect } from 'react';

/**
 * Flèche de scroll vers le bas visible uniquement en haut de page.
 * Se cache dès que l'utilisateur scrolle de plus de 100px.
 */
export default function ScrollArrow() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY < 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return <div className="scroll-indicator">↓</div>;
}
