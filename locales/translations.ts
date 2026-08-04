export type Lang = 'fr' | 'en' | 'nl'

const fr = {
  langName: { fr: 'FR', en: 'EN', nl: 'NL' },

  nav: {
    brand: 'Cours Particuliers',
    items: [
      ['Accueil', 'accueil'],
      ['Méthode', 'methode'],
      ['Matières', 'matieres'],
      ['Témoignages', 'temoignages'],
      ['À propos', 'apropos'],
      ['FAQ', 'faq'],
      ['Contact', 'contact'],
    ] as [string, string][],
    toggleLabel: 'Changer de langue',
  },

  hero: {
    title: { p1: 'Transformer les ', w1: 'difficultés', p2: ' en ', w2: 'réussites' },
    subtitle1: 'Ingénieur civil diplômé en Informatique & IA, passionné par l’enseignement.',
    subtitle2:
      'Maths, physique et programmation — du secondaire au supérieur, et préparation aux examens d’entrée ingénieur civil et médecine.',
    audienceChips: ['Secondaire', 'Supérieur', 'Préparation examens d’entrée'],
    diploma: {
      badge: 'Diplômé ingénieur civil',
      distinction: 'La plus grande distinction',
      school: 'École Polytechnique de Louvain — UCLouvain',
      note: 'Si j’y suis arrivé, vous pouvez y arriver.',
      download: 'Attestation de diplôme',
    },
    statStudents: 'Élèves accompagnés',
    statExperience: 'Années d’expérience',
    quote: { part1: 'L’excellence n’est pas une destination, c’est un ', highlight: 'voyage continu' },
    ctaTitle: 'Réserver un cours',
    ctaSubtitle: 'Premier contact sans engagement',
    labelModalites: 'Modalités',
    labelDisponibilite: 'Disponibilité',
    labelLocalisation: 'Localisation',
    modalites: ['Cours à mon domicile', 'Cours en ligne'],
    disponibilite: 'Flexible (semaine & week-end)',
    zone: '6181 Gouy-Lez-Piéton, Courcelles, Belgique',
  },

  method: {
    eyebrow: 'Ma méthode',
    title: 'Pourquoi me choisir ?',
    subtitle: 'Une approche personnalisée pour chaque élève',
    items: [
      {
        title: 'Pédagogie personnalisée',
        description:
          'Chaque élève est unique. J’adapte mes séances et ma méthodologie à son profil, à ses objectifs et à son rythme d’apprentissage.',
      },
      {
        title: 'Exercices & corrections',
        description:
          'Je propose des exercices adaptés au niveau et aux besoins de chacun. Je prends le temps de corriger et d’expliquer chaque point, pour aider l’élève à mieux comprendre et à progresser.',
      },
      {
        title: 'Disponible en dehors des cours',
        description:
          'En dehors des séances, je reste disponible pour de courtes questions, une vérification d’exercice ou une clarification rapide.',
      },
      {
        title: 'Dossiers de révision fournis',
        description:
          'Les énoncés d’un côté, les corrigés détaillés de l’autre. De quoi s’entraîner seul entre deux séances et se corriger sans attendre le cours suivant.',
      },
    ],
  },

  services: {
    eyebrow: 'Ce que j’enseigne',
    title: 'Mes Spécialités',
    subtitle: 'Du secondaire au supérieur • Un accompagnement complet et sur-mesure',
    ellipsis: '… et bien plus',
    audiences: [
      {
        id: 'secondaire',
        label: 'Secondaire',
        labelShort: 'Secondaire',
        tagline: 'De la 1re à la 6e : remise à niveau, suivi régulier et préparation aux examens.',
        note: '',
        subjects: [
          {
            title: 'Mathématiques',
            levels: '1re → 6e Secondaire',
            badge: '1-6',
            topics: ['Analyse', 'Algèbre', 'Trigonométrie', 'Géométrie', 'Statistiques'],
            benefits: [
              'Maîtrise approfondie du programme officiel',
              'Méthodologie personnalisée selon le niveau',
              'Préparation efficace aux évaluations',
              'Explications claires, structurées et visuelles',
            ],
          },
          {
            title: 'Physique',
            levels: '3e → 6e Secondaire',
            badge: '3-6',
            topics: ['Électricité', 'Mécanique', 'Optique', 'Ondes', 'Thermodynamique'],
            benefits: [
              'Maîtrise approfondie du programme officiel',
              'Approche concrète par exemples réels',
              'Préparation ciblée aux évaluations',
              'Concepts complexes expliqués simplement',
            ],
          },
          {
            title: 'Programmation Python',
            levels: 'Niveau Débutants',
            badge: 'Py',
            topics: ['Bases', 'Projets', 'Game Dev', 'Algorithmes', 'Logique'],
            benefits: [
              'De zéro aux projets concrets',
              'Apprentissage ludique, progressif et pratique',
              'Compréhension théorique des concepts clés',
              'Compétence clé recherchée sur le marché',
            ],
          },
        ],
      },
      {
        id: 'superieur',
        label: 'Enseignement supérieur',
        labelShort: 'Supérieur',
        tagline: 'Bac 1 à master, en sciences et en ingénierie : cours, séries d’exercices et sessions.',
        note: '',
        subjects: [
          {
            title: 'Mathématiques supérieures',
            levels: 'Bac 1 → Bac 2',
            badge: '∫',
            topics: ['Analyse', 'Algèbre linéaire', 'Probabilités', 'Statistiques', 'Calcul différentiel'],
            benefits: [
              'Reprise des bases là où le secondaire s’arrête',
              'Résolution guidée des séries d’exercices',
              'Préparation aux sessions de janvier et de juin',
              'La rigueur de rédaction attendue à l’université',
            ],
          },
          {
            title: 'Physique générale',
            levels: 'Bac 1 → Bac 2',
            badge: 'Φ',
            topics: ['Mécanique', 'Électromagnétisme', 'Thermodynamique', 'Ondes', 'Optique'],
            benefits: [
              'Du formalisme mathématique à l’intuition physique',
              'Entraînement sur les examens des années précédentes',
              'Unités, ordres de grandeur et approximations maîtrisés',
              'Une résolution structurée, étape par étape',
            ],
          },
          {
            title: 'Programmation & algorithmique',
            levels: 'Bac 1 → Bac 3',
            badge: '</>',
            topics: ['Python', 'C / C++', 'Structures de données', 'Complexité', 'Orienté objet'],
            benefits: [
              'Lecture et débogage de code en direct',
              'Projets de cours accompagnés, jamais faits à la place de l’étudiant',
              'Bonnes pratiques et code lisible',
              'Complexité et choix des structures de données',
            ],
          },
          {
            title: 'Intelligence artificielle',
            levels: 'Bac 3 → Master',
            badge: 'IA',
            topics: ['Machine Learning', 'Deep Learning', 'Réseaux de neurones', 'Data science', 'PyTorch'],
            benefits: [
              'Ma spécialité d’ingénieur civil',
              'Théorie et implémentation menées en parallèle',
              'Accompagnement sur projets et mémoire',
              'Les maths derrière les modèles, expliquées simplement',
            ],
          },
        ],
      },
      {
        id: 'examens',
        label: 'Préparation examens d’entrée',
        labelShort: 'Préparation',
        tagline: 'Une préparation intensive et structurée pour aborder le jour J en confiance.',
        note: 'Pour l’examen d’entrée en médecine, j’interviens sur les volets mathématiques et physique.',
        subjects: [
          {
            title: 'Examen d’entrée ingénieur civil',
            levels: 'Mathématiques',
            badge: 'IC',
            topics: ['Analyse', 'Algèbre', 'Trigonométrie', 'Géométrie analytique', 'Nombres complexes'],
            benefits: [
              'Le programme officiel de l’examen couvert de A à Z',
              'Entraînement intensif sur les questions des années passées',
              'Gestion du temps et stratégie le jour de l’examen',
              'Je suis passé par cet examen moi-même',
            ],
          },
          {
            title: 'Examen d’entrée médecine & dentisterie',
            levels: 'Mathématiques & Physique',
            badge: 'MD',
            topics: ['Mathématiques', 'Physique', 'Raisonnement', 'Annales', 'Gestion du temps'],
            benefits: [
              'Les volets maths et physique des connaissances scientifiques',
              'Entraînement au format QCM chronométré',
              'Rappels ciblés sur les lacunes détectées en séance',
              'Un planning de révision construit ensemble',
            ],
          },
        ],
      },
    ],
  },

  temoignages: {
    eyebrow: 'Ils en parlent',
    title: 'Témoignages',
    subtitle: 'La réussite de mes élèves parle d’elle-même',
    prevLabel: 'Témoignage précédent',
    nextLabel: 'Témoignage suivant',
    dotLabel: 'Aller au groupe {n}',
    authorOverrides: {} as Record<string, string>,
    items: [
      {
        text: 'Ma fille a adoré ses sessions sur la trigonométrie avec Mathis ; il maîtrise clairement le sujet et sait se mettre à la place de l’élève. Ses explications sont claires et il n’hésite pas à se répéter si nécessaire. Nous referons appel à lui sans hésitation.',
        role: 'Parent d’élève – Maths',
      },
      {
        text: 'Très satisfaite. Ponctuel, aimable. Mon fils a apprécié sa manière d’expliquer. À recommander.',
        role: 'Parent d’élève – Physique',
      },
      {
        text: 'Mathis est un professeur excellent. Très sérieux et extrêmement ordonné. Il prépare ses cours à l’avance et donne des exercices pour le cours suivant. Je le recommande fortement !',
        role: 'Parent d’élève – Physique',
      },
      {
        text: 'Notre fils Guido a eu un examen de passage en maths après une année très compliquée. En deux semaines (2h/jour), Mathis a revu et expliqué clairement une année complète. Guido a réussi son examen. Un immense merci pour son travail et sa patience !',
        role: 'Parent d’élève – Mathématiques',
      },
      {
        text: 'Mon fils a suivi des cours de maths et de physique avec Mathis pour réussir sa seconde session (5ème option Math/Sciences). Il est disponible, poli et ponctuel. Il prépare ses cours à l’avance et est très organisé. Mon fils a réussi ses examens et est prêt à entamer sa rhéto. Je recommande Mathis comme professeur particulier.',
        role: 'Parent d’élève – Maths & Physique',
      },
      {
        text: 'Très bon professeur, étude efficace dans une ambiance agréable. Ma fille, qui avait de grosses difficultés, a retrouvé confiance et réussi son examen. Je recommande vivement !',
        role: 'Parent d’élève – Maths',
      },
      {
        text: 'Il m’a aidé pour mes examens et m’a permis de me remettre à niveau. Il explique clairement et s’adapte selon les besoins. Je vous le conseille sans hésiter.',
        role: 'Ancien élève – Maths',
      },
      {
        text: 'Ayant reçu de l’aide de Mathis dans certains cours, je peux témoigner de sa capacité à expliquer clairement et à rendre accessibles des notions complexes, en particulier en mathématiques.',
        role: 'Recommandation',
      },
      {
        text: 'Mathis a toujours su rendre les mathématiques et les sciences accessibles. Patient et pédagogue, il aide à comprendre et à faire des liens entre les concepts. Je le recommande vivement.',
        role: 'Recommandation',
      },
      {
        text: 'Je recommande vivement Mathis pour des cours de mathématiques et de physique au secondaire. Grâce à ses explications claires et à son approche patiente, il aide réellement les élèves à progresser et à gagner en confiance.',
        role: 'Recommandation',
      },
    ],
  },

  about: {
    eyebrow: 'En quelques questions',
    title: 'Mieux me connaître',
    subtitle: 'Quelques questions pour savoir à qui vous confiez vos cours',
    credentials: [
      {
        label: 'Formation',
        value: 'Master ingénieur civil',
        detail: 'École Polytechnique de Louvain — UCLouvain',
      },
      {
        label: 'Diplôme',
        value: 'Diplômé avec la plus grande distinction',
        detail: 'Moyenne de 17,95/20 sur l’ensemble du cursus',
      },
      {
        label: 'Spécialisation',
        value: 'Intelligence artificielle & science des données',
        detail: 'Mémoire publié à l’IEEE Conference on Games 2026',
      },
    ],
    items: [
      {
        q: 'D’où vient votre intérêt pour les maths et pour les cours particuliers ?',
        a: [
          'Les maths m’ont attiré très tôt, mais le vrai basculement s’est fait au secondaire, à l’Athénée Royal de Nivelles, en options fortes maths-sciences. C’est là que j’ai compris que les maths n’étaient pas une collection de recettes à appliquer, **mais un langage** : une fois qu’on le parle, on peut décrire à peu près n’importe quoi — la trajectoire d’un ballon, le comportement d’un algorithme, le risque d’un investissement. Cette bascule m’a mené aux **études d’ingénieur civil à l’EPL (UCLouvain)**, où j’ai passé cinq ans à faire des maths tous les jours, jusqu’au master en IA et science des données.',
          'Pour les cours particuliers, l’origine est très précise. En deuxième année d’ingénieur, je ramais sérieusement sur un cours. À l’EPL, les séances d’exercices sont encadrées par des tuteurs, et je suis tombé sur quelqu’un d’exceptionnel : en quelques séances, il m’a fait comprendre ce que des semaines de relecture n’avaient pas réussi à débloquer. J’ai réussi ce cours haut la main, et uniquement grâce à lui.',
          'Ça m’a marqué au point que dès l’année suivante, en troisième année, je me suis mis à aider les autres à mon tour. **Une centaine d’élèves plus tard**, du secondaire au niveau universitaire, j’adore toujours autant le moment où quelqu’un franchit l’obstacle sur lequel il butait depuis des mois. Je sais exactement ce que ça fait d’être de l’autre côté.',
        ],
      },
      {
        q: 'Quels thèmes aimez-vous aborder — et lesquels un peu moins ?',
        a: [
          'En maths secondaire, **je couvre l’ensemble du programme** : analyse (limites, dérivées, intégrales, étude de fonctions), algèbre, trigonométrie, géométrie, calcul, probabilités et statistiques. J’assure aussi la préparation à l’examen d’admission d’ingénieur civil — **que j’ai moi-même passé** — et à celui de médecine.',
          'Deux domaines me passionnent particulièrement. L’analyse d’abord : c’est le moment du cursus où les maths cessent d’être un exercice scolaire pour devenir un outil. Une dérivée, c’est une vitesse de changement, et dès qu’un élève voit ça, la moitié des exercices de physique s’éclairent d’un coup.',
          'L’algèbre ensuite, et c’est celle que les élèves sous-estiment le plus. Manipuler des équations, factoriser, jongler avec les fractions et les puissances : ce n’est pas le chapitre le plus spectaculaire, mais **c’est le socle de absolument tout ce qui suit**. À l’université, les cours de maths sont bâtis là-dessus — et les élèves qui galèrent en analyse ont presque toujours, en réalité, un problème d’algèbre non réglé deux ans plus tôt. C’est le chapitre où je suis le plus exigeant, parce que c’est celui qui rapporte le plus à long terme.',
          'Ce qui me plaît le moins, je l’avoue volontiers : la géométrie. Je l’enseigne évidemment, et bien, mais elle ne m’a jamais fait le même effet que le reste. Je me méfie aussi des chapitres appris comme des listes de formules à recracher, typiquement certaines identités trigonométriques : j’y consacre du temps à montrer d’où elles viennent (le cercle trigonométrique suffit à en retrouver la moitié), pour que l’élève puisse les reconstruire le jour de l’examen plutôt que de prier pour s’en souvenir.',
        ],
      },
      {
        q: 'Quels sont vos modèles ?',
        a: [
          'Sur le plan scientifique, ce sont les travaux de DeepMind sur AlphaGo puis AlphaStar : des programmes capables de battre les meilleurs joueurs du monde au Go, puis sur un jeu de stratégie en temps réel, bien plus complexe encore. Ce qui m’a fasciné, c’est que derrière ces prouesses il n’y a rien de magique — uniquement des mathématiques que les élèves croisent déjà au secondaire : des probabilités, des fonctions à optimiser, du calcul matriciel. Rien d’autre que ces outils-là, empilés à très grande échelle, suffit à produire quelque chose qui ressemble à de l’intuition. C’est ce qui m’a orienté vers l’IA appliquée aux jeux, sujet de mon travail de fin d’études, dont est issu un article accepté à la conférence internationale IEEE Conference on Games 2026.',
          'Côté humain, je citerais sans hésiter François Glineur, professeur de mathématiques appliquées à l’EPL. Un excellent professeur, au sens le plus concret du terme : il ne se contente jamais de dérouler un raisonnement, il explique d’où il vient et pourquoi on a choisi cette route-là plutôt qu’une autre. C’est exactement ce que j’essaie de reproduire en cours particulier : **ne jamais dire « c’est comme ça », toujours expliquer pourquoi**.',
        ],
      },
      {
        q: 'Quelles qualités font un bon professeur de maths ?',
        a: [
          'Trois choses, dans cet ordre.',
          'D’abord, **savoir désapprendre**. Quand on maîtrise une matière, on oublie à quel point elle était opaque au départ. Un bon prof de maths est capable de revenir mentalement à l’état d’un élève qui ne voit pas — et c’est plus difficile que de connaître la matière.',
          'Ensuite, **le diagnostic**. Un élève qui rate ses exercices d’intégration ne bloque presque jamais sur l’intégration : il bloque sur les dérivées, ou sur la manipulation algébrique, deux chapitres en amont. Trouver la vraie faille plutôt que traiter le symptôme, c’est là que se joue l’essentiel du progrès.',
          'Enfin, **la rigueur — mais au service de la clarté**. En ingénierie comme en maths, une solution qui « marche » sans qu’on sache pourquoi est une bombe à retardement. Je tiens à ce qu’un élève sache justifier chaque ligne de sa copie.',
        ],
      },
      {
        q: 'Une anecdote de cours à raconter ?',
        a: [
          'Un élève de 5e secondaire, bloqué sur les dérivées, m’a dit à la première séance : « je sais faire les calculs, mais je ne comprends pas ce que je calcule ». Symptôme classique.',
          'J’ai fermé le cours de maths et je lui ai demandé de me décrire ce que fait le compteur de vitesse d’une voiture. Il m’a répondu : « il donne la vitesse à l’instant où je regarde ». Parfait. Je lui ai fait remarquer que sur un trajet Bruxelles–Namur, on peut calculer une vitesse moyenne — la distance divisée par le temps — mais que ça ne dit rien de ce qui se passe à un instant précis. Le compteur, lui, donne la vitesse maintenant. Et pour l’obtenir, il faut réduire l’intervalle de temps de plus en plus, jusqu’à le faire tendre vers zéro.',
          'Là il a levé la tête : « attends, c’est la limite du cours de maths, ça ». Exactement. Donc : la position en fonction du temps, c’est ta fonction ; le compteur de vitesse, c’est sa dérivée ; et l’accélération que tu ressens dans le dos quand tu accélères, c’est la dérivée du compteur. On a fini par relire ensemble un exercice de physique sur le mouvement rectiligne qu’il avait raté deux semaines plus tôt, et **il l’a refait seul en cinq minutes**.',
          'Ce qu’il a compris ce jour-là dépasse largement le chapitre : **les maths et la physique ne sont pas deux cours différents** qu’on aurait mis dans deux fardes séparées. Les maths sont l’outil, la physique est ce qu’on décrit avec. Beaucoup d’élèves les travaillent en parallèle sans jamais faire le lien — et le jour où le lien se fait, les deux cours deviennent nettement plus faciles en même temps. C’est exactement pour ces moments-là que je continue à donner cours.',
        ],
      },
      {
        q: 'Avez-vous déjà connu des difficultés à l’école ?',
        a: [
          'Bien sûr, et deux moments précis.',
          'En 4e secondaire, j’ai eu la sensation brutale que la matière devenait énorme par rapport aux années précédentes. Avec le recul, je pense que le problème venait moins du programme que de la manière dont il était transmis : quand les explications ne suivent pas, on croit que la matière est devenue infranchissable. J’ai fini par bien m’en sortir, mais j’ai gardé de cette année-là une conviction utile : un élève qui « ne comprend rien » **n’est presque jamais un élève limité**, c’est un élève à qui on n’a pas encore expliqué de la bonne manière.',
          'Le vrai choc est venu plus tard, en première année d’ingénieur civil, au premier quadrimestre. Pas la difficulté de la matière en soi, mais la quantité de travail hebdomadaire et le niveau de réflexion attendu, qui n’avaient plus rien à voir avec le secondaire. Ma façon de travailler — celle qui avait toujours fonctionné — s’est écroulée en quelques semaines. J’ai dû tout reconstruire : planifier, hiérarchiser, apprendre à travailler la matière plutôt qu’à la relire. C’est probablement ce que je transmets de plus précieux à mes élèves aujourd’hui, en particulier à ceux qui visent l’examen d’admission : **la méthode compte autant que le talent**.',
        ],
      },
      {
        q: 'Quelles sont vos passions en dehors des cours ?',
        a: [
          'Je suis un grand amateur de Lego Technic, et de puzzles en général. J’aime passer des heures à construire quelque chose qui, au bout du compte, finira simplement posé sur une étagère en déco. Ça travaille la patience, et j’y trouve un vrai plaisir.',
          'Sinon, je suis passionné de tech, et surtout d’intelligence artificielle — c’est devenu ma spécialisation. Je suis de près tout ce qui sort dans le domaine et je passe pas mal de temps sur mes propres projets. Je suis aussi un joueur de jeux vidéo assidu (ce n’est pas un hasard si mon mémoire portait sur l’IA dans les jeux), et un gros consommateur de séries et de films, qui restent ma meilleure façon de décrocher complètement en fin de journée.',
        ],
      },
      {
        q: 'Qu’est-ce qui vous distingue d’un autre professeur ?',
        a: [
          'Je connais le parcours de l’intérieur. Secondaire en maths-sciences fortes à Nivelles, examen d’admission d’ingénieur passé moi-même, puis cinq années d’ingénieur civil à l’EPL terminées avec **la plus grande distinction (17,95/20)**. Et surtout, j’ai connu la sensation d’être complètement à la ramasse dans un cours — pour moi c’était la biologie, où j’ai vraiment galéré. Quand un élève me dit qu’il est largué, je ne le prends jamais de haut : je sais exactement ce que ça fait.',
          'Je laisse quelque chose derrière moi. Je fournis **des dossiers de révision en PDF**, en deux versions séparées : d’abord les énoncés, puis les corrigés détaillés. L’élève peut donc s’entraîner seul entre deux séances et se corriger lui-même, sans attendre le cours suivant. L’objectif final étant, très honnêtement, **qu’il n’ait plus besoin de moi**.',
          'Et puis il n’y a pas de distance. J’ai 23 ans, je sors tout juste des études, et j’ai encore très bien en tête ce que c’est qu’un blocus, un cours mal expliqué ou un examen qu’on redoute. Ça change beaucoup de choses : mes élèves osent me dire « je n’ai rien compris » sans avoir peur du jugement — et c’est franchement la condition numéro un pour progresser.',
        ],
      },
    ],
  },

  faq: {
    eyebrow: 'Questions pratiques',
    title: 'Questions fréquentes',
    subtitle: 'Tout ce qu’il faut savoir avant de se lancer',
    items: [
      {
        q: 'Quels niveaux sont couverts ?',
        a: 'De la 1re secondaire au master. Je donne cours au secondaire (maths, physique, Python), dans l’enseignement supérieur (maths, physique générale, programmation et intelligence artificielle) et je prépare aux examens d’entrée en école d’ingénieur civil et en médecine.',
      },
      {
        q: 'Comment se passe la préparation à l’examen d’entrée ingénieur civil ?',
        a: 'On couvre l’ensemble du programme officiel de l’examen, chapitre par chapitre, puis on bascule sur un entraînement intensif à partir des questions des années précédentes. On travaille aussi la gestion du temps et la stratégie de réponse, qui font souvent la différence le jour J. Étant moi-même ingénieur civil, je suis passé par cet examen.',
      },
      {
        q: 'Quelles matières sont couvertes pour l’examen d’entrée en médecine ?',
        a: 'J’interviens sur les volets mathématiques et physique de la partie « connaissances scientifiques ». Je ne donne pas cours de biologie ni de chimie : pour ces deux matières, il vous faudra un autre enseignant.',
      },
      {
        q: 'Où les cours se donnent-ils ?',
        a: 'Chez moi, à Gouy-Lez-Piéton (Courcelles), ou en ligne. Le format en ligne fonctionne très bien pour le supérieur et la préparation aux examens, et permet de travailler depuis n’importe où.',
      },
      {
        q: 'Peut-on organiser un stage intensif avant un examen ?',
        a: 'Oui, et c’est souvent le format le plus efficace avant une seconde session ou un examen d’entrée. Plusieurs élèves ont revu une année complète en deux semaines à raison de deux heures par jour. On construit le planning ensemble en fonction de la date de votre examen.',
      },
      {
        q: 'Comment réserver un premier cours ?',
        a: 'Passez par le formulaire de demande en bas de page : il me transmet directement le niveau, les matières et les disponibilités. Vous pouvez aussi m’écrire sur WhatsApp ou par email. Je réponds sous 24 heures.',
      },
    ],
  },

  contact: {
    eyebrow: 'Premier pas',
    title: 'Contacte-moi',
    subtitle: 'Prêt à transformer vos résultats ? Parlons-en !',
    tabForm: 'Formulaire de demande',
    tabDirect: 'Contact direct',
    tabHint: 'Le formulaire de demande est à privilégier pour un premier contact',
    smsDesc: 'Sans application',
    whatsappDesc: 'Réponse rapide',
    emailDesc: 'Réponse sous 24h',
    directWhatsappText: 'Bonjour {nom}, je souhaiterais prendre des cours avec vous.',
    directSmsText: 'Bonjour {nom}, je souhaiterais prendre des cours avec vous.',
    directEmailSubject: 'Demande de cours particuliers',
  },

  form: {
    title: 'Demande de cours',
    subtitle: 'Remplis ce formulaire pour me contacter directement',
    labelName: 'Prénom de l’élève',
    placeholderName: 'Ex. : Camille',
    labelLevel: 'Niveau',
    levels: [
      { id: 'secondaire', label: 'Secondaire', subjects: ['Maths', 'Physique', 'Python'] },
      {
        id: 'superieur',
        label: 'Supérieur',
        subjects: ['Maths', 'Physique', 'Programmation', 'IA'],
      },
      {
        id: 'examens',
        label: 'Préparation examen d’entrée',
        subjects: ['Ingénieur civil', 'Médecine'],
      },
    ],
    labelSubjects: 'Matière(s) souhaitée(s)',
    subjectsHint: 'Plusieurs matières possibles',
    labelModalite: 'Modalité',
    optHome: 'À mon domicile',
    optOnline: 'En visio',
    btnContinue: 'Continuer',
    btnBack: 'Retour',
    labelCourseType: 'Type de cours',
    courseRegularTitle: 'Suivi régulier',
    courseRegularDesc: 'Pour progresser durablement',
    courseOneoffTitle: 'Cours ponctuel',
    courseOneoffDesc: 'Pour une aide ciblée',
    labelReason: 'Raison (optionnel)',
    reasons: ['Examen important', 'Interrogation', 'Remise à niveau', 'Examen d’entrée'],
    labelFrequency: 'Fréquence souhaitée (optionnel)',
    freqWeek: 'Semaine',
    freqMonth: 'Mois',
    freqPer: 'par',
    freqHint: 'Laissez vide pour discuter ensemble de la fréquence',
    labelAvailability: 'Vos disponibilités',
    placeholderAvailability: 'Ex: Lundi et mercredi soir, week-end',
    labelMessage: 'Message complémentaire (optionnel)',
    placeholderMessage: 'Des précisions supplémentaires...',
    chooseContact: 'Choisissez votre moyen de contact :',
    msg: {
      greeting: 'Bonjour {nom},',
      intro: 'Je souhaiterais prendre des cours avec vous.',
      student: 'ÉLÈVE',
      level: 'NIVEAU',
      subjects: 'MATIÈRE(S) SOUHAITÉE(S)',
      modality: 'MODALITÉ',
      courseType: 'TYPE DE COURS',
      frequency: 'FRÉQUENCE',
      availability: 'DISPONIBILITÉS',
      message: 'MESSAGE',
      closing: 'Merci pour votre attention !',
      modalityHome: 'À mon domicile',
      modalityOnline: 'En visio',
      courseTypeRegular: 'Suivi régulier',
      courseTypeOneoff: 'Cours ponctuels',
      freqValue: '{n} fois / {period}',
      freqToDiscuss: 'À discuter ensemble',
      periodWeek: 'semaine',
      periodMonth: 'mois',
      emailSubject: 'Demande de cours - {subjects}',
    },
  },

  footer: {
    title: 'Le succès commence par une décision',
    line1: 'Chaque grand parcours commence par un premier pas.',
    line2: 'Votre réussite vous attend.',
    cta: 'Demander un premier cours',
    tagline:
      'Cours particuliers en maths, physique et programmation. Du secondaire au supérieur, et préparation aux examens d’entrée ingénieur civil et médecine.',
    navTitle: 'Explorer',
    contactTitle: 'Me contacter',
    role: 'Professeur particulier à {ville}',
    rights: 'Tous droits réservés',
  },
}

