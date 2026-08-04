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
      ['FAQ', 'faq'],
      ['Contact', 'contact'],
    ] as [string, string][],
    toggleLabel: 'Changer de langue',
  },

  hero: {
    title: { p1: 'Transformer les ', w1: 'difficultés', p2: ' en ', w2: 'réussites' },
    subtitle1: 'Ingénieur civil en Informatique & IA, passionné par l’enseignement.',
    subtitle2:
      'Du secondaire au supérieur, et préparation aux examens d’entrée ingénieur civil et médecine.',
    audienceChips: ['Secondaire', 'Supérieur', 'Prépa examens d’entrée'],
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
    ],
  },

  services: {
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
        label: 'Prépa examens d’entrée',
        labelShort: 'Prépa examens',
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

  faq: {
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
    title: 'Contacte-moi',
    subtitle: 'Prêt à transformer vos résultats ? Parlons-en !',
    tabForm: 'Formulaire de demande',
    tabDirect: 'Contact direct',
    tabHint: 'Le formulaire de demande est à privilégier pour un premier contact',
    whatsappDesc: 'Réponse rapide',
    emailDesc: 'Réponse sous 24h',
    directWhatsappText: 'Bonjour {nom}, je souhaiterais prendre des cours avec vous.',
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
        label: 'Prépa examen d’entrée',
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
    role: 'Professeur particulier à {ville}',
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
      ['FAQ', 'faq'],
      ['Contact', 'contact'],
    ],
    toggleLabel: 'Switch language',
  },

  hero: {
    title: { p1: 'Turn your ', w1: 'struggles', p2: ' into ', w2: 'successes' },
    subtitle1: 'Civil engineer in Computer Science & AI, passionate about teaching.',
    subtitle2:
      'From secondary school to university, plus prep for the engineering and medical entrance exams.',
    audienceChips: ['Secondary', 'Higher education', 'Entrance exam prep'],
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
    ],
  },

  services: {
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
        label: 'Entrance exam prep',
        labelShort: 'Exam prep',
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

  faq: {
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
    title: 'Contact me',
    subtitle: 'Ready to transform your results? Let’s talk!',
    tabForm: 'Request form',
    tabDirect: 'Direct contact',
    tabHint: 'The request form is best for a first contact',
    whatsappDesc: 'Quick reply',
    emailDesc: 'Reply within 24h',
    directWhatsappText: 'Hello {nom}, I would like to take lessons with you.',
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
        label: 'Entrance exam prep',
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
    role: 'Private tutor in {ville}',
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
      ['FAQ', 'faq'],
      ['Contact', 'contact'],
    ],
    toggleLabel: 'Taal wijzigen',
  },

  hero: {
    title: { p1: '', w1: 'Moeilijkheden', p2: ' omzetten in ', w2: 'successen' },
    subtitle1: 'Burgerlijk ingenieur in Computerwetenschappen & AI, met een passie voor lesgeven.',
    subtitle2:
      'Van het middelbaar tot het hoger onderwijs, en voorbereiding op de toelatingsexamens burgerlijk ingenieur en arts.',
    audienceChips: ['Middelbaar', 'Hoger onderwijs', 'Voorbereiding toelatingsexamen'],
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
    ],
  },

  services: {
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
        labelShort: 'Toelating',
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

  faq: {
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
    title: 'Contacteer me',
    subtitle: 'Klaar om uw resultaten om te gooien? Laten we praten!',
    tabForm: 'Aanvraagformulier',
    tabDirect: 'Rechtstreeks contact',
    tabHint: 'Het aanvraagformulier is het handigst voor een eerste contact',
    whatsappDesc: 'Snel antwoord',
    emailDesc: 'Antwoord binnen 24u',
    directWhatsappText: 'Hallo {nom}, ik zou graag bijles bij u volgen.',
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
        label: 'Toelatingsexamen',
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
    role: 'Privéleraar in {ville}',
  },
}

export const translations = { fr, en, nl }
export type Translation = typeof fr
