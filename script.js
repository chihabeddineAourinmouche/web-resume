const create = (type, parent = null, classNames = [], id = '', style = {}, events = [], attrs = {}) => {
	const element = document.createElement(type)
	if (classNames.length) classNames.forEach(className => element.classList.add(className))
	if (id !== '') element.id = id
	Object.keys(style).forEach(key => element.style[key] = style[key])
	events.forEach(e => {
		element.addEventListener(e.name, e.handler)
	})
	Object.keys(attrs).forEach(key => element[key] = attrs[key])
	if (parent != null) parent.appendChild(element)
	return element
}

const Header = (data) => {
	const element = create('d', parent = null, [], id = 'resume-header', style = {
		backgroundColor: '#fff',
		width: '700px',
		minWidth: '500px',
		borderRadius: '100px 15px 15px 100px',
		boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
		padding: '20px',
		display: 'flex',
		justifyContent: 'space-between',
		gap: '50px',
		fontFamily: 'Century Gothic',
	})

	create('img', parent = element, [], id = 'profile-picture', style = {
		height: '150px',
		borderRadius: '50%',
		border: '10px solid #b35949',
	}, events = [], attrs = { src: data.image })

	const textContainer = create('div', parent = element, [], id = 'fullname-title-container', style = {
		paddingTop: '20px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		flexGrow: '1',
		textAlign: 'left',
	})

	create('h2', parent = textContainer, [], id = 'fullname', style = {
		fontSize: '1.7rem',
		color: '#b35949',
	}, events = [], attrs = {
		textContent: `${data.firstName} ${data.lastName}`,
	})

	create('h3', parent = textContainer, [], id = 'fullname', style = {
		fontWeight: '500',
	}, events = [], attrs = {
		textContent: data.title,
	})

	return element;
}

const SectionTitle = (title, parent = null, target = '') => {
	const getRandomInt = (max) => Math.floor(Math.random() * max)
	const getRandomZeroOneTwo = () => getRandomInt(3)

	const randomPosition = getRandomZeroOneTwo()

	const element = create('a', parent, [], `section-title-${target}`, {
		width: '700px',
		minWidth: '500px',
		marginTop: '20px',
		fontFamily: 'Century Gothic',
		color: '#b35949',
		textAlign: randomPosition < 1 ? 'left' : randomPosition < 2 ? 'center' : 'right',
		padding: '0px 50px',
		textDecoration: 'none',
		outline: 'none',
		fontSize: '1.3em',
		fontWeight: 'bold',
		cursor: 'pointer',
	}, [
		{
			name: 'mouseover',
			handler: e => {
				element.style.textDecoration = 'underline'
			}
		},
		{
			name: 'mouseout',
			handler: e => {
				element.style.textDecoration = 'none'
			}
		}
	], {
		href: `#section-title-${target}`,
		textContent: title,
	})

	return element
}

const Contact = (data) => {
	const element = create('div', parent = null, [], id = 'resume-contact', style = {
		backgroundColor: '#fff',
		borderRadius: '15px',
		boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
		display: 'flex',
		flexDirection: 'column',
		gap: '15px',
		fontFamily: 'Century Gothic',
		padding: '10px',
		maxWidth: '300px',
	})

	const address = create('div', parent = element, [], id = 'address', {
		display: 'flex',
		gap: '10px',
		userSelect: 'text',
	})

	create('i', address, 'fa fa-map-marker'.split(' '), '', {
		display: 'flex',
		alignItems: 'center',
	}, [], {})

	create('a', address, [], '', {
		color: 'inherit',
		userSelect: 'inherit',
		cursor: 'pointer',
	}, [], {
		textContent: `${data.address.street} - ${data.address.city} ${data.address.postal_code}, ${data.address.state}, ${data.address.country}`,
		href: `https://www.google.com/maps/place/${data.address.street} - ${data.address.city} ${data.address.postal_code}, ${data.address.state}, ${data.address.country}`,
		target: '_blank',
	})

	const email = create('div', parent = element, [], id = 'emailAddress', {
		display: 'flex',
		gap: '10px',
		userSelect: 'text',
	})

	create('i', email, 'fa fa-envelope-square'.split(' '), '', {
		display: 'flex',
		alignItems: 'center',
	}, [], {})

	create('a', email, [], '', {
		color: 'inherit',
		userSelect: 'inherit',
		cursor: 'pointer',
	}, [], {
		textContent: data.emailAddress,
		href: `mailto:${data.emailAddress}`,
	})

	return element
}

