const dataEN = {
	id: 1,
	address: {
		id: 1,
		street: "",
		city: "Nice",
		state: "Côte d'Azur",
		country: "France",
		postal_code: "06000"
	},
	educationUnits: [
		{
			id: 1,
			endYear: 2021,
			school: "Université Côte d'Azur",
			major: "Master in Computer Science",
			description: "On top of having specialized in Semantic Web and Web Development, I studied techniques of Scientific Research that I applied in various projects thoughout the degree.",
		},
		{
			id: 2,
			endYear: 2018,
			school: "Université de Caen Normandie",
			major: "Bachelor in Computer Science",
			description: "Within the first 2 years, I studied general topics in Computer Science, and within the third year, I leaned more towards Software Development and Algorithmics.",
		},
		{
			id: 3,
			endYear: 2014,
			school: "École des Hautes Études de Biotechnologie, Casablanca, Maroc",
			major: "Bachelor in Bio-Technology",
			description: "Interested by Biology and Technology, I studied Bio-Technology where I was introduced to concepts in Biology, Health, and Computer Science.",
		},
		{
			id: 4,
			endYear: 2011,
			school: "Lycée le Pont, Casablanca, Maroc",
			major: "Science",
			description: "I studied highschool science in a French-speaking institution which solidified my French, preparing me thus for joining University abroad.",
		},
	],
	experienceUnits: [
		{
			id: 1,
			startYear: 2023,
			endYear: 2024,
			company: "Schneider Electric",
			jobTitle: "Full-Stack Software Engineer",
			description: "I was introduced to an EdgeX-Foundry based solution on which I worked as part of a team of roughly 20 members, which is, on its turn, part of an international ecosystem."
		},
		{
			id: 2,
			startYear: 2022,
			endYear: 2023,
			company: "Schneider Electric",
			jobTitle: "SAP/Full-Stack Software Engineer",
			description: "As part of a small team, I implemented a solution integrating SAP solutions into an Edge Computing application. I must note that our solution received particular cheering from the head of Industrial Automation."
		},
		{
			id: 3,
			startYear: 2021,
			endYear: 2022,
			company: "Color Grail Research",
			jobTitle: "IOS Developer & Full-Stack Software Engineer",
			description: "I joined a startup working on a Web and Mobile solution to improve Spectro-Photo-Metry in various industries. My contribution covered Scientific Research, Algorithm Implementation, and Infrastructure Setup. The industrialization of the test-infrastructure helped automate manual processes, thus adding more security and speed to the process of software and hardware testing."
		},
		{
			id: 3,
			startYear: 2021,
			endYear: 2021,
			company: "SAP France",
			jobTitle: "SAP & Web Developer Intern",
			description: "As part of an immediate team of 8 members and a much larger global team, I participated in developing new components for one of the services within the SAP Cloud ALM ecosystem."
		},
		{
			id: 4,
			startYear: 2020,
			endYear: 2020,
			company: "I3S Sophia Antipolis, France",
			jobTitle: "Research and Development Intern",
			description: "What started as a class project lead to an intern position at I3S where I worked on an IoT project aiming to provide IoT applications with Knowledge-base based tool of conflict detection."
		},
		{
			id: 5,
			startYear: 2018,
			endYear: 2018,
			company: "WafaImmobilier, Casablanca",
			jobTitle: "Backend Web Java Developer",
			description: "As part of a 5-member team, I worked on adding new features to a application aiming to categorize banking customers according to their loan payment habits and behaviors."
		},
		{
			id: 6,
			startYear: 2018,
			endYear: 2018,
			company: "Pharmacie HAMZI, Casablanca",
			jobTitle: "Freelance Android Developer",
			description: "As a side hustle, I worked with a pharmacist to provide a tailored mobile solution allowing management of the pharmacy's finances."
		},
	],
	languages: [
		{
			id: 1,
			name: "Arabic",
			level: "Bilingual",
			levelName: "Bilingual"
		},
		{
			id: 2,
			name: "English",
			level: "Bilingual",
			levelName: "Bilingual"
		},
		{
			id: 3,
			name: "French",
			level: "Bilingual",
			levelName: "Bilingual"
		},
		{
			id: 4,
			name: "Spanish",
			level: "Beginner",
			levelName: "Beginner"
		},
	],
	projects: [
		{
			id: 1,
			name: "Web Resume",
			description: "Developing a web application 'Web Resume' allowing users to create dynamic, interactive resumes with multimedia elements. This solution aims to Increase user engagement through embedded videos and skills visualizations. Work in progress...",
			skills: ['Python3', 'Django', 'TypeScript', 'Vue3', 'Git', 'Docker', 'Bash'],
		},
		{
			id: 2,
			name: "BabelJS",
			description: "I participated in a video game development contest created by Microsoft featuring their Web based 3D Rendering Technology Babylon.JS. As part of a 3-student team, we managed to enter the contest with a video game that gathered most of the aspect of an intreging video game. We managed to win the prize of the best graphics (For the second time in a row.)",
			skills: ['JavaScript', 'Babylon.js', 'Blender', 'Photoshop'],
		},
		{
			id: 3,
			name: "Viridis",
			description: "As part of a 3-student team, we participated in a video game contest where we won the prize of best graphics. The game was developed using the platform Pico8.",
			skills: ['Pico 8', 'LUA'],
		},
		{
			id: 4,
			name: "Robot",
			description: "A maze solving robot developed using Arduino.",
			skills: ['Arduino', 'C++', 'Git'],
		},
		{
			id: 5,
			name: "Web Development Tutoring",
			description: "Tutored a student in order to prepare for an exam to access school by coaching her in web application development. The student passed the exam and managed to join the school.",
			skills: ['HTML', 'CSS', 'JavaScript', 'Git'],
		},
		{
			id: 6,
			name: "Standalone Pseudo-Random Terrain Generator",
			description: "As part of a class project, I developed two versions of a standalone terrain generator, one in Java and the other in Python.",
			skills: ['Python3', 'Java', 'Git'],
		},
		{
			id: 7,
			name: "Scientific Study - Graph Theory",
			description: "As part of a class project, in a team of three student, we produced a study document about the use of graph theory in solving problems such as mazes. We developed a python application that generates a maze and its solution in order to demonstrate our case.",
			skills: ['Python', 'Git'],
		},
		{
			id: 8,
			name: "AI-powered Sokoban",
			description: "As part of a class project, I developed the Sokoban ai-powered game. The AI solution aimed to create an automatic solver of the game.",
			skills: ['OOP', 'Python', 'Java', 'PyGame', 'Git', 'A-Star'],
		}
	],
	skills: [
		{
			id: 1,
			name: "JavaScript",
			category: "Programming Language",
			level: "4.0"
		},
		{
			id: 2,
			name: "TypeScript",
			category: "Programming Language",
			level: "4.0"
		},
		{
			id: 3,
			name: "Java",
			category: "Programming Language",
			level: "4.0"
		},
		{
			id: 4,
			name: "Python3",
			category: "Programming Language",
			level: "4.0"
		},
		{
			id: 5,
			name: "C++",
			category: "Programming Language",
			level: "4.0"
		},
		{
			id: 6,
			name: "Go",
			category: "Programming Language",
			level: "4.0"
		},
		{
			id: 7,
			name: "Bash",
			category: "Programming Language",
			level: "4.0"
		},
		{
			id: 8,
			name: "Obj-C",
			category: "Programming Language",
			level: "4.0"
		},
		{
			id: 9,
			name: "PHP",
			category: "Programming Language",
			level: "4.0"
		},
		{
			id: 10,
			name: "LUA",
			category: "Programming Language",
			level: "4.0"
		},
		{
			id: 11,
			name: "ReactJS",
			category: "Web Framework",
			level: "4.0"
		},
		{
			id: 12,
			name: "Spring Boot",
			category: "Web Framework",
			level: "4.0"
		},
		{
			id: 13,
			name: "NodeJS",
			category: "Web Framework",
			level: "4.0"
		},
		{
			id: 14,
			name: "JUnit",
			category: "Unit Testing Framework",
			level: "4.0"
		},
		{
			id: 15,
			name: "Cucumber",
			category: "Behavior-Driven Testing Framework",
			level: "4.0"
		},
		{
			id: 16,
			name: "SQL",
			category: "Relational Query Language",
			level: "4.0"
		},
		{
			id: 17,
			name: "NoSQL",
			category: "Non-Relational Query Language",
			level: "4.0"
		},
		{
			id: 18,
			name: "REST API",
			category: "Software Architecture",
			level: "4.0"
		},
		{
			id: 19,
			name: "DevOps",
			category: "Method",
			level: "4.0"
		},
		{
			id: 20,
			name: "SAPUI5",
			category: "Web Framework",
			level: "2.5"
		},
		{
			id: 21,
			name: "Mockito",
			category: "Testing Framework",
			level: "2.5"
		},
		{
			id: 22,
			name: "SAP Cloud ALM",
			category: "Tool",
			level: "2.0"
		},
		{
			id: 23,
			name: "UML",
			category: "Modelling Language",
			level: "4.5"
		},
		{
			id: 24,
			name: "OOP",
			category: "Software Conception Paradigm",
			level: "4.5"
		},
		{
			id: 25,
			name: "Design Patterns",
			category: "Software Conception Paradigm",
			level: "4.5"
		},
		{
			id: 26,
			name: "Agile",
			category: "Method",
			level: "4.5"
		},
		{
			id: 27,
			name: "SAFe",
			category: "Method",
			level: "4.5"
		},
		{
			id: 28,
			name: "CSS",
			category: "Style Sheet Language",
			level: "4.5"
		},
	],
	title: "Software Engineer @ AVISTO Telecom",
	about: "In summary, I'm a keen Web Engineer and Game Designer (Developer) with a particular interest in RESTful APIs. I'd spend 6 hours creating a script to automate a 15-minute process that will occur 24 times.",
	userName: "caoury",
	firstName: "Chihabeddine",
	lastName: "AOURINMOUCHE",
	emailAddress: "chihab2007@gmail.com",
	image: "./assets/profile_picture.jpg"
}

