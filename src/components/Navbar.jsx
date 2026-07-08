import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { navLinks, personalInfo } from '../data/portfolioData'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map((link) => link.id)
      const scrollPos = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const initial = personalInfo.name.charAt(0).toUpperCase()

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-theme-navbar backdrop-blur-md border-b border-theme shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-sm text-white shadow-lg group-hover:scale-105 transition-transform">
            {initial}/
          </div>
          <div className="hidden sm:block">
            <p className="font-bold text-sm tracking-wider text-theme-primary">
              {personalInfo.fullName.toUpperCase()}
            </p>
            <p className="text-[10px] text-theme-muted tracking-widest">
              {personalInfo.title.toUpperCase()}
            </p>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`text-xs tracking-widest transition-colors relative py-1 ${
                  activeSection === link.id
                    ? 'text-blue-400'
                    : 'text-theme-muted hover-text-theme'
                }`}
              >
                <span className="text-blue-500/60 mr-1">0{index + 1}.</span>
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </nav>
    </motion.header>
  )
}