const Language = (data) => {
	const element = create('div', parent = null, [], id = data.name, style = {
		display: 'flex',
		justifyContent: 'flex-end',
		gap: '5px',
	})

	create('span', parent = element, [], id = `language-${data.name}-proficiency`, style = {
		color: {
			'beginner': '#cc9670', 'intermediate': '#b5cc70',
			'proficient': '#70adcc', 'bilingual': '#78cc70',
		}[data.level.toLowerCase()],
		fontSize: '.8em',
		fontWeight: 'bold',
		textAlign: 'right',
		display: 'flex',
		alignItems: 'center',
	}, evenets = [], attrs = {
		textContent: data.level,
	})

	create('span', parent = element, [], id = `language-${data.name}-name`, style = {
		textAlign: 'left',
	}, evenets = [], attrs = {
		textContent: data.name,
	})

	return element
}

const Languages = (data) => {
	const element = create('ul', parent = null, [], id = 'resume-languages', style = {
		backgroundColor: '#fff',
		borderRadius: '15px',
		boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
		display: 'flex',
		flexDirection: 'column',
		gap: '5px',
		fontFamily: 'Century Gothic',
		padding: '10px',
		textDecoration: 'none',
	})

	data.languages.forEach(l => element.appendChild(Language(l)))

	return element
}

const ContactLanguages = (data, id) => {
	const element = create('div', parent = null, [], id, style = {
		width: '700px',
		minWidth: '500px',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		gap: '20px',
		fontFamily: 'Century Gothic',
	})

	element.appendChild(Contact(data))
	element.appendChild(Languages(data))

	return element
}

const About = (data, id) => {
	return create('p', parent = null, [], id, style = {
		backgroundColor: '#fff',
		width: '700px',
		minWidth: '500px',
		borderRadius: '15px',
		boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
		padding: '20px 100px',
		fontFamily: 'Century Gothic',
		textAlign: 'center',
	}, events = [], attrs = {
		textContent: data.about,
	})
}

const EducationUnit = (data) => {
	const element = create('div', null, [], id = `education-unit${data.id}`, style = {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		fontFamily: 'Century Gothic',
		listStyleType: 'none',
	})

	create('h3', element, [], id = `education-unit-title`, style = {
		fontWeight: '500',
	}, [], {
		textContent: `${data.startYear}-${data.endYear}, ${data.major} at ${data.school}`,
	})

	create('p', element, [], id = `education-unit-description`, style = {}, [], {
		textContent: data.description,
	})

	return element
}

const EducationUnits = (data, id) => {
	const element = create('ul', null, [], id, style = {
		backgroundColor: '#fff',
		width: '700px',
		minWidth: '500px',
		borderRadius: '15px',
		boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
		padding: '20px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		gap: '20px',
	})

	data.educationUnits.forEach(u => {
		element.appendChild(EducationUnit(u))
	})

	return element
}

const ExperienceUnit = (data) => {
	const element = create('div', null, [], id = `experience-unit${data.id}`, style = {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		fontFamily: 'Century Gothic',
		listStyleType: 'none',
	})

	create('h3', element, [], id = `experience-unit-title`, style = {
		fontWeight: '500',
	}, [], {
		textContent: `${data.startYear}-${data.endYear}, ${data.jobTitle} at ${data.company}`,
	})

	create('p', element, [], id = `experience-unit-description`, style = {}, [], {
		textContent: data.description,
	})

	return element
}

const ExperienceUnits = (data, id) => {
	const element = create('ul', null, [], id, style = {
		backgroundColor: '#fff',
		width: '700px',
		minWidth: '500px',
		borderRadius: '15px',
		boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
		padding: '20px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		gap: '20px',
	})

	data.experienceUnits.forEach(u => {
		element.appendChild(ExperienceUnit(u))
	})

	return element
}

