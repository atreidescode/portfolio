/**
 * Widget Terminal simulé.
 * Reçoit via props : text (string), visible (bool), onClose (fn)
 * Le typage est géré dans useTerminal, ce composant est purement présentatif.
 */
export default function Terminal({ text, visible, onClose }) {
  if (!visible) return null;

  return (
    <div id="terminal" className="terminal visible">
      <div className="terminal-header">
        <span className="terminal-title">Command Prompt</span>
        <span className="terminal-buttons">
          <span className="btn-close" onClick={onClose} role="button" aria-label="Fermer le terminal">
            ✕
          </span>
        </span>
      </div>
      <div className="terminal-content">
        <div id="terminal-text" className="terminal-text">
          {text}
        </div>
        <span id="terminal-cursor" className="terminal-cursor">|</span>
      </div>
    </div>
  );
}
