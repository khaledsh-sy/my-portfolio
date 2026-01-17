import './Education.css'

const Education = () => {
  const education = [
    {
      title: 'Baccalauréat Studies',
      institution: '',
      period: '2018–2019',
      type: 'Studies',
      completed: false,
      note: 'Focused on building foundational knowledge and skills',
    },
  ]

  const certifications = [
    {
      title: 'Full Stack Web Development Certificate',
      institution: 'Rebootkamp Tunisia',
      period: 'December 2025',
      type: 'Certificate',
      completed: true,
    },
    {
      title: 'Phone Hardware Repair Certificate',
      period: 'June 2020',
      type: 'Certificate',
      completed: true,
    },
    {
      title: 'English Certificate',
      period: '2014',
      type: 'Certificate',
      completed: true,
    },
    {
      title: 'Networking Fundamentals',
      period: 'Self-Study',
      type: 'Self-Study',
      completed: true,
    },
    {
      title: 'Cybersecurity Basics',
      period: 'Self-Study',
      type: 'Self-Study',
      completed: true,
    },
  ]

  const languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'B1' },
    { name: 'French', level: 'B1' },
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <span className="section-number">05.</span>
          <h2 className="section-title">Education & Certifications</h2>
          <div className="section-line"></div>
        </div>

        <div className="education-content">
          <div className="education-section">
            <h3 className="section-subtitle">Education</h3>
            <div className="education-list">
              {education.map((edu, index) => (
                <div key={index} className={`education-item ${!edu.completed ? 'studies-item' : ''}`}>
                  <div className="education-header">
                    <h4 className="education-title">{edu.title}</h4>
                    <span className={`education-type ${!edu.completed ? 'studies-badge' : ''}`}>{edu.type}</span>
                  </div>
                  {edu.institution && <p className="education-institution">{edu.institution}</p>}
                  <div className="education-footer">
                    <span className="education-period">{edu.period}</span>
                    {edu.note && <span className="education-note">{edu.note}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="education-section">
            <h3 className="section-subtitle">Certifications</h3>
            <div className="education-list">
              {certifications.map((cert, index) => (
                <div key={index} className="education-item">
                  <div className="education-header">
                    <h4 className="education-title">{cert.title}</h4>
                    <span className="education-type">{cert.type}</span>
                  </div>
                  {cert.institution && <p className="education-institution">{cert.institution}</p>}
                  <div className="education-footer">
                    <span className="education-period">{cert.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="education-section">
            <h3 className="section-subtitle">Languages</h3>
            <div className="languages-list">
              {languages.map((lang, index) => (
                <div key={index} className="language-item">
                  <span className="language-name">{lang.name}</span>
                  <span className="language-level">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
