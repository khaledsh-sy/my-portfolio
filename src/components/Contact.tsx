import './Contact.css'

const Contact = () => {

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'kichkhaled4@gmail.com', link: 'mailto:kichkhaled4@gmail.com' },
    { icon: '📱', label: 'Phone', value: '+216 29140448', link: 'tel:+21629140448' },
    { icon: '📍', label: 'Location', value: 'Ariana Supérieur, Ariana, Tunisia', link: '#' },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
      link: 'https://github.com/khaledsh-sy',
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-number">06.</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <a key={index} href={info.link} className="contact-item" target={info.link.startsWith('http') ? '_blank' : undefined} rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  <span className="contact-icon">{info.icon}</span>
                  <div className="contact-item-content">
                    <span className="contact-label">{info.label}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={social.name}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
