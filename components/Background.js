const Particle = (parent, color, classNames, size, position) => {
	const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

	const element = create('i', parent, classNames, '', {
		fontSize: `${size / 20}rem`,
		color: color,
		opacity: .25 / randomInt(3, 10),
		position: 'absolute',
		top: `${position.top}px`,
		left: `${position.left}px`,
	})

	return element
}

const generateSizesPositions = (numParticles, containerWidth, containerHeight, minSize, maxSize) => {
	const particles = []
	for (let i = 0; i < numParticles; i++) {
		let validPlacement = false
		let size
		let top
		let left
		while (!validPlacement) {
			// GENERATE RANDOM SIZE AND POSITION WITHIN CONTAINER BOUNDS
			size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize
			top = Math.floor(Math.random() * (containerHeight - size + 1))
			left = Math.floor(Math.random() * (containerWidth - size + 1))
			// CHECK FOR COLLISION WITH OTHER PARTICLES OR CONTAINER EDGES
			validPlacement = true
			for (const particle of particles) {
				const distanceX = Math.abs(left - particle.left)
				const distanceY = Math.abs(top - particle.top)
				const combinedRadius = size / 2 + particle.size / 2
				// COLLISION IF DISTANCE BETWEEN CENTERS IS LESS THAN COMBINED RADIUS
				if (distanceX < combinedRadius && distanceY < combinedRadius) {
					validPlacement = false
					break
				}
			}
			// CHECK FOR PLACEMENT WITHIN CONTAINER BOUNDS
			if (top < 0 || left < 0 || top + size > containerHeight || left + size > containerWidth) {
				validPlacement = false
			}
		}
		particles.push({
			size,
			position: { top, left }
		})
	}
	return particles
}


const Background = (data) => {
	const MIN_WIDTH = 350
	const iconsClassNames = data.theme.backgroundIcons
	const element = create('div', null, [], 'background', {
		width: '100%',
		height: '200px',
		position: 'relative',
		overflowX: 'hidden',
	})
	const fa_class_names = [].concat(...Array(3).fill(iconsClassNames))
	const particles = []
	function calculateSubsetRatio(width) {
		const someThreshold = 500 // I WANT THAT AT 500 I HAVE THE FULL SET OF ICON CLASSES
		const someOtherThreshold = 500 // THE LARGER THE SLOWER THE DECREESE
		// DEFINE A BASELINE RATIO (E.G., 0.5 FOR HALF) AND ADJUST BASED ON WIDTH
		const baseRatio = 0.5;
		const adjustmentFactor = (width - someThreshold) / someOtherThreshold; // ADJUST AS NEEDED

		// CLAMP THE RATIO BETWEEN 0 AND 1 TO AVOID OUT-OF-BOUNDS ERRORS
		return Math.min(Math.max(baseRatio + adjustmentFactor, 0), 1);
	}
	const generateParticles = () => {
		const randomSubset = fa_class_names.slice().sort(() => Math.random() - 0.5).slice(0, Math.floor(fa_class_names.length * calculateSubsetRatio(Math.max(window.innerWidth, MIN_WIDTH))));
		const sizesPositions = generateSizesPositions(
			randomSubset.length,
			Math.max(window.innerWidth, MIN_WIDTH),
			200, 30,
			Math.min(window.innerWidth / 10, 70)
		)
		for (let i = 0; i < randomSubset.length; i++) {
			const sp = sizesPositions[i]
			const cn = randomSubset[i]
			particles.push(
				Particle(
					element,
					Theme().getColors().secondaryColor,
					cn.split(' '), sp.size, sp.position
				)
			)
		}
	}
	const clearParticles = () => {
		particles.forEach(particle => particle.remove())
	}
	const updateParticles = () => {
		clearParticles()
		generateParticles()
	}

	const onHorizontalResize = () => {
		updateParticles()
	}

	generateParticles()

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