const en: typeof fr = {
  langName: { fr: 'FR', en: 'EN', nl: 'NL' },

  nav: {
    brand: 'Private Tutoring',
    items: [
      ['Home', 'accueil'],
      ['Method', 'methode'],
      ['Subjects', 'matieres'],
      ['Testimonials', 'temoignages'],
      ['About', 'apropos'],
      ['FAQ', 'faq'],
      ['Contact', 'contact'],
    ],
    toggleLabel: 'Switch language',
  },

  hero: {
    title: { p1: 'Turn your ', w1: 'struggles', p2: ' into ', w2: 'successes' },
    subtitle1: 'Graduate civil engineer in Computer Science & AI, passionate about teaching.',
    subtitle2:
      'Maths, physics and programming — from secondary school to university, plus preparation for the engineering and medical entrance exams.',
    audienceChips: ['Secondary', 'Higher education', 'Entrance exam preparation'],
    diploma: {
      badge: 'Graduate civil engineer',
      distinction: 'Highest distinction',
      school: 'École Polytechnique de Louvain — UCLouvain',
      note: 'If I got there, you can get there too.',
      download: 'Degree certificate',
    },
    statStudents: 'Students supported',
    statExperience: 'Years of experience',
    quote: { part1: 'Excellence is not a destination, it’s a ', highlight: 'continuous journey' },
    ctaTitle: 'Book a lesson',
    ctaSubtitle: 'Start your transformation',
    labelModalites: 'Format',
    labelDisponibilite: 'Availability',
    labelLocalisation: 'Location',
    modalites: ['Lessons at my place', 'Online lessons'],
    disponibilite: 'Flexible (weekdays & weekends)',
    zone: '6181 Gouy-Lez-Piéton, Courcelles, Belgium',
  },

  method: {
    eyebrow: 'My method',
    title: 'Why choose me?',
    subtitle: 'A personalized approach to your success',
    items: [
      {
        title: 'Personalized teaching',
        description:
          'Every student is unique. I adapt my sessions and methodology to your profile, your goals and your learning pace.',
      },
      {
        title: 'Exercises & corrections',
        description:
          'I give you exercises suited to your level and needs. I take the time to correct and explain every point to help you understand better and progress.',
      },
      {
        title: 'Available outside lessons',
        description:
          'Outside of sessions, I stay available for quick questions, to check an exercise or to give a fast clarification.',
      },
      {
        title: 'Revision packs provided',
        description:
          'The exercises on one side, the detailed solutions on the other. Enough to practise alone between sessions and self-correct without waiting for the next lesson.',
      },
    ],
  },

  services: {
    eyebrow: 'What I teach',
    title: 'My Specialties',
    subtitle: 'From secondary school to university • Complete, tailor-made support',
    ellipsis: '… and much more',
    audiences: [
      {
        id: 'secondaire',
        label: 'Secondary',
        labelShort: 'Secondary',
        tagline: 'From year 1 to year 6: catching up, regular follow-up and exam preparation.',
        note: '',
        subjects: [
          {
            title: 'Mathematics',
            levels: '1st → 6th Secondary',
            badge: '1-6',
            topics: ['Calculus', 'Algebra', 'Trigonometry', 'Geometry', 'Statistics'],
            benefits: [
              'Thorough mastery of the official curriculum',
              'Personalized methodology by level',
              'Efficient exam preparation',
              'Clear, structured and visual explanations',
            ],
          },
          {
            title: 'Physics',
            levels: '3rd → 6th Secondary',
            badge: '3-6',
            topics: ['Electricity', 'Mechanics', 'Optics', 'Waves', 'Thermodynamics'],
            benefits: [
              'Thorough mastery of the official curriculum',
              'Hands-on approach with real examples',
              'Targeted exam preparation',
              'Complex concepts explained simply',
            ],
          },
          {
            title: 'Python Programming',
            levels: 'Beginner Level',
            badge: 'Py',
            topics: ['Basics', 'Projects', 'Game Dev', 'Algorithms', 'Logic'],
            benefits: [
              'From zero to real projects',
              'Fun, progressive and hands-on learning',
              'Theoretical grasp of key concepts',
              'A key skill in demand on the job market',
            ],
          },
        ],
      },
      {
        id: 'superieur',
        label: 'Higher education',
        labelShort: 'Higher ed.',
        tagline: 'Bachelor to master, in science and engineering: lectures, problem sets and exams.',
        note: '',
        subjects: [
          {
            title: 'Advanced mathematics',
            levels: 'Year 1 → Year 2',
            badge: '∫',
            topics: ['Calculus', 'Linear algebra', 'Probability', 'Statistics', 'Differential calculus'],
            benefits: [
              'Rebuilding the basics where secondary school stops',
              'Guided work through your problem sets',
              'Preparation for the January and June exam sessions',
              'The writing rigour expected at university',
            ],
          },
          {
            title: 'General physics',
            levels: 'Year 1 → Year 2',
            badge: 'Φ',
            topics: ['Mechanics', 'Electromagnetism', 'Thermodynamics', 'Waves', 'Optics'],
            benefits: [
              'From mathematical formalism to physical intuition',
              'Practice on past exam papers',
              'Units, orders of magnitude and approximations mastered',
              'A structured, step-by-step way to solve problems',
            ],
          },
          {
            title: 'Programming & algorithms',
            levels: 'Year 1 → Year 3',
            badge: '</>',
            topics: ['Python', 'C / C++', 'Data structures', 'Complexity', 'Object-oriented'],
            benefits: [
              'Live code reading and debugging',
              'Coursework projects supported, never done for you',
              'Best practices and readable code',
              'Complexity and choosing the right data structure',
            ],
          },
          {
            title: 'Artificial intelligence',
            levels: 'Year 3 → Master',
            badge: 'AI',
            topics: ['Machine Learning', 'Deep Learning', 'Neural networks', 'Data science', 'PyTorch'],
            benefits: [
              'My own engineering specialty',
              'Theory and implementation taught side by side',
              'Support on projects and your thesis',
              'The maths behind the models, explained simply',
            ],
          },
        ],
      },
      {
        id: 'examens',
        label: 'Entrance exam preparation',
        labelShort: 'Preparation',
        tagline: 'Intensive, structured preparation so you walk into exam day with confidence.',
        note: 'For the medical entrance exam, I cover the mathematics and physics parts.',
        subjects: [
          {
            title: 'Civil engineering entrance exam',
            levels: 'Mathematics',
            badge: 'CE',
            topics: ['Calculus', 'Algebra', 'Trigonometry', 'Analytic geometry', 'Complex numbers'],
            benefits: [
              'The official exam syllabus covered from A to Z',
              'Intensive practice on past exam questions',
              'Time management and answering strategy on the day',
              'I sat this exam myself',
            ],
          },
          {
            title: 'Medical & dental entrance exam',
            levels: 'Mathematics & Physics',
            badge: 'MD',
            topics: ['Mathematics', 'Physics', 'Reasoning', 'Past papers', 'Time management'],
            benefits: [
              'The maths and physics parts of the science section',
              'Practice under timed multiple-choice conditions',
              'Targeted revision of the gaps spotted in session',
              'A revision schedule built together with you',
            ],
          },
        ],
      },
    ],
  },

  temoignages: {
    eyebrow: 'What they say',
    title: 'Testimonials',
    subtitle: 'My students’ success speaks for itself',
    prevLabel: 'Previous testimonial',
    nextLabel: 'Next testimonial',
    dotLabel: 'Go to group {n}',
    authorOverrides: { 'Maman de Guido': "Guido's mum" } as Record<string, string>,
    items: [
      {
        text: 'My daughter loved her trigonometry sessions with Mathis; he clearly masters the subject and knows how to put himself in the student’s shoes. His explanations are clear and he doesn’t hesitate to repeat himself when needed. We will gladly call on him again.',
        role: 'Parent – Maths',
      },
      {
        text: 'Very satisfied. Punctual, friendly. My son appreciated his way of explaining. Highly recommended.',
        role: 'Parent – Physics',
      },
      {
        text: 'Mathis is an excellent teacher. Very serious and extremely organized. He prepares his lessons in advance and gives exercises for the next session. I highly recommend him!',
        role: 'Parent – Physics',
      },
      {
        text: 'Our son Guido had a retake exam in maths after a very difficult year. In two weeks (2h/day), Mathis reviewed and clearly explained a full year. Guido passed his exam. A huge thank you for his work and his patience!',
        role: 'Parent – Mathematics',
      },
      {
        text: 'My son took maths and physics lessons with Mathis to pass his second session (5th year, Maths/Science option). He is available, polite and punctual. He prepares his lessons in advance and is very organized. My son passed his exams and is ready to start his final year. I recommend Mathis as a private tutor.',
        role: 'Parent – Maths & Physics',
      },
      {
        text: 'Very good teacher, efficient study in a pleasant atmosphere. My daughter, who had serious difficulties, regained confidence and passed her exam. I highly recommend!',
        role: 'Parent – Maths',
      },
      {
        text: 'He helped me with my exams and got me back up to speed. He explains clearly and adapts to your needs. I recommend him without hesitation.',
        role: 'Former student – Maths',
      },
      {
        text: 'Having received help from Mathis in some courses, I can attest to his ability to explain clearly and make complex notions accessible, especially in mathematics.',
        role: 'Recommendation',
      },
      {
        text: 'Mathis has always known how to make mathematics and science accessible. Patient and a great teacher, he helps you understand and connect concepts. I highly recommend him.',
        role: 'Recommendation',
      },
      {
        text: 'I highly recommend Mathis for secondary-school maths and physics lessons. Thanks to his clear explanations and patient approach, he genuinely helps students progress and gain confidence.',
        role: 'Recommendation',
      },
    ],
  },

  about: {
    eyebrow: 'In a few questions',
    title: 'Get to know me',
    subtitle: 'A few questions, so you know who you are entrusting your lessons to',
    credentials: [
      {
        label: 'Education',
        value: "Master's in civil engineering",
        detail: 'École Polytechnique de Louvain — UCLouvain',
      },
      {
        label: 'Degree',
        value: 'Graduated with the highest distinction',
        detail: 'A 17.95/20 average across the whole programme',
      },
      {
        label: 'Specialization',
        value: 'Artificial intelligence & data science',
        detail: 'Thesis published at the IEEE Conference on Games 2026',
      },
    ],
    items: [
      {
        q: 'Where does your interest in maths and in tutoring come from?',
        a: [
          'Maths drew me in very early, but the real turning point came in secondary school, at the Athénée Royal in Nivelles, in the advanced maths-science stream. That is where I understood that maths was not a collection of recipes to apply, **but a language**: once you speak it, you can describe almost anything — the path of a ball, the behaviour of an algorithm, the risk of an investment. That shift led me to **civil engineering studies at EPL (UCLouvain)**, where I spent five years doing maths every day, up to a master’s in AI and data science.',
          'For tutoring, the origin is very precise. In my second year of engineering, I was seriously struggling with one course. At EPL, the exercise sessions are run by tutors, and I came across someone exceptional: in a handful of sessions, he made me understand what weeks of re-reading had failed to unlock. I passed that course with flying colours, and only thanks to him.',
          'It struck me so much that the very next year, in my third year, I started helping others in turn. **Around a hundred students later**, from secondary school to university level, I still love the moment when someone gets past the obstacle they had been stuck on for months. I know exactly what it feels like to be on the other side.',
        ],
      },
      {
        q: 'Which topics do you enjoy teaching — and which ones less so?',
        a: [
          'In secondary maths, **I cover the whole curriculum**: calculus (limits, derivatives, integrals, function analysis), algebra, trigonometry, geometry, arithmetic, probability and statistics. I also prepare students for the civil engineering entrance exam — **which I sat myself** — and for the medical one.',
          'Two areas fascinate me in particular. Calculus first: it is the point in the curriculum where maths stops being a school exercise and becomes a tool. A derivative is a rate of change, and as soon as a student sees that, half of their physics exercises suddenly make sense.',
          'Then algebra, and it is the one students underestimate the most. Manipulating equations, factorizing, juggling fractions and powers: it is not the most spectacular chapter, but **it is the foundation of absolutely everything that follows**. At university, maths courses are built on it — and students who struggle with calculus almost always have, in reality, an algebra problem left unresolved two years earlier. It is the chapter where I am most demanding, because it is the one that pays off most in the long run.',
          'What I enjoy least, I will happily admit: geometry. I do teach it, and teach it well, but it never had the same effect on me as the rest. I am also wary of chapters learned as lists of formulas to regurgitate, typically some trigonometric identities: I spend time showing where they come from (the unit circle alone recovers half of them), so that students can rebuild them on exam day rather than praying they remember.',
        ],
      },
      {
        q: 'Who are your role models?',
        a: [
          'On the scientific side, DeepMind’s work on AlphaGo and then AlphaStar: programs able to beat the best players in the world at Go, and then at a real-time strategy game, which is far more complex still. What fascinated me is that there is nothing magical behind those feats — only mathematics that students already meet in secondary school: probability, functions to optimize, matrix calculus. Nothing but those tools, stacked at a very large scale, is enough to produce something that looks like intuition. That is what steered me towards AI applied to games, the subject of my master’s thesis, from which a paper was accepted at the international IEEE Conference on Games 2026.',
          'On the human side, I would name François Glineur without hesitation, professor of applied mathematics at EPL. An excellent teacher in the most concrete sense: he never simply unrolls a line of reasoning, he explains where it comes from and why that route was chosen over another. That is exactly what I try to reproduce in private lessons: **never say "that is just how it is", always explain why**.',
        ],
      },
      {
        q: 'What makes a good maths teacher?',
        a: [
          'Three things, in this order.',
          'First, **knowing how to unlearn**. Once you master a subject, you forget how opaque it was at the start. A good maths teacher can mentally return to the state of a student who does not see it — and that is harder than knowing the subject.',
          'Then, **diagnosis**. A student failing integration exercises is almost never stuck on integration: they are stuck on derivatives, or on algebraic manipulation, two chapters upstream. Finding the real flaw rather than treating the symptom is where most of the progress is won.',
          'Finally, **rigour — but in the service of clarity**. In engineering as in maths, a solution that "works" without anyone knowing why is a time bomb. I insist that a student can justify every line of their answer.',
        ],
      },
      {
        q: 'Do you have a teaching story to share?',
        a: [
          'A fifth-year secondary student, stuck on derivatives, told me in our first session: "I know how to do the calculations, but I do not understand what I am calculating." A classic symptom.',
          'I closed the maths textbook and asked him to describe what a car’s speedometer does. He answered: "it gives the speed at the moment I look at it." Perfect. I pointed out that on a Brussels–Namur trip you can compute an average speed — distance divided by time — but that this says nothing about what happens at a precise instant. The speedometer gives the speed right now. And to get it, you have to shrink the time interval further and further, until it tends to zero.',
          'That is when he looked up: "wait, that is the limit from the maths course." Exactly. So: position as a function of time is your function; the speedometer is its derivative; and the acceleration you feel in your back when you speed up is the derivative of the speedometer. We ended up going back over a physics exercise on linear motion that he had failed two weeks earlier, and **he redid it on his own in five minutes**.',
          'What he understood that day goes well beyond the chapter: **maths and physics are not two different courses** that happen to sit in two separate folders. Maths is the tool, physics is what you describe with it. Many students work on them in parallel without ever making the connection — and the day the connection is made, both courses become markedly easier at the same time. Those moments are exactly why I keep teaching.',
        ],
      },
      {
        q: 'Have you ever struggled at school yourself?',
        a: [
          'Of course, and at two precise moments.',
          'In my fourth year of secondary school, I had the brutal feeling that the material had become enormous compared to previous years. Looking back, I think the problem came less from the curriculum than from the way it was delivered: when the explanations do not follow, you believe the subject has become impassable. I ended up doing well, but I kept a useful conviction from that year: a student who "understands nothing" **is almost never a limited student**, it is a student nobody has yet explained things to in the right way.',
          'The real shock came later, in my first year of civil engineering, in the first term. Not the difficulty of the material itself, but the weekly workload and the level of thinking expected, which had nothing to do with secondary school any more. My way of working — the one that had always worked — collapsed in a few weeks. I had to rebuild everything: planning, prioritizing, learning to work through the material rather than re-read it. That is probably the most valuable thing I pass on to my students today, especially those aiming for the entrance exam: **method counts as much as talent**.',
        ],
      },
      {
        q: 'What are your passions outside teaching?',
        a: [
          'I am a big fan of Lego Technic, and of puzzles in general. I love spending hours building something that will, in the end, simply sit on a shelf as decoration. It trains patience, and I get real pleasure from it.',
          'Otherwise, I am passionate about tech, and above all about artificial intelligence — it became my specialization. I follow closely everything that comes out in the field and I spend a fair amount of time on my own projects. I am also a keen video game player (it is no coincidence that my thesis was about AI in games), and a heavy consumer of series and films, which remain my best way to switch off completely at the end of the day.',
        ],
      },
      {
        q: 'What sets you apart from another tutor?',
        a: [
          'I know the path from the inside. Secondary school in the advanced maths-science stream in Nivelles, the engineering entrance exam sat myself, then five years of civil engineering at EPL finished with **the highest distinction (17.95/20)**. And above all, I have known the feeling of being completely lost in a course — for me it was biology, where I really struggled. When a student tells me they are lost, I never look down on them: I know exactly what it feels like.',
          'I leave something behind. I provide **revision packs as PDFs**, in two separate versions: the exercises first, then the detailed solutions. Students can therefore practise on their own between sessions and mark themselves, without waiting for the next lesson. The end goal being, quite honestly, **that they no longer need me**.',
          'And then there is no distance. I am 23, I have only just finished my studies, and I still remember very well what exam period, a badly explained course or a dreaded exam feel like. That changes a lot: my students dare to tell me "I did not understand a thing" without fear of being judged — and that is frankly the number one condition for making progress.',
        ],
      },
    ],
  },

  faq: {
    eyebrow: 'Practical questions',
    title: 'Frequently asked questions',
    subtitle: 'Everything worth knowing before we start',
    items: [
      {
        q: 'Which levels do you teach?',
        a: 'From the first year of secondary school up to master’s level. I teach secondary school (maths, physics, Python), higher education (mathematics, general physics, programming and artificial intelligence), and I prepare students for the civil engineering and medical entrance exams.',
      },
      {
        q: 'How does preparation for the civil engineering entrance exam work?',
        a: 'We cover the entire official exam syllabus chapter by chapter, then switch to intensive practice on questions from previous years. We also work on time management and answering strategy, which often make the difference on the day. As a civil engineer myself, I sat this exam.',
      },
      {
        q: 'Which subjects do you cover for the medical entrance exam?',
        a: 'I cover the mathematics and physics parts of the science section. I do not teach biology or chemistry: for those two subjects you will need another tutor.',
      },
      {
        q: 'Where do the lessons take place?',
        a: 'At my place in Gouy-Lez-Piéton (Courcelles), or online. The online format works very well for higher education and exam preparation, and lets you work from wherever you are.',
      },
      {
        q: 'Can we organize an intensive course before an exam?',
        a: 'Yes, and it is often the most effective format before a retake or an entrance exam. Several students have reviewed a full year in two weeks at two hours a day. We build the schedule together based on your exam date.',
      },
      {
        q: 'How do I book a first lesson?',
        a: 'Use the request form at the bottom of the page: it sends me your level, subjects and availability directly. You can also message me on WhatsApp or by email. I reply within 24 hours.',
      },
    ],
  },

  contact: {
    eyebrow: 'First step',
    title: 'Contact me',
    subtitle: 'Ready to transform your results? Let’s talk!',
    tabForm: 'Request form',
    tabDirect: 'Direct contact',
    tabHint: 'The request form is best for a first contact',
    smsDesc: 'No app needed',
    whatsappDesc: 'Quick reply',
    emailDesc: 'Reply within 24h',
    directWhatsappText: 'Hello {nom}, I would like to take lessons with you.',
    directSmsText: 'Hello {nom}, I would like to take lessons with you.',
    directEmailSubject: 'Private lessons request',
  },

  form: {
    title: 'Lesson request',
    subtitle: 'Fill out this form to contact me directly',
    labelName: 'Student’s first name',
    placeholderName: 'e.g. Camille',
    labelLevel: 'Level',
    levels: [
      { id: 'secondaire', label: 'Secondary', subjects: ['Maths', 'Physics', 'Python'] },
      {
        id: 'superieur',
        label: 'Higher education',
        subjects: ['Maths', 'Physics', 'Programming', 'AI'],
      },
      {
        id: 'examens',
        label: 'Entrance exam preparation',
        subjects: ['Civil engineering', 'Medicine'],
      },
    ],
    labelSubjects: 'Subject(s) wanted',
    subjectsHint: 'You can select several subjects',
    labelModalite: 'Format',
    optHome: 'At my place',
    optOnline: 'Online',
    btnContinue: 'Continue',
    btnBack: 'Back',
    labelCourseType: 'Lesson type',
    courseRegularTitle: 'Regular follow-up',
    courseRegularDesc: 'To progress steadily',
    courseOneoffTitle: 'One-off lesson',
    courseOneoffDesc: 'For targeted help',
    labelReason: 'Reason (optional)',
    reasons: ['Major exam', 'Test', 'Catch-up', 'Entrance exam'],
    labelFrequency: 'Desired frequency (optional)',
    freqWeek: 'Week',
    freqMonth: 'Month',
    freqPer: 'per',
    freqHint: 'Leave empty to discuss the frequency together',
    labelAvailability: 'Your availability',
    placeholderAvailability: 'e.g. Monday and Wednesday evening, weekend',
    labelMessage: 'Additional message (optional)',
    placeholderMessage: 'Any extra details...',
    chooseContact: 'Choose your contact method:',
    msg: {
      greeting: 'Hello {nom},',
      intro: 'I would like to take lessons with you.',
      student: 'STUDENT',
      level: 'LEVEL',
      subjects: 'DESIRED SUBJECT(S)',
      modality: 'FORMAT',
      courseType: 'LESSON TYPE',
      frequency: 'FREQUENCY',
      availability: 'AVAILABILITY',
      message: 'MESSAGE',
      closing: 'Thank you for your attention!',
      modalityHome: 'At my place',
      modalityOnline: 'Online',
      courseTypeRegular: 'Regular follow-up',
      courseTypeOneoff: 'One-off lessons',
      freqValue: '{n} time(s) / {period}',
      freqToDiscuss: 'To be discussed together',
      periodWeek: 'week',
      periodMonth: 'month',
      emailSubject: 'Lesson request - {subjects}',
    },
  },

  footer: {
    title: 'Success starts with a decision',
    line1: 'Every great journey begins with a first step.',
    line2: 'Your success awaits.',
    cta: 'Request a first lesson',
    tagline:
      'Private lessons in maths, physics and programming. From secondary school to university, plus preparation for the civil engineering and medical entrance exams.',
    navTitle: 'Explore',
    contactTitle: 'Get in touch',
    role: 'Private tutor in {ville}',
    rights: 'All rights reserved',
  },
}

