import { useEffect, useRef, useState } from 'react'
import './App.css'

const projects = [
  {
    title: 'Cafe Finder',
    desc: 'A cozy app to discover cute cafes nearby using geolocation and the Google Places API.',
    tech: ['JavaScript', 'CSS', 'Node.js'],
    link: 'https://cafe-finder-template-lime.vercel.app',
    github: 'https://github.com/florida-k/cafe-finder-template',
  },
  {
    title: 'Project Two',
    desc: 'Short description of what this project does and why it\'s interesting.',
    tech: ['React', 'Vite'],
    link: '#',
    github: '#',
  },
  {
    title: 'Project Three',
    desc: 'Short description of what this project does and why it\'s interesting.',
    tech: ['Python', 'API'],
    link: '#',
    github: '#',
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
                    live on the internet — from small tools to full-stack apps.
                  </p>
                  <p>When I&apos;m not coding I&apos;m probably at a cafe, which is why I built a cafe finder. ☕</p>
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

        <section id="projects" className="section" aria-labelledby="projects-heading">
          <Reveal>
            <p className="section__label">✦ projects</p>
            <h2 id="projects-heading" className="projects__title">
              things i&apos;ve built
            </h2>
          </Reveal>
          <div className="project-list">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i}>
                <article className="project-card">
                  <div className="project-card__top">
                    <h3 className="project-card__name">{p.title}</h3>
                    <div className="project-card__links">
                      {p.github !== '#' && (
                        <a
                          href={p.github}
                          className="project-card__link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          github ↗
                        </a>
                      )}
                      {p.link !== '#' && (
                        <a
                          href={p.link}
                          className="project-card__link project-card__link--accent"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          live ↗
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="project-card__desc">{p.desc}</p>
                  <div>
                    {p.tech.map((t) => (
                      <span key={t} className="skill-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
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
