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

	create('i', address, 'fa-solid fa-location-dot'.split(' '), '', {
		display: 'flex',
		alignItems: 'center',
	})

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

	create('i', email, 'fa-regular fa-envelope'.split(' '), '', {
		display: 'flex',
		alignItems: 'center',
	})

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
	const element = create('div', null, [], data.name, {
		display: 'flex',
		justifyContent: 'flex-end',
		gap: '5px',
	})

	create('span', element, [], `language-${data.name}-proficiency`, {
		color: {
			'beginner': '#cc9670', 'intermediate': '#b5cc70',
			'proficient': '#70adcc', 'bilingual': '#78cc70',
		}[data.level.toLowerCase()],
		fontSize: '.8em',
		fontWeight: 'bold',
		textAlign: 'right',
		display: 'flex',
		alignItems: 'center',
	}, [], {
		textContent: data.level,
	})

	create('span', element, [], `language-${data.name}-name`, {
		textAlign: 'left',
	}, [], {
		textContent: data.name,
	})

	return element
}

const Languages = (data) => {
	const element = create('ul', null, [], 'resume-languages', {
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
	const MIN_WIDTH = 490
	const element = create('div', null, [], id, {
		maxWidth: '700px',
		width: '100%',
		display: 'flex',
		flexDirection: window.innerWidth <= MIN_WIDTH ? 'column' : 'row',
		alignItems: window.innerWidth <= MIN_WIDTH ? 'flex-end' : 'flex-start',
		justifyContent: 'space-around',
		gap: '20px',
		fontFamily: 'Century Gothic',
	})
	element.appendChild(Contact(data))
	element.appendChild(Languages(data))

	window.addEventListener('resize', () => {
		element.style.flexDirection = window.innerWidth <= MIN_WIDTH ? 'column' : 'row'
		element.style.alignItems = window.innerWidth <= MIN_WIDTH ? 'flex-end' : 'flex-start'
	})

	return element
}