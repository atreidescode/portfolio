import Navbar        from './components/ui/Navbar';
import RainCanvas      from './components/canvas/RainCanvas';
import HeroSection     from './components/sections/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection   from './components/sections/SkillsSection';
import InterestsSection from './components/sections/InterestsSection';
import ContactSection  from './components/sections/ContactSection';
import Terminal        from './components/widgets/Terminal';
import EyeButton       from './components/widgets/EyeButton';
import ScrollArrow     from './components/widgets/ScrollArrow';
import Dither          from './components/backgrounds/Dither';
import { useRain }     from './hooks/useRain';
import { useTerminal } from './hooks/useTerminal';
import { useActiveSection } from './hooks/useActiveSection';

export default function App() {
  const { rainEnabled, toggleRain }                    = useRain();
  const { text, visible, showTerminal, closeTerminal } = useTerminal();
  const activeSection = useActiveSection(['hero', 'projects', 'skills', 'interests', 'contact']);

  return (
    <>
      {/* Background Dither */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
      }}>
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={false}
          mouseRadius={0.1}
          colorNum={32}
          waveAmplitude={0.21}
          waveFrequency={6.7}
          waveSpeed={0.01}
        />
      </div>

      {/* Canvas pluie de bits */}
      <RainCanvas rainEnabled={rainEnabled} />

      {/* Widgets flottants */}
      <Navbar activeSection={activeSection} />
      <EyeButton rainEnabled={rainEnabled} onToggle={toggleRain} />
      <Terminal  text={text} visible={visible} onClose={closeTerminal} />
      <ScrollArrow />

      {/* Contenu principal */}
      <main>
        <HeroSection />
        <ProjectsSection   onVisible={showTerminal} />
        <SkillsSection     onVisible={showTerminal} />
        <InterestsSection  onVisible={showTerminal} />
        <ContactSection    onVisible={showTerminal} />
      </main>
    </>
  );
}
