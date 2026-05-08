import { useState, useRef, useCallback, useEffect } from 'react';
import TERMINAL_SEQUENCES from '../data/terminalSequences';

export function useTerminal() {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(true); // Visible par défaut
  const timeoutRef = useRef(null);
  const isTypingRef = useRef(false);

  const startTyping = useCallback((lines) => {
    if (!lines) return;
    
    // Nettoyage complet avant de commencer
    clearTimeout(timeoutRef.current);
    setText('');
    isTypingRef.current = true;

    let lineIndex = 0;
    let charIndex = 0;
    let currentContent = '';

    const type = () => {
      if (lineIndex < lines.length) {
        const currentLine = lines[lineIndex];
        
        if (charIndex < currentLine.length) {
          currentContent += currentLine[charIndex];
          setText(currentContent);
          charIndex++;
          timeoutRef.current = setTimeout(type, 15); // Vitesse de frappe rapide
        } else {
          currentContent += '\n'; // Nouvelle ligne
          setText(currentContent);
          lineIndex++;
          charIndex = 0;
          timeoutRef.current = setTimeout(type, 100); // Pause entre les lignes
        }
      } else {
        isTypingRef.current = false;
      }
    };

    type();
  }, []);

  // Charger la séquence 'stack' (JSON) au montage
  useEffect(() => {
    const timer = setTimeout(() => {
      startTyping(TERMINAL_SEQUENCES.stack);
    }, 1000); // Petit délai pour laisser le Hero s'afficher
    return () => clearTimeout(timer);
  }, [startTyping]);

  const showTerminal = useCallback((sectionKey) => {
    if (isTypingRef.current) return; // Ne pas interrompre si déjà en train de taper
    startTyping(TERMINAL_SEQUENCES[sectionKey]);
    setVisible(true);
  }, [startTyping]);

  const closeTerminal = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setVisible(false);
    setText('');
  }, []);

  return { text, visible, showTerminal, closeTerminal };
}
