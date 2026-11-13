import { Link } from 'react-router-dom'

const services = [
  { no: '01', title: 'Graphic design', text: 'Visual identities and brand assets that give your business a clear, consistent voice.' },
  { no: '02', title: 'Web design', text: 'Thoughtful, responsive interfaces that make the next step obvious for your audience.' },
  { no: '03', title: 'Web development', text: 'Fast, maintainable websites built around your content, goals and real workflows.' },
  { no: '04', title: 'Web applications', text: 'Custom dashboards, portals and systems made to solve practical business needs.' },
]

const projects = [
  {
    slug: 'american-business-formations',
    title: 'American Business Formations',
    category: 'Business formation platform',
    description: 'A guided full-stack platform for forming and managing businesses in the United States.',
    technology: 'React · Python · PostgreSQL',
    featured: true,
  },
  {
    slug: 'optivax-global',
    title: 'Optivax Global',
    category: 'Digital services',
    description: 'A professional digital presence for a technology and services company.',
    technology: 'React · Vite',
  },
  {
    slug: 'aquagreens',
    title: 'Aqua Greens',
    category: 'Corporate website',
    description: 'A corporate website showcasing the business and its services.',
    technology: 'Website design · Development',
  },
]

const technologyGroups = [
  { title: 'Frontend', items: ['React.js', 'Next.js', 'Vite', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Backend', items: ['PHP', 'Laravel', 'Python', 'Django', 'REST APIs'] },
  { title: 'CMS & commerce', items: ['WordPress', 'WooCommerce', 'Shopify', 'Dokan'] },
  { title: 'Data & delivery', items: ['MySQL', 'PostgreSQL', 'Git', 'GitHub', 'cPanel', 'VPS', 'Linux', 'Figma'] },
]

const approach = [
  ['01', 'Discover', 'Understand your business, audience, goals and technical requirements.'],
  ['02', 'Design', 'Shape the visual direction, structure and user experience.'],
  ['03', 'Develop', 'Build a responsive, functional product around the approved direction.'],
  ['04', 'Refine', 'Test, polish and prepare the experience for launch.'],
]

export default function Home() {
  const [featuredProject, ...otherProjects] = projects

  return (
    <>
      <section className="hero section">
        <div className="container">
          <div className="hero-overline">
            <span>Independent digital studio</span>
            <span>Pakistan · Working worldwide</span>
          </div>
          <div className="hero-editorial">
            <h1>Digital work<br /><span>with a point of view.</span></h1>
            <div className="hero-art" aria-hidden="true">
              <svg viewBox="0 0 360 360" role="presentation">
                <circle className="hero-art-ring hero-art-ring-outer" cx="180" cy="180" r="152" />
                <circle className="hero-art-ring hero-art-ring-inner" cx="180" cy="180" r="112" />
                <path className="hero-art-arc" d="M56 228a132 132 0 0 1 232-96" />
                <path className="hero-art-mark" d="m105 133 36 94 39-94 39 94 36-94" />
                <circle className="hero-art-dot" cx="282" cy="130" r="7" />
                <circle className="hero-art-dot hero-art-dot-secondary" cx="78" cy="226" r="5" />
              </svg>
              <span>WEBILA / DIGITAL STUDIO</span>
            </div>
          </div>
          <div className="hero-bottom">
            <p>We bring sharp design and thoughtful technology together to make brands, websites and digital products work harder.</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Start a conversation <span>↗</span></Link>
              <Link to="/portfolio" className="btn btn-ghost">Explore selected work</Link>
            </div>
          </div>
          <div className="hero-footer-line">
            <span>Design · Development · Digital systems</span>
            <a href="#selected-work">Scroll to explore <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section className="section selected-work" id="selected-work">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow">Selected work / 01—03</p><h2>Built for real <span>businesses.</span></h2></div>
            <Link className="text-link" to="/portfolio">View all projects <span>↗</span></Link>
          </div>
          <article className="featured-project">
            <Link className="featured-project-image" to="/portfolio" aria-label={`View ${featuredProject.title} in the portfolio`}>
              <img src={`/images/portfolio/${featuredProject.slug}.webp`} alt={`${featuredProject.title} website screenshot`} fetchPriority="high" />
              <span>Featured project <b>↗</b></span>
            </Link>
            <div className="featured-project-copy">
              <p className="project-category">{featuredProject.category}</p>
              <span className="project-number">01 / 03</span>
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.description}</p>
              <span className="project-technology">{featuredProject.technology}</span>
              <Link className="text-link" to="/portfolio">Explore the project <span>↗</span></Link>
            </div>
          </article>
          <div className="work-grid">
            {otherProjects.map((project, index) => (
              <Link className="work-card" to="/portfolio" key={project.slug}>
                <div className="work-image">
                  <img src={`/images/portfolio/${project.slug}.webp`} alt={`${project.title} website screenshot`} loading="lazy" decoding="async" />
                  <span>{String(index + 2).padStart(2, '0')}</span>
                </div>
                <div className="work-meta">
                  <div><p>{project.category}</p><h3>{project.title}</h3><span>{project.description}</span></div>
                  <span aria-hidden="true">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow">What we do</p><h2>From the first sketch<br />to the <span>finished system.</span></h2></div>
            <p className="section-intro">The right mix of creative direction and technical craft for your next digital step.</p>
          </div>
          <div className="home-services-list">
            {services.map(service => (
              <Link className="home-service-row" to="/services" key={service.no}>
                <span className="service-no">{service.no}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="home-service-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
          <Link className="text-link services-all-link" to="/services">See all services <span>↗</span></Link>
        </div>
      </section>

      <section className="section about-section">
        <div className="container about-grid">
          <div className="about-heading">
            <p className="eyebrow">About Webila</p>
            <h2>Clear thinking.<br /><span>Careful execution.</span></h2>
          </div>
          <div className="about-copy">
            <p className="body-lg">We are a digital solutions company working across graphic design, web design, development and custom applications. Our work connects the visual details with the practical needs behind every project.</p>
            <p className="body-lg">Based in Pakistan and working worldwide, we help businesses shape a more considered and useful presence online.</p>
            <div className="about-details">
              <div><span>Based in</span><strong>Pakistan</strong></div>
              <div><span>Working</span><strong>Worldwide</strong></div>
            </div>
            <Link className="text-link" to="/contact">Tell us what you’re planning <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section technology-section">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow">Tools we work with</p><h2>Technology, chosen <span>with purpose.</span></h2></div>
            <p className="section-intro">A practical set of technologies for building reliable digital products.</p>
          </div>
          <div className="technology-list">
            {technologyGroups.map(group => (
              <div className="technology-row" key={group.title}>
                <h3>{group.title}</h3>
                <div>{group.items.map(item => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section approach-section">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow">Our process</p><h2>A good outcome starts<br /><span>with a good process.</span></h2></div>
            <p className="section-intro">A clear sequence keeps projects collaborative, focused and moving forward.</p>
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

      <section className="section contact-cta-section">
        <div className="container contact-cta">
          <div>
            <p className="eyebrow">Have a project in mind?</p>
            <h2>Let’s make your next<br /><span>digital step count.</span></h2>
          </div>
          <div className="contact-cta-actions">
            <Link to="/contact" className="btn btn-primary">Let’s talk <span>↗</span></Link>
            <a href="mailto:webilasolutions@gmail.com">webilasolutions@gmail.com</a>
          </div>
        </div>
      </section>
    </>
  )
}
