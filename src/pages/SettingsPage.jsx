import { useState } from 'react'
import Footer from '../components/Footer.jsx'
import { activeSessions } from '../data/profile.js'

export default function SettingsPage() {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleUpdatePassword = (e) => {
    e.preventDefault()
    if (newPassword !== confirmPassword) {
      alert('New password and confirm password do not match.')
      return
    }
    alert('Password updated! (placeholder — no backend wired yet)')
  }

  return (
    <div className="home-page">
      <div className="home-page-topbar">
        <h1 className="home-greeting">Account Settings</h1>
      </div>

      <section className="settings-card">
        <div className="settings-card-header">
          <i className="bi bi-lock-fill settings-card-icon settings-card-icon-gold"></i>
          <div>
            <h3>Change Your Password</h3>
            <p>Keep your account secure by updating your password regularly</p>
          </div>
        </div>

        <form onSubmit={handleUpdatePassword}>
          <div className="mb-3">
            <label className="settings-label">Current Password</label>
            <div className="password-input-wrapper">
              <input
                type={showCurrent ? 'text' : 'password'}
                className="settings-input"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowCurrent((s) => !s)}
              >
                <i className={showCurrent ? 'bi bi-eye-slash' : 'bi bi-eye'}></i>
              </button>
            </div>
          </div>

          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label className="settings-label">New Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showNew ? 'text' : 'password'}
                  className="settings-input"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowNew((s) => !s)}
                >
                  <i className={showNew ? 'bi bi-eye-slash' : 'bi bi-eye'}></i>
                </button>
              </div>
            </div>

            <div className="col-md-6">
              <label className="settings-label">Confirm New Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showConfirm ? 'text' : 'password'}
                  className="settings-input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowConfirm((s) => !s)}
                >
                  <i className={showConfirm ? 'bi bi-eye-slash' : 'bi bi-eye'}></i>
                </button>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-brand-navy">
            <i className="bi bi-floppy-fill"></i> Update Password
          </button>
        </form>
      </section>

      <section className="settings-card">
        <div className="settings-card-header">
          <i className="bi bi-clock-history settings-card-icon settings-card-icon-blue"></i>
          <div>
            <h3>Active Sessions</h3>
            <p>Track your login activity across devices</p>
          </div>
        </div>

        <div className="sessions-list">
          {activeSessions.map((session) => (
            <div key={session.id} className="session-row">
              <div className="session-col session-col-platform">
                <i className="bi bi-laptop"></i>
                <div>
                  <div>{session.platform}</div>
                  {session.isCurrent && (
                    <span className="session-current-badge">Current Session</span>
                  )}
                </div>
              </div>
              <div className="session-col">
                <span className="session-col-label">Date</span>
                {session.date}
              </div>
              <div className="session-col">
                <span className="session-col-label">Opened</span>
                {session.opened}
              </div>
              <div className="session-col">
                <span className="session-col-label">Closed</span>
                <span className={session.isCurrent ? 'session-active-now' : ''}>
                  {session.closed}
                </span>
              </div>
              <div className="session-col">
                <span className="session-col-label">IP Address</span>
                {session.ip}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-3">
          <button className="btn btn-brand-navy">
            <i className="bi bi-eye"></i> View All Sessions
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}