import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      icon: '💻',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Node.js', 'Express.js', 'RESTful APIs', 'HTML/CSS'],
    },
    {
      title: 'Databases & ORM',
      icon: '🗄️',
      skills: ['SQL', 'MySQL', 'Prisma ORM', 'Sequelize ORM'],
    },
    {
      title: 'Real-Time & Mobile',
      icon: '📱',
      skills: ['Socket.IO', 'React Native', 'Expo'],
    },
    {
      title: 'Networking & Security',
      icon: '🔒',
      skills: ['TCP/IP', 'Subnetting', 'Packet Analysis', 'Burp Suite', 'Nmap', 'Wireshark', 'Gobuster', 'Hydra', 'Nikto'],
    },
    {
      title: 'Linux & Scripting',
      icon: '🐧',
      skills: ['Linux CLI', 'Bash Scripting', 'File System & Permissions', 'Process & Service Management', 'Basic Linux Security'],
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'Agile/Scrum', 'Cloudinary', 'JWT Authentication', 'RBAC'],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-number">02.</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-line"></div>
        </div>

        <p className="skills-intro">
          Technologies and tools I work with. Continuously learning and expanding my expertise in both development and cybersecurity.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
