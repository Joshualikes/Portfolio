import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { personalInfo } from '../data/portfolioData'
import HeroVisual from './HeroVisual'

export default function Hero() {
  const { name, tagline, description, social } = personalInfo

  const socialLinks = [
    { icon: FaGithub, href: social.github, label: 'GitHub' },
    { icon: FaLinkedin, href: social.linkedin, label: 'LinkedIn' },
    { icon: FaFacebook, href: social.facebook, label: 'Facebook' },
    { icon: SiGmail, href: social.email, label: 'Gmail' },
  ]

  return (
    <section id="home" className="min-h-screen pt-28 pb-16 px-6 lg:px-8 constellation-bg flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center lg:text-left"
          >
          <p className="text-purple-400 text-sm font-medium tracking-widest mb-4">
            HELLO, I&apos;M
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-theme-primary">
            {name}
            <span className="text-blue-500">.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-theme-secondary font-medium mb-4 leading-snug">
            {tagline.split('web applications.')[0]}
            <span className="text-purple-400">web applications.</span>
          </p>
          <p className="text-theme-muted max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">{description}</p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg transition-colors shadow-lg shadow-blue-600/25"
            >
              VIEW MY WORK
              <FiArrowRight />
            </a>
            <a
              href={personalInfo.resumeUrl}
              download="Joshua-Antonio-Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 border border-theme-strong hover:border-blue-500/50 text-theme-primary font-semibold text-sm rounded-lg transition-colors"
            >
              <FiDownload />
              DOWNLOAD RESUME
            </a>
          </div>

          <div>
            <p className="text-xs text-theme-subtle tracking-widest mb-3">CONNECT WITH ME</p>
            <div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg border border-theme flex items-center justify-center text-theme-muted hover-text-theme hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          </motion.div>

          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
