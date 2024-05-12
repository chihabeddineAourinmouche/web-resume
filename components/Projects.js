const Project = (data) => {
	const element = create('div', null, [], `project-${data.id}`, {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		fontFamily: 'Century Gothic',
		listStyleType: 'none',
	})

	create('h3', element, [], `project-title`, {
		fontWeight: '500',
	}, [], {
		textContent: data.name,
	})

	create('p', element, [], `project-description`, {
		fontSize: '.8em',
		color: '#555',
		textAlign: 'justify',
	}, [], {
		textContent: data.description,
	})

	const skills = create('span', element, [], `project-skills`, {
		display: 'flex',
		alignItems: 'center',
		gap: '2px',
		fontSize: '.6em',
	})

	data.skills.forEach(skill => create('span', skills, [], `project-skill-${skill}`, {
		backgroundColor: Theme().getColors().tertiaryColor,
		color: Theme().getColors().tertiaryColorContrast,
		padding: '2px 5px',
		display: 'flex',
		borderRadius: '15px',
	}, [], { textContent: skill }))

	return element
}

const Projects = (data, id) => {
	const MIN_WIDTH = 350
	const element = create('ul', null, [], id, {
		backgroundColor: '#fff',
		maxWidth: '700px',
		width: '100%',
		borderRadius: '15px',
		boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
		padding: window.innerWidth <= MIN_WIDTH ? '20px 20px' : '20px 5%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		gap: '20px',
	})

	data.projects.forEach(p => {
		element.appendChild(Project(p))
	})

	window.addEventListener('resize', () => {
		element.style.padding = window.innerWidth <= MIN_WIDTH ? '20px 20px' : '20px 5%'
	})

	return element
}