const dataFR = {
	id: 1,
	address: {
		id: 1,
		street: "",
		city: "Nice",
		state: "Côte d'Azur",
		country: "France",
		postal_code: "06000"
	},
	educationUnits: [
		{
		  id: 1,
		  endYear: 2021,
		  school: "Université Côte d'Azur",
		  major: "Master en Informatique",
		  description: "En plus de m'être spécialisé dans le Web sémantique et le développement Web, j'ai étudié des techniques de recherche scientifique que j'ai appliquées dans divers projets tout au long du diplôme."
		},
		{
		  id: 2,
		  endYear: 2018,
		  school: "Université de Caen Normandie",
		  major: "Licence en Informatique",
		  description: "Au cours des 2 premières années, j'ai étudié des sujets généraux en informatique, et au cours de la troisième année, je me suis davantage orienté vers le développement logiciel et l'algorithmique."
		},
		{
		  id: 3,
		  endYear: 2014,
		  school: "École des Hautes Études de Biotechnologie, Casablanca, Maroc",
		  major: "Licence en Biotechnologie",
		  description: "Intéressé par la biologie et la technologie, j'ai étudié la biotechnologie où j'ai été initié aux concepts de biologie, de santé et d'informatique."
		},
		{
		  id: 4,
		  endYear: 2011,
		  school: "Lycée le Pont, Casablanca, Maroc",
		  major: "Sciences",
		  description: "J'ai étudié les sciences du secondaire dans un établissement francophone qui a solidifié mon français, me préparant ainsi à intégrer une université à l'étranger."
		}
	  ],
	experienceUnits: [
		{
		  id: 1,
		  startYear: 2023,
		  endYear: 2024,
		  company: "Schneider Electric",
		  jobTitle: "Ingénieur logiciel Full-Stack",
		  description: "J'ai été initié à une solution basée sur EdgeX-Foundry sur laquelle j'ai travaillé au sein d'une équipe d'environ 20 personnes, qui fait elle-même partie d'un écosystème international.",
		},
		{
		  id: 2,
		  startYear: 2022,
		  endYear: 2023,
		  company: "Schneider Electric",
		  jobTitle: "Ingénieur logiciel SAP/Full-Stack",
		  description: "Au sein d'une petite équipe, j'ai implémenté une solution intégrant des solutions SAP dans une application Edge Computing. Je tiens à souligner que notre solution a été particulièrement saluée par le responsable de l'automatisation industrielle.",
		},
		{
		  id: 3,
		  startYear: 2021,
		  endYear: 2022,
		  company: "Color Grail Research",
		  jobTitle: "Développeur iOS et ingénieur logiciel Full-Stack",
		  description: "J'ai rejoint une startup travaillant sur une solution Web et Mobile pour améliorer la spectrophotométrie dans divers secteurs. Ma contribution a porté sur la recherche scientifique, l'implémentation d'algorithmes et la mise en place de l'infrastructure. L'industrialisation de l'infrastructure de test a permis d'automatiser les processus manuels, ajoutant ainsi plus de sécurité et de rapidité au processus de test des logiciels et du matériel.",
		},
		{
		  id: 3,
		  startYear: 2021,
		  endYear: 2021,
		  company: "SAP France",
		  jobTitle: "Stagiaire développeur SAP et Web",
		  description: "Au sein d'une équipe immédiate de 8 personnes et d'une équipe mondiale beaucoup plus large, j'ai participé au développement de nouveaux composants pour l'un des services de l'écosystème SAP Cloud ALM.",
		},
		{
		  id: 4,
		  startYear: 2020,
		  endYear: 2020,
		  company: "I3S Sophia Antipolis, France",
		  jobTitle: "Stagiaire en recherche et développement",
		  description: "Ce qui a commencé par un projet de classe a conduit à un stage chez I3S où j'ai travaillé sur un projet IoT visant à doter les applications IoT d'un outil de détection de conflits basé sur une base de connaissances.",
		},
		{
		  id: 5,
		  startYear: 2018,
		  endYear: 2018,
		  company: "WafaImmobilier, Casablanca",
		  jobTitle: "Développeur web back-end Java",
		  description: "Au sein d'une équipe de 5 personnes, j'ai travaillé sur l'ajout de nouvelles fonctionnalités à une application visant à catégoriser les clients bancaires en fonction de leurs habitudes et comportements de paiement de prêts.",
		},
		{
		  id: 6,
		  startYear: 2018,
		  endYear: 2018,
		  company: "Pharmacie HAMZI, Casablanca",
		  jobTitle: "Développeur Android indépendant",
		  description: "En tant que freelance, j'ai travaillé avec un pharmacien pour fournir une solution mobile sur mesure permettant la gestion des finances de la pharmacie.",
		},
	  ],
	languages: [
		{
			id: 1,
			name: "Arabe",
			level: "Bilingual",
			levelName: "Bilingue"
		},
		{
			id: 2,
			name: "Anglais",
			level: "Bilingual",
			levelName: "Bilingue"
		},
		{
			id: 3,
			name: "Français",
			level: "Bilingual",
			levelName: "Bilingue"
		},
		{
			id: 4,
			name: "Espagnol",
			level: "Beginner",
			levelName: "Débutant"
		},
	],
	projects: [
		{
			id: 1,
			name: "CV Web",
			description: "Développement d'une application web 'CV Web' permettant aux utilisateurs de créer des CV dynamiques et interactifs avec des éléments multimédia. Cette solution vise à augmenter l'engagement des utilisateurs grâce à des vidéos intégrées et des visualisations de compétences. Travail en cours...",
			skills: ['Python3', 'Django', 'TypeScript', 'Vue3', 'Git', 'Docker', 'Bash'],
		},
		{
			id: 2,
			name: "BabelJS",
			description: "J'ai participé à un concours de développement de jeux vidéo créé par Microsoft mettant en vedette leur technologie de rendu 3D basée sur le Web Babylon.JS. En tant que membre d'une équipe de 3 étudiants, nous avons réussi à participer au concours avec un jeu vidéo qui rassemblait la plupart des aspects d'un jeu vidéo intrigant. Nous avons réussi à remporter le prix des meilleurs graphismes (pour la deuxième fois consécutive).",
			skills: ['JavaScript', 'Babylon.js', 'Blender', 'Photoshop'],
		},
		{
			id: 3,
			name: "Viridis",
			description: "En tant que membre d'une équipe de 3 étudiants, nous avons participé à un concours de jeux vidéo où nous avons remporté le prix des meilleurs graphismes. Le jeu a été développé en utilisant la plateforme Pico8.",
			skills: ['Pico 8', 'LUA'],
		},
		{
			id: 4,
			name: "Robot",
			description: "Un robot solveur de labyrinthe développé avec Arduino.",
			skills: ['Arduino', 'C++', 'Git'],
		},
		{
			id: 5,
			name: "Tutorat en développement web",
			description: "J'ai encadré une étudiante afin de la préparer à un examen d'entrée dans une école en lui enseignant le développement d'applications web. L'étudiante a réussi le concours et a pu rejoindre l'école.",
			skills: ['HTML', 'CSS', 'JavaScript', 'Git'],
		},
		{
			id: 6,
			name: "Générateur de terrain pseudo-aléatoire autonome",
			description: "Dans le cadre d'un projet de classe, j'ai développé deux versions d'un générateur de terrain autonome, une en Java et l'autre en Python.",
			skills: ['Python3', 'Java', 'Git'],
		},
		{
			id: 7,
			name: "Étude scientifique - Théorie des graphes",
			description: "Dans le cadre d'un projet de classe, en équipe de trois étudiants, nous avons réalisé un document d'étude sur l'utilisation de la théorie des graphes pour résoudre des problèmes tels que les labyrinthes. Nous avons développé une application Python qui génère un labyrinthe et sa solution afin de démontrer notre propos.",
			skills: ['Python', 'Git'],
		},
		{
			id: 8,
			name: "Sokoban à base d'IA",
			description: "Dans le cadre d'un projet de classe, j'ai développé le jeu Sokoban à base d'IA. La solution d'IA visait à créer un solveur automatique du jeu.",
			skills: ['POO', 'Python', 'Java', 'PyGame', 'Git', 'A-Star'],
		},
	],
	skills: [
		{
			id: 1,
			name: "JavaScript",
			category: "Langage de programmation",
			level: "4.0",
		},
		{
			id: 2,
			name: "TypeScript",
			category: "Langage de programmation",
			level: "4.0",
		},
		{
			id: 3,
			name: "Java",
			category: "Langage de programmation",
			level: "4.0",
		},
		{
			id: 4,
			name: "Python 3",
			category: "Langage de programmation",
			level: "4.0",
		},
		{
			id: 5,
			name: "C++",
			category: "Langage de programmation",
			level: "4.0",
		},
		{
			id: 6,
			name: "Go",
			category: "Langage de programmation",
			level: "4.0",
		},
		{
			id: 7,
			name: "Bash",
			category: "Langage de programmation",
			level: "4.0",
		},
		{
			id: 8,
			name: "Obj-C",
			category: "Langage de programmation",
			level: "4.0",
		},
		{
			id: 9,
			name: "PHP",
			category: "Langage de programmation",
			level: "4.0",
		},
		{
			id: 10,
			name: "LUA",
			category: "Langage de programmation",
			level: "4.0",
		},
		{
			id: 11,
			name: "ReactJS",
			category: "Framework web",
			level: "4.0",
		},
		{
			id: 12,
			name: "Spring Boot",
			category: "Framework web",
			level: "4.0",
		},
		{
			id: 13,
			name: "NodeJS",
			category: "Framework web",
			level: "4.0",
		},
		{
			id: 14,
			name: "JUnit",
			category: "Framework de test unitaire",
			level: "4.0",
		},
		{
			id: 15,
			name: "Cucumber",
			category: "Framework de test BDD (Behavior Driven Development)",
			level: "4.0",
		},
		{
			id: 16,
			name: "SQL",
			category: "Langage de requêtes relationnelles",
			level: "4.0",
		},
		{
			id: 17,
			name: "NoSQL",
			category: "Langage de requêtes non relationnelles",
			level: "4.0",
		},
		{
			id: 18,
			name: "API REST",
			category: "Architecture logicielle",
			level: "4.0",
		},
		{
			id: 19,
			name: "DevOps",
			category: "Méthode",
			level: "4.0",
		},
		{
			id: 20,
			name: "SAPUI5",
			category: "Framework web",
			level: "2.5",
		},
		{
			id: 21,
			name: "Mockito",
			category: "Framework de test",
			level: "2.5",
		},
		{
			id: 22,
			name: "SAP Cloud ALM",
			category: "Outil",
			level: "2.0",
		},
		{
			id: 23,
			name: "UML",
			category: "Langage de modélisation",
			level: "4.5",
		},
		{
			id: 24,
			name: "POO",
			category: "Paradigme de Conception Logicielle",
			level: "4.5",
		},
		{
			id: 25,
			name: "Patrons de Conception",
			category: "Paradigme de Conception Logicielle",
			level: "4.5",
		},
		{
			id: 26,
			name: "Agile",
			category: "Méthode",
			level: "4.5",
		},
		{
			id: 27,
			name: "SAFe",
			category: "Méthode",
			level: "4.5",
		},
		{
			id: 28,
			name: "CSS",
			category: "Langage de Feuilles de Style",
			level: "4.5",
		}
	],
	title: "Ingénieur logiciel @ AVISTO Telecom",
	about: "En résumé, je suis un ingénieur web et un concepteur de jeux (développeur) passionné, avec un intérêt particulier pour les API REST. Je suis du genre à passer 6 heures à créer un script pour automatiser un processus de 15 minutes qui se répète 24 fois.",
	userName: "caoury",
	firstName: "Chihabeddine",
	lastName: "AOURINMOUCHE",
	emailAddress: "chihab2007@gmail.com",
	image: "./assets/profile_picture.jpg"
}

