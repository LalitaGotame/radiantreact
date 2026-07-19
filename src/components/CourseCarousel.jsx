import { useRef } from 'react'
import CourseCard from './CourseCard.jsx'

export default function CourseCarousel({ title, courses }) {
  const trackRef = useRef(null)

  const scroll = (direction) => {
    const track = trackRef.current
    if (!track) return
    const amount = track.clientWidth * 0.8
    track.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <section className="course-carousel">
      <div className="course-carousel-header">
        <h2>{title}</h2>
        <div className="course-carousel-arrows">
          <button
            type="button"
            className="carousel-arrow-btn"
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            type="button"
            className="carousel-arrow-btn"
            onClick={() => scroll(1)}
            aria-label="Scroll right"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="course-carousel-track" ref={trackRef}>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}
