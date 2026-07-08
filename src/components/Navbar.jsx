import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { navLinks, personalInfo } from '../data/portfolioData'
import logo from '../assets/Logo.png'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })
  const navBarRef = useRef(null)
  const linkRefs = useRef({})

  const updateIndicator = useCallback(() => {
    const navBar = navBarRef.current
    const activeLink = linkRefs.current[activeSection]
    if (!navBar || !activeLink) return

    const navRect = navBar.getBoundingClientRect()
    const linkRect = activeLink.getBoundingClientRect()
    setIndicator({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
    })
  }, [activeSection])

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

  useEffect(() => {
    const frame = requestAnimationFrame(updateIndicator)
    window.addEventListener('resize', updateIndicator)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', updateIndicator)
    }
  }, [updateIndicator])

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
      <nav
        ref={navBarRef}
        className="relative max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between"
      >
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt={`${personalInfo.fullName} logo`}
            className="w-10 h-10 rounded-lg object-contain shadow-lg group-hover:scale-105 transition-transform"
          />
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
                ref={(el) => {
                  linkRefs.current[link.id] = el
                }}
                href={link.href}
                className={`text-xs tracking-widest transition-colors py-1 block ${
                  activeSection === link.id
                    ? 'text-blue-400'
                    : 'text-theme-muted hover-text-theme'
                }`}
              >
                <span className="text-blue-500/60 mr-1">0{index + 1}.</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />

        <div className="hidden lg:block absolute bottom-0 left-6 lg:left-8 right-6 lg:right-8 h-px bg-theme-border" />
        <motion.div
          className="hidden lg:block absolute bottom-0 h-0.5 bg-blue-500 rounded-full"
          animate={{ left: indicator.left, width: indicator.width }}
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
        />
      </nav>
    </motion.header>
  )
}
