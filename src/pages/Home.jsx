import { Link } from 'react-router-dom'

const services = [
  { no: '01', title: 'Graphic design', text: 'Visual identities and brand systems built to make your business recognizable.' },
  { no: '02', title: 'Web design', text: 'Clear, responsive digital experiences that put your audience first.' },
  { no: '03', title: 'Web development', text: 'Reliable websites designed around the way your business actually works.' },
  { no: '04', title: 'Web applications', text: 'Purpose-built platforms and tools for more complex business needs.' },
]

const projects = [
  {
    slug: 'american-business-formations',
    title: 'American Business Formations',
    category: 'Business platform',
    description: 'A full-stack business formation platform with a guided experience for forming and managing businesses in the United States.',
    technology: 'React · Python · PostgreSQL',
    url: 'https://americanbusinessformations.com/',
  },
  {
    slug: 'optivax-global',
    title: 'Optivax Global',
    category: 'Digital services',
    description: 'A modern online presence presenting a broad set of web and digital services.',
    technology: 'React · Vite',
    url: 'https://optivaxglobal.com/',
  },
  {
    slug: 'erp-system',
    title: 'ERP System',
    category: 'Business application',
    description: 'A custom web application created to centralize business operations in one system.',
    technology: 'React · PHP · MySQL',
  },
]

const capabilities = [
  { title: 'Frontend', tools: 'React · Next.js · Vite · JavaScript · TypeScript' },
  { title: 'Backend', tools: 'PHP · Laravel · Python · Django · REST APIs' },
  { title: 'Platforms', tools: 'WordPress · WooCommerce · Shopify · Dokan' },
  { title: 'Data & delivery', tools: 'MySQL · PostgreSQL · Git · Linux · VPS' },
]

const process = [
  ['01', 'Understand', 'Align on the business, audience, goals and technical needs.'],
  ['02', 'Shape', 'Define the structure, visual direction and experience.'],
  ['03', 'Build', 'Develop the product with care, clarity and maintainability.'],
  ['04', 'Deliver', 'Test, refine and prepare the work for launch.'],
]

