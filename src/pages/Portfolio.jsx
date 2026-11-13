const projects = [
  { slug: 'laravel-pos', title: 'Laravel POS System', category: 'Point of Sale', description: 'Custom Point of Sale application developed using Laravel for managing products, sales, and business operations.', technologies: 'Laravel · PHP · MySQL · POS' },
  { slug: 'craftifem', title: 'Craftifem Multivendor Marketplace', category: 'Handicrafts Marketplace', description: 'Multivendor handicrafts marketplace built with WordPress and Dokan, allowing vendors to manage products and participate in an online marketplace.', technologies: 'WordPress · WooCommerce · Dokan · eCommerce' },
  { slug: 'smbigmart', title: 'SMBigMart', category: 'Online Shopping', description: 'eCommerce website focused on an online shopping experience with product presentation and eCommerce functionality.', technologies: 'eCommerce · WordPress · WooCommerce' },
  { slug: 'accreditation-system', title: 'Accreditation System', category: 'Accreditation Platform', description: 'Custom freelance web application developed using Python and Django for accreditation-related workflows and data management.', technologies: 'Python · Django · Database' },
  { slug: 'ava-lawrence', title: 'AVA Lawrence Motorsport', category: 'Motorsport', description: 'Professional motorsport website developed to present the brand, information, and online presence in a responsive and user-friendly interface.', technologies: 'Web Development · WordPress · Responsive Design' },
  { slug: 'bzb-digitals', title: 'BZB Digitals', category: 'Digital Agency', description: 'Business website developed for a digital and technology company, focused on presenting services and establishing a professional online presence.', technologies: 'Web Development · WordPress · Business Website · Responsive Design', url: 'https://bzbdigital.com/' },
  { slug: 'infovaly', title: 'Infovaly / Infovally', category: 'Technology Services', description: 'Technology services website developed to present digital and technical services through a professional responsive interface.', technologies: 'Web Development · WordPress · Business Website · Responsive Design', url: 'https://infovaly.com/' },
  { slug: 'library-management', title: 'Library Management System', category: 'Library Management', description: 'PHP-based library management application designed to manage books, users, and library operations.', technologies: 'PHP · MySQL · HTML · CSS · JavaScript' },
  { slug: 'tech-services', title: 'Tech Services Website', category: 'Technology Services', description: 'Professional technology services website developed to showcase services and provide a modern online presence for a business.', technologies: 'WordPress · Web Development · Responsive Design' },
  { slug: 'erp-system', title: 'ERP System', category: 'Enterprise Resource Planning', description: 'Custom ERP (Enterprise Resource Planning) web application developed to help manage and centralize business operations through a web-based system.', details: 'Frontend: React.js + Vite + Tailwind CSS · Backend: PHP · Database: MySQL · Deployment: Shared Hosting', technologies: 'ERP · Full-Stack Web Application · React.js · Vite · Tailwind CSS · PHP · MySQL · Shared Hosting' },
  { slug: 'american-business-formations', title: 'American Business Formations', category: 'Business Formation Platform', description: 'Full-stack business formation platform designed to provide a guided online experience for forming and managing businesses in the United States.', details: 'Frontend: React.js + Vite + Tailwind CSS · Backend: Python · Database: PostgreSQL · Deployment: VPS · Ubuntu Linux · Frontend on shared hosting; backend on a separate Ubuntu VPS.', technologies: 'React.js · Vite · Tailwind CSS · Python · PostgreSQL · VPS · Ubuntu Linux', url: 'https://americanbusinessformations.com/' },
  { slug: 'optivax-global', title: 'Optivax Global', category: 'Digital Services', description: 'Professional business website developed for Optivax Global to present its web development, web design, UI/UX, branding, eBook, and digital services through a modern responsive online presence.', details: 'Technology: React.js + Vite', technologies: 'React.js · Vite · Business Website · Web Development · Responsive Website', url: 'https://optivaxglobal.com/' },
]

export default function Portfolio() {
  return (
    <>
      <section className="page-hero section">
        <div className="container">
          <p className="eyebrow">Selected work / Webila Solutions</p>
          <div className="portfolio-heading"><h1>Digital work,<br /><span>built with purpose.</span></h1><p>Real websites, platforms and applications developed for businesses and practical workflows.</p></div>
        </div>
      </section>

      <section className="section portfolio-section">
        <div className="container portfolio-grid">
          {projects.map((project, i) => {
            const cardContent = (
              <>
                <div className="portfolio-img"><img src={`/images/portfolio/${project.slug}.webp`} alt={`${project.title} — ${project.category} project preview`} loading={i === 0 ? 'eager' : 'lazy'} decoding="async" /><span className="portfolio-index">{String(i + 1).padStart(2, '0')}</span>{project.url && <span className="visit">Visit site ↗</span>}</div>
                <div className="portfolio-info"><div><p>{project.category}</p><h2>{project.title}</h2><p className="portfolio-description">{project.description}</p>{project.details && <p className="portfolio-details">{project.details}</p>}</div><span>{project.technologies}</span></div>
              </>
            )

            return project.url ? (
              <a className={`portfolio-card ${i === 0 ? 'large' : ''}`} href={project.url} target="_blank" rel="noreferrer" key={project.slug}>{cardContent}</a>
            ) : (
              <article className={`portfolio-card ${i === 0 ? 'large' : ''}`} key={project.slug}>{cardContent}</article>
            )
          })}
        </div>
      </section>

      <section className="section external-portfolio">
        <div className="container external-card">
          <div><p className="eyebrow">More work</p><h2>See the full project collection.</h2><p>Explore more projects and work samples in the external portfolio.</p></div>
          <a href="https://portfolio-raqib.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-primary">Open project portfolio ↗</a>
        </div>
      </section>
    </>
  )
}