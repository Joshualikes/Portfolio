import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/portfolioData'

const badgeStyles = {
  purple:
    'light:bg-purple-100 light:text-purple-700 light:border-purple-300 dark:bg-purple-500/20 dark:text-purple-300 dark:border-purple-500/30',
  blue:
    'light:bg-blue-100 light:text-blue-700 light:border-blue-300 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-500/30',
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-blue-400 text-sm font-medium tracking-widest mb-2">
            03. FEATURED PROJECTS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary">Recent work</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl overflow-hidden bg-theme-card border border-theme hover:border-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="p-5">
                <span
                  className={`inline-block mb-3 px-2.5 py-1 text-[10px] font-semibold rounded-full border ${badgeStyles[project.badgeColor]}`}
                >
                  {project.badge}
                </span>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-bold text-lg text-theme-primary">{project.title}</h3>
                  <a
                    href={project.link}
                    className="text-theme-subtle hover:text-blue-400 transition-colors shrink-0 mt-1"
                    aria-label={`View ${project.title}`}
                  >
                    <FiExternalLink size={18} />
                  </a>
                </div>
                <p className="text-sm text-theme-muted leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-medium rounded bg-theme-secondary text-theme-muted border border-theme"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
