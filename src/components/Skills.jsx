import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'

export default function Skills() {
  const { isDark } = useTheme()
  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-theme-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-blue-400 text-sm font-medium tracking-widest mb-3">02. MY SKILLS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary">
            Technologies I work with
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            const iconColor = !isDark && skill.lightColor ? skill.lightColor : skill.color
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="flex flex-col items-center gap-3 p-4 w-24 sm:w-28 rounded-xl bg-theme-card border border-theme hover:border-theme-strong transition-colors cursor-default group"
              >
                <Icon
                  size={36}
                  style={{ color: iconColor }}
                  className="group-hover:drop-shadow-lg transition-all"
                />
                <span className="text-xs text-theme-muted font-medium">{skill.name}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
