import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-number">01.</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Self-taught professional with hands-on experience in Linux, Bash, Burp Suite, 
              and strong networking skills including TCP/IP, subnetting, and packet analysis. 
              Currently expanding full-stack development skills to build a solid foundation 
              for a cybersecurity and penetration testing career, with a strong ability to 
              learn quickly and solve complex technical problems.
            </p>
            <p>
              I've built a full marketplace platform connecting providers, shops, and customers, 
              developed admin dashboards with React and TypeScript, and created mobile applications 
              with React Native & Expo. My experience includes implementing RESTful & real-time 
              features with Node.js, Express, and Socket.IO, managing MySQL databases using Prisma ORM, 
              and implementing secure authentication systems.
            </p>
            <p>
              I'm passionate about applying security best practices including rate limiting, 
              input sanitization, CORS protection, and XSS/CSRF prevention. Always eager to 
              learn new technologies and contribute to meaningful projects.
            </p>
            <p>
              I've also developed KOzone, a comprehensive security scanning platform that integrates 
              30+ security tools into a unified API. The platform provides automated reconnaissance, 
              vulnerability scanning, and security testing capabilities including subdomain discovery, 
              API endpoint analysis, cloud reconnaissance, and various penetration testing tools. 
              Built with Node.js, TypeScript, and Express, KOzone demonstrates my ability to combine 
              security expertise with full-stack development skills.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">Always</span>
                <span className="highlight-label">Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
