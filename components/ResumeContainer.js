const ResumeContainer = (parent) => {
	return create('div', parent, [], 'resume-container', {
		// backgroundColor: 'coral',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100vw',
		maxWidth: '700px',
		minWidth: '350px',
		padding: '20px',
		paddingTop: '200px',
		gap: '20px',
	})
}