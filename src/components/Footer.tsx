import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            Designed & Built by <span className="footer-name">Khaled Shili</span>
          </p>
          <p className="footer-copyright">© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
