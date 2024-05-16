const EducationUnit = (data) => {
	const element = create('div', null, [], `education-unit${data.id}`, {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		listStyleType: 'none',
	})

	create('h3', element, [], `education-unit-title`, {}, [], {
		textContent: `${data.endYear}, ${data.major}, ${data.school}`,
	})

	create('p', element, [], `education-unit-description`, {
		fontSize: '.8em',
		color: '#555',
		textAlign: 'justify',
	}, [], {
		textContent: data.description,
	})

	return element
}

const EducationUnits = (data, id) => {
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

	data.educationUnits.forEach(u => {
		element.appendChild(EducationUnit(u))
	})

	const onHorizontalResize = () => {
		element.style.padding = window.innerWidth <= MIN_WIDTH ? '20px 20px' : '20px 5%'
	}
	
	let previousWidth = window.innerWidth
	window.addEventListener('resize', () => {
		const currentWidth = window.innerWidth
		const widthDifference = currentWidth - previousWidth
		if (widthDifference !== 0) {
			onHorizontalResize()
		}
		previousWidth = currentWidth
	})

	return element
}