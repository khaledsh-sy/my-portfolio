import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">KHALED SHILI</h1>
            <div className="hero-titles">
              <h2 className="hero-title">
                <span className="title-badge">Full Stack Developer</span>
              </h2>
              <h2 className="hero-title">
                <span className="title-badge badge-secondary">Junior Pentester</span>
              </h2>
            </div>
            <p className="hero-description">
              Self-taught professional with hands-on experience in full-stack development, 
              Linux, and cybersecurity. Passionate about building scalable applications and 
              continuously expanding my expertise in web development and security.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#projects" className="btn btn-secondary">View My Work</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
