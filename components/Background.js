const Particle = (parent, width, color, classNames) => {
	const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
	const randomSize = randomInt(10, 100)

	const element = create('i', parent, classNames, '', {
		fontSize: `${randomSize / 20}rem`,
		color: color,
		opacity: .25 / randomInt(3, 10),
		position: 'absolute',
		top: `${randomInt(0, 200 - randomSize)}px`,
		left: `${randomInt(0, width)}px`,
	})

	window.addEventListener('resize', () => {
		element.style.left = `${randomInt(0, width)}px`
	})

	return element
}

const Background = (data) => {
	const iconsClassNames = data.theme.backgroundIcons
	const element = create('div', null, [], 'background', {
		width: '100%',
		height: '200px',
		position: 'relative',
		overflowX: 'hidden',
	})
	const fa_class_names = [].concat(...Array(3).fill(iconsClassNames))
	const randomSubset = fa_class_names.slice().sort(() => Math.random() - 0.5).slice(0, Math.floor(fa_class_names.length / 2))
	randomSubset.forEach(cn => {
		Particle(element, window.innerWidth, Theme().getColors().secondaryColor, cn.split(' '))
	})
	return element
}
