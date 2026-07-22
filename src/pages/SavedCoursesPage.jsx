import { useState } from 'react'
import CourseCard from '../components/CourseCard.jsx'
import Footer from '../components/Footer.jsx'
import { categories, savedCourses as initialSaved } from '../data/courses.js'

export default function SavedCoursesPage() {
  const [activeTab, setActiveTab] = useState('courses')
  const [activeCategory, setActiveCategory] = useState('All')
  const [saved, setSaved] = useState(initialSaved)

  const handleUnsave = (id) => {
    setSaved((prev) => prev.filter((c) => c.id !== id))
  }

  const filtered =
    activeCategory === 'All'
      ? saved
      : saved.filter((c) => c.category === activeCategory)

  return (
    <div className="home-page">
      <div className="home-page-topbar">
        <h1 className="home-greeting">Saved Courses &amp; Live Classes</h1>
      </div>

      <div className="saved-tabs">
        <button
          type="button"
          className={`saved-tab ${activeTab === 'courses' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('courses')}
        >
          <i className="bi bi-journal-bookmark"></i>
          Courses
          <span className="saved-tab-count">{saved.length}</span>
        </button>

        <button
          type="button"
          className={`saved-tab ${activeTab === 'live' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('live')}
        >
          <span className="saved-tab-dot"></span>
          Live Classes
        </button>
      </div>

      {activeTab === 'courses' ? (
        <section className="course-grid-section">
          <div className="course-grid">
            {filtered.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                saved
                onToggleSave={() => handleUnsave(course.id)}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ color: 'var(--brand-text-muted)' }}>
              No saved courses in this category yet.
            </p>
          )}
        </section>
      ) : (
        <div className="empty-state">
          <i className="bi bi-heartbreak-fill empty-state-icon"></i>
          <h3>No favourited live classes yet</h3>
          <p>Start adding live classes to your favourites!</p>
        </div>
      )}

      <Footer />
    </div>
  )
}