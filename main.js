const displayResume = (data) => {
	document.title = `${data.firstName} ${data.lastName}`
	
	const body = document.body
	body.style.backgroundColor = Theme().getColors().primaryColor
	
	const background = Background(data)
	body.appendChild(background)

	const resumeContainer = ResumeContainer(body)

	const header = Header(data)
	resumeContainer.appendChild(header)

	const resumeAboutId = 'resume-about'
	SectionTitle(data.ui.about, resumeContainer, resumeAboutId)
	const about = About(data, resumeAboutId)
	resumeContainer.appendChild(about)

	const resumeSkillsId = 'resume-skills'
	SectionTitle(data.ui.skills, resumeContainer, resumeSkillsId)
	const skills = Skills(data, resumeSkillsId)
	resumeContainer.appendChild(skills)

	const resumeContactLanguagesId = 'resume-contact-languages'
	SectionTitle(`${data.ui.contact} & ${data.ui.languages}`, resumeContainer, resumeContactLanguagesId)
	const contactLanguages = ContactLanguages(data, resumeContactLanguagesId)
	resumeContainer.appendChild(contactLanguages)

	const resumeEducationId = 'resume-education'
	SectionTitle(data.ui.education, resumeContainer, resumeEducationId)
	const educationUnits = EducationUnits(data, resumeEducationId)
	resumeContainer.appendChild(educationUnits)

	const resumeExperienceId = 'resume-experience'
	SectionTitle(data.ui.experience, resumeContainer, resumeExperienceId)
	const experienceUnits = ExperienceUnits(data, resumeExperienceId)
	resumeContainer.appendChild(experienceUnits)

	const resumeProjectsId = 'resume-projects'
	SectionTitle(data.ui.projects, resumeContainer, resumeProjectsId)
	const projects = Projects(data, resumeProjectsId)
	resumeContainer.appendChild(projects)
}

document.addEventListener("DOMContentLoaded", () => {
	displayResume(data)
})
