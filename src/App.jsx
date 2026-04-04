import { useEffect, useRef, useState } from 'react'
import './App.css'

const projects = [
  {
    title: 'Dopaminder',
    subtitle: 'WICSE Spring Design Team · 2026',
    desc:
      'A full-stack companion for ADHD-friendly planning — moods, tasks, rewards, notes, and AI-suggested subtasks. Built with a React client and FastAPI + PostgreSQL on the backend.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Python'],
    github: 'https://github.com/sierraE1/designTeam',
    live: null,
    image:
      'https://raw.githubusercontent.com/sierraE1/designTeam/main/frontend/src/assets/Logo.png',
    imageAlt: 'Dopaminder product logo',
    comingSoon: false,
    imageFit: 'contain',
  },
  {
    title: 'SASE Hacks 2026',
    subtitle: 'Computer vision × the web',
    desc:
      'Hackathon project: hand tracking and “air drawing” piped into a Flask app with a styled gallery — save sketches, browse the wall, and iterate in the browser.',
    tech: ['Python', 'Flask', 'OpenCV', 'HTML/CSS'],
    github: 'https://github.com/florida-k/sasehacks2026',
    live: null,
    image:
      'https://raw.githubusercontent.com/florida-k/sasehacks2026/main/static/Title-SASEhacks.png',
    imageAlt: 'SASE Hacks 2026 title artwork',
    comingSoon: false,
  },
  {
    title: 'Minesweeper',
    subtitle: 'In the works',
    desc:
      'A careful rebuild of the classic grid game for the web — readable tiles, satisfying reveals, and keyboard-friendly play. Repository and demo landing very soon.',
    tech: ['React', 'TypeScript', 'CSS'],
    github: null,
    live: null,
    image: '/project-images/minesweeper-soon.svg',
    imageAlt: 'Minesweeper preview placeholder',
    comingSoon: true,
  },
]

const NAV_IDS = ['about', 'projects', 'contact']

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-18% 0px -55% 0px', threshold: [0, 0.12, 0.25] }
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <div className="app__ambient" aria-hidden />
      <header>
        <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} aria-label="Primary">
          <a className="nav__brand" href="#top">
            florida ✦
          </a>
          <div className="nav__links">
            <a
              className={`nav__link ${activeSection === 'about' ? 'nav__link--active' : ''}`}
              href="#about"
              aria-current={activeSection === 'about' ? 'true' : undefined}
            >
              about
            </a>
            <a
              className={`nav__link ${activeSection === 'projects' ? 'nav__link--active' : ''}`}
              href="#projects"
              aria-current={activeSection === 'projects' ? 'true' : undefined}
            >
              projects
            </a>
            <a
              className={`nav__link ${activeSection === 'contact' ? 'nav__link--active' : ''}`}
              href="#contact"
              aria-current={activeSection === 'contact' ? 'true' : undefined}
            >
              contact
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero__glow hero__glow--a" aria-hidden />
          <div className="hero__glow hero__glow--b" aria-hidden />
          <Reveal>
            <p className="hero__eyebrow">✦ portfolio</p>
            <h1 id="hero-heading" className="hero__title">
              hi, i&apos;m florida —<br />
              <em>i build things for the web.</em>
            </h1>
            <p className="hero__lead">
              I&apos;m a developer who loves building clean, thoughtful digital experiences.
              Currently studying at UF, always working on something new.
            </p>
            <div className="hero__meta">
              <span className="hero__chip">Gainesville, FL</span>
              <span className="hero__chip">Full-stack curious</span>
              <span className="hero__chip">Open to opportunities</span>
            </div>
            <div className="hero__actions">
              <a href="#projects" className="btn">
                view my work →
              </a>
              <a href="mailto:florida.kawmi@ufl.edu" className="btn btn--ghost">
                get in touch
              </a>
            </div>
          </Reveal>
        </section>

        <div className="section-wave" aria-hidden />

        <section id="about" className="section" aria-labelledby="about-heading">
          <Reveal>
            <p className="section__label">✦ about me</p>
          </Reveal>
          <div className="about__grid">
            <Reveal delay={0.06}>
              <div>
                <h2 id="about-heading" className="section__title">
                  a little about me
                </h2>
                <div className="about__text">
                  <p>
                    I&apos;m Florida, a developer based in Gainesville. I enjoy creating things that
                    live on the internet — from hackathon builds to design-team products.
                  </p>
                  <p>
                    Lately that&apos;s meant WICSE design work (like Dopaminder), SASE Hacks builds,
                    and polishing games and tools I wish existed.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="skills-card">
                <p className="skills-card__label">skills</p>
                {['JavaScript', 'React', 'Node.js', 'Python', 'CSS', 'Git'].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="projects" className="section section--projects" aria-labelledby="projects-heading">
          <Reveal>
            <p className="section__label">✦ projects</p>
            <h2 id="projects-heading" className="projects__title">
              things i&apos;ve built
            </h2>
            <p className="projects__intro">
              Featured work from my{' '}
              <a href="https://github.com/florida-k" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              — hover the previews for a little depth.
            </p>
          </Reveal>
          <div className="project-showcase-list">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={0.06 * i}>
                <ProjectShowcase project={p} index={i} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact" aria-labelledby="contact-heading">
          <Reveal>
            <p className="section__label">✦ contact</p>
            <h2 id="contact-heading" className="section__title">
              let&apos;s talk
            </h2>
            <p className="contact__blurb">
              Open to internships, collabs, or just a good conversation. Drop me a line.
            </p>
            <a href="mailto:florida.kawmi@ufl.edu" className="btn">
              say hello →
            </a>
            <div className="contact__social">
              <a href="https://github.com/florida-k" target="_blank" rel="noopener noreferrer">
                github
              </a>
              <a href="https://www.linkedin.com/in/florida-k/" target="_blank" rel="noopener noreferrer">
                linkedin
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Florida Kawmi · crafted with care</p>
      </footer>
    </div>
  )
}

