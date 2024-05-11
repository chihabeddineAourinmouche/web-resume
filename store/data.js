const data = {
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
			major: "Bachenor in Bio-Technology",
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
			level: "Bilingual"
		},
		{
			id: 2,
			name: "English",
			level: "Bilingual"
		},
		{
			id: 3,
			name: "French",
			level: "Bilingual"
		},
		{
			id: 4,
			name: "Spanish",
			level: "Beginner"
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
			description: "Tutored a student in order to prepare for an exam to access school by coaching her in web application development.",
			skills: ['HTML', 'CSS', 'JavaScript', 'Git'],
		},
		{
			id: 6,
			name: "Standalone Pseudo-Random Terrain Generator",
			description: "As part of a class project, I developed two versions of a standalone terrain generator, one in Java and the other in Python.",
			skills: ['Python3', 'Git'],
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