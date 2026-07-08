import { motion } from 'framer-motion'
import { FiUser, FiCode, FiCpu, FiZap, FiUsers } from 'react-icons/fi'
import { personalInfo, aboutFeatures } from '../data/portfolioData'
import joshuaPhoto from '../assets/joshua.png'

const iconMap = {
  code: FiCode,
  puzzle: FiCpu,
  rocket: FiZap,
  users: FiUsers,
}

export default function About() {
  const { aboutHeading, aboutText, experience } = personalInfo

  return (
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 relative"
          >
            <div className="relative rounded-2xl overflow-hidden glow-blue">
              <img
                src={joshuaPhoto}
                alt={personalInfo.name}
                className="w-full aspect-[4/5] object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t to-transparent"
                style={{ backgroundImage: `linear-gradient(to top, var(--theme-image-overlay), transparent)` }}
              />
              <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-blue-600/90 backdrop-blur-sm rounded-lg text-xs font-semibold">
                {experience}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <p className="text-blue-400 text-sm font-medium tracking-widest mb-3">01. ABOUT ME</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-theme-primary">
              {aboutHeading.split('impact.')[0]}
              <span className="text-purple-400">impact.</span>
            </h2>
            <p className="text-theme-muted leading-relaxed mb-8">{aboutText}</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 font-semibold text-sm rounded-lg transition-colors"
            >
              <FiUser />
              MORE ABOUT ME
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {aboutFeatures.map((feature, index) => {
              const Icon = iconMap[feature.icon]
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-theme-card border border-theme hover:border-blue-500/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-3 group-hover:bg-blue-500/20 transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-sm mb-1 text-theme-primary">{feature.title}</h3>
                  <p className="text-xs text-theme-subtle leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
