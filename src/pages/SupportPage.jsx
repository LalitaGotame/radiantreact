import { useState } from 'react'
import Footer from '../components/Footer.jsx'
import { userProfile } from '../data/profile.js'

export default function SupportPage() {
  const [name, setName] = useState(userProfile.name)
  const [email, setEmail] = useState(userProfile.email)
  const [phone, setPhone] = useState(userProfile.phone)
  const [inquiry, setInquiry] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Inquiry sent! (placeholder — no backend wired yet)')
    setInquiry('')
  }

  return (
    <div className="home-page">
      <div className="home-page-topbar">
        <div>
          <h1 className="home-greeting">Student Support</h1>
          <p className="support-subheading">Contact us for any queries</p>
        </div>
      </div>

      <div className="support-layout">
        <div className="support-info-column">
          <div className="support-card support-intro-card">
            <h3>We're Here to Help You</h3>
            <p>
              We are dedicated to supporting you every step of the way.
              Whether you have questions, need guidance, or are looking for
              reliable solutions, our team is here to ensure you feel
              confident and cared for. Your satisfaction is our priority, and
              we strive to make every interaction simple, clear, and helpful.
            </p>
          </div>

          <div className="support-card support-contact-card">
            <div className="support-contact-icon">
              <i className="bi bi-geo-alt-fill"></i>
            </div>
            <div>
              <h4>Visit Us</h4>
              <p>Our Office Location</p>
              <strong>Lalitpur, Nepal</strong>
            </div>
          </div>

          <div className="support-card support-contact-card">
            <div className="support-contact-icon">
              <i className="bi bi-envelope-fill"></i>
            </div>
            <div>
              <h4>Email Us</h4>
              <p>Send us your queries</p>
              <strong>radiantelitetutors@gmail.com</strong>
            </div>
          </div>

          <div className="support-card support-contact-card">
            <div className="support-contact-icon">
              <i className="bi bi-telephone-fill"></i>
            </div>
            <div>
              <h4>Call Us</h4>
              <p>Available 24/7</p>
              <strong>+977 9768443108</strong>
            </div>
          </div>
        </div>

        <div className="support-card support-form-card">
          <h3>Get through to us!</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="settings-label">Name :</label>
              <input
                type="text"
                className="settings-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="settings-label">Email :</label>
              <input
                type="email"
                className="settings-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="settings-label">Phone :</label>
              <input
                type="tel"
                className="settings-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="settings-label">Inquiry :</label>
              <textarea
                className="settings-input support-textarea"
                placeholder="Enter your query"
                value={inquiry}
                onChange={(e) => setInquiry(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-brand-navy">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>

      <div className="support-stay-connected">
        <h2>Stay Connected</h2>
        <p>Follow us on social media for updates, tips and community engagement</p>
        <div className="support-social-icons">
          <a href="#!" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
          <a href="#!" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
          <a href="#!" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
        </div>
      </div>

      <Footer />
    </div>
  )
}