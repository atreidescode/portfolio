# Portfolio - Ilias Cherrat

## 📄 Description du Projet
Ce projet est un portfolio interactif développé avec **React** et **Vite**, mettant en avant des compétences en développement full-stack. Il propose une expérience immersive avec des animations avancées (GSAP, Three.js) et un design moderne.

## 🛠️ Stack Technique
- **Frontend** : React 18, Tailwind CSS, GSAP
- **Background & Effets** : Three.js (Dither effect), Canvas (Pluie de bits)
- **Outils** : Vite, PostCSS

## 🏗️ Architecture des Composants

### Sections (`src/components/sections/`)
- **HeroSection** : Accueil avec animation de texte.
- **ProjectsSection** : Slider de projets interactif.
- **SkillsSection** : Présentation des compétences techniques structurée en 4 piliers (Frontend, Backend, Database, DevOps).
- **InterestsSection** : Centres d'intérêt de l'auteur.
- **ContactSection** : Liens vers les réseaux sociaux et email.

### UI & Widgets (`src/components/ui/`, `src/components/widgets/`)
- **Terminal** : Widget flottant affichant des messages système lors du scroll.
- **EyeButton** : Bouton permettant d'activer/désactiver l'effet de pluie de bits.
- **ScrollArrow** : Indicateur de défilement.
- **Dither** : Background animé complexe utilisant Three.js.

## 🔄 Modifications Apportées
### [Date: 2026-05-08]
- Création de `projet.md` pour le suivi du projet.
- Ajout d'une barre de navigation (`Navbar`) simple pour accéder aux sections.
- Standardisation des IDs des sections (`#hero`, `#projects`, `#stack`, `#interests`, `#contact`) pour assurer le bon fonctionnement de la navigation.
- Intégration de la section **Stack** dans la structure principale de l'application.
- Refonte de la section **Centres d'intérêt** : passage à un layout horizontal (Split) Texte/Image et suppression des emojis pour un design plus épuré.
- Nettoyage de la section **Projets** : suppression des placeholders d'images pour simplifier l'interface.
- Amélioration de la **Navbar** : passage en pleine largeur (Top Bar) et intégration de la surbrillance dynamique de la section active via un `IntersectionObserver`.

---
*Dernière mise à jour : 08/05/2026*
