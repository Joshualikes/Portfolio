import { motion } from 'framer-motion'
import { FiSend, FiArrowRight } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'

export default function CTA() {
  return (
    <section id="contact" className="py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#1e3a5f] p-10 sm:p-14"
        >
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
              {[...Array(20)].map((_, i) => (
                <circle
                  key={i}
                  cx={50 + (i % 5) * 180}
                  cy={50 + Math.floor(i / 5) * 100}
                  r="2"
                  fill="rgba(255,255,255,0.3)"
                />
              ))}
              <line x1="50" y1="50" x2="230" y2="150" stroke="rgba(255,255,255,0.1)" />
              <line x1="230" y1="150" x2="410" y2="50" stroke="rgba(255,255,255,0.1)" />
              <line x1="410" y1="50" x2="590" y2="150" stroke="rgba(255,255,255,0.1)" />
              <line x1="590" y1="150" x2="770" y2="50" stroke="rgba(255,255,255,0.1)" />
            </svg>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex w-12 h-12 rounded-xl bg-white/10 items-center justify-center shrink-0">
                <FiSend size={22} className="text-blue-300" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                  Let&apos;s build something amazing{' '}
                  <span className="text-blue-300">together.</span>
                </h2>
                <p className="text-slate-300 text-sm sm:text-base">
                  I&apos;m open to freelance opportunities and exciting projects.
                </p>
              </div>
            </div>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm rounded-lg transition-all shadow-lg shadow-purple-600/25 shrink-0"
            >
              GET IN TOUCH
              <FiArrowRight />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
