import './Projects.css'
import ImageCarousel from './ImageCarousel'

// Import Regeely photos
import regeelyPhoto1 from '../regeely photos/1.jpg'
import regeelyPhoto2 from '../regeely photos/2.jpg'
import regeelyPhoto3 from '../regeely photos/3.jpg'
import regeelyPhoto4 from '../regeely photos/4.jpg'
import regeelyPhoto5 from '../regeely photos/5.jpg'
import regeelyPhoto6 from '../regeely photos/6.jpg'

// Import KOzone scan photos (organized by date - dated first, then others)
import kozonePhoto1 from '../scan photo/Screenshot 2026-01-16 203201.png'
import kozonePhoto2 from '../scan photo/startscan.png'
import kozonePhoto3 from '../scan photo/overall.png'
import kozonePhoto4 from '../scan photo/overall2.png'
import kozonePhoto5 from '../scan photo/api.png'
import kozonePhoto6 from '../scan photo/api2.png'
import kozonePhoto7 from '../scan photo/clientscan2.png'
import kozonePhoto8 from '../scan photo/clientside.png'
import kozonePhoto9 from '../scan photo/cloud.png'
import kozonePhoto10 from '../scan photo/corsscn.png'
import kozonePhoto11 from '../scan photo/corsscn2.png'
import kozonePhoto12 from '../scan photo/gitleack.png'
import kozonePhoto13 from '../scan photo/gitleack1.png'
import kozonePhoto14 from '../scan photo/gitleak.png'
import kozonePhoto15 from '../scan photo/googledork1.png'
import kozonePhoto16 from '../scan photo/grep.png'
import kozonePhoto17 from '../scan photo/httpx.png'
import kozonePhoto18 from '../scan photo/httpx2.png'
import kozonePhoto19 from '../scan photo/js.png'
import kozonePhoto20 from '../scan photo/js2.png'
import kozonePhoto21 from '../scan photo/leak2.png'
import kozonePhoto22 from '../scan photo/nikto.png'
import kozonePhoto23 from '../scan photo/nikto2.png'
import kozonePhoto24 from '../scan photo/ql.png'
import kozonePhoto25 from '../scan photo/ql2.png'
import kozonePhoto26 from '../scan photo/ratelimit.png'
import kozonePhoto27 from '../scan photo/ratelimit2.png'
import kozonePhoto28 from '../scan photo/ripgrep2.png'
import kozonePhoto29 from '../scan photo/ws.png'
import kozonePhoto30 from '../scan photo/ws1.png'
import kozonePhoto31 from '../scan photo/ws2.png'
import kozonePhoto32 from '../scan photo/wsscan.png'
import kozonePhoto33 from '../scan photo/wsscann2.png'
import kozonePhoto34 from '../scan photo/2.png'
import kozonePhoto35 from '../scan photo/3.png'

const Projects = () => {
  const regeelyImages = [
    regeelyPhoto1, regeelyPhoto2, regeelyPhoto3, regeelyPhoto4, regeelyPhoto5, regeelyPhoto6,
  ]

  const kozoneImages = [
    kozonePhoto1, kozonePhoto2, kozonePhoto3, kozonePhoto4, kozonePhoto5, kozonePhoto6,
    kozonePhoto7, kozonePhoto8, kozonePhoto9, kozonePhoto10, kozonePhoto11, kozonePhoto12,
    kozonePhoto13, kozonePhoto14, kozonePhoto15, kozonePhoto16, kozonePhoto17, kozonePhoto18,
    kozonePhoto19, kozonePhoto20, kozonePhoto21, kozonePhoto22, kozonePhoto23, kozonePhoto24,
    kozonePhoto25, kozonePhoto26, kozonePhoto27, kozonePhoto28, kozonePhoto29, kozonePhoto30,
    kozonePhoto31, kozonePhoto32, kozonePhoto33, kozonePhoto34, kozonePhoto35,
  ]

  const projects = [
    {
      id: 1,
      title: 'Regeely - Marketplace Platform',
      description: 'Full-stack marketplace platform connecting providers, shops, and customers. Built with React, TypeScript, Node.js, Express, MySQL, and Prisma ORM. Features include JWT authentication with RBAC, real-time messaging with Socket.IO, Cloudinary integration for media storage, and comprehensive security practices.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Prisma', 'Socket.IO', 'Cloudinary', 'JWT'],
      images: regeelyImages,
      image: '🛒',
      github: 'https://github.com/khaledsh-sy/Regeely-app-V1',
    },
    {
      id: 2,
      title: 'KOzone - Security Scanning Platform',
      description: '**KOzone** is a comprehensive reconnaissance and security scanning platform that integrates 30+ security tools into a unified API. The platform provides automated subdomain discovery, vulnerability scanning, API endpoint discovery, cloud reconnaissance, and various security testing capabilities including XSS, SQL injection, CORS misconfigurations, JWT vulnerabilities, WebSocket security, and client-side security analysis. Built with Node.js, TypeScript, Express, and Playwright, Reconko offers real-time streaming responses, comprehensive database integration, and a modern web interface for security researchers, bug bounty hunters, and penetration testers.',
      technologies: ['Node.js', 'TypeScript', 'Express', 'Playwright', 'Security', 'API', 'Automation'],
      images: kozoneImages,
      image: '🔒',
      github: '#',
    },
    {
      id: 3,
      title: 'Student Housing Booking System',
      description: 'Full-stack student housing booking platform developed with React, TypeScript, Node.js, Express, and MySQL. Implemented authentication, bookings, payments, reviews, maintenance requests, and real-time messaging/notifications using Socket.IO. Collaborated in a team using GitHub and Agile workflow.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Socket.IO'],
      image: '🏠',
      images: undefined,
      github: '#',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-number">03.</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line"></div>
        </div>

        {projects.filter(project => project.title.includes('KOzone')).map((project) => (
          <div key={project.id} className="project-card kozone-project">
            <div className="project-image">
              {project.images ? (
                <ImageCarousel images={project.images} />
              ) : (
                <div className="project-icon">{project.image}</div>
              )}
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="projects-grid">
          {projects.filter(project => !project.title.includes('KOzone')).map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {project.images ? (
                  <ImageCarousel images={project.images} />
                ) : (
                  <div className="project-icon">{project.image}</div>
                )}
              </div>
              {project.images && project.github && project.github !== '#' && (
                <div className="project-links-below">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-below">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <span>View on GitHub</span>
                  </a>
                </div>
              )}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
