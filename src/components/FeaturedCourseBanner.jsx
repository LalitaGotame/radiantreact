export default function FeaturedCourseBanner({ course, onRemove }) {
  return (
    <section className="featured-course-banner">
      <div className="featured-course-text">
        <span className="featured-course-badge">{course.badge ?? 'Popular'}</span>
        <h3 className="featured-course-title">{course.title}</h3>
        <div className="featured-course-instructor">
          <img src={course.avatar} alt="" className="featured-course-avatar" />
          <div>
            <div className="featured-course-instructor-name">
              {course.instructor}
            </div>
            <div className="featured-course-instructor-role">Instructor</div>
          </div>
        </div>
      </div>

      <img src={course.thumb} alt="" className="featured-course-thumb" />

      {onRemove && (
        <button
          type="button"
          className="featured-course-remove"
          onClick={onRemove}
          aria-label="Remove from featured"
        >
          <i className="bi bi-trash3"></i>
        </button>
      )}
    </section>
  )
}