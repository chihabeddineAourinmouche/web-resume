const ResumeContainer = (parent) => {
	return create('div', parent, [], 'resume-container', {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100vw',
		maxWidth: '700px',
		minWidth: '350px',
		padding: '20px',
		gap: '20px',
	})
}