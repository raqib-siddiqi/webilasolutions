import { NavLink, Link } from 'react-router-dom'

const links = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/portfolio', 'Portfolio'],
  ['/contact', 'Contact'],
]

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <Link to="/" className="brand" aria-label="Webila Solutions home">
          <img src="/images/logo/webila-dark.png" alt="Webila Solutions" />
        </Link>

        <div className="nav-links">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              end={to === '/'}
            >
              {label}
            </NavLink>
          ))}
        </div>

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
      </nav>
    </header>
  )
}