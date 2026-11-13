import { Link } from 'react-router-dom'
export default function NotFound() {
  return <section className="section page-hero"><div className="container narrow"><p className="eyebrow">404</p><h1>That page <span>doesn't exist.</span></h1><p>Let's get you back to something useful.</p><Link className="btn btn-primary" to="/">Back home ↗</Link></div></section>
}