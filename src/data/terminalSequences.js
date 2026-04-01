const TERMINAL_SEQUENCES = {
  home: {
    prompt: 'C:\\Users\\ilias> ',
    text: 'Bienvenue — Je suis Ilias, Developpeur Full Stack\n',
    delay: 35,
  },
  stack: {
    prompt: 'C:\\Users\\ilias> display --skills\n',
    text: 'Mes competences. Pret a coder ensemble ?\n',
    delay: 30,
  },
  projects: {
    prompt: 'C:\\Users\\ilias> dir /projects\n',
    text: 'Mes projets realises avec passion. Decouvre mes creations !\n',
    delay: 35,
  },
  interests: {
    prompt: 'C:\\Users\\ilias> cat passions.txt\n',
    text: 'Mes passions. Ce qui me pousse a apprendre chaque jour !\n',
    delay: 30,
  },
  contact: {
    prompt: 'C:\\Users\\ilias> send --message\n',
    text: "Disponible pour collaborer. N'hesitez pas a me contacter !\n",
    delay: 35,
  },
};

export default TERMINAL_SEQUENCES;
