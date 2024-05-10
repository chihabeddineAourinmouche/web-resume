// function create (type, parent = null, classNames = [], id = '', style = {}, events = [], attrs = {}) {}

const Modal = (text) => {
	const element = create('div', null, [], 'modal-overlay', {
		backgroundColor: 'rgba(0, 0, 0, .8)',
		position: 'fixed',
		top: '0',
		right: '0',
		bottom: '0',
		left: '0',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'Century Gothic',
	}, [
		{ name: 'click', handler: e => element.remove() },
		{ name: 'wheel', handler: e => e.preventDefault() },
		{ name: 'touchmove', handler: e => e.preventDefault() },
	])

	const modal = create('div', element, [], 'modal-container', {
		backgroundColor: '#fff',
		width: '350px',
		minWidth: '350px',
		paddingTop: '30px',
		paddingBottom: '20px',
		textAlign: 'justify',
		borderRadius: '15px',
		position: 'relative',
	}, [
		{ name: 'click', handler: e => element.remove() },
		{ name: 'wheel', handler: e => e.preventDefault() },
		{ name: 'touchmove', handler: e => e.preventDefault() },
	], {})

	create('p', modal, [], 'modal-text', {
		maxHeight: '350px',
		overflowY: 'auto',
		padding: '10px 30px',
	}, [
		{ name: 'wheel', handler: e => e.stopPropagation() },
		{ name: 'touchmove', handler: e => e.stopPropagation() },
	], {textContent: text})

	create('i', modal, ['fa-solid', 'fa-xmark'], 'modal-close', {
		position: 'absolute',
		top: '10px',
		right: '10px',
		cursor: 'pointer',
		color: '#b35949',
	}, [{ name: 'click', handler: e => element.remove() }])

	return element
}