const Project = (data) => {
	const element = create('div', null, [], id = `project-${data.id}`, style = {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		fontFamily: 'Century Gothic',
		listStyleType: 'none',
	})

	create('h3', element, [], id = `project-title`, style = {
		fontWeight: '500',
	}, [], {
		textContent: data.name,
	})

	create('p', element, [], id = `project-description`, style = {}, [], {
		textContent: data.description,
	})

	return element
}

const Projects = (data, id) => {
	const element = create('ul', null, [], id, style = {
		backgroundColor: '#fff',
		width: '700px',
		minWidth: '500px',
		borderRadius: '15px',
		boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
		padding: '20px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		gap: '20px',
	})

	data.projects.forEach(p => {
		element.appendChild(Project(p))
	})

	return element
}

const Skill = (data) => {
	const starrify = (r) => {
		const rating = parseFloat(r)
		const fullStars = Math.floor(rating)
		const halfStar = rating % 1 === 0.5
		const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)
		let stars = []
		for (let i = 0; i < fullStars; i++) stars.push('fa fa-star')
		if (halfStar) stars.push('fa fa-star-half-empty')
		for (let i = 0; i < emptyStars; i++) stars.push('fa fa-star-o')
		return stars
	}

	const element = create('div', parent = null, [], id = `skill-${data.name}`, style = {
		display: 'flex',
		justifyContent: 'flex-end',
		gap: '5px',
	})

	const ratingContainer = create('span', parent = element, [], id = `skill-${data.name}-level`, style = {
		color: {
			'0.5': '#bd3a3a', '1.0': '#bd3a3a',
			'1.5': '#cc9670', '2.0': '#cc9670',
			'2.5': '#b5cc70', '3.0': '#b5cc70',
			'3.5': '#70adcc', '4.0': '#70adcc',
			'4.5': '#78cc70', '5.0': '#78cc70',
		}[data.level],
		fontSize: '.8em',
		fontWeight: 'bold',
		textAlign: 'right',
		display: 'flex',
		alignItems: 'center',
	}, evenets = [], attrs = {})

	starrify(data.level).forEach(s => create('i', ratingContainer, s.split(' '), '', {}, [], {}))

	create('span', parent = element, [], id = `skill-${data.name}-name`, style = {
		textAlign: 'left',
		fontWeight: 'bold',
	}, evenets = [], attrs = {
		textContent: data.name,
	})

	create('span', parent = element, [], id = `skill-${data.name}-name`, style = {
		textAlign: 'left',
	}, evenets = [], attrs = {
		textContent: `( ${data.category} )`,
	})

	return element
}

const Skills = (data, id) => {
	const element = create('ul', parent = null, [], id, style = {
		backgroundColor: '#fff',
		width: '700px',
		minWidth: '500px',
		borderRadius: '15px',
		boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
		display: 'flex',
		flexDirection: 'column',
		gap: '5px',
		fontFamily: 'Century Gothic',
		padding: '10px',
		textDecoration: 'none',
	})

	data.skills.forEach(s => element.appendChild(Skill(s)))

	return element
}

