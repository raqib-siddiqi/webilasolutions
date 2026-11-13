import { Link } from 'react-router-dom'

export default function Footer({ theme }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img className="footer-logo" src={theme === 'light' ? '/images/logo/webila-teal.png' : '/images/logo/webila-dark.png'} alt="Webila Solutions" />
          <p className="footer-copy">
            Digital experiences built with design thinking, clean development, and technology that works for your business.
          </p>
        </div>
        <div className="footer-links">
          <p className="eyebrow">Explore</p>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-links">
          <p className="eyebrow">Services</p>
          <span>Graphic Design</span>
          <span>Web Design</span>
          <span>Web Development</span>
          <span>Web Applications</span>
        </div>
        <div className="footer-contact">
          <p className="eyebrow">Let's build</p>
          <a href="mailto:webilasolutions@gmail.com">webilasolutions@gmail.com</a>
          <p>Pakistan · Working Worldwide</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Webila Solutions. All rights reserved.</span>
        <span>Built for the web.</span>
      </div>
    </footer>
  )
}