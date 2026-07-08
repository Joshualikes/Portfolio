import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const sizes = {
  sm: { button: 'w-8 h-8', icon: 14 },
  md: { button: 'w-9 h-9', icon: 16 },
  lg: { button: 'w-11 h-11', icon: 20 },
}

export default function ThemeToggle({ size = 'md', className = '' }) {
  const { isDark, toggleTheme } = useTheme()
  const { button, icon } = sizes[size] ?? sizes.md

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle ${button} rounded-lg border flex items-center justify-center transition-colors ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? <FiSun size={icon} /> : <FiMoon size={icon} />}
    </button>
  )
}
