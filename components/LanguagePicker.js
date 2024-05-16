const LanguagePicker = (languages = { 'English': 'en' }, onCancel = () => { }, onPick = () => { }) => {
	const MESSAGE = 'Pick a language you would like to view the UI in (Default is English)'
	const TARGET_TIME = 10
	const countdown = (intervalCallback, timeoutCallback) => {
		let targetTime = TARGET_TIME
		const intervalId = setInterval(() => {
			targetTime--
			intervalCallback(targetTime)
			if (targetTime <= 0) {
				clearInterval(intervalId)
				timeoutCallback()
			}
		}, 1000)
	}

	const remove = () => {
		element.innerHTML = ''
		element.remove()
	}

	const pickLanguage = (language) => {
		onPick(language)
		remove()
	}

	// OVERLAY
	const element = create('div', null, [], 'modal-overlay', {
		backgroundColor: 'rgba(0, 0, 0, .8)',
		position: 'fixed', top: '0', right: '0', bottom: '0', left: '0',
		display: 'flex', justifyContent: 'center', alignItems: 'center',
	}, [
		{
			name: 'click', handler: e => {
				pickLanguage(languages['English'])
				onCancel()
			}
		},
		{ name: 'wheel', handler: e => e.preventDefault() },
		{ name: 'touchmove', handler: e => e.preventDefault() },
	])
	document.body.appendChild(element)

	// MODAL
	const modal = create('div', element, [], 'modal-container', {
		backgroundColor: '#fff',
		width: '350px',
		minWidth: '350px',
		minHeight: '100px',
		padding: '30px 10px',
		textAlign: 'justify',
		borderRadius: '15px',
		position: 'relative',
	}, [
		{
			name: 'click', handler: e => {
				e.preventDefault()
				e.stopPropagation()
			}
		},
		{ name: 'wheel', handler: e => e.preventDefault() },
		{ name: 'touchmove', handler: e => e.preventDefault() },
	], {})

	// EXIT BUTTON
	create('i', modal, ['fa-solid', 'fa-xmark'], 'modal-close', {
		position: 'absolute',
		top: '10px',
		right: '10px',
		cursor: 'pointer',
		color: Theme().getColors().secondaryColor,
	}, [{
		name: 'click', handler: e => {
			e.preventDefault()
			e.stopPropagation()
			pickLanguage(languages['English'])
			onCancel()
		}
	}])

	const languagePicker = create('div', modal, [], 'modal-language-picker', { width: '100%', maxHeight: '350px', overflowY: 'auto', padding: '10px' })

	const messageContainer = create('p', languagePicker, [], '', {}, [], { textContent: `${TARGET_TIME} | ${MESSAGE}` })

	Object.keys(languages).forEach(k => {
		const INITIAL_OPACITY = .4
		const INITIAL_FONT_SIZE = 'inherit'
		create('div', languagePicker, [], k,
			{
				height: '30px',
				padding: '30px 10px',
				display: 'flex', justifyContent: 'center', alignItems: 'center',
				cursor: 'pointer',
				opacity: INITIAL_OPACITY,
			},
			[
				{
					name: 'click', handler: () => {
						pickLanguage(languages[k])
					}
				},
				{
					name: 'mouseenter', handler: e => {
						e.target.style.opacity = 1
						e.target.style.fontSize = '1.1em'
					}
				},
				{
					name: 'mouseleave', handler: e => {
						e.target.style.opacity = INITIAL_OPACITY
						e.target.style.fontSize = INITIAL_FONT_SIZE
					}
				},
				{
					name: 'touchstart', handler: e => {
						e.target.style.opacity = 1
						e.target.style.fontSize = '1.1em'
					}
				},
				{
					name: 'touchend', handler: e => {
						e.target.style.opacity = INITIAL_OPACITY
						e.target.style.fontSize = INITIAL_FONT_SIZE
					}
				},
			], { textContent: k })
	})

	countdown(
		counter => messageContainer.textContent = `${counter} | ${MESSAGE}`,
		() => { pickLanguage(languages['English']) }
	)

	return element
}