import { useNavigate } from 'react-router-dom'
import { ContinueCourseCard } from '../components/CourseCard.jsx'
import Footer from '../components/Footer.jsx'
import { continueLearning } from '../data/courses.js'

export default function CoursesProgressPage() {
  const navigate = useNavigate()

  const inProgress = continueLearning
  const completed = inProgress.filter((c) => c.progress === 100)
  const stillGoing = inProgress.filter((c) => c.progress < 100)
  const avgProgress = inProgress.length
    ? Math.round(
        inProgress.reduce((sum, c) => sum + c.progress, 0) / inProgress.length
      )
    : 0

  return (
    <div className="home-page">
      <div className="home-page-topbar">
        <h1 className="home-greeting">Course Progress Overview</h1>
      </div>

      <div className="subscription-stats">
        <div className="subscription-stat-card">
          <div className="subscription-stat-icon subscription-stat-icon-courses">
            <i className="bi bi-journal-bookmark-fill"></i>
          </div>
          <div>
            <div className="subscription-stat-label">Total Courses</div>
            <div className="subscription-stat-value">{inProgress.length}</div>
          </div>
        </div>

        <div className="subscription-stat-card">
          <div className="subscription-stat-icon subscription-stat-icon-completed">
            <i className="bi bi-check-circle-fill"></i>
          </div>
          <div>
            <div className="subscription-stat-label">Completed</div>
            <div className="subscription-stat-value">{completed.length}</div>
          </div>
        </div>

        <div className="subscription-stat-card">
          <div className="subscription-stat-icon subscription-stat-icon-live">
            <i className="bi bi-arrow-repeat"></i>
          </div>
          <div>
            <div className="subscription-stat-label">In Progress</div>
            <div className="subscription-stat-value">{stillGoing.length}</div>
          </div>
        </div>

        <div className="subscription-stat-card">
          <div className="subscription-stat-icon subscription-stat-icon-avg">
            <i className="bi bi-graph-up"></i>
          </div>
          <div>
            <div className="subscription-stat-label">Average Progress</div>
            <div className="subscription-stat-value">{avgProgress}%</div>
          </div>
        </div>
      </div>

      <h2 className="course-grid-section-heading">Your Course Progress</h2>

      {inProgress.length === 0 ? (
        <div className="empty-state">
          <i className="bi bi-graph-up empty-state-icon"></i>
          <h3>No courses in progress yet</h3>
          <p>Start a course to see your progress here!</p>
          <button className="btn btn-brand-navy" onClick={() => navigate('/courses')}>
            Browse Courses
          </button>
        </div>
      ) : (
        <div className="continue-learning-grid">
          {inProgress.map((course) => (
            <ContinueCourseCard key={course.id} course={course} />
          ))}
        </div>
      )}

      <Footer />
    </div>
  )
}