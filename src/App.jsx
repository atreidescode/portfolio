import RainCanvas      from './components/canvas/RainCanvas';
import HeroSection     from './components/sections/HeroSection';
import StackSection    from './components/sections/StackSection';
import ProjectsSection from './components/sections/ProjectsSection';
import InterestsSection from './components/sections/InterestsSection';
import ContactSection  from './components/sections/ContactSection';
import Terminal        from './components/widgets/Terminal';
import EyeButton       from './components/widgets/EyeButton';
import ScrollArrow     from './components/widgets/ScrollArrow';
import Dither          from './components/backgrounds/Dither';
import { useRain }     from './hooks/useRain';
import { useTerminal } from './hooks/useTerminal';

export default function App() {
  const { rainEnabled, toggleRain }                    = useRain();
  const { text, visible, showTerminal, closeTerminal } = useTerminal();

  return (
    <>
      {/* Background Dither (fixed, plein écran, derrière tout) */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
      }}>
        <Dither
          waveColor={[0.15, 0.15, 0.15]}
          waveSpeed={0.04}
          waveFrequency={3}
          waveAmplitude={0.3}
          colorNum={4}
          pixelSize={2}
          enableMouseInteraction={true}
          mouseRadius={1}
        />
      </div>

      {/* Canvas pluie de bits */}
      <RainCanvas rainEnabled={rainEnabled} />

      {/* Widgets flottants */}
      <EyeButton rainEnabled={rainEnabled} onToggle={toggleRain} />
      <Terminal  text={text} visible={visible} onClose={closeTerminal} />
      <ScrollArrow />

      {/* Contenu principal */}
      <main>
        <HeroSection />
        <StackSection      onVisible={showTerminal} />
        <ProjectsSection   onVisible={showTerminal} />
        <InterestsSection  onVisible={showTerminal} />
        <ContactSection    onVisible={showTerminal} />
      </main>
    </>
  );
}
