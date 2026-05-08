import { useSectionObserver } from '../../hooks/useSectionObserver';
import SKILLS from '../../data/stack';
import '../../styles/stack-section.css';

export default function SkillsSection({ onVisible }) {
  const ref = useSectionObserver(onVisible, 'skills');

  const categories = [
    { id: 'frontend', title: 'FRONTEND', skills: SKILLS.frontend },
    { id: 'backend', title: 'BACKEND', skills: SKILLS.backend },
    { id: 'database', title: 'BASE DE DONNÉES', skills: SKILLS.database },
    { id: 'devops', title: 'DEVOPS', skills: SKILLS.devops },
  ];

  return (
    <section 
      ref={ref} 
      className="section skills-section" 
      id="skills"
      style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.8s ease-in-out' }}
    >
      <h2 className="section-title">Compétences</h2>
      
      <div className="skills-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="skills-category-card">
            <div className="category-header">
              <span className="category-tag">TECH_STACK</span>
              <h3 className="category-title">{cat.title}</h3>
            </div>
            <ul className="skills-list">
              {cat.skills.map((skill) => (
                <li key={skill.name} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-indicator">
                    <span className={`level-dot ${skill.level.toLowerCase()}`}></span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
