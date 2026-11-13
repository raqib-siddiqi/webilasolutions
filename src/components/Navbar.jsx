import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/portfolio', 'Portfolio'],
  ['/contact', 'Contact'],
]

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="nav-wrap">
      <nav className={`nav container ${menuOpen ? 'menu-open' : ''}`}>
        <Link to="/" className="brand" aria-label="Webila Solutions home">
          <img src={theme === 'light' ? '/images/logo/webila-teal.png' : '/images/logo/webila-dark.png'} alt="Webila Solutions" />
        </Link>

        <div className="nav-links" id="primary-navigation">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <span className="theme-toggle-icon" aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span>
            <span className="theme-toggle-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>

          <Link to="/contact" className="nav-cta">Start a Project <span>↗</span></Link>
        </div>

        <button
          className="nav-menu-toggle"
          type="button"
          onClick={() => setMenuOpen(open => !open)}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}