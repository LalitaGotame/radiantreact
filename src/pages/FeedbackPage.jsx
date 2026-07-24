import { useState } from 'react'
import Footer from '../components/Footer.jsx'

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!feedback.trim()) return
    alert('Feedback submitted! (placeholder — no backend wired yet)')
    setFeedback('')
  }

  return (
    <div className="home-page">
      <div className="home-page-topbar">
        <h1 className="home-greeting">Feedback</h1>
      </div>

      <div className="feedback-card">
        <div className="feedback-icon-col">
          <div className="feedback-icon-circle">
            <i className="bi bi-chat-square-text-fill feedback-bubble-icon"></i>
            <i className="bi bi-person-fill feedback-person-icon"></i>
          </div>
        </div>

        <div className="feedback-form-col">
          <h3 className="feedback-heading">Share Your Feedback</h3>
          <p className="feedback-description">
            <strong>We value your opinion.</strong>
            <br />
            Your feedback helps us improve our services and deliver a better
            learning experience.
          </p>

          <form onSubmit={handleSubmit}>
            <textarea
              className="settings-input feedback-textarea"
              placeholder="Write your valuable feedback here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />

            <button type="submit" className="btn btn-brand-navy feedback-submit-btn">
              <i className="bi bi-send-fill"></i> Submit Feedback
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}