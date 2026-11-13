import { Link } from 'react-router-dom'

const stats = [
  ['04', 'Core services'],
  ['08', 'Featured projects'],
  ['01', 'Digital partner'],
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

const testimonials = [
  { quote: 'Webila transformed our online presence into something modern, professional and easy to manage. The communication and attention to detail were excellent.', client: 'Business Client', project: 'Web Development Project' },
  { quote: 'The website development process was smooth and the final result was exactly what we needed. Highly recommended for professional digital solutions.', client: 'Business Owner', project: 'Website Development' },
  { quote: 'The team understood our requirements quickly and delivered a clean, responsive solution that works beautifully across devices.', client: 'Business Client', project: 'Web Application Project' },
  { quote: 'From the first discussion to delivery, the process felt considered and collaborative. Our new website gives us a much stronger digital foundation.', client: 'Startup Founder', project: 'Website Design & Development' },
]

export default function Home() {
  return (
    <>
      <section className="hero section">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="pill"><span className="pulse-dot" /> Design × Code × Systems</div>
            <h1>We turn <span>ideas</span> into digital experiences.</h1>
            <p className="hero-lead">
              Webila Solutions creates bold visual identities, modern websites and custom web applications for businesses ready to move forward.
            </p>
            <div className="hero-actions">
              <Link to="/portfolio" className="btn btn-primary">Explore our work <span>↗</span></Link>
              <Link to="/services" className="btn btn-ghost">View services</Link>
            </div>
            <div className="hero-stats">
              {stats.map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbital-card">
              <div className="orbital-ring ring-a" />
              <div className="orbital-ring ring-b" />
              <div className="orbital-ring ring-c" />
              <div className="orbital-core">W</div>
              <span className="atom-dot dot-a" /><span className="atom-dot dot-b" /><span className="atom-dot dot-c" />
              <div className="visual-label">
                <span>WEBILA</span>
                <small>SOFTWARE SOLUTIONS</small>
              </div>
            </div>
            <div className="floating-card fc-one"><span>UI / UX</span><b>Thoughtful interfaces</b></div>
            <div className="floating-card fc-two"><span>CODE</span><b>Built to perform</b></div>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container two-col">
          <div>
            <p className="eyebrow">What we do</p>
            <h2>Creative thinking with a <span>technical edge.</span></h2>
          </div>
          <div>
            <p className="body-lg">From a single brand visual to a complete business platform, we bring design and development together so your digital presence feels consistent from the first click to the final interaction.</p>
            <Link className="text-link" to="/services">See all services <span>→</span></Link>
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

      <section className="section testimonials-section">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow">Client feedback</p><h2>What Our Clients <span>Say.</span></h2></div>
            <p className="testimonials-intro">Sample testimonial placeholders shown for layout purposes. Client-approved feedback can replace these later.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.project}>
                <div className="testimonial-rating" aria-label="5 out of 5 stars"><span aria-hidden="true">★★★★★</span><small>5/5</small></div>
                <blockquote>“{testimonial.quote}”</blockquote>
                <div className="testimonial-client"><span className="testimonial-avatar" aria-hidden="true">{testimonial.client.charAt(0)}</span><div><strong>{testimonial.client}</strong><span>{testimonial.project}</span></div></div>
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