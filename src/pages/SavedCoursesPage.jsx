import { useState } from 'react'
import CourseCard from '../components/CourseCard.jsx'
import Footer from '../components/Footer.jsx'
import { categories, savedCourses as initialSaved } from '../data/courses.js'

export default function SavedCoursesPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('recent')
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
        <div>
          <h1 className="home-greeting">
            Hello Sagar, Welcome to Radiant Elite Tutors!
          </h1>
        </div>
        <div className="home-search-bar">
          <i className="bi bi-search"></i>
          <input type="search" placeholder="Search courses, instructors..." />
        </div>
      </div>

      <h2 className="all-courses-heading">Saved Courses</h2>

      <div className="category-filter-pills">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`category-pill ${activeCategory === category ? 'is-active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="saved-sort-row">
        <label htmlFor="sortBy">Sort by:</label>
        <select
          id="sortBy"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="recent">Recently Saved</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
        </select>
      </div>

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

      <Footer />
    </div>
  )
}