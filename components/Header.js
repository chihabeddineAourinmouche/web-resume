const Header = (data) => {
	const MIN_WIDTH = 461
	const element = create('d', null, [], 'resume-header', {
		backgroundColor: '#fff',
		width: '100%',
		maxWidth: '700px',
		borderRadius: window.innerWidth <= MIN_WIDTH ? '15px' : '100px 15px 15px 100px',
		boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
		padding: '20px',
		display: 'flex',
		flexDirection: window.innerWidth <= MIN_WIDTH ? 'column' : 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: '30px',
	})

	create('img', element, [], 'profile-picture', {
		height: '150px',
		width: '150px',
		borderRadius: '50%',
		borderWidth: '10px',
		borderStyle: 'solid',
		borderColor: Theme().getColors().secondaryColor,
	}, [], { src: data.image, draggable: false })

	const textContainer = create('div', element, [], 'fullname-title-container', {
		paddingTop: '20px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		flexGrow: '1',
		textAlign: 'left',
	})

	create('h2', textContainer, [], 'fullname', {
		fontSize: '1.7rem',
		color: Theme().getColors().secondaryColor,
	}, [], {
		textContent: `${data.firstName} ${data.lastName}`,
	})

	create('h3', textContainer, [], 'fullname', {}, [], {
		textContent: data.title,
	})

	const onHorizontalResize = () => {
		element.style.borderRadius = window.innerWidth <= MIN_WIDTH ? '15px' : '100px 15px 15px 100px'
		element.style.flexDirection = window.innerWidth <= MIN_WIDTH ? 'column' : 'row'
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

	return element;
}