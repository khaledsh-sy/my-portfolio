import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Rebootkamp Tunisia (RBK)',
      location: 'Tunis, Tunisia',
      period: 'August – December 2025',
      responsibilities: [
        'Built responsive web interfaces using React.js, TypeScript, HTML, and CSS',
        'Developed and integrated REST APIs with Node.js and Express.js',
        'Worked with MySQL and SQL databases for data management',
        'Collaborated using GitHub and Agile/Scrum workflows',
        'Contributed to improving and maintaining existing web applications',
      ],
    },
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-number">04.</span>
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-line"></div>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-company">
                  <span className="company-name">{exp.company}</span>
                  <span className="company-location">— {exp.location}</span>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
