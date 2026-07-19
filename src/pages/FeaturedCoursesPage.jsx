import { useState } from 'react'
import CourseCard from '../components/CourseCard.jsx'
import CourseCarousel from '../components/CourseCarousel.jsx'
import FeaturedCourseBanner from '../components/FeaturedCourseBanner.jsx'
import Footer from '../components/Footer.jsx'
import {
  allCourses,
  categories,
  featuredSpotlights,
  trendingCourses,
} from '../data/courses.js'

export default function FeaturedCoursesPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [spotlights, setSpotlights] = useState(featuredSpotlights)

  const filteredCourses =
    activeCategory === 'All'
      ? allCourses
      : allCourses.filter((c) => c.category === activeCategory)

  const removeSpotlight = (id) => {
    setSpotlights((prev) => prev.filter((s) => s.id !== id))
  }

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

      <h2 className="all-courses-heading">Featured Courses</h2>

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

      <CourseCarousel title="Recommended for you" courses={filteredCourses} />

      {spotlights.map((course) => (
        <FeaturedCourseBanner
          key={course.id}
          course={course}
          onRemove={() => removeSpotlight(course.id)}
        />
      ))}

      <section className="course-grid-section">
        <h2>Trending Now</h2>
        <div className="course-grid">
          {trendingCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}