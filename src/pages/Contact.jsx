import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [status, setStatus] = useState('')
  const [isSending, setIsSending] = useState(false)
  const sendingRef = useRef(false)

  async function submit(e) {
    e.preventDefault()
    if (sendingRef.current) return
    const form = e.currentTarget
    const phoneInput = form.elements.phone
    const phoneDigits = phoneInput.value.replace(/\D/g, '')

    phoneInput.setCustomValidity(
      phoneDigits.length < 7 || phoneDigits.length > 15
        ? 'Enter a valid phone number with 7 to 15 digits, including the country code.'
        : '',
    )
    if (!form.reportValidity()) return

    const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } = import.meta.env
    if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
      setStatus('error')
      return
    }

    sendingRef.current = true
    setIsSending(true)
    setStatus('')

    try {
      await emailjs.sendForm(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: VITE_EMAILJS_PUBLIC_KEY },
      )
      form.reset()
      setStatus('success')
    } catch (error) {
      console.error('EmailJS contact form submission failed:', error)
      setStatus('error')
    } finally {
      sendingRef.current = false
      setIsSending(false)
    }
  }

  return (
    <>
      <section className="page-hero section">
        <div className="container narrow">
          <p className="eyebrow">Contact</p>
          <h1>Have something in <span>mind?</span></h1>
          <p>Share a few details about your project and we’ll be in touch by email.</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-side">
            <p className="eyebrow">Start a conversation</p>
            <h2>Let's turn the brief into something real.</h2>
            <div className="contact-detail"><span>Email</span><a href="mailto:webilasolutions@gmail.com">webilasolutions@gmail.com</a></div>
            <div className="contact-detail"><span>Based in</span><strong>Pakistan · Working Worldwide</strong></div>
            <div className="contact-detail"><span>Focus</span><strong>Design · Development · Digital Systems</strong></div>
          </div>
          <form className="contact-form" onSubmit={submit}>
            {status === 'success' && <div className="success" role="status">Thank you! Your message has been sent successfully.</div>}
            {status === 'error' && <div className="form-error" role="alert">Your message could not be sent. Please try again later.</div>}
            <label>Name<input required name="name" placeholder="Your name" /></label>
            <label>Email<input required type="email" name="email" placeholder="you@company.com" /></label>
            <label>Phone Number<input required type="tel" name="phone" autoComplete="tel" placeholder="+92 300 1234567" pattern="[+]?[0-9][0-9 ().-]{5,23}" title="Enter a phone number with country code, using digits, spaces, parentheses, dots, or hyphens." /></label>
            <label>Subject<select required name="subject" defaultValue=""><option value="" disabled>Select a service</option><option>Graphic Design</option><option>Web Design</option><option>Web Development</option><option>Web Application Development</option></select></label>
            <label>Message<textarea required name="message" rows="6" placeholder="Tell us a little about your project..." /></label>
            <button className="btn btn-primary" type="submit" disabled={isSending}>{isSending ? 'Sending…' : 'Send inquiry'} <span>↗</span></button>
          </form>
        </div>
      </section>
    </>
  )
}