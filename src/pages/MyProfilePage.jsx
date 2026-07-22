import { userProfile, learningStats } from '../data/profile.js'
import Footer from '../components/Footer.jsx'

export default function MyProfilePage() {
  const maxMinutes = Math.max(...learningStats.weeklyActivity.map((d) => d.minutes), 1)
  const progressDeg = learningStats.progressPercent * 3.6

  return (
    <div className="home-page">
      <div className="home-page-topbar">
        <h1 className="home-greeting">My Profile</h1>
      </div>

      <div className="profile-top-row">
        <div className="profile-card">
          <div className="profile-card-header">
            <h3>Your Profile</h3>
            <p>Manage your personal information</p>
          </div>

          <div className="profile-avatar-wrap">
            <div className="profile-avatar">
              {userProfile.avatar ? (
                <img src={userProfile.avatar} alt="" />
              ) : (
                <i className="bi bi-person-fill"></i>
              )}
            </div>
            <button className="profile-avatar-edit" aria-label="Change photo">
              <i className="bi bi-camera-fill"></i>
            </button>
          </div>

          <div className="profile-name">{userProfile.name}</div>
          <div className="profile-email">{userProfile.email}</div>

          <div className="profile-phone-row">
            <span>Phone</span>
            <span>{userProfile.phone}</span>
          </div>

          <div className="profile-actions">
            <button className="btn btn-brand-navy">
              <i className="bi bi-pencil-fill"></i> Edit Profile
            </button>
            <button className="btn btn-outline-danger">
              <i className="bi bi-trash3"></i> Delete Account
            </button>
          </div>
        </div>

        <div className="profile-side-cards">
          <div className="profile-mini-card">
            <i className="bi bi-bell-fill profile-mini-card-icon"></i>
            <h4>Ongoing Live Classes</h4>
            {learningStats.ongoingLiveClasses.length === 0 ? (
              <p>No ongoing live classes right now.</p>
            ) : (
              <ul>
                {learningStats.ongoingLiveClasses.map((c) => (
                  <li key={c.id}>{c.title}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="profile-mini-card">
            <h4>My Progress</h4>
            <div
              className="profile-progress-ring"
              style={{
                background: `conic-gradient(var(--brand-navy) ${progressDeg}deg, #e6e9ee 0deg)`,
              }}
            >
              <div className="profile-progress-ring-inner">
                {learningStats.progressPercent}%
              </div>
            </div>
            <p className="profile-progress-hint">
              <i className="bi bi-check-circle-fill"></i> Start now! You can do it.
            </p>
          </div>
        </div>
      </div>

      <div className="profile-time-card">
        <div className="profile-time-total">
          <span>Total Time Spent Learning</span>
          <h2>
            {learningStats.totalHours}h {learningStats.totalMinutes}m
          </h2>
        </div>

        <div className="profile-time-split">
          <div>
            <span>This Week</span>
            <h3>{learningStats.thisWeekMinutes}m</h3>
          </div>
          <div>
            <span>Today</span>
            <h3>{learningStats.todayMinutes}m</h3>
          </div>
        </div>

        <div className="profile-weekly-activity">
          <span className="profile-weekly-activity-label">Weekly Activity</span>
          <div className="profile-weekly-bars">
            {learningStats.weeklyActivity.map((d) => (
              <div className="profile-weekly-bar-track" key={d.day} title={d.day}>
                <div
                  className="profile-weekly-bar-fill"
                  style={{ width: `${(d.minutes / maxMinutes) * 100}%` }}
                >
                  {d.minutes > 0 && <span>{d.minutes}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}