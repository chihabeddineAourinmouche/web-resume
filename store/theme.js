const Theme = () => {
	const NAME = 'theme'
	const DARK_CONTRAST_COLOR = '#000'
	const LIGHT_CONTRAST_COLOR = '#fff'

	const rgbToHsl = (r, g, b) => {
		r /= 255
		g /= 255
		b /= 255
		const max = Math.max(r, g, b), min = Math.min(r, g, b)
		let h, s, l = (max + min) / 2

		if (max === min) {
			h = s = 0
		} else {
			const d = max - min
			s = l <= 0.5 ? d / (max + min) : d / (2 - max - min)
			switch (max) {
				case r:
					h = (g - b) / d + (g < b ? 6 : 0)
					break
				case g:
					h = (b - r) / d + 2
					break
				case b:
					h = (r - g) / d + 4
					break
			}
			h /= 6;
		}

		return [h * 360, s * 100, l * 100];
	}

	const getContrastingColor = (color) => {
		// REMOVE ANY LEADING '#' SYMBOL
		color = color.replace(/^#/, '')

		// CONVERT 3-DIGIT HEX to 6-DIGIT HEX
		if (color.length === 3) {
			color = `${color[0].repeat(2)}${color[1].repeat(2)}${color[2].repeat(2)}`
		}

		// CONVERT HEX CODE TO RGB VALUES (0-255)
		const rgb = color.match(/\w{1,2}/g).map(x => parseInt(x, 16))

		// CALCULATE YIQ LUMINOSITY
		const hsl = rgbToHsl(rgb[0], rgb[1], rgb[2])
		const lightness = hsl[2]
		const threshold = 70

		// RETURN CONTRASTING COLOR BASED ON HSL LIGHTNESS THRESHOLD
		return (lightness >= threshold) ? DARK_CONTRAST_COLOR : LIGHT_CONTRAST_COLOR
	}

	const setColor = (colorKey, colorValue) => {
		const themeData = localStorageManager.get(NAME)
		themeData[colorKey] = colorValue
		localStorageManager.update(
			NAME,
			themeData
		)
	}

	// SETTERS
	const setPrimaryColor = (value) => setColor('primaryColor', value)
	const setSecondaryColor = (value) => setColor('secondaryColor', value)
	const setTertiaryColor = (value) => setColor('tertiaryColor', value)
	const setColors = () => {
		if (!localStorageManager.has(NAME)) {
			localStorageManager.set(NAME, {})
		}
		setPrimaryColor(data.theme.primaryColor)
		setSecondaryColor(data.theme.secondaryColor)
		setTertiaryColor(data.theme.tertiaryColor)
	}

	// GETTERS
	const getPrimaryColor = () => localStorageManager.get(NAME).primaryColor
	const getSecondaryColor = () => localStorageManager.get(NAME).secondaryColor
	const getTertiaryColor = () => localStorageManager.get(NAME).tertiaryColor
	const getTertiaryColorContrast = () => getContrastingColor(getTertiaryColor())

	const getColors = () => {
		return {
			primaryColor: getPrimaryColor(),
			secondaryColor: getSecondaryColor(),
			tertiaryColor: getTertiaryColor(),
			tertiaryColorContrast: getTertiaryColorContrast(),
		}
	}

	const init = () => {
		setColors()
	}


	return { init, getColors, setColors }
}

// DEFAULT THEME
Theme().init()