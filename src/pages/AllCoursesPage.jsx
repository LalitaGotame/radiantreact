import { useState } from 'react'
import CourseCard from '../components/CourseCard.jsx'
import Footer from '../components/Footer.jsx'
import { allCourses, categories } from '../data/courses.js'

const PAGE_SIZE = 6

export default function AllCoursesPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const filteredCourses =
    activeCategory === 'All'
      ? allCourses
      : allCourses.filter((c) => c.category === activeCategory)

  const visibleCourses = filteredCourses.slice(0, visibleCount)
  const hasMore = visibleCount < filteredCourses.length

  const handleCategoryClick = (category) => {
    setActiveCategory(category)
    setVisibleCount(PAGE_SIZE)
  }

  return (
    <div className="home-page">
      <div className="home-page-topbar">
        <div>
          <h1 className="home-greeting">
            Hello Sagar,
            <br />
            Welcome to Radiant Elite Tutors!
          </h1>
        </div>
        <div className="home-search-bar">
          <i className="bi bi-search"></i>
          <input type="search" placeholder="Search courses, instructors..." />
        </div>
      </div>

      <h2 className="all-courses-heading">All Courses</h2>

      <div className="category-filter-pills">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`category-pill ${activeCategory === category ? 'is-active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <section className="course-grid-section">
        <h2>Recommended for you</h2>
        <div className="course-grid">
          {visibleCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {hasMore && (
          <div className="text-center">
            <button
              type="button"
              className="btn btn-outline-brand-navy load-more-btn"
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            >
              <i className="bi bi-chevron-down"></i> Load More Courses
            </button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  )
}