import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('webila-theme')
    return savedTheme === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    localStorage.setItem('webila-theme', theme)
    const themeColor = document.querySelector('meta[name="theme-color"]')
    if (themeColor) themeColor.content = theme === 'light' ? '#ffffff' : '#0b0d12'
  }, [theme])

  function toggleTheme() {
    setTheme(currentTheme => currentTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="site-shell" data-theme={theme}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer theme={theme} />
    </div>
  )
}