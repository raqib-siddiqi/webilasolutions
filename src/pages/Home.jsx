import { Link } from 'react-router-dom'

const highlights = [
  ['Design', 'Brand & visual identity'],
  ['Build', 'Websites & applications'],
  ['Partner', 'Pakistan · Worldwide'],
]

const services = [
  { no: '01', title: 'Graphic Design', text: 'Visual identities, social creatives, marketing assets and brand-ready design systems.' },
  { no: '02', title: 'Web Design', text: 'Modern, responsive interfaces that make your brand look clear, credible and memorable.' },
  { no: '03', title: 'Web Development', text: 'Fast, maintainable websites built around your content, goals and real-world workflows.' },
  { no: '04', title: 'Web Applications', text: 'Custom dashboards, portals and business applications that turn ideas into working systems.' },
]

const work = [
  ['american-business', 'American Business Formations', 'Business Platform'],
  ['optivax', 'Optivax Global', 'Digital Solutions'],
  ['aquagreens', 'Aqua Greens', 'Corporate Website'],
]

const technologyGroups = [
  { title: 'Frontend', note: 'Interfaces & experiences', items: [['React.js', 'R'], ['Next.js', 'N'], ['Vite', 'V'], ['JavaScript', 'JS'], ['TypeScript', 'TS'], ['HTML5', '5'], ['CSS3', '3'], ['Tailwind CSS', 'T']] },
  { title: 'Backend', note: 'Logic & integrations', items: [['PHP', 'P'], ['Laravel', 'L'], ['Python', 'Py'], ['Django', 'D'], ['REST APIs', 'API']] },
  { title: 'CMS & E-commerce', note: 'Content & commerce', items: [['WordPress', 'W'], ['WooCommerce', 'W'], ['Shopify', 'S'], ['Dokan', 'D']] },
  { title: 'Database', note: 'Reliable data foundations', items: [['MySQL', 'M'], ['PostgreSQL', 'Pg']] },
  { title: 'Tools & Deployment', note: 'Build, ship & maintain', items: [['Git', 'G'], ['GitHub', 'GH'], ['cPanel', 'cP'], ['VPS', 'V'], ['Linux', 'L'], ['Figma', 'F']] },
]

const approach = [
  ['01', 'Discover', 'Understand your business, audience, goals and technical requirements.'],
  ['02', 'Design', 'Shape the visual direction, structure and user experience.'],
  ['03', 'Develop', 'Build a responsive, functional product around the approved direction.'],
  ['04', 'Refine', 'Test, polish and prepare the experience for launch.'],
]

export default function Home() {
  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="pill"><span className="pulse-dot" /> Digital design & development</div>
            <h1>Thoughtful digital work. <span>Built to move business forward.</span></h1>
            <p className="hero-lead">
              Webila Solutions brings design and development together to create clear brand identities, modern websites and useful business applications.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Let’s talk <span>↗</span></Link>
              <Link to="/portfolio" className="btn btn-ghost">View our work</Link>
            </div>
            <div className="hero-highlights">
              {highlights.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
            </div>
          </div>

          <Link className="hero-visual" to="/portfolio" aria-label="View the portfolio">
            <img src="/images/portfolio/american-business-formations.webp" alt="American Business Formations website project" fetchPriority="high" />
            <span className="hero-project-label"><span>Selected work</span><strong>American Business Formations</strong><span aria-hidden="true">↗</span></span>
          </Link>
        </div>
      </section>

      <section className="section about-section">
        <div className="container about-grid">
          <div className="about-heading">
            <p className="eyebrow">About Webila</p>
            <h2>Design-minded. <span>Built for real business.</span></h2>
          </div>
          <div className="about-copy">
            <p className="body-lg">We bring graphic design, web design and development together to help businesses create a coherent digital presence—from the first visual impression to the tools they use every day.</p>
            <div className="about-details">
              <div><span>Based in</span><strong>Pakistan</strong></div>
              <div><span>Working</span><strong>Worldwide</strong></div>
            </div>
            <Link className="text-link" to="/services">Explore our services <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow">Capabilities</p><h2>Four ways we build value.</h2></div>
            <Link className="text-link" to="/services">Services <span>↗</span></Link>
          </div>
          <div className="service-grid">
            {services.map((s) => (
              <article className="service-card" key={s.no}>
                <span className="service-no">{s.no}</span>
                <div className="service-icon">{s.no}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section technology-section">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow">Technology stack</p><h2>Technology <span>We Use.</span></h2></div>
            <p className="technology-intro">A considered set of tools for building polished, reliable digital products.</p>
          </div>
          <div className="technology-grid">
            {technologyGroups.map((group, index) => (
              <article className="technology-card" key={group.title}>
                <div className="technology-card-head"><span className="technology-number">0{index + 1}</span><div><h3>{group.title}</h3><p>{group.note}</p></div></div>
                <div className="technology-badges">
                  {group.items.map(([name, mark]) => <span className="technology-badge" key={name}><span className="technology-mark" aria-hidden="true">{mark}</span>{name}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section work-section">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow">Selected work</p><h2>Projects that show the range.</h2></div>
            <Link className="text-link" to="/portfolio">View portfolio <span>↗</span></Link>
          </div>
          <div className="work-grid">
            {work.map(([slug,title,cat], i) => (
              <Link className="work-card" to="/portfolio" key={slug}>
                <div className="work-image"><img src={`/images/portfolio/${slug}.webp`} alt={title} /><span>0{i+1}</span></div>
                <div className="work-meta"><div><h3>{title}</h3><p>{cat}</p></div><span>↗</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section approach-section">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow">How we work</p><h2>A considered process, <span>from brief to launch.</span></h2></div>
            <p className="approach-intro">A clear sequence keeps the work focused—from understanding what you need to refining the finished experience.</p>
          </div>
          <div className="approach-grid">
            {approach.map(([number, title, description]) => (
              <article className="approach-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta">
          <div><p className="eyebrow">Have an idea?</p><h2>Let's make something <span>worth clicking.</span></h2></div>
          <Link to="/contact" className="btn btn-primary">Start a project <span>↗</span></Link>
        </div>
      </section>
    </>
  )
}