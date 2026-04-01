import { useState, useRef, useCallback } from 'react';
import TERMINAL_SEQUENCES from '../data/terminalSequences';

/**
 * Gère la logique de typage du terminal.
 * Expose : text (string affiché), visible (bool), showTerminal(key), closeTerminal()
 */
export function useTerminal() {
  const [text, setText]       = useState('');
  const [visible, setVisible] = useState(false);
  const timeoutRef            = useRef(null);

  const showTerminal = useCallback((sectionKey) => {
    const seq = TERMINAL_SEQUENCES[sectionKey];
    if (!seq) return;

    // Annule le typage précédent en cours
    clearTimeout(timeoutRef.current);
    setText('');
    setVisible(true);

    const full = seq.prompt + seq.text;
    let i = 0;

    const typeChar = () => {
      if (i < full.length) {
        // Utilise le setter fonctionnel pour ne pas créer de closure sur text
        setText((prev) => prev + full[i]);
        i++;
        timeoutRef.current = setTimeout(typeChar, seq.delay);
      }
    };

    typeChar();
  }, []);

  const closeTerminal = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setVisible(false);
  }, []);

  return { text, visible, showTerminal, closeTerminal };
}
