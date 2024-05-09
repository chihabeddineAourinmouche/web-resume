const displayResume = (data) => {
	document.title = `${data.firstName} ${data.lastName}`

	const resumeContainer = ResumeContainer(document.body)

	const header = Header(data)
	resumeContainer.appendChild(header)

	const resumeAboutId = 'resume-about'
	SectionTitle('About', resumeContainer, resumeAboutId)
	const about = About(data, resumeAboutId)
	resumeContainer.appendChild(about)

	const resumeSkillsId = 'resume-skills'
	SectionTitle('Skills', resumeContainer, resumeSkillsId)
	const skills = Skills(data, resumeSkillsId)
	resumeContainer.appendChild(skills)

	const resumeContactLanguagesId = 'resume-contact-languages'
	SectionTitle('Contact & Languages', resumeContainer, resumeContactLanguagesId)
	const contactLanguages = ContactLanguages(data, resumeContactLanguagesId)
	resumeContainer.appendChild(contactLanguages)

	const resumeEducationId = 'resume-education'
	SectionTitle('Education', resumeContainer, resumeEducationId)
	const educationUnits = EducationUnits(data, resumeEducationId)
	resumeContainer.appendChild(educationUnits)

	const resumeExperienceId = 'resume-experience'
	SectionTitle('Professional Experience', resumeContainer, resumeExperienceId)
	const experienceUnits = ExperienceUnits(data, resumeExperienceId)
	resumeContainer.appendChild(experienceUnits)

	const resumeProjectsId = 'resume-projects'
	SectionTitle('Projects', resumeContainer, resumeProjectsId)
	const projects = Projects(data, resumeProjectsId)
	resumeContainer.appendChild(projects)
}

document.addEventListener("DOMContentLoaded", () => {
	displayResume(data)
})
