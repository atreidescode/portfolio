import { useSectionObserver } from '../../hooks/useSectionObserver';

const INTERESTS_LIST = [
  { 
    id: '01', 
    category: 'TECH & ARCHITECTURE', 
    title: 'Développement', 
    description: 'Passionné par la conception d\'architectures scalables et l\'optimisation de la performance logicielle.', 
    image: './assets/images/interest/developpement.jpg'
  },
  { 
    id: '02', 
    category: 'ECONOMY & SYSTEMS', 
    title: 'Finance & Économie', 
    description: 'Veille constante sur les marchés financiers, investissements stratégiques et automatisation.', 
    image: './assets/images/interest/Montecarlo.jpg'
  },
  { 
    id: '03', 
    category: 'MINDSET & LOGICS', 
    title: 'Jeux de Stratégie', 
    description: 'Analyse tactique et résolution de problèmes complexes à travers les jeux compétitifs.', 
    image: './assets/images/interest/League-Of-Legends-Map.jpg'
  },
  { 
    id: '04', 
    category: 'CULTURE & NARRATIVE', 
    title: 'Littérature & Cinéma', 
    description: 'Exploration d\'univers complexes et psychologiques. Top 3 : Tokyo Ghoul, Shadow Slave, Re:Zero.', 
    image: './assets/images/interest/Hanabi.jpg'
  },
];

export default function InterestsSection({ onVisible }) {
  const ref = useSectionObserver(onVisible, 'interests');

  return (
    <section ref={ref} className="section pb-32" id="interests">
      <h2 className="section-title mb-24">Centres d’Intérêt</h2>
      
      <div className="interests-grid-v2">
        {INTERESTS_LIST.map((item) => (
          <div key={item.id} className="interest-card-v2">
            <div className="interest-text-side">
              <span className="interest-id-v2">{item.id} / {item.category}</span>
              <h3 className="interest-title-v2">{item.title}</h3>
              <p className="interest-desc-v2">{item.description}</p>
            </div>
            
            <div className="interest-image-side">
              <img 
                src={item.image} 
                alt={item.title} 
                className="interest-img"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found'; }}
              />
              <div className="interest-img-overlay"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
