import { useEffect } from 'react';
import TextType from '../ui/TextType';

export default function HeroSection() {

  useEffect(() => {
    // Active le background au chargement
    const timer = setTimeout(() => {
      const bg = document.getElementById('bg-img');
      if (bg) bg.classList.add('visible');
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="hero" className="content">
      <h1 id="title-text">
        <TextType
          text="ILIAS CHERRAT"
          typingSpeed={110}
          cursorChar="|"
          cursorBlink={true}
        />
      </h1>
      <p id="glass-box">
        Développeur Full Stack (React / Node.js) | En recherche d'alternance
      </p>
    </div>
  );
}