function ProjectShowcase({ project, index }) {
  const reverse = index % 2 === 1
  const figure = <ProjectFigure project={project} />

  return (
    <article className={`project-showcase ${reverse ? 'project-showcase--reverse' : ''}`}>
      <div className="project-showcase__media">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-showcase__visual-hit"
            aria-label={`${project.title}: view repository on GitHub`}
          >
            {figure}
          </a>
        ) : (
          <div className="project-showcase__visual-hit project-showcase__visual-hit--static">{figure}</div>
        )}
      </div>
      <div className="project-showcase__body">
        <p className="project-showcase__eyebrow">{project.subtitle}</p>
        <h3 className="project-showcase__title">{project.title}</h3>
        <p className="project-showcase__desc">{project.desc}</p>
        <div className="project-showcase__tags">
          {project.tech.map((t) => (
            <span key={t} className="skill-tag skill-tag--project">
              {t}
            </span>
          ))}
        </div>
        <div className="project-showcase__actions">
          {project.github && (
            <a
              href={project.github}
              className="project-showcase__btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              code on github <span aria-hidden>↗</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              className="project-showcase__btn project-showcase__btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              live site <span aria-hidden>↗</span>
            </a>
          )}
          {project.comingSoon && !project.github && (
            <span className="project-showcase__soon">repo & demo dropping soon</span>
          )}
        </div>
      </div>
    </article>
  )
}

function ProjectFigure({ project }) {
  const ref = useRef(null)
  const [imgOk, setImgOk] = useState(true)

  const onMove = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--rx', `${py * -9}deg`)
    el.style.setProperty('--ry', `${px * 11}deg`)
  }

  const onLeave = () => {
    ref.current?.style.setProperty('--rx', '0deg')
    ref.current?.style.setProperty('--ry', '0deg')
  }

  return (
    <figure ref={ref} className="project-showcase__figure" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="project-showcase__blob">
        <div className="project-showcase__shine" aria-hidden />
        {imgOk ? (
          <img
            src={project.image}
            alt={project.imageAlt}
            className={`project-showcase__img${project.imageFit === 'contain' ? ' project-showcase__img--contain' : ''}`}
            loading="lazy"
            decoding="async"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className="project-showcase__fallback" aria-hidden>
            {project.title.charAt(0)}
          </div>
        )}
        {project.comingSoon && <span className="project-showcase__badge">soon</span>}
      </div>
    </figure>
  )
}

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal--visible' : ''}`}
      style={{ '--reveal-delay': `${delay}s` }}
    >
      {children}
    </div>
  )
}
