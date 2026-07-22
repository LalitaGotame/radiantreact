import { useState } from 'react'
import Footer from '../components/Footer.jsx'
import { liveClasses, liveClassCategories } from '../data/courses.js'

export default function AllLiveClassesPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filtered =
    activeCategory === 'All'
      ? liveClasses
      : liveClasses.filter((c) => c.category === activeCategory)
  const studentName = 'Laila';
  return (
    <div className="home-page">
      <div className="home-page-topbar mx-4 mt-4">
        <h1 className="home-greeting">
          Hello {studentName},

          <br />
          Welcome to Radiant Elite Tutors!
        </h1>
      </div>

      <div className="page-search-row mx-4">
        <input
          type="search"
          className="page-search-input"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-brand-navy page-search-btn">
          <i className="bi bi-search"></i> Search
        </button>
      </div>

      <h2 className="all-courses-heading mx-4">All Live Class</h2>

      <div className="category-filter-pills mx-4">
        {liveClassCategories.map((category) => (
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

      {filtered.length === 0 ? (
        <div className="empty-state">
          <i className="bi bi-exclamation-triangle-fill empty-state-icon"></i>
          <h3>No live classes found</h3>
          <p>Try changing category, subcategory or search again.</p>
          <div className="empty-state-search">
            <input type="search" placeholder="Search courses..." />
            <button className="btn btn-outline-brand-navy">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      ) : (
        <div className="course-grid">
          {/* live class cards will render here once data exists */}
        </div>
      )}

      <Footer />
    </div>
  )
}