const config = {
	theme: {
		primaryColor: "#EFEFEF",
		secondaryColor: "#b35949",
		tertiaryColor: "#d6c6c3",
		backgroundIcons: [
			/*
			  - EMPTY THE LIST IF YOU WOULD PREFER NOT
			    HAVING BACKGROUND ICONS.
			  - OTHERSWISE, BROWSE https://fontawesome.com/icons/
			    FOR ICONS YOU COULD USE.
			*/
			'fa-solid fa-cloud',
			'fa-solid fa-terminal',
			'fa-solid fa-code',
			'fa-solid fa-code-compare',
			'fa-solid fa-code-branch',
			'fa-solid fa-language',
			'fa-solid fa-sitemap',
			'fa-solid fa-gamepad',
			'fa-solid fa-database',
			'fa-brands fa-java',
			'fa-brands fa-js',
			'fa-brands fa-golang',
			'fa-brands fa-python',
			'fa-brands fa-html5',
			'fa-brands fa-css3-alt',
			'fa-brands fa-android',
			'fa-brands fa-docker',
			'fa-brands fa-firefox-browser',
		],
	},
}

const uiIt = {
	en: {
		about: 'About',
		skills: 'Skills',
		contact: 'Contact',
		languages: 'Languages',
		education: 'Education',
		experience: 'Professional Experience',
		projects: 'Projects',
	},
	fr: {
		about: 'À Propos',
		skills: 'Compétences',
		contact: 'Contact',
		languages: 'Langues',
		education: 'Formation',
		experience: 'Experience Professionnelle',
		projects: 'Projets Réalisés',
	}
}

const getData = () => {
	language = localStorageManager.get('language') || 'en'
	return {
		ui: uiIt[language],
		...config,
		...{
			en: dataEN,
			fr: dataFR,
		}[language]
	}
}