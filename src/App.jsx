import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Code2,
  Sparkles,
  Heart,
  Brain,
  Zap,
  Star,
  BookOpen,
  Target,
  Rocket,
  Award,
  Home,
  User,
  Briefcase,
  Wrench,
  Mail,
  Phone,
  PhoneCall,
  ExternalLink,
  Copy,
  Check,
  Send,
} from 'lucide-react';
import { motion, useScroll, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useScrollAnimation } from './useScrollAnimation';
import { PORTFOLIO_CONFIG } from './portfolioConfig';

/* ━━━ BRAND ICONS (Inline SVG for instant crisp rendering) ━━━ */
const LinkedInIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
  </svg>
);

const GitHubIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

/* ━━━ High-Performance Interactive Button ━━━━━━━━━━━━ */
const ActionButton = ({ children, onClick, className = '', primary = false, href, target, rel }) => {
  const shouldReduceMotion = useReducedMotion();
  const baseClasses = `relative px-7 py-3.5 rounded-xl font-semibold transition-colors duration-200 overflow-hidden cursor-pointer inline-flex items-center justify-center gap-2 select-none ${
    primary
      ? 'bg-accent-dark text-white hover:bg-accent shadow-accent-sm hover:shadow-accent-md'
      : 'border border-accent-200/90 bg-white/95 text-gray-800 hover:border-accent hover:text-accent-dark hover:bg-accent-50/70 shadow-sm'
  } ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={baseClasses}
        whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClasses}
      whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </motion.button>
  );
};

/* ━━━ Circular Profile Photo Component ━━━━━━━━━━━━━━ */
const ProfilePhoto = ({ src = PORTFOLIO_CONFIG.profileImage, alt = PORTFOLIO_CONFIG.name }) => {
  const [imgError, setImgError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative mx-auto flex items-center justify-center select-none"
    >
      {/* Soft static ambient glow (hardware accelerated, zero blur overhead) */}
      <div
        className="absolute -inset-4 sm:-inset-6 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.25) 0%, rgba(221, 214, 254, 0.1) 60%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative delicate rotating dashed ring */}
      <div
        className="absolute -inset-2.5 sm:-inset-3.5 rounded-full border border-dashed border-accent-300/60 pointer-events-none"
        style={{ animation: 'spin 40s linear infinite', willChange: 'transform' }}
        aria-hidden="true"
      />

      {/* Gradient Ring Outer Frame */}
      <motion.div
        whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative p-1.5 sm:p-2 rounded-full bg-gradient-to-tr from-accent-600 via-accent-300 to-accent-dark shadow-accent-lg group cursor-default"
      >
        {/* Crisp white inner ring */}
        <div className="relative p-1 rounded-full bg-white">
          {/* Circular photo container */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-88 xl:h-88 rounded-full overflow-hidden bg-accent-50/60 shadow-inner flex items-center justify-center">
            {!imgError ? (
              <img
                src={src}
                alt={alt}
                onError={() => setImgError(true)}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-center rounded-full transition-transform duration-500 ease-out group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-accent-100 via-white to-accent-50 text-accent-dark p-6 text-center select-none">
                <div className="w-20 h-20 rounded-full bg-accent-dark text-white flex items-center justify-center font-display font-black text-3xl shadow-accent-sm mb-3">
                  SB
                </div>
                <span className="font-bold font-display text-gray-900 text-lg">Sanvitha Bettin</span>
                <span className="text-xs text-accent-dark/80 font-medium mt-1">ISE • Class of 2029</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Floating badge 1: Top-Right */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute -top-2 sm:-top-3 -right-2 sm:-right-4 bg-white border border-accent-200/90 rounded-2xl px-3.5 py-2 shadow-soft-md flex items-center gap-2 select-none"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-accent" />
        <span className="text-xs font-bold text-gray-800 font-display tracking-tight">Class of 2029</span>
      </motion.div>

      {/* Floating badge 2: Bottom-Left */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="absolute -bottom-2 sm:-bottom-3 -left-2 sm:-left-4 bg-white border border-accent-200/90 rounded-2xl px-3.5 py-2 shadow-soft-md flex items-center gap-2 select-none"
      >
        <Sparkles className="w-3.5 h-3.5 text-accent" />
        <span className="text-xs font-bold text-accent-dark font-display tracking-tight">Info Science</span>
      </motion.div>
    </motion.div>
  );
};

/* ━━━ Project Card ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const ProjectCard = ({ project, index, isVisible }) => {
  const isFeatured = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className={`group relative bg-white rounded-2xl p-0 overflow-hidden border transition-all duration-300 shadow-soft hover:shadow-soft-lg ${
        isFeatured ? 'border-accent/30' : 'border-gray-100 hover:border-accent/20'
      }`}
    >
      <div className="relative">
        {/* Card header */}
        <div className={`h-44 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:20px_20px]" />

          {isFeatured && (
            <div className="absolute top-4 right-4 bg-white text-accent text-xs font-bold px-3 py-1 rounded-full shadow-soft">
              ✦ FEATURED
            </div>
          )}

          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-white/20">
            <Sparkles className="w-7 h-7 text-white/90" />
          </div>
        </div>

        {/* Card body */}
        <div className="p-7">
          <h3 className="text-xl font-bold font-display mb-3 text-gray-900 group-hover:text-accent-dark transition-colors duration-200">
            {project.title}
          </h3>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {(project.tags || []).map((tag, i) => (
              <span
                key={i}
                className="text-xs font-semibold text-gray-700 bg-accent-50/60 border border-accent-100 rounded-full px-3.5 py-1.5 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ━━━ Skills Card ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const categoryAccents = {
  Languages: { icon: '💻' },
  Frontend: { icon: '🎨' },
  Backend: { icon: '⚙️' },
  'ML / AI Systems': { icon: '🧠' },
  'Databases & Infra': { icon: '🗄️' },
  Coursework: { icon: '📚' },
};

const SkillsCard = ({ skillGroup, index, isVisible }) => {
  const accent = categoryAccents[skillGroup.category] || { icon: '📦' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-7 border border-gray-100 shadow-soft hover:shadow-soft-lg hover:border-accent/20 transition-all duration-300"
    >
      <h3 className="text-lg font-bold font-display mb-5 pb-3 border-b border-gray-100 flex items-center gap-2.5 text-gray-900">
        <span className="text-base">{accent.icon}</span>
        {skillGroup.category}
      </h3>
      <ul className="space-y-2.5">
        {skillGroup.items.map((skill, i) => (
          <li
            key={i}
            className="text-gray-700 text-sm font-medium flex items-center gap-2.5 hover:text-accent-dark transition-colors duration-150"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

/* ━━━ Section Heading ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const SectionHeading = ({ title, subtitle, isVisible }) => (
  <div className="text-center mb-14">
    <motion.h2
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-3xl sm:text-4xl md:text-5xl font-black font-display mb-4 text-gray-900 tracking-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

/* ━━━ Copyable Contact Card ━━━━━━━━━━━━━━━━━━━━━━━━━ */
const ContactDetailCard = ({ icon: Icon, title, value, href, isExternal = false, onCopy, copied }) => {
  return (
    <div className="relative group bg-white rounded-2xl p-6 border border-accent-100/90 shadow-soft hover:shadow-soft-lg hover:border-accent/40 transition-all duration-300 flex flex-col justify-between text-left">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-accent-50 text-accent-dark flex items-center justify-center group-hover:bg-accent-dark group-hover:text-white transition-colors duration-300 shadow-sm">
            <Icon className="w-6 h-6" />
          </div>
          {onCopy && (
            <button
              onClick={onCopy}
              title="Copy to clipboard"
              className="p-2 rounded-lg text-gray-400 hover:text-accent-dark hover:bg-accent-50 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            </button>
          )}
        </div>
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">{title}</span>
        <div className="text-gray-900 font-semibold text-base break-all group-hover:text-accent-dark transition-colors">
          {value}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-sm font-bold text-accent-dark hover:text-accent flex items-center gap-1.5 transition-colors"
        >
          {isExternal ? 'Visit Profile' : title === 'Phone / Call' ? 'Call Now' : 'Send Message'}
          {isExternal ? <ExternalLink className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
        </a>
        {copied && <span className="text-xs text-green-600 font-medium">Copied!</span>}
      </div>
    </div>
  );
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ━━━ MAIN PORTFOLIO COMPONENT ━━━━━━━━━━━━━━━━━━━━━━ */
/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [copiedType, setCopiedType] = useState(null);
  const { scrollYProgress } = useScroll();

  const [aboutRef, isAboutVisible] = useScrollAnimation();
  const [projectsRef, isProjectsVisible] = useScrollAnimation();
  const [skillsRef, isSkillsVisible] = useScrollAnimation();
  const [contactRef, isContactVisible] = useScrollAnimation();

  // Optimized lightweight scroll detection for navbar elevation
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsNavScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType((curr) => (curr === type ? null : curr));
    }, 2000);
  };

  const projects = [
    {
      title: 'A Multi-Modal Voice Liveness Detection Framework using Vocal Biomarkers',
      description:
        'An AI-based system that verifies whether a voice sample is from a live human or a spoofed recording. By analyzing vocal biomarkers and multiple speech characteristics, the framework enhances authentication security, improves spoof detection accuracy, and helps prevent voice-based identity fraud.',
      link: '#',
      github: '#',
      color: 'from-gray-700 to-gray-900',
      tags: ['Python', 'Machine Learning', 'Deep Learning', 'Vocal Biomarkers'],
    },
    {
      title: 'Smart Unified Project Recommendation System',
      description:
        'A web-based platform that recommends suitable project ideas by integrating data from GitHub repositories, public datasets, and research papers through automated API extraction. It classifies projects into difficulty levels while assigning novelty and rating scores.',
      link: '#',
      github: '#',
      color: 'from-purple-900 to-accent-dark',
      tags: ['React', 'Web Scraping', 'REST API', 'Metadata Extraction', 'Machine Learning'],
    },
    {
      title: 'PEER-LEARN : Study Partner Finder',
      description:
        'Smart web application that provides instant previews for educational topics and project collaboration. It delivers concise definitions, extracts essential webpage metadata, and presents information in a clear format to streamline collaborative student learning.',
      link: '#',
      github: '#',
      color: 'from-gray-800 to-purple-950',
      tags: ['React', 'Web Application', 'REST API', 'Information Science'],
    },
  ];

  const skills = [
    { category: 'Languages', items: ['Python', 'C', 'SQL', 'Java (basics)'] },
    { category: 'Web & Backend', items: ['FastAPI', 'Next.js', 'REST APIs', 'HTML/CSS'] },
    {
      category: 'ML / AI Systems',
      items: ['RAG pipelines', 'pgvector', 'Redis caching', 'Quantization (GGUF)', 'Model Evaluation'],
    },
    {
      category: 'Databases & Infra',
      items: ['PostgreSQL', 'Neon', 'SQLAlchemy', 'Git', 'GitHub', 'VS Code'],
    },
    { category: 'Coursework', items: ['DSA', 'OOPS', 'DBMS', 'Operating Systems'] },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9FC] text-gray-900 overflow-x-hidden font-sans selection:bg-accent-light selection:text-accent-dark">
      {/* ━━━ NAVIGATION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <nav className="fixed top-0 w-full z-50 transition-colors duration-200">
        {/* Reading Progress Bar */}
        <motion.div
          className="h-[3px] bg-gradient-to-r from-accent via-accent-light to-accent-dark origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        <div
          className={`w-full transition-all duration-200 ${
            isNavScrolled ? 'bg-white/95 border-b border-accent-100 shadow-sm' : 'bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className={`flex justify-between items-center w-full transition-all duration-200 ${isNavScrolled ? 'h-16' : 'h-20'}`}>
              {/* ━━━ LOGO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
              <button
                onClick={() => scrollToSection('home')}
                className="flex items-center gap-3 cursor-pointer group text-left"
              >
                {/* Monogram */}
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-accent via-accent-dark to-purple-950 flex items-center justify-center shadow-md overflow-hidden group-hover:scale-105 transition-transform duration-200">
                  <span className="text-white font-black font-display text-sm tracking-tight select-none">SB</span>
                </div>

                {/* Name & Academic discipline */}
                <div className="flex flex-col items-start leading-none">
                  <span className="font-bold font-display tracking-tight text-base md:text-lg text-gray-900 group-hover:text-accent-dark transition-colors">
                    Sanvitha Bettin
                  </span>
                  <span className="hidden sm:block text-[11px] uppercase tracking-wider text-gray-500 font-semibold mt-1">
                    Information Science • 2029
                  </span>
                </div>
              </button>

              {/* ━━━ DESKTOP NAV LINKS ━━━━━━━━━━━━━━━ */}
              <div className="hidden md:flex items-center gap-1 bg-white/90 p-1.5 rounded-full border border-accent-100 shadow-sm">
                {[
                  { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
                  { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
                  { id: 'projects', label: 'Projects', icon: <Briefcase className="w-4 h-4" /> },
                  { id: 'skills', label: 'Skills', icon: <Wrench className="w-4 h-4" /> },
                  { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      activeSection === item.id
                        ? 'bg-accent-dark text-white shadow-sm'
                        : 'text-gray-600 hover:text-accent-dark hover:bg-accent-50/80'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

              {/* ━━━ MOBILE MENU TOGGLE ━━━━━━━━━━━━━━ */}
              <div className="md:hidden flex items-center">
                <button
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle Navigation Menu"
                >
                  {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ━━━ MOBILE MENU DRAWER ━━━━━━━━━━━━━━━━━ */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden px-4 pb-4 bg-white/98 border-b border-accent-100 shadow-lg"
            >
              <div className="p-2 space-y-1">
                {[
                  { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
                  { id: 'about', label: 'About', icon: <User className="w-5 h-5" /> },
                  { id: 'projects', label: 'Projects', icon: <Briefcase className="w-5 h-5" /> },
                  { id: 'skills', label: 'Skills', icon: <Wrench className="w-5 h-5" /> },
                  { id: 'contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-bold transition-colors ${
                      activeSection === item.id ? 'bg-accent-dark text-white' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ━━━ HERO SECTION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-20 px-6 lg:px-12 relative overflow-hidden"
      >
        {/* Soft background ambient gradients (zero filter blur overhead) */}
        <div
          className="absolute top-1/4 right-10 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 left-10 w-[450px] h-[450px] rounded-full pointer-events-none opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Desktop Left / Mobile Bottom: Text & CTAs */}
            <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start">
              {/* Academic badge */}
              <div className="mb-6 inline-flex items-center gap-2">
                <span className="text-xs sm:text-sm font-semibold text-accent-dark px-4 sm:px-5 py-2 bg-accent-50 rounded-full border border-accent-200/90 shadow-sm flex items-center gap-2 text-center">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
                  Information Science Engineering Student • Expected Graduation: 2029
                </span>
              </div>

              {/* Hero headline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-[1.15] tracking-tight">
                <span className="block text-gray-500 font-light text-2xl sm:text-3xl md:text-4xl mb-1">Hi, I'm</span>
                <span className="block text-gray-900">
                  Sanvitha <span className="font-black text-accent-dark">Bettin.</span>
                </span>
              </h1>

              {/* Sub-headline */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-accent-dark mb-6 leading-snug">
                Information Science Student | Exploring Technology & Innovation
              </h2>

              {/* Short Authentic Bio */}
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
                Hi, I'm Sanvitha Bettin, an Information Science Engineering student passionate about exploring
                technology, learning new skills, and building meaningful digital experiences.
              </p>

              {/* Highlight Tag Badges */}
              <div className="flex flex-wrap gap-2.5 mb-10 justify-center lg:justify-start">
                {[
                  { label: 'Information Science', icon: '💻' },
                  { label: 'Exploring Technology', icon: '🚀' },
                  { label: 'Problem Solving', icon: '💡' },
                  { label: 'Continuous Learning', icon: '🌱' },
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-accent-100 text-gray-700 shadow-sm"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <ActionButton primary onClick={() => scrollToSection('projects')} className="w-full sm:w-auto">
                  Explore My Projects
                  <ChevronDown className="w-4 h-4" />
                </ActionButton>
                <ActionButton onClick={() => scrollToSection('contact')} className="w-full sm:w-auto">
                  Contact Me
                  <Mail className="w-4 h-4 text-accent" />
                </ActionButton>
              </div>
            </div>

            {/* Desktop Right / Mobile Top: Profile Photo */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <ProfilePhoto src={PORTFOLIO_CONFIG.profileImage} alt={PORTFOLIO_CONFIG.name} />
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ ABOUT SECTION ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="about"
        ref={aboutRef}
        className="min-h-screen py-24 px-6 lg:px-12 flex items-center relative bg-gray-50/60"
      >
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <SectionHeading
            title="About Me"
            subtitle="An Information Science Engineering student passionate about technology, innovation, and building meaningful digital experiences."
            isVisible={isAboutVisible}
          />

          {/* Authentic Focus Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-14">
            {[
              {
                label: 'Engineering Discipline',
                value: 'ISE',
                icon: <Code2 className="w-5 h-5" />,
                grad: 'from-accent-dark to-accent',
              },
              {
                label: 'Expected Graduation',
                value: '2029',
                icon: <Rocket className="w-5 h-5" />,
                grad: 'from-purple-900 to-accent',
              },
              {
                label: 'Core Passion',
                value: 'Tech & Innovation',
                icon: <Brain className="w-5 h-5" />,
                grad: 'from-gray-900 to-accent-dark',
              },
              {
                label: 'Growth Mindset',
                value: '100%',
                icon: <Sparkles className="w-5 h-5" />,
                grad: 'from-accent-dark to-accent-400',
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border border-accent-100 shadow-soft bg-white transition-transform duration-200 hover:-translate-y-1"
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.grad} flex items-center justify-center mb-3 shadow-md text-white`}
                >
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-black font-display text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left: Bio Card */}
            <div className="lg:col-span-3 rounded-3xl bg-white border border-accent-200/90 shadow-soft p-8 md:p-10 relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-accent/20 bg-accent-50">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-accent-dark">
                  Information Science Engineering • Class of 2029
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black font-display mb-6 text-gray-900">
                Hey, I'm Sanvitha Bettin! 👋
              </h3>

              <div className="space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent-50 text-accent-dark shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <p>
                    I'm an <strong className="text-accent-dark">Information Science Engineering student</strong> passionate
                    about exploring technology, learning new skills, and building meaningful digital experiences.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent-50 text-accent-dark shrink-0">
                    <Brain className="w-5 h-5" />
                  </div>
                  <p>
                    Technology fascinates me because there is always something innovative to discover. I enjoy learning
                    computing fundamentals, understanding modern software architecture, and continuously challenging
                    myself.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent-50 text-accent-dark shrink-0">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <p>
                    I believe in the power of technology to transform ideas into reality. Driven by curiosity, I'm
                    dedicated to growing my technical knowledge and creating purposeful digital solutions.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  {[Star, Heart, Zap, Award].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-lg flex items-center justify-center bg-accent-50 text-accent-dark"
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  ))}
                </div>
                <ActionButton primary onClick={() => scrollToSection('contact')}>
                  Let's Connect
                  <ChevronDown className="w-4 h-4 -rotate-90" />
                </ActionButton>
              </div>
            </div>

            {/* Right: Info Cards */}
            <div className="lg:col-span-2 space-y-6">
              {/* Education Card */}
              <div className="p-7 rounded-2xl bg-white border border-accent-100 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-accent-dark text-white shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black font-display mb-1 text-gray-900">Education</h3>
                    <p className="text-gray-900 font-bold text-sm">Information Science Engineering</p>
                    <p className="text-accent-dark font-medium text-xs mb-3">Expected Graduation: 2029</p>
                    <div className="flex gap-2 flex-wrap">
                      {['Information Science & Eng.', '2029', 'Undergraduate'].map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold px-3 py-1 rounded-full bg-accent-50 text-accent-dark border border-accent-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Interests Card */}
              <div className="p-7 rounded-2xl bg-white border border-accent-100 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-purple-900 text-white shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black font-display mb-3 text-gray-900">Areas of Interest</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Technology & Innovation',
                        'Software Development',
                        'Information Science',
                        'Problem Solving',
                        'Web Technologies',
                      ].map((name, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold px-3 py-1.5 rounded-full bg-accent-50 text-accent-dark border border-accent-100"
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ PROJECTS SECTION ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="projects" ref={projectsRef} className="min-h-screen py-24 px-6 lg:px-12 flex items-center relative">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeading
            title="Featured Projects"
            subtitle="Exploring digital solutions through authentic engineering projects and continuous learning."
            isVisible={isProjectsVisible}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} isVisible={isProjectsVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ SKILLS SECTION ━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="skills"
        ref={skillsRef}
        className="min-h-screen py-24 px-6 lg:px-12 flex items-center relative bg-gray-50/60"
      >
        <div className="max-w-6xl mx-auto w-full">
          <SectionHeading
            title="Skills & Technical Interests"
            subtitle="Foundational engineering concepts and technologies explored during academic studies."
            isVisible={isSkillsVisible}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <SkillsCard key={index} skillGroup={skillGroup} index={index} isVisible={isSkillsVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ CONTACT SECTION ━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="contact" ref={contactRef} className="pt-28 pb-24 px-6 lg:px-12 relative">
        <div className="max-w-6xl mx-auto w-full">
          <SectionHeading
            title="Let's Connect"
            subtitle="I'm always excited to connect with fellow students, developers, and tech enthusiasts. Reach out via email, phone, LinkedIn, or GitHub!"
            isVisible={isContactVisible}
          />

          {/* 4 Interactive Contact Detail Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <ContactDetailCard
              icon={Mail}
              title="Email"
              value={PORTFOLIO_CONFIG.emailDisplay}
              href={PORTFOLIO_CONFIG.email}
              onCopy={() => handleCopy(PORTFOLIO_CONFIG.emailDisplay, 'email')}
              copied={copiedType === 'email'}
            />

            <ContactDetailCard
              icon={PhoneCall}
              title="Phone / Call"
              value={PORTFOLIO_CONFIG.phoneDisplay}
              href={PORTFOLIO_CONFIG.phoneHref}
              onCopy={() => handleCopy(PORTFOLIO_CONFIG.phoneRaw, 'phone')}
              copied={copiedType === 'phone'}
            />

            <ContactDetailCard
              icon={LinkedInIcon}
              title="LinkedIn"
              value="sanvitha-bettin"
              href={PORTFOLIO_CONFIG.linkedin}
              isExternal
            />

            <ContactDetailCard
              icon={GitHubIcon}
              title="GitHub"
              value="sanvithabettin"
              href={PORTFOLIO_CONFIG.github}
              isExternal
            />
          </div>

          {/* Banner Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-accent-100 shadow-soft text-center max-w-3xl mx-auto relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-black font-display mb-3 text-gray-900">
                Let's Build Something <span className="text-accent-dark">Meaningful</span> Together
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base max-w-xl mx-auto">
                Whether you'd like to discuss engineering, share innovative project ideas, or simply say hello — feel
                free to reach out directly.
              </p>

              <div className="flex gap-3.5 justify-center flex-wrap">
                <ActionButton primary href={PORTFOLIO_CONFIG.email}>
                  <Mail className="w-4 h-4" />
                  Send Email
                </ActionButton>
                <ActionButton href={PORTFOLIO_CONFIG.phoneHref}>
                  <Phone className="w-4 h-4 text-accent" />
                  Call: {PORTFOLIO_CONFIG.phoneRaw}
                </ActionButton>
                <ActionButton href={PORTFOLIO_CONFIG.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
                  LinkedIn
                </ActionButton>
                <ActionButton href={PORTFOLIO_CONFIG.github} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="w-4 h-4 text-gray-900" />
                  GitHub
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ FOOTER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <footer className="border-t border-accent-100 py-10 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="font-bold font-display text-gray-900 text-base">Sanvitha Bettin</div>
            <p className="text-gray-500 text-xs mt-1">Information Science Engineering Student • Class of 2029</p>
            <p className="text-gray-400 text-xs mt-0.5">© 2026 Sanvitha Bettin. All rights reserved.</p>
          </div>

          <div className="flex gap-5 items-center flex-wrap justify-center">
            <a
              href={PORTFOLIO_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent-dark text-sm font-semibold flex items-center gap-1.5 transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href={PORTFOLIO_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-950 text-sm font-semibold flex items-center gap-1.5 transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={PORTFOLIO_CONFIG.email}
              className="text-gray-600 hover:text-accent-dark text-sm font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href={PORTFOLIO_CONFIG.phoneHref}
              className="text-gray-600 hover:text-accent-dark text-sm font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {PORTFOLIO_CONFIG.phoneRaw}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
