const Skill = (data) => {
	const MIN_WIDTH = 461
	const starrify = (r) => {
		const rating = parseFloat(r)
		const fullStars = Math.floor(rating)
		const halfStar = rating % 1 === 0.5
		const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)
		let stars = []
		for (let i = 0; i < fullStars; i++) stars.push('fa fa-star')
		if (halfStar) stars.push('fa-solid fa-star-half-stroke')
		for (let i = 0; i < emptyStars; i++) stars.push('fa-regular fa-star')
		return stars
	}

	const element = create('div', null, [], `skill-${data.name}`, {
		display: 'flex',
		justifyContent: window.innerWidth <= MIN_WIDTH ? 'flex-start' : 'flex-end',
		gap: '5px',
	})

	const ratingContainer = create('span', element, [], `skill-${data.name}-level`, {
		color: {
			'0.5': '#bd3a3a', '1.0': '#bd3a3a',
			'1.5': '#cc9670', '2.0': '#cc9670',
			'2.5': '#b5cc70', '3.0': '#b5cc70',
			'3.5': '#78cc70', '4.0': '#78cc70',
			'4.5': '#70adcc', '5.0': '#70adcc',
		}[data.level],
		fontSize: '.8em',
		fontWeight: 'bold',
		textAlign: 'right',
		display: 'flex',
		alignItems: 'center',
	})

	starrify(data.level).forEach(s => create('i', ratingContainer, s.split(' ')))

	create('span', element, [], `skill-${data.name}-name`, {
		textAlign: 'left',
		fontWeight: 'bold',
	}, [], {
		textContent: data.name,
	})

	create('span', element, [], `skill-${data.name}-name`, {
		textAlign: 'left',
		fontSize: '.7em',
	}, [], {
		textContent: `( ${data.category} )`,
	})

	const onHorizontalResize = () => {
		element.style.justifyContent = window.innerWidth <= MIN_WIDTH ? 'flex-start' : 'flex-end'
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

const Skills = (data, id) => {
	const element = create('ul', null, [], id, {
		backgroundColor: '#fff',
		maxWidth: '700px',
		width: '100%',
		borderRadius: '15px',
		boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		gap: '5px',
		fontFamily: 'Century Gothic',
		padding: '10px',
		textDecoration: 'none',
	})

	data.skills.forEach(s => element.appendChild(Skill(s)))

	return element
}