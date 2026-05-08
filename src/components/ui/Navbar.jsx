import './navbar.css';

export default function Navbar({ activeSection }) {
  const navLinks = [
    { name: 'Accueil', href: '#hero', id: 'hero' },
    { name: 'Projets', href: '#projects', id: 'projects' },
    { name: 'Compétences', href: '#skills', id: 'skills' },
    { name: 'Intérêts', href: '#interests', id: 'interests' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href} 
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
