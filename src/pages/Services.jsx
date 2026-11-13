import { Link } from 'react-router-dom'

const services = [
  {
    no:'01', title:'Graphic Design',
    desc:'A consistent visual language for brands that want to be recognized instantly.',
    bullets:['Brand & visual identity','Social media creatives','Marketing & promotional design','Presentations and digital assets']
  },
  {
    no:'02', title:'Web Design',
    desc:'Responsive interfaces that balance strong visuals with clear user journeys.',
    bullets:['Landing pages & business sites','UI/UX design','Responsive design systems','Conversion-focused layouts']
  },
  {
    no:'03', title:'Web Development',
    desc:'Clean, scalable websites that are fast, maintainable and ready to grow.',
    bullets:['React / Vite development','WordPress & CMS solutions','E-commerce experiences','API & third-party integrations']
  },
  {
    no:'04', title:'Web Application Development',
    desc:'Custom software for workflows that need more than a standard website.',
    bullets:['Dashboards & admin panels','Business portals & systems','Custom forms & workflows','REST API-connected applications']
  },
]

export default function Services() {
  return (
    <>
      <section className="page-hero section">
        <div className="container narrow">
          <p className="eyebrow">Services</p>
          <h1>Design the idea.<br/><span>Build the system.</span></h1>
          <p>Webila combines visual design and modern development to create digital products that look right and work right.</p>
        </div>
      </section>

      <section className="section services-detail">
        <div className="container">
          {services.map(s => (
            <article className="service-row" key={s.no}>
              <div className="service-row-number">{s.no}</div>
              <div className="service-row-main"><h2>{s.title}</h2><p>{s.desc}</p></div>
              <ul>{s.bullets.map(b => <li key={b}>{b}<span>↗</span></li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-head"><div><p className="eyebrow">Our approach</p><h2>Simple process. Serious output.</h2></div></div>
          <div className="process-grid">
            {[
              ['01','Discover','Understand the business, audience, goals and technical requirements.'],
              ['02','Design','Shape the visual direction, structure and user experience.'],
              ['03','Develop','Turn approved designs into a responsive, functional product.'],
              ['04','Refine','Test, polish and prepare the experience for launch.'],
            ].map(([n,t,d]) => <div className="process-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta"><div><p className="eyebrow">Ready when you are</p><h2>Tell us what you're <span>building.</span></h2></div><Link className="btn btn-primary" to="/contact">Start a project ↗</Link></div>
      </section>
    </>
  )
}