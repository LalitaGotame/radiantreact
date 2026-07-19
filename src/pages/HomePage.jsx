import { ContinueCourseCard } from '../components/CourseCard.jsx'
import CourseCarousel from '../components/CourseCarousel.jsx'
import FeaturedCourseBanner from '../components/FeaturedCourseBanner.jsx'
import Footer from '../components/Footer.jsx'
import {
  continueLearning,
  topPicks,
  trendingCourses,
  featuredCourse,
} from '../data/courses.js'

export default function HomePage() {
  const studentName = 'Laila'

  return (
    <div className="home-page">
      <div className="home-page-topbar">
        <div>
          <h1 className="home-greeting">
            Hello {studentName}, Welcome to Radiant Elite Tutors!
          </h1>
        </div>
       
      </div>
         <div className="d-flex gap-2 flex-grow-1" style={{ maxWidth: 480 }}>
          <input
            className="form-control search-box"
            type="search"
            placeholder="Search courses..."
          />
          <button className="btn btn-search px-4 text-nowrap">
            <i className="fa-solid fa-magnifying-glass"></i> Search
          </button>
        </div>

      <section className="home-section-card">
        <h2>Continue where you left off</h2>
        <div className="continue-learning-grid">
          {continueLearning.map((course) => (
            <ContinueCourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <CourseCarousel title="Top Picks For You" courses={topPicks} />

      <FeaturedCourseBanner course={featuredCourse} />

      <CourseCarousel title="Trending Courses" courses={trendingCourses} />

      <Footer />
    </div>
  )
}
