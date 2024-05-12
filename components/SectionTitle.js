const SectionTitle = (title, parent = null, target = '') => {
	const getRandomInt = (max) => Math.floor(Math.random() * max)
	const getRandomZeroOneTwo = () => getRandomInt(3)
	const randomPosition = getRandomZeroOneTwo()

	const element = create('a', parent, [], `section-title-${target}`, {
		maxWidth: '700px',
		width: '100%',
		marginTop: '20px',
		fontFamily: 'Century Gothic',
		color: Theme().getColors().secondaryColor,
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