const nl: typeof fr = {
  langName: { fr: 'FR', en: 'EN', nl: 'NL' },

  nav: {
    brand: 'Bijlessen',
    items: [
      ['Home', 'accueil'],
      ['Aanpak', 'methode'],
      ['Vakken', 'matieres'],
      ['Getuigenissen', 'temoignages'],
      ['Over mij', 'apropos'],
      ['FAQ', 'faq'],
      ['Contact', 'contact'],
    ],
    toggleLabel: 'Taal wijzigen',
  },

  hero: {
    title: { p1: '', w1: 'Moeilijkheden', p2: ' omzetten in ', w2: 'successen' },
    subtitle1:
      'Afgestudeerd burgerlijk ingenieur in Computerwetenschappen & AI, met een passie voor lesgeven.',
    subtitle2:
      'Wiskunde, fysica en programmeren — van het middelbaar tot het hoger onderwijs, en voorbereiding op de toelatingsexamens burgerlijk ingenieur en arts.',
    audienceChips: ['Middelbaar', 'Hoger onderwijs', 'Voorbereiding toelatingsexamen'],
    diploma: {
      badge: 'Afgestudeerd burgerlijk ingenieur',
      distinction: 'Grootste onderscheiding',
      school: 'École Polytechnique de Louvain — UCLouvain',
      note: 'Als ik er ben geraakt, kan u dat ook.',
      download: 'Diplomabewijs',
    },
    statStudents: 'Begeleide leerlingen',
    statExperience: 'Jaar ervaring',
    quote: { part1: 'Uitmuntendheid is geen bestemming, het is een ', highlight: 'voortdurende reis' },
    ctaTitle: 'Een les boeken',
    ctaSubtitle: 'Vrijblijvend eerste contact',
    labelModalites: 'Lesvormen',
    labelDisponibilite: 'Beschikbaarheid',
    labelLocalisation: 'Locatie',
    modalites: ['Les bij mij thuis', 'Online les'],
    disponibilite: 'Flexibel (weekdagen & weekend)',
    zone: '6181 Gouy-Lez-Piéton, Courcelles, België',
  },

  method: {
    eyebrow: 'Mijn aanpak',
    title: 'Waarom voor mij kiezen?',
    subtitle: 'Een persoonlijke aanpak voor elke leerling',
    items: [
      {
        title: 'Persoonlijke aanpak',
        description:
          'Elke leerling is uniek. Ik pas mijn lessen en mijn methode aan het profiel, de doelen en het leertempo van elke leerling aan.',
      },
      {
        title: 'Oefeningen & verbeteringen',
        description:
          'Ik geef oefeningen op maat van het niveau en de noden van elke leerling. Ik neem de tijd om alles na te kijken en elk punt uit te leggen, zodat de leerling beter begrijpt en vooruitgaat.',
      },
      {
        title: 'Ook bereikbaar buiten de lessen',
        description:
          'Buiten de lessen blijf ik beschikbaar voor korte vragen, om een oefening na te kijken of iets snel te verduidelijken.',
      },
      {
        title: 'Herhalingsbundels inbegrepen',
        description:
          'De opgaven aan de ene kant, de uitgewerkte oplossingen aan de andere. Genoeg om tussen twee sessies alleen te oefenen en zichzelf te verbeteren.',
      },
    ],
  },

  services: {
    eyebrow: 'Wat ik geef',
    title: 'Mijn Specialiteiten',
    subtitle: 'Van het middelbaar tot het hoger onderwijs • Volledige begeleiding op maat',
    ellipsis: '… en veel meer',
    audiences: [
      {
        id: 'secondaire',
        label: 'Middelbaar',
        labelShort: 'Middelbaar',
        tagline: 'Van het 1e tot het 6e jaar: bijwerken, vaste begeleiding en examenvoorbereiding.',
        note: '',
        subjects: [
          {
            title: 'Wiskunde',
            levels: '1e → 6e Middelbaar',
            badge: '1-6',
            topics: ['Analyse', 'Algebra', 'Goniometrie', 'Meetkunde', 'Statistiek'],
            benefits: [
              'Grondige beheersing van het officiële leerplan',
              'Methodologie op maat van het niveau',
              'Doeltreffende voorbereiding op toetsen en examens',
              'Heldere, gestructureerde en visuele uitleg',
            ],
          },
          {
            title: 'Fysica',
            levels: '3e → 6e Middelbaar',
            badge: '3-6',
            topics: ['Elektriciteit', 'Mechanica', 'Optica', 'Golven', 'Thermodynamica'],
            benefits: [
              'Grondige beheersing van het officiële leerplan',
              'Concrete aanpak met echte voorbeelden',
              'Gerichte voorbereiding op toetsen en examens',
              'Complexe begrippen eenvoudig uitgelegd',
            ],
          },
          {
            title: 'Programmeren in Python',
            levels: 'Beginnersniveau',
            badge: 'Py',
            topics: ['Basis', 'Projecten', 'Game Dev', 'Algoritmen', 'Logica'],
            benefits: [
              'Van nul naar concrete projecten',
              'Speels, stapsgewijs en praktisch leren',
              'Theoretisch inzicht in de kernbegrippen',
              'Een sleutelvaardigheid waar de arbeidsmarkt om vraagt',
            ],
          },
        ],
      },
      {
        id: 'superieur',
        label: 'Hoger onderwijs',
        labelShort: 'Hoger',
        tagline:
          'Van bachelor tot master, in wetenschappen en ingenieurswetenschappen: cursussen, oefenzittingen en examens.',
        note: '',
        subjects: [
          {
            title: 'Hogere wiskunde',
            levels: 'Bachelor 1 → 2',
            badge: '∫',
            topics: ['Analyse', 'Lineaire algebra', 'Kansrekening', 'Statistiek', 'Differentiaalrekening'],
            benefits: [
              'De basis heropbouwen waar het middelbaar stopt',
              'Begeleide oplossing van de oefenreeksen',
              'Voorbereiding op de examenperiodes van januari en juni',
              'De nauwkeurigheid van uitwerking die de universiteit verwacht',
            ],
          },
          {
            title: 'Algemene fysica',
            levels: 'Bachelor 1 → 2',
            badge: 'Φ',
            topics: ['Mechanica', 'Elektromagnetisme', 'Thermodynamica', 'Golven', 'Optica'],
            benefits: [
              'Van wiskundig formalisme naar fysische intuïtie',
              'Oefenen op de examens van vorige jaren',
              'Eenheden, grootteordes en benaderingen onder de knie',
              'Een gestructureerde aanpak, stap voor stap',
            ],
          },
          {
            title: 'Programmeren & algoritmen',
            levels: 'Bachelor 1 → 3',
            badge: '</>',
            topics: ['Python', 'C / C++', 'Datastructuren', 'Complexiteit', 'Objectgericht'],
            benefits: [
              'Code live lezen en debuggen',
              'Begeleiding bij projecten, nooit in de plaats van de student gemaakt',
              'Goede praktijken en leesbare code',
              'Complexiteit en de juiste datastructuur kiezen',
            ],
          },
          {
            title: 'Artificiële intelligentie',
            levels: 'Bachelor 3 → Master',
            badge: 'AI',
            topics: ['Machine Learning', 'Deep Learning', 'Neurale netwerken', 'Data science', 'PyTorch'],
            benefits: [
              'Mijn eigen specialisatie als burgerlijk ingenieur',
              'Theorie en implementatie samen aangepakt',
              'Begeleiding bij projecten en masterproef',
              'De wiskunde achter de modellen, eenvoudig uitgelegd',
            ],
          },
        ],
      },
      {
        id: 'examens',
        label: 'Voorbereiding toelatingsexamen',
        labelShort: 'Voorbereiding',
        tagline:
          'Een intensieve en gestructureerde voorbereiding zodat de examendag met vertrouwen wordt aangevat.',
        note: 'Voor het toelatingsexamen arts en tandarts behandel ik de onderdelen wiskunde en fysica.',
        subjects: [
          {
            title: 'Toelatingsexamen burgerlijk ingenieur',
            levels: 'Wiskunde',
            badge: 'BI',
            topics: ['Analyse', 'Algebra', 'Goniometrie', 'Analytische meetkunde', 'Complexe getallen'],
            benefits: [
              'Het officiële examenprogramma volledig doorgenomen',
              'Intensief oefenen op vragen van vorige jaren',
              'Timing en aanpak op de examendag',
              'Ik heb dit examen zelf afgelegd',
            ],
          },
          {
            title: 'Toelatingsexamen arts & tandarts',
            levels: 'Wiskunde & Fysica',
            badge: 'AT',
            topics: ['Wiskunde', 'Fysica', 'Redeneren', 'Vorige examens', 'Timing'],
            benefits: [
              'De onderdelen wiskunde en fysica van de wetenschapskennis',
              'Oefenen in meerkeuzeformaat onder tijdsdruk',
              'Gerichte herhaling van de vastgestelde hiaten',
              'Een studieplanning die we samen opstellen',
            ],
          },
        ],
      },
    ],
  },

  temoignages: {
    eyebrow: 'Wat ze zeggen',
    title: 'Getuigenissen',
    subtitle: 'Het succes van mijn leerlingen spreekt voor zich',
    prevLabel: 'Vorige getuigenis',
    nextLabel: 'Volgende getuigenis',
    dotLabel: 'Ga naar groep {n}',
    authorOverrides: { 'Maman de Guido': 'De mama van Guido' } as Record<string, string>,
    items: [
      {
        text: 'Mijn dochter vond haar lessen goniometrie bij Mathis geweldig; hij beheerst de stof duidelijk en kan zich goed in de leerling verplaatsen. Zijn uitleg is helder en hij herhaalt zonder aarzelen wanneer dat nodig is. We doen zeker opnieuw een beroep op hem.',
        role: 'Ouder – Wiskunde',
      },
      {
        text: 'Heel tevreden. Stipt en vriendelijk. Mijn zoon apprecieerde zijn manier van uitleggen. Een aanrader.',
        role: 'Ouder – Fysica',
      },
      {
        text: 'Mathis is een uitstekende leraar. Heel ernstig en bijzonder ordelijk. Hij bereidt zijn lessen op voorhand voor en geeft oefeningen mee voor de volgende les. Ik beveel hem sterk aan!',
        role: 'Ouder – Fysica',
      },
      {
        text: 'Onze zoon Guido had een herexamen wiskunde na een heel moeilijk jaar. In twee weken tijd (2u per dag) heeft Mathis een volledig jaar herhaald en helder uitgelegd. Guido is geslaagd. Een enorme dankjewel voor zijn werk en zijn geduld!',
        role: 'Ouder – Wiskunde',
      },
      {
        text: 'Mijn zoon volgde lessen wiskunde en fysica bij Mathis om te slagen in zijn tweede zittijd (5e jaar, richting Wiskunde/Wetenschappen). Hij is beschikbaar, beleefd en stipt. Hij bereidt zijn lessen op voorhand voor en is zeer georganiseerd. Mijn zoon is geslaagd voor zijn examens en kan aan zijn laatste jaar beginnen. Ik beveel Mathis aan als privéleraar.',
        role: 'Ouder – Wiskunde & Fysica',
      },
      {
        text: 'Heel goede leraar, efficiënt studeren in een aangename sfeer. Mijn dochter, die grote moeilijkheden had, kreeg opnieuw vertrouwen en slaagde voor haar examen. Een echte aanrader!',
        role: 'Ouder – Wiskunde',
      },
      {
        text: 'Hij heeft me geholpen met mijn examens en me weer op niveau gebracht. Hij legt helder uit en past zich aan je noden aan. Ik raad hem zonder twijfel aan.',
        role: 'Oud-leerling – Wiskunde',
      },
      {
        text: 'Omdat ik zelf hulp van Mathis kreeg bij enkele vakken, kan ik getuigen van zijn vermogen om helder uit te leggen en complexe begrippen toegankelijk te maken, zeker in wiskunde.',
        role: 'Aanbeveling',
      },
      {
        text: 'Mathis heeft wiskunde en wetenschappen altijd toegankelijk weten te maken. Geduldig en pedagogisch helpt hij je begrijpen en verbanden leggen tussen concepten. Ik beveel hem sterk aan.',
        role: 'Aanbeveling',
      },
      {
        text: 'Ik beveel Mathis sterk aan voor bijlessen wiskunde en fysica in het middelbaar. Dankzij zijn heldere uitleg en zijn geduldige aanpak helpt hij leerlingen echt vooruit en geeft hij hun meer zelfvertrouwen.',
        role: 'Aanbeveling',
      },
    ],
  },

  about: {
    eyebrow: 'In enkele vragen',
    title: 'Mij beter leren kennen',
    subtitle: 'Enkele vragen, zodat u weet aan wie u de lessen toevertrouwt',
    credentials: [
      {
        label: 'Opleiding',
        value: 'Master burgerlijk ingenieur',
        detail: 'École Polytechnique de Louvain — UCLouvain',
      },
      {
        label: 'Diploma',
        value: 'Afgestudeerd met de grootste onderscheiding',
        detail: 'Gemiddelde van 17,95/20 over de hele opleiding',
      },
      {
        label: 'Specialisatie',
        value: 'Artificiële intelligentie & datawetenschappen',
        detail: 'Masterproef gepubliceerd op de IEEE Conference on Games 2026',
      },
    ],
    items: [
      {
        q: 'Waar komt uw interesse in wiskunde en in bijlessen vandaan?',
        a: [
          'Wiskunde trok me al heel vroeg aan, maar het echte kantelpunt kwam in het middelbaar, aan het Athénée Royal van Nijvel, in de sterke richting wiskunde-wetenschappen. Daar begreep ik dat wiskunde geen verzameling recepten is die je toepast, **maar een taal**: zodra je ze spreekt, kan je zowat alles beschrijven — de baan van een bal, het gedrag van een algoritme, het risico van een belegging. Die omslag bracht me naar **de studie burgerlijk ingenieur aan de EPL (UCLouvain)**, waar ik vijf jaar lang elke dag wiskunde deed, tot aan de master in AI en datawetenschappen.',
          'Voor de bijlessen is de aanleiding heel precies. In mijn tweede jaar ingenieur worstelde ik ernstig met één vak. Aan de EPL worden de oefenzittingen begeleid door tutoren, en ik trof iemand uitzonderlijks: in enkele sessies liet hij me begrijpen wat weken herlezen niet had losgekregen. Ik slaagde glansrijk voor dat vak, en enkel dankzij hem.',
          'Dat maakte zo’n indruk dat ik het jaar daarop, in mijn derde jaar, zelf anderen begon te helpen. **Een honderdtal leerlingen later**, van het middelbaar tot universitair niveau, geniet ik nog altijd evenveel van het moment waarop iemand de horde neemt waarop hij al maanden vastliep. Ik weet precies hoe het voelt om aan de andere kant te staan.',
        ],
      },
      {
        q: 'Welke onderwerpen geeft u graag — en welke wat minder?',
        a: [
          'In wiskunde voor het middelbaar **dek ik het volledige programma**: analyse (limieten, afgeleiden, integralen, functieonderzoek), algebra, goniometrie, meetkunde, rekenen, kansrekening en statistiek. Ik verzorg ook de voorbereiding op het toelatingsexamen burgerlijk ingenieur — **dat ik zelf heb afgelegd** — en op dat voor arts en tandarts.',
          'Twee domeinen boeien me bijzonder. Eerst de analyse: dat is het moment in het traject waarop wiskunde ophoudt een schoolse oefening te zijn en een werktuig wordt. Een afgeleide is een veranderingssnelheid, en zodra een leerling dat ziet, klaart de helft van de fysicaoefeningen in één klap op.',
          'Daarna de algebra, en die wordt door leerlingen het meest onderschat. Vergelijkingen bewerken, ontbinden in factoren, jongleren met breuken en machten: het is niet het meest spectaculaire hoofdstuk, maar **het is de basis van absoluut alles wat volgt**. Aan de universiteit zijn de wiskundevakken daarop gebouwd — en leerlingen die worstelen met analyse hebben bijna altijd in werkelijkheid een algebraprobleem dat twee jaar eerder niet is opgelost. Het is het hoofdstuk waarin ik het veeleisendst ben, omdat het op lange termijn het meeste opbrengt.',
          'Wat me het minst bevalt, geef ik graag toe: meetkunde. Ik geef ze uiteraard, en goed, maar ze heeft nooit hetzelfde effect op me gehad als de rest. Ik ben ook wantrouwig tegenover hoofdstukken die worden ingestudeerd als lijstjes formules om op te dreunen, typisch bepaalde goniometrische identiteiten: ik neem de tijd om te tonen waar ze vandaan komen (de goniometrische cirkel volstaat om de helft ervan terug te vinden), zodat de leerling ze op de examendag kan heropbouwen in plaats van te hopen dat hij ze zich herinnert.',
        ],
      },
      {
        q: 'Wie zijn uw voorbeelden?',
        a: [
          'Wetenschappelijk gezien is dat het werk van DeepMind rond AlphaGo en daarna AlphaStar: programma’s die de beste spelers ter wereld verslaan in Go, en vervolgens in een realtime strategiespel, dat nog veel complexer is. Wat me fascineerde, is dat er achter die prestaties niets magisch schuilt — enkel wiskunde die leerlingen in het middelbaar al tegenkomen: kansrekening, functies om te optimaliseren, matrixrekenen. Niets anders dan die werktuigen, opgestapeld op zeer grote schaal, volstaat om iets voort te brengen dat op intuïtie lijkt. Dat heeft me georiënteerd naar AI toegepast op spellen, het onderwerp van mijn masterproef, waaruit een artikel is voortgekomen dat aanvaard werd op de internationale IEEE Conference on Games 2026.',
          'Op menselijk vlak noem ik zonder aarzelen François Glineur, professor toegepaste wiskunde aan de EPL. Een uitstekende docent, in de meest concrete zin: hij rolt nooit zomaar een redenering af, hij legt uit waar ze vandaan komt en waarom die weg gekozen is en geen andere. Dat is precies wat ik in bijles probeer te herhalen: **nooit zeggen "het is nu eenmaal zo", altijd uitleggen waarom**.',
        ],
      },
      {
        q: 'Welke eigenschappen maken een goede wiskundeleraar?',
        a: [
          'Drie dingen, in deze volgorde.',
          'Eerst: **kunnen afleren**. Wie een vak beheerst, vergeet hoe ondoorzichtig het in het begin was. Een goede wiskundeleraar kan mentaal terugkeren naar de toestand van een leerling die het niet ziet — en dat is moeilijker dan de stof kennen.',
          'Daarna: **de diagnose**. Een leerling die zijn integratieoefeningen mist, loopt bijna nooit vast op de integratie: hij loopt vast op de afgeleiden, of op het algebraïsch bewerken, twee hoofdstukken eerder. De echte breuk vinden in plaats van het symptoom behandelen, daar wordt het grootste deel van de vooruitgang geboekt.',
          'Tot slot: **rigueur — maar in dienst van de helderheid**. In de ingenieurswetenschappen zoals in de wiskunde is een oplossing die "werkt" zonder dat men weet waarom een tijdbom. Ik sta erop dat een leerling elke regel van zijn blad kan verantwoorden.',
        ],
      },
      {
        q: 'Heeft u een anekdote uit de les?',
        a: [
          'Een leerling uit het vijfde jaar, vastgelopen op de afgeleiden, zei me in de eerste sessie: "ik kan de berekeningen maken, maar ik begrijp niet wat ik bereken". Een klassiek symptoom.',
          'Ik heb de wiskundecursus dichtgeslagen en hem gevraagd te beschrijven wat de snelheidsmeter van een auto doet. Hij antwoordde: "hij geeft de snelheid op het moment dat ik kijk". Perfect. Ik wees hem erop dat je op een rit Brussel–Namen een gemiddelde snelheid kan berekenen — de afstand gedeeld door de tijd — maar dat dit niets zegt over wat er op een precies ogenblik gebeurt. De snelheidsmeter geeft de snelheid nu. En om die te krijgen, moet je het tijdsinterval steeds verder verkleinen, tot het naar nul gaat.',
          'Toen keek hij op: "wacht, dat is de limiet uit de wiskundeles". Precies. Dus: de positie in functie van de tijd is je functie; de snelheidsmeter is de afgeleide ervan; en de versnelling die je in je rug voelt wanneer je optrekt, is de afgeleide van de snelheidsmeter. We zijn samen een fysicaoefening over de rechtlijnige beweging gaan herlezen die hij twee weken eerder had gemist, en **hij maakte ze alleen in vijf minuten**.',
          'Wat hij die dag begreep, gaat veel verder dan het hoofdstuk: **wiskunde en fysica zijn niet twee verschillende vakken** die toevallig in twee aparte mappen zitten. Wiskunde is het werktuig, fysica is wat je ermee beschrijft. Veel leerlingen werken er parallel aan zonder ooit het verband te leggen — en de dag dat het verband er is, worden beide vakken tegelijk merkbaar makkelijker. Precies voor die momenten blijf ik lesgeven.',
        ],
      },
      {
        q: 'Heeft u zelf ooit moeilijkheden gehad op school?',
        a: [
          'Uiteraard, en op twee precieze momenten.',
          'In het vierde jaar middelbaar had ik het bruuske gevoel dat de leerstof enorm werd in vergelijking met de vorige jaren. Achteraf bekeken denk ik dat het probleem minder bij het programma lag dan bij de manier waarop het werd overgebracht: wanneer de uitleg niet volgt, denk je dat de stof onoverkomelijk is geworden. Ik ben er uiteindelijk goed uit gekomen, maar ik heb aan dat jaar een nuttige overtuiging overgehouden: een leerling die "niets begrijpt" **is bijna nooit een beperkte leerling**, het is een leerling aan wie het nog niet op de juiste manier is uitgelegd.',
          'De echte schok kwam later, in het eerste jaar burgerlijk ingenieur, in het eerste kwadrimester. Niet de moeilijkheid van de leerstof op zich, maar de wekelijkse werklast en het verwachte denkniveau, die niets meer te maken hadden met het middelbaar. Mijn manier van werken — die altijd had gewerkt — stortte in enkele weken in. Ik moest alles heropbouwen: plannen, prioriteiten stellen, leren de stof te verwerken in plaats van ze te herlezen. Dat is wellicht het waardevolste dat ik vandaag aan mijn leerlingen doorgeef, zeker aan wie het toelatingsexamen wil halen: **methode telt evenveel als talent**.',
        ],
      },
      {
        q: 'Wat zijn uw passies buiten het lesgeven?',
        a: [
          'Ik ben een grote liefhebber van Lego Technic, en van puzzels in het algemeen. Ik hou ervan urenlang iets te bouwen dat uiteindelijk gewoon als decoratie op een rek belandt. Het traint het geduld, en ik beleef er echt plezier aan.',
          'Verder ben ik gepassioneerd door tech, en vooral door artificiële intelligentie — dat werd mijn specialisatie. Ik volg alles wat in het domein verschijnt op de voet en ik besteed heel wat tijd aan eigen projecten. Ik ben ook een fervent videogamespeler (het is geen toeval dat mijn masterproef over AI in spellen ging), en een grootverbruiker van series en films, die mijn beste manier blijven om er op het einde van de dag volledig uit te stappen.',
        ],
      },
      {
        q: 'Wat onderscheidt u van een andere lesgever?',
        a: [
          'Ik ken het traject van binnenuit. Middelbaar in de sterke richting wiskunde-wetenschappen in Nijvel, het toelatingsexamen ingenieur zelf afgelegd, daarna vijf jaar burgerlijk ingenieur aan de EPL, afgerond met **de grootste onderscheiding (17,95/20)**. En vooral: ik heb het gevoel gekend volledig de weg kwijt te zijn in een vak — bij mij was dat biologie, waar ik echt worstelde. Wanneer een leerling me zegt dat hij het niet meer volgt, kijk ik nooit op hem neer: ik weet precies hoe dat voelt.',
          'Ik laat iets achter. Ik bezorg **herhalingsbundels in pdf**, in twee aparte versies: eerst de opgaven, daarna de uitgewerkte oplossingen. De leerling kan dus tussen twee sessies alleen oefenen en zichzelf verbeteren, zonder op de volgende les te wachten. Het einddoel is, heel eerlijk, **dat hij mij niet meer nodig heeft**.',
          'En dan is er geen afstand. Ik ben 23, ik kom net uit de studies, en ik weet nog heel goed wat een blok, een slecht uitgelegde cursus of een gevreesd examen betekent. Dat verandert veel: mijn leerlingen durven me te zeggen "ik heb er niets van begrepen" zonder schrik voor een oordeel — en dat is eerlijk gezegd de eerste voorwaarde om vooruit te gaan.',
        ],
      },
    ],
  },

  faq: {
    eyebrow: 'Praktische vragen',
    title: 'Veelgestelde vragen',
    subtitle: 'Alles wat u wil weten voor we starten',
    items: [
      {
        q: 'Welke niveaus worden gedekt?',
        a: 'Van het eerste jaar middelbaar tot en met de master. Ik geef les in het middelbaar (wiskunde, fysica, Python), in het hoger onderwijs (wiskunde, algemene fysica, programmeren en artificiële intelligentie), en ik bereid voor op de toelatingsexamens burgerlijk ingenieur en arts en tandarts.',
      },
      {
        q: 'Hoe verloopt de voorbereiding op het toelatingsexamen burgerlijk ingenieur?',
        a: 'We nemen het volledige officiële examenprogramma hoofdstuk per hoofdstuk door en schakelen daarna over op intensief oefenen met vragen van vorige jaren. We werken ook aan timing en antwoordstrategie, wat op de examendag vaak het verschil maakt. Als burgerlijk ingenieur heb ik dit examen zelf afgelegd.',
      },
      {
        q: 'Welke vakken worden behandeld voor het toelatingsexamen arts en tandarts?',
        a: 'Ik behandel de onderdelen wiskunde en fysica van het wetenschappelijke gedeelte. Ik geef geen biologie of chemie: voor die twee vakken heeft u een andere lesgever nodig.',
      },
      {
        q: 'Waar gaan de lessen door?',
        a: 'Bij mij thuis in Gouy-Lez-Piéton (Courcelles), of online. Het online formaat werkt heel goed voor het hoger onderwijs en voor examenvoorbereiding, en laat u toe te werken waar u ook bent.',
      },
      {
        q: 'Kunnen we een intensieve cursus organiseren vóór een examen?',
        a: 'Ja, en dat is vaak het meest doeltreffende formaat vóór een herexamen of een toelatingsexamen. Verschillende leerlingen hebben een volledig jaar herhaald in twee weken, aan twee uur per dag. We stellen de planning samen op in functie van uw examendatum.',
      },
      {
        q: 'Hoe boek ik een eerste les?',
        a: 'Gebruik het aanvraagformulier onderaan de pagina: het bezorgt me meteen het niveau, de vakken en de beschikbaarheden. U kan me ook een bericht sturen via WhatsApp of e-mail. Ik antwoord binnen de 24 uur.',
      },
    ],
  },

  contact: {
    eyebrow: 'Eerste stap',
    title: 'Contacteer me',
    subtitle: 'Klaar om uw resultaten om te gooien? Laten we praten!',
    tabForm: 'Aanvraagformulier',
    tabDirect: 'Rechtstreeks contact',
    tabHint: 'Het aanvraagformulier is het handigst voor een eerste contact',
    smsDesc: 'Geen app nodig',
    whatsappDesc: 'Snel antwoord',
    emailDesc: 'Antwoord binnen 24u',
    directWhatsappText: 'Hallo {nom}, ik zou graag bijles bij u volgen.',
    directSmsText: 'Hallo {nom}, ik zou graag bijles bij u volgen.',
    directEmailSubject: 'Aanvraag bijlessen',
  },

  form: {
    title: 'Lesaanvraag',
    subtitle: 'Vul dit formulier in om me rechtstreeks te contacteren',
    labelName: 'Voornaam van de leerling',
    placeholderName: 'Bv. Camille',
    labelLevel: 'Niveau',
    levels: [
      { id: 'secondaire', label: 'Middelbaar', subjects: ['Wiskunde', 'Fysica', 'Python'] },
      {
        id: 'superieur',
        label: 'Hoger onderwijs',
        subjects: ['Wiskunde', 'Fysica', 'Programmeren', 'AI'],
      },
      {
        id: 'examens',
        label: 'Voorbereiding toelatingsexamen',
        subjects: ['Burgerlijk ingenieur', 'Arts'],
      },
    ],
    labelSubjects: 'Gewenste vak(ken)',
    subjectsHint: 'Meerdere vakken mogelijk',
    labelModalite: 'Lesvorm',
    optHome: 'Bij mij thuis',
    optOnline: 'Online',
    btnContinue: 'Verder',
    btnBack: 'Terug',
    labelCourseType: 'Type les',
    courseRegularTitle: 'Vaste begeleiding',
    courseRegularDesc: 'Om duurzaam vooruit te gaan',
    courseOneoffTitle: 'Eenmalige les',
    courseOneoffDesc: 'Voor gerichte hulp',
    labelReason: 'Reden (optioneel)',
    reasons: ['Belangrijk examen', 'Toets', 'Bijwerken', 'Toelatingsexamen'],
    labelFrequency: 'Gewenste frequentie (optioneel)',
    freqWeek: 'Week',
    freqMonth: 'Maand',
    freqPer: 'per',
    freqHint: 'Laat leeg om de frequentie samen te bespreken',
    labelAvailability: 'Uw beschikbaarheden',
    placeholderAvailability: 'Bv. maandag- en woensdagavond, weekend',
    labelMessage: 'Extra bericht (optioneel)',
    placeholderMessage: 'Bijkomende details...',
    chooseContact: 'Kies uw contactmiddel:',
    msg: {
      greeting: 'Hallo {nom},',
      intro: 'Ik zou graag bijles bij u volgen.',
      student: 'LEERLING',
      level: 'NIVEAU',
      subjects: 'GEWENSTE VAK(KEN)',
      modality: 'LESVORM',
      courseType: 'TYPE LES',
      frequency: 'FREQUENTIE',
      availability: 'BESCHIKBAARHEDEN',
      message: 'BERICHT',
      closing: 'Bedankt voor uw aandacht!',
      modalityHome: 'Bij mij thuis',
      modalityOnline: 'Online',
      courseTypeRegular: 'Vaste begeleiding',
      courseTypeOneoff: 'Eenmalige lessen',
      freqValue: '{n} keer / {period}',
      freqToDiscuss: 'Samen te bespreken',
      periodWeek: 'week',
      periodMonth: 'maand',
      emailSubject: 'Lesaanvraag - {subjects}',
    },
  },

  footer: {
    title: 'Succes begint met een beslissing',
    line1: 'Elke grote reis begint met een eerste stap.',
    line2: 'Uw succes wacht op u.',
    cta: 'Een eerste les aanvragen',
    tagline:
      'Bijlessen wiskunde, fysica en programmeren. Van het middelbaar tot het hoger onderwijs, en voorbereiding op de toelatingsexamens burgerlijk ingenieur en arts.',
    navTitle: 'Ontdekken',
    contactTitle: 'Contact opnemen',
    role: 'Privéleraar in {ville}',
    rights: 'Alle rechten voorbehouden',
  },
}

export const translations = { fr, en, nl }
export type Translation = typeof fr