export default function Home() {
  const [featuredProject, ...otherProjects] = projects

  return (
    <>
      <section className="hero section">
        <div className="container">
          <div className="hero-kicker">
            <span className="status-indicator" />
            <span>Enterprise technology. Creative thinking.</span>
            <span className="hero-location">Pakistan · Working worldwide</span>
          </div>
          <div className="hero-main">
            <div className="hero-copy">
              <p className="hero-pretitle">Webila Solutions / Digital partner</p>
              <h1>Make technology<br />work <span>beautifully.</span></h1>
              <p className="hero-lead">We design and build digital experiences, websites and business systems that bring clarity to complex ideas.</p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary">Talk to our team <span aria-hidden="true">↗</span></Link>
                <Link to="/portfolio" className="btn btn-ghost">Explore our work</Link>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-visual-caption"><span>01 — 04</span><span>Connected by design</span></div>
              <svg className="tech-visual" viewBox="0 0 640 520" fill="none" role="presentation">
                <defs>
                  <linearGradient id="techLine" x1="88" y1="90" x2="564" y2="430" gradientUnits="userSpaceOnUse">
                    <stop stopColor="var(--accent)" stopOpacity=".14" />
                    <stop offset=".52" stopColor="var(--accent)" stopOpacity=".85" />
                    <stop offset="1" stopColor="var(--accent-secondary)" stopOpacity=".3" />
                  </linearGradient>
                  <radialGradient id="techCore">
                    <stop stopColor="var(--accent)" stopOpacity=".24" />
                    <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <path className="tech-grid-line" d="M80 130H560M80 260H560M80 390H560M160 65V455M320 65V455M480 65V455" />
                <path className="tech-route" d="M80 130H160V260H320V130H480V260H560M160 390H320V260H480V390H560" />
                <path className="tech-route-secondary" d="M80 390H160V260M320 130V65M480 260V130" />
                <circle cx="320" cy="260" r="115" fill="url(#techCore)" />
                <circle className="tech-core-ring" cx="320" cy="260" r="65" />
                <circle className="tech-core-ring tech-core-ring-inner" cx="320" cy="260" r="42" />
                <path className="tech-monogram" d="m274 235 17 51 18-51 18 51 18-51" />
                <circle className="tech-node" cx="80" cy="130" r="6" />
                <circle className="tech-node" cx="560" cy="130" r="6" />
                <circle className="tech-node" cx="80" cy="390" r="6" />
                <circle className="tech-node tech-node-alt" cx="560" cy="390" r="6" />
                <circle className="tech-node tech-node-core" cx="320" cy="130" r="5" />
                <circle className="tech-node tech-node-core" cx="320" cy="390" r="5" />
              </svg>
              <div className="hero-visual-footer"><span>Design systems</span><span>Digital products</span><span>Business platforms</span></div>
            </div>
          </div>
          <div className="hero-bottom-line">
            <span>Strategy / Design / Engineering</span>
            <a href="#capabilities">Discover what we do <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section className="section services-preview" id="capabilities">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Capabilities / 01</p>
              <h2>One partner.<br /><span>Connected capabilities.</span></h2>
            </div>
            <p className="section-intro">We connect design and technology to make each part of your digital presence work as one.</p>
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
          <Link className="text-link services-all-link" to="/services">Explore services <span>↗</span></Link>
        </div>
      </section>

      <section className="section selected-work" id="selected-work">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Selected work / 02</p>
              <h2>Technology, put<br />to <span>work.</span></h2>
            </div>
            <div className="section-action">
              <p className="section-intro">A selection of platforms, websites and digital products from our project portfolio.</p>
              <Link className="text-link" to="/portfolio">View all projects <span>↗</span></Link>
            </div>
          </div>
          <article className="featured-project">
            <Link className="featured-project-image" to="/portfolio" aria-label={`View ${featuredProject.title} in the portfolio`}>
              <img src={`/images/portfolio/${featuredProject.slug}.webp`} alt={`${featuredProject.title} website screenshot`} fetchPriority="high" />
              <span className="featured-project-index">01 / 03</span>
              <span className="featured-project-open" aria-hidden="true">↗</span>
            </Link>
            <div className="featured-project-copy">
              <p className="project-category">{featuredProject.category}</p>
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.description}</p>
              <div className="project-meta"><span>Technology</span><strong>{featuredProject.technology}</strong></div>
              <a className="text-link" href={featuredProject.url} target="_blank" rel="noreferrer">Visit live project <span>↗</span></a>
            </div>
          </article>
          <div className="secondary-projects">
            {otherProjects.map((project, index) => (
              <article className="secondary-project" key={project.slug}>
                <Link className="secondary-project-image" to="/portfolio" aria-label={`View ${project.title} in the portfolio`}>
                  <img src={`/images/portfolio/${project.slug}.webp`} alt={`${project.title} website screenshot`} loading="lazy" decoding="async" />
                  <span>{String(index + 2).padStart(2, '0')}</span>
                </Link>
                <div className="secondary-project-copy">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span>{project.technology}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section company-section">
        <div className="container company-layout">
          <div className="company-title">
            <p className="eyebrow">About Webila / 03</p>
            <h2>Big-picture<br /><span>thinking. Detail-<br />driven delivery.</span></h2>
          </div>
          <div className="company-content">
            <p className="company-lead">We help ambitious businesses turn digital complexity into clear, practical experiences.</p>
            <p>Webila Solutions brings graphic design, web design, development and custom application work together. We care about how a product looks, how it works, and how it supports the people who depend on it.</p>
            <div className="company-facts">
              <div><span>Our base</span><strong>Pakistan</strong></div>
              <div><span>Our reach</span><strong>Worldwide</strong></div>
              <div><span>Our focus</span><strong>Digital solutions</strong></div>
            </div>
            <Link className="text-link" to="/contact">Work with Webila <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section technology-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Technology / 04</p>
              <h2>Built on a <span>reliable stack.</span></h2>
            </div>
            <p className="section-intro">A practical set of technologies selected to suit the needs of each project.</p>
          </div>
          <div className="technology-list">
            {capabilities.map((group, index) => (
              <div className="technology-row" key={group.title}>
                <span className="technology-row-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.tools}</p>
                <span className="technology-row-mark" aria-hidden="true">+</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section approach-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">How we work / 05</p>
              <h2>From the first question<br />to <span>what’s next.</span></h2>
            </div>
            <p className="section-intro">Clear communication and considered steps keep the work aligned with your goals.</p>
          </div>
          <div className="process-track">
            {process.map(([number, title, description]) => (
              <article className="process-step" key={number}>
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
            <p className="eyebrow">Start a conversation / 06</p>
            <h2>Let’s solve something<br /><span>worth solving.</span></h2>
          </div>
          <div className="contact-cta-actions">
            <p>Have a project or a challenge in mind? Tell us what you’re working on.</p>
            <Link to="/contact" className="btn btn-primary">Contact our team <span>↗</span></Link>
            <a href="mailto:webilasolutions@gmail.com">webilasolutions@gmail.com</a>
          </div>
        </div>
      </section>
    </>
  )
}
