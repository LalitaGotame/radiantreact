import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import { enrolledCourses, enrolledLiveClasses } from '../data/courses.js'

export default function MySubscriptionsPage() {
  const [activeTab, setActiveTab] = useState('courses')
  const navigate = useNavigate()

  const list = activeTab === 'courses' ? enrolledCourses : enrolledLiveClasses

  return (
    <div className="home-page">
      <div className="home-page-topbar">
        <h1 className="home-greeting">My Subscriptions</h1>
      </div>

      <div className="subscription-stats">
        <div className="subscription-stat-card">
          <div className="subscription-stat-icon subscription-stat-icon-courses">
            <i className="bi bi-journal-bookmark-fill"></i>
          </div>
          <div>
            <div className="subscription-stat-label">Total Courses</div>
            <div className="subscription-stat-value">
              {enrolledCourses.length}
            </div>
          </div>
        </div>

        <div className="subscription-stat-card">
          <div className="subscription-stat-icon subscription-stat-icon-live">
            <i className="bi bi-camera-video-fill"></i>
          </div>
          <div>
            <div className="subscription-stat-label">Live Classes</div>
            <div className="subscription-stat-value">
              {enrolledLiveClasses.length}
            </div>
          </div>
        </div>
      </div>

      <div className="saved-tabs">
        <button
          type="button"
          className={`saved-tab ${activeTab === 'courses' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('courses')}
        >
          <i className="bi bi-journal-bookmark"></i>
          Courses
        </button>

        <button
          type="button"
          className={`saved-tab ${activeTab === 'live' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('live')}
        >
          <i className="bi bi-camera-video"></i>
          Live Classes
        </button>
      </div>

      {list.length === 0 ? (
        <div className="empty-state">
          <i className="bi bi-journal-x empty-state-icon"></i>
          <h3>
            No enrolled {activeTab === 'courses' ? 'courses' : 'live classes'}{' '}
            yet
          </h3>
          <p>Start exploring and enroll in your first course!</p>
          <button
            className="btn btn-brand-navy"
            onClick={() => navigate('/courses')}
          >
            Browse Courses
          </button>
        </div>
      ) : (
        <div className="course-grid">{/* enrolled cards render here */}</div>
      )}

      <Footer />
    </div>
  )
}