import { motion } from 'framer-motion'

const fileTree = [
  { name: 'src', indent: 0, folder: true },
  { name: 'components', indent: 1, folder: true },
  { name: 'Hero.jsx', indent: 2, active: false },
  { name: 'About.jsx', indent: 2, active: false },
  { name: 'Projects.jsx', indent: 2, active: false },
  { name: 'Contact.jsx', indent: 2, active: false },
  { name: 'pages', indent: 1, folder: true },
  { name: 'App.jsx', indent: 1, active: true },
  { name: 'index.js', indent: 0, active: false },
]

const codeLines = [
  { num: 1, content: 'import React from "react";' },
  { num: 2, content: 'import Hero from "./components/Hero";' },
  { num: 3, content: 'import About from "./components/About";' },
  { num: 4, content: 'import Projects from "./components/Projects";' },
  { num: 5, content: 'import Contact from "./components/Contact";' },
  { num: 6, content: '' },
  { num: 7, content: 'function App() {' },
  { num: 8, content: '  return (' },
  { num: 9, content: '    <main className="app">' },
  { num: 10, content: '      <Hero />' },
  { num: 11, content: '      <About />' },
  { num: 12, content: '      <Projects />' },
  { num: 13, content: '      <Contact />' },
  { num: 14, content: '    </main>' },
  { num: 15, content: '  );' },
  { num: 16, content: '}' },
  { num: 17, content: '' },
  { num: 18, content: 'export default App;' },
]

function highlightCode(line) {
  if (!line) return null
  return line
    .replace(/(import|from|function|return|export default)/g, '<span class="text-purple-400">$1</span>')
    .replace(/(".*?")/g, '<span class="text-green-400">$1</span>')
    .replace(/(<\/?[\w\s="/.-]+>)/g, '<span class="text-blue-300">$1</span>')
    .replace(/(<\w+\s*\/>)/g, '<span class="text-blue-300">$1</span>')
}

export default function CodeEditor() {
  return (
    <motion.div
      whileHover={{ rotateY: -2, rotateX: 2 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className="relative perspective-1000"
      style={{ perspective: '1000px' }}
    >
      <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10 bg-[#1e1e2e] transform rotate-y-[-2deg]">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#181825] border-b border-white/5">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-slate-500 ml-2 font-mono">App.jsx — Portfolio</span>
        </div>

        <div className="flex">
          <div className="w-44 bg-[#11111b] border-r border-white/5 py-3 hidden xl:block">
            {fileTree.map((item) => (
              <div
                key={item.name}
                className={`px-3 py-1 text-xs font-mono cursor-default ${
                  item.active
                    ? 'text-white bg-white/5 border-l-2 border-blue-500'
                    : 'text-slate-500'
                }`}
                style={{ paddingLeft: `${12 + item.indent * 12}px` }}
              >
                {item.folder ? '📁 ' : '📄 '}
                {item.name}
              </div>
            ))}
          </div>

          <div className="flex-1 py-3 overflow-x-auto">
            {codeLines.map((line) => (
              <div key={line.num} className="flex font-mono text-xs leading-6 hover:bg-white/[0.02]">
                <span className="w-10 text-right pr-4 text-slate-600 select-none shrink-0">
                  {line.num}
                </span>
                <span
                  className="text-slate-300 pr-4"
                  dangerouslySetInnerHTML={{ __html: highlightCode(line.content) || '&nbsp;' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl -z-10" />
    </motion.div>
  )
}
