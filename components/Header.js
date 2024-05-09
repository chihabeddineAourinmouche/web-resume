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
		gap: '10px',
		fontFamily: 'Century Gothic',
	})

	create('img', element, [], 'profile-picture', {
		height: '150px',
		width: '150px',
		borderRadius: '50%',
		border: '10px solid #b35949',
	}, [], { src: data.image })

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
		color: '#b35949',
	}, [], {
		textContent: `${data.firstName} ${data.lastName}`,
	})

	create('h3', textContainer, [], 'fullname', {
		fontWeight: '500',
	}, [], {
		textContent: data.title,
	})

	window.addEventListener('resize', () => {
		element.style.borderRadius = window.innerWidth <= MIN_WIDTH ? '15px' : '100px 15px 15px 100px'
		element.style.flexDirection = window.innerWidth <= MIN_WIDTH ? 'column' : 'row'
	})

	return element;
}