async function makeData() {
	return {
		resume: {
			id: 1,
			address: {
				id: 1,
				street: "17 rue de russie",
				city: "Nice",
				state: "Côte d'Azur",
				country: "France",
				postal_code: "06000"
			},
			educationUnits: [
				{
					id: 1,
					startYear: 2018,
					endYear: 2021,
					school: "Unice",
					major: "Web Science",
					description: "Studied more stuff about Computer Science. I specialized in Semantic Web and Web Engineering."
				},
				{
					id: 2,
					startYear: 2015,
					endYear: 2018,
					school: "UniCaen",
					major: "Web Science",
					description: "Studied a bunch of stuff about Computer Science and IT for Industrial Applications. It was a bit borad."
				}
			],
			experienceUnits: [
				{
					id: 3,
					startYear: 2024,
					endYear: 2026,
					company: "AM",
					jobTitle: "Java Engineer",
					description: "Troubleshooted and resolved a critical performance bottleneck in our core application, leading to a 30% increase in system stability and reduced downtime."
				},
				{
					id: 2,
					startYear: 2022,
					endYear: 2024,
					company: "SE",
					jobTitle: "Full-Stack Engineer",
					description: "Developed and deployed a real-time data pipeline using Apache Kafka, enabling faster decision-making and a 10% reduction in response times for critical business processes."
				},
				{
					id: 1,
					startYear: 2021,
					endYear: 2022,
					company: "CG",
					jobTitle: "IOS Development-Lead",
					description: "Participated as a Tech-Lead in the development of a new e-commerce platform, resulting in a 20% increase in sales within the first year. Managed a team of 3 developers and ensured project delivery on time and within budget."
				}
			],
			languages: [
				{
					id: 2,
					name: "Arabic",
					level: "Bilingual"
				},
				{
					id: 1,
					name: "English",
					level: "Proficient"
				},
				{
					id: 4,
					name: "Spanish",
					level: "Intermediate"
				},
				{
					id: 3,
					name: "French",
					level: "Beginner"
				}
			],
			projects: [
				{
					id: 1,
					name: "Web CV",
					description: "Developed a web application 'Web CV' allowing users to create dynamic, interactive resumes with multimedia elements. Increased user engagement through embedded videos and skills visualizations."
				},
				{
					id: 2,
					name: "Khayma",
					description: "Developed 'Khayma,' an IoT app automating repetitive tasks in non-smart homes. Users control lights, appliances, and create custom routines for a more convenient living experience."
				}
			],
			skills: [
				{
					id: 11,
					name: "Nothing",
					category: "Doing Nothing",
					level: "0.5"
				},
				{
					id: 12,
					name: "Procrastination",
					category: "Pushing For Later",
					level: "1.5"
				},
				// ------------------------
				{
					id: 1,
					name: "Java",
					category: "Programming Language",
					level: "4.5"
				},
				{
					id: 2,
					name: "JavaScript",
					category: "Programming Language",
					level: "4.5"
				},
				{
					id: 3,
					name: "Python",
					category: "Programming Language",
					level: "4.5"
				},
				{
					id: 6,
					name: "Django",
					category: "Framework",
					level: "4.5"
				},
				{
					id: 7,
					name: "Flask",
					category: "Framework",
					level: "4.5"
				},
				{
					id: 8,
					name: "Vue",
					category: "Framework",
					level: "4.5"
				},
				{
					id: 4,
					name: "Go",
					category: "Programming Language",
					level: "4.0"
				},
				{
					id: 5,
					name: "Spring Boot",
					category: "Framework",
					level: "4.0"
				},
				{
					id: 9,
					name: "React",
					category: "Framework",
					level: "3.0"
				},
				{
					id: 10,
					name: "Eel",
					category: "Framework",
					level: "3.0"
				}
			],
			title: "Software Engineer",
			about: "In summary, I'm a keen Web Engineer and Game Designer (Developer) with a particular interest in RESTful APIs. I'd spend 6 hours creating a script to automate a 15-minute process that will occur 24 times.",
			userName: "caoury",
			firstName: "Chihabeddine",
			lastName: "AOURINMOUCHE",
			emailAddress: "chihab2007@gmail.com",
			image: "data:image/jpeg;base64,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"
		}
	}
}

function displayResponse(data) {
	const resumeContainer = document.getElementById('resume-container')
	const header = Header(data)
	const skills = Skills(data, 'resume-skills')
	const contactLanguages = ContactLanguages(data, 'resume-contact-languages')
	const about = About(data, 'resume-about')
	const educationUnits = EducationUnits(data, 'resume-education')
	const experienceUnits = ExperienceUnits(data, 'resume-experience')
	const projects = Projects(data, 'resume-projects')
	document.title = `${data.firstName} ${data.lastName}`
	resumeContainer.appendChild(header)
	SectionTitle('About', resumeContainer, 'resume-about')
	resumeContainer.appendChild(about)
	SectionTitle('Skills', resumeContainer, 'resume-skills')
	resumeContainer.appendChild(skills)
	SectionTitle('Contact & Languages', resumeContainer, 'resume-contact-languages')
	resumeContainer.appendChild(contactLanguages)
	SectionTitle('Education', resumeContainer, 'resume-education')
	resumeContainer.appendChild(educationUnits)
	SectionTitle('Professional Experience', resumeContainer, 'resume-experience')
	resumeContainer.appendChild(experienceUnits)
	SectionTitle('Projects', resumeContainer, 'resume-projects')
	resumeContainer.appendChild(projects)
}

document.addEventListener("DOMContentLoaded", () => displayResponse(makeData()))
