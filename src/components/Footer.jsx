import { FiArrowUp, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { personalInfo, navLinks, footerServices } from '../data/portfolioData'

export default function Footer() {
  const initial = personalInfo.name.charAt(0).toUpperCase()
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-theme bg-theme-footer pt-16 pb-8 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-xs text-white">
                {initial}/
              </div>
              <div>
                <p className="font-bold text-sm text-theme-primary">{personalInfo.fullName.toUpperCase()}</p>
                <p className="text-[10px] text-theme-subtle">{personalInfo.title.toUpperCase()}</p>
              </div>
            </div>
            <p className="text-xs text-theme-subtle">
              © {year} {personalInfo.fullName}. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-theme-primary">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm text-theme-muted hover-text-theme transition-colors"
                  >
                    {link.label.charAt(0) + link.label.slice(1).toLowerCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-theme-primary">Services</h4>
            <ul className="space-y-2">
              {footerServices.map((service) => (
                <li key={service}>
                  <span className="text-sm text-theme-muted">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-theme-primary">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 text-sm text-theme-muted hover-text-theme transition-colors"
                >
                  <FiMail size={14} className="text-blue-400" />
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-sm text-theme-muted hover-text-theme transition-colors"
                >
                  <FiPhone size={14} className="text-blue-400" />
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-theme-muted">
                <FiMapPin size={14} className="text-blue-400 shrink-0" />
                {personalInfo.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-theme flex items-center justify-center text-theme-muted hover-text-theme hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
            aria-label="Back to top"
          >
            <FiArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
