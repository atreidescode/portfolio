import './navbar.css';

export default function Navbar() {
  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Intérêts', href: '#interests' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="nav-link">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
