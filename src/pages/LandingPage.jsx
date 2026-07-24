import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PublicNavbar from '../components/PublicNavbar.jsx'
import CourseCard from '../components/CourseCard.jsx'
import Footer from '../components/Footer.jsx'
import { allCourses, categories } from '../data/courses.js'
import { tutors } from '../data/tutors.js'
import heroImage from '../assets/instructor-avatar.jpg'

export default function LandingPage() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredCourses =
    activeCategory === 'All'
      ? allCourses.slice(0, 8)
      : allCourses.filter((c) => c.category === activeCategory).slice(0, 8)

  return (
    <div>
      <PublicNavbar />

      <section className="landing-hero">
        <div className="landing-hero-text">
          <h1>
            Improve Your <span className="t-navy">Skills</span> To Advance
            Your <span className="t-gold">Career</span> Path !
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            rutrum lorem eget sagittis ullamcorper.
          </p>
          <button
            className="btn btn-brand-navy rounded-pill px-4"
            onClick={() => navigate('/register')}
          >
            Get Started <i className="bi bi-arrow-right"></i>
          </button>
        </div>
        <div className="landing-hero-photo-wrap">
          <img src={heroImage} alt="" className="landing-hero-photo" />
        </div>
      </section>

      <section className="landing-section">
        <h2 className="landing-section-heading">Popular Courses</h2>

        <div className="category-filter-pills landing-center-pills">
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

        <div className="course-grid">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="text-center mt-3">
          <button
            className="btn btn-outline-brand-navy load-more-btn"
            onClick={() => navigate('/login')}
          >
            View All
          </button>
        </div>
      </section>

      <section className="landing-section">
        <h2 className="landing-section-heading">Live Classes</h2>

        <div className="category-filter-pills landing-center-pills">
          <button className="category-pill is-active">All</button>
          <button className="category-pill">MBS</button>
        </div>

        <div className="empty-state">
          <h3>No live classes found in this category</h3>
          <p>Try modifying category or check back again soon.</p>
        </div>

        <div className="text-center mt-3">
          <button
            className="btn btn-outline-brand-navy load-more-btn"
            onClick={() => navigate('/login')}
          >
            View All
          </button>
        </div>
      </section>

      <section className="landing-tutor-section">
        <div className="landing-tutor-text">
          <span className="landing-tutor-badge">100% Satisfaction Guarantee</span>
          <h2>
            Find Your <span className="t-navy">Perfect</span>{' '}
            <span className="t-gold">Tutor</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            rutrum lorem eget sagittis ullamcorper. In hac habitasse platea
            dictumst. Integer maximus ipsum eu tellus rhoncus convallis.
          </p>
          <div className="d-flex gap-3 align-items-center flex-wrap">
            <button
              className="btn btn-brand-navy rounded-pill px-4"
              onClick={() => navigate('/register')}
            >
              Get Started
            </button>
            <button className="landing-tutor-howitworks">
              <i className="bi bi-play-circle-fill"></i> See how it works
            </button>
          </div>
        </div>

        <div className="landing-tutor-grid">
          {tutors.map((tutor) => (
            <div
              key={tutor.id}
              className="landing-tutor-tile"
              style={{ backgroundColor: tutor.color }}
            >
              <i className="bi bi-person-fill"></i>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}