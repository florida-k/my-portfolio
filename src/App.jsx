import './App.css'

const projects = [
  {
    title: "Cafe Finder",
    desc: "A cozy app to discover cute cafes nearby using geolocation and the Google Places API.",
    tech: ["JavaScript", "CSS", "Node.js"],
    link: "https://cafe-finder-template-lime.vercel.app",
    github: "https://github.com/florida-k/cafe-finder-template"
  },
  {
    title: "Project Two",
    desc: "Short description of what this project does and why it's interesting.",
    tech: ["React", "Vite"],
    link: "#",
    github: "#"
  },
  {
    title: "Project Three",
    desc: "Short description of what this project does and why it's interesting.",
    tech: ["Python", "API"],
    link: "#",
    github: "#"
  },
]

export default function App() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>

      {/* NAV */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px 0', borderBottom: '1px solid var(--border)' }}>
        <span style={{ fontFamily: 'Lora, serif', fontSize: 18 }}>florida ✦</span>
        <div style={{ display: 'flex', gap: 28, fontSize: 14, color: 'var(--muted)' }}>
          <a href="#about" style={linkStyle}>about</a>
          <a href="#projects" style={linkStyle}>projects</a>
          <a href="#contact" style={linkStyle}>contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: '80px 0 60px' }}>
        <p style={{ color: 'var(--accent)', fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
          ✦ portfolio
        </p>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 56px)', lineHeight: 1.2, marginBottom: 20 }}>
          hi, i'm florida —<br />
          <em style={{ fontWeight: 400, color: 'var(--accent)' }}>i build things for the web.</em>
        </h1>
        <p style={{ fontSize: 17, color: 'var(--muted)', maxWidth: 480, marginBottom: 36 }}>
          {/* EDIT THIS: your 2-sentence bio */}
          I'm a developer who loves building clean, thoughtful digital experiences.
          Currently studying at UF, always working on something new.
        </p>
        <div style={{ display: 'flex', gap: 12 }}>
          <a href="#projects" style={btnStyle}>view my work →</a>
          <a href="mailto:your@email.com" style={{ ...btnStyle, background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)' }}>get in touch</a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={sectionStyle}>
        <SectionLabel>✦ about me</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 28, marginBottom: 16 }}>a little about me</h2>
            <p style={{ color: 'var(--muted)', marginBottom: 12 }}>
              {/* EDIT THIS */}
              I'm Florida, a developer based in Gainesville. I enjoy creating things that live on the internet — from small tools to full-stack apps.
            </p>
            <p style={{ color: 'var(--muted)' }}>
              When I'm not coding I'm probably at a cafe, which is why I built a cafe finder. ☕
            </p>
          </div>
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 28, boxShadow: 'var(--shadow)' }}>
            <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: 1 }}>skills</p>
            {/* EDIT THIS: add/remove your skills */}
            {['JavaScript', 'React', 'Node.js', 'Python', 'CSS', 'Git'].map(skill => (
              <span key={skill} style={tagStyle}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={sectionStyle}>
        <SectionLabel>✦ projects</SectionLabel>
        <h2 style={{ fontSize: 28, marginBottom: 32 }}>things i've built</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {projects.map(p => (
            <div key={p.title} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 28, boxShadow: 'var(--shadow)', transition: 'transform 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                <h3 style={{ fontSize: 20 }}>{p.title}</h3>
                <div style={{ display: 'flex', gap: 12, fontSize: 13 }}>
                  {p.github !== '#' && <a href={p.github} style={linkStyle} target="_blank">github ↗</a>}
                  {p.link !== '#' && <a href={p.link} style={{ ...linkStyle, color: 'var(--accent)' }} target="_blank">live ↗</a>}
                </div>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: 15, marginBottom: 14 }}>{p.desc}</p>
              <div>{p.tech.map(t => <span key={t} style={tagStyle}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ ...sectionStyle, textAlign: 'center', paddingBottom: 80 }}>
        <SectionLabel>✦ contact</SectionLabel>
        <h2 style={{ fontSize: 28, marginBottom: 16 }}>let's talk</h2>
        <p style={{ color: 'var(--muted)', marginBottom: 32, maxWidth: 400, margin: '0 auto 32px' }}>
          Open to internships, collabs, or just a good conversation. Drop me a line.
        </p>
        <a href="mailto:your@email.com" style={btnStyle}>say hello →</a>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 40, fontSize: 13, color: 'var(--muted)' }}>
          <a href="https://github.com/florida-k" style={linkStyle} target="_blank">github</a>
          <a href="#" style={linkStyle} target="_blank">linkedin</a>
          {/* add more links here */}
        </div>
      </section>

    </div>
  )
}

// ── tiny reusable bits ──────────────────────────
function SectionLabel({ children }) {
  return <p style={{ color: 'var(--accent)', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24 }}>{children}</p>
}

const linkStyle = {
  color: 'inherit',
  textDecoration: 'none',
  transition: 'color 0.2s',
}

const btnStyle = {
  display: 'inline-block',
  background: 'var(--accent)',
  color: '#fff',
  padding: '12px 24px',
  borderRadius: 50,
  textDecoration: 'none',
  fontSize: 14,
  fontFamily: 'DM Sans, sans-serif',
  cursor: 'pointer',
  border: 'none',
}

const tagStyle = {
  display: 'inline-block',
  background: 'var(--bg)',
  border: '1px solid var(--border)',
  borderRadius: 50,
  padding: '4px 12px',
  fontSize: 12,
  marginRight: 8,
  marginBottom: 8,
  color: 'var(--muted)',
}

const sectionStyle = {
  padding: '60px 0',
  borderTop: '1px solid var(--border)',
}