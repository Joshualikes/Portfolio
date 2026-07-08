import { motion } from 'framer-motion'
import { SiReact, SiNodedotjs, SiTypescript, SiGit } from 'react-icons/si'

const codeSnippet = [
  { line: 1, tokens: [{ t: 'const', c: 'text-purple-400' }, { t: ' developer', c: 'text-blue-400' }, { t: ' = {', c: 'text-theme-muted' }] },
  { line: 2, tokens: [{ t: '  name:', c: 'text-theme-muted' }, { t: " 'Joshua Antonio'", c: 'text-emerald-400' }, { t: ',', c: 'text-theme-muted' }] },
  { line: 3, tokens: [{ t: '  role:', c: 'text-theme-muted' }, { t: " 'Full-Stack Developer'", c: 'text-emerald-400' }, { t: ',', c: 'text-theme-muted' }] },
  { line: 4, tokens: [{ t: '  skills:', c: 'text-theme-muted' }, { t: " ['React', 'Node', 'TS']", c: 'text-emerald-400' }, { t: ',', c: 'text-theme-muted' }] },
  { line: 5, tokens: [{ t: '  build:', c: 'text-theme-muted' }, { t: ' () =>', c: 'text-purple-400' }, { t: ' {', c: 'text-theme-muted' }] },
  { line: 6, tokens: [{ t: '    return', c: 'text-purple-400' }, { t: ' scalableApps', c: 'text-blue-400' }, { t: '.', c: 'text-theme-muted' }, { t: 'deploy', c: 'text-yellow-400' }, { t: '()', c: 'text-theme-muted' }] },
  { line: 7, tokens: [{ t: '  }', c: 'text-theme-muted' }] },
  { line: 8, tokens: [{ t: '}', c: 'text-theme-muted' }] },
]

const floatingIcons = [
  { Icon: SiReact, color: '#61DAFB', delay: 0, x: '95%', y: '8%' },
  { Icon: SiNodedotjs, color: '#339933', delay: 0.4, x: '95%', y: '60%' },
  { Icon: SiTypescript, color: '#3178C6', delay: 0.8, x: '-5%', y: '72%' },
  { Icon: SiGit, color: '#F05032', delay: 1.2, x: '-5%', y: '18%' },
]

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative flex items-center justify-center min-h-[380px] lg:min-h-[480px] w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 blur-3xl" />

      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07] dark:opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-500" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {floatingIcons.map(({ Icon, color, delay, x, y }) => (
        <motion.div
          key={color}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 + delay }}
          className="absolute w-11 h-11 rounded-xl bg-theme-card border border-theme flex items-center justify-center shadow-lg"
          style={{ left: x, top: y }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3 + delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Icon size={22} style={{ color }} />
          </motion.div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative w-full max-w-md rounded-2xl border border-theme bg-theme-card/80 backdrop-blur-sm shadow-2xl glow-blue overflow-hidden"
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-theme bg-theme-secondary/50">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-xs text-theme-subtle font-mono">developer.js</span>
        </div>

        <div className="p-5 font-mono text-[13px] leading-relaxed overflow-hidden">
          {codeSnippet.map(({ line, tokens }) => (
            <div key={line} className="flex">
              <span className="select-none w-8 text-theme-subtle/50 text-right mr-4 shrink-0 tabular-nums">{line}</span>
              <span className="min-w-0">
                {tokens.map(({ t, c }, i) => (
                  <span key={i} className={c}>
                    {t}
                  </span>
                ))}
              </span>
            </div>
          ))}
          <div className="flex">
            <span className="select-none w-8 mr-4 shrink-0" aria-hidden="true" />
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block w-0.5 h-4 bg-blue-400 align-middle"
            />
          </div>
        </div>

        <div className="px-4 py-2 border-t border-theme flex items-center gap-3 text-[10px] text-theme-subtle font-mono">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </span>
          <span>TypeScript</span>
          <span>UTF-8</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-purple-500/20 blur-2xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-blue-500/20 blur-2xl pointer-events-none"
      />
    </motion.div>
  )
}
