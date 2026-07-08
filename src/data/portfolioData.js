import resumePdf from '../assets/Antonio Joshua ATS Resume.pdf'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
} from 'react-icons/si'

export const personalInfo = {
  name: 'Joshua Antonio',
  fullName: 'Joshua Antonio',
  title: 'IT Developer',
  tagline: 'I build scalable, secure and high-performance web applications.',
  description:
    'Passionate about turning complex problems into simple, beautiful, and intuitive solutions. I specialize in full-stack development with a focus on user experience and performance.',
  aboutHeading: 'Building digital solutions that drive real impact.',
  aboutText:
    "I'm an IT Developer specializing in full-stack development with a passion for creating elegant, user-friendly applications. With expertise in modern web technologies, I transform ideas into powerful digital experiences that solve real-world problems.",
  email: 'joshualikes09282@gmail.com',
  phone: '+63 956 681 2276',
  location: 'Philippines',
  resumeUrl: resumePdf,
  social: {
    github: 'https://github.com/Joshualikes',
    linkedin: 'https://www.linkedin.com/in/joshua-antonio-1412ba18b/',
    facebook: 'https://www.facebook.com/Mr.Antonio28/',
    email: 'mailto:joshualikes09282@gmail.com',
  },
}

export const navLinks = [
  { id: 'home', label: 'HOME', href: '#home' },
  { id: 'about', label: 'ABOUT', href: '#about' },
  { id: 'skills', label: 'SKILLS', href: '#skills' },
  { id: 'projects', label: 'PROJECTS', href: '#projects' },
  { id: 'contact', label: 'CONTACT', href: '#contact' },
]

export const aboutFeatures = [
  {
    title: 'Full-Stack Development',
    description: 'Building responsive and scalable web applications with modern frontend and backend technologies.',
    icon: 'code',
  },
  {
    title: 'Multimedia Editing',
    description: 'Producing engaging multimedia content through professional video editing, photo enhancement, and graphic design.',
    icon: 'rocket',
  },
  {
    title: 'Team Player',
    description: 'Collaborative developer who thrives in team environments.',
    icon: 'users',
  },
]

export const skills = [
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'SQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
]

export const projects = [
  {
    title: 'AR-Based Urban Gardening Assistant',
    description:
      'A smart gardening system that combines Augmented Reality (AR), an AI Scanner Camera, and IoT sensors to help users identify plants, visualize planting guides, monitor environmental conditions, and receive real-time gardening recommendations for healthier plant growth.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop',
    badge: 'Full Stack',
    badgeColor: 'purple',
    tags: ['React', 'Vite', 'Typescript', 'Arduino', 'Supabase ', 'Unity Vuforia'],
    link: '#',
  },
  {
    title: 'Virtue Verse A bible story coloring game app',
    description:
      'Virtue Verse is an interactive Bible story coloring game designed to teach values to children through gamified learning. The app combines Bible stories, coloring activities, and engaging gameplay to make learning about faith, kindness, honesty, and compassion both fun and educational.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop',
    badge: 'Full Stack',
    badgeColor: 'purple',
    tags: ['React Native', 'Supabase', 'Typescript', 'Tailwind', 'Next.js'],
    link: '#',
  },
  {
    title: 'World War II Learning Game with AI Scanner',
    description:
      'Collaborative project management tool with kanban boards, time tracking, and team communication features.',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=340&fit=crop',
    badge: 'Frontend',
    badgeColor: 'blue',
    tags: ['React', 'TypeScript', 'Tailwind', 'Supabase', 'Vite', 'JavaScript'],
    link: '#',
  },
]

export const footerServices = [
  'Web Development',
  'Frontend Development',
  'Backend Development',
  'Editing',
]
