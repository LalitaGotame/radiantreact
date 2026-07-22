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
  <h1 className="home-greeting mt-4 mx-4">
    Hello {studentName},<br/>  Welcome to Radiant Elite Tutors!
    </h1>
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
