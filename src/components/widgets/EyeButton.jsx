/**
 * Bouton toggle pluie de bits.
 * Reçoit : rainEnabled (bool), onToggle (fn)
 * Les images sont dans /public/assets/icons/
 */
export default function EyeButton({ rainEnabled, onToggle }) {
  return (
    <button
      id="eye-button"
      className={`eye-button${rainEnabled ? '' : ' disabled'}`}
      onClick={onToggle}
      title={rainEnabled ? 'Désactiver la pluie' : 'Activer la pluie'}
      aria-label={rainEnabled ? 'Désactiver la pluie de bits' : 'Activer la pluie de bits'}
    >
      <img
        id="eye-icon-open"
        className="eye-open"
        src="/portfolio-react/assets/icons/oeil-ouvert.png"
        alt="Oeil ouvert"
      />
      <img
        id="eye-icon-closed"
        className="eye-closed"
        src="/portfolio-react/assets/icons/oeil-ferme.png"
        alt="Oeil fermé"
      />
    </button>
  );
}
