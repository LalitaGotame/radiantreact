function Stars({ count }) {
  return (
    <span className="course-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className={i < count ? 'bi bi-star-fill' : 'bi bi-star'}
        ></i>
      ))}
    </span>
  )
}

export function ContinueCourseCard({ course }) {
  return (
    <div className="continue-card">
      <img src={course.thumb} alt="" className="continue-card-thumb" />
      <div className="continue-card-body">
        <div className="continue-card-category">{course.category}</div>
        <div className="continue-card-title">{course.title}</div>
        <div className="continue-card-instructor">
          <img src={course.avatar} alt="" className="continue-card-avatar" />
          <div>
            <div className="continue-card-instructor-name">
              {course.instructor}
            </div>
            <div className="continue-card-instructor-role">Instructor</div>
          </div>
        </div>
      </div>
   ]
   '
    </div>
  )
}

export default function CourseCard({ course,saved = false, onToggleSave  }) {
  return (
     <div className="course-card">
      <div className="course-card-image-wrap">
        <img src={course.thumb} alt="" className="course-card-image" />
        <button
          className="course-card-wishlist"
          aria-label={saved ? 'Remove from saved' : 'Save course'}
          onClick={onToggleSave}
        >
          <i className={saved ? 'bi bi-heart-fill' : 'bi bi-heart'}></i>
        </button>
      </div>

      <div className="course-card-body">
        <div className="course-card-date">{course.dateRange}</div>
        <h3 className="course-card-title">{course.title}</h3>
        <p className="course-card-desc">{course.description}</p>

        <div className="course-card-rating">
          <Stars count={course.rating} />
          <span className="course-card-reviews">
            Out of {course.reviews} reviews
          </span>
        </div>

        <div className="course-card-footer">
          <div className="course-card-price">
            <span className="course-card-price-current">
              Rs. {course.price.toLocaleString()}/-
            </span>
            <span className="course-card-price-original">
              Rs. {course.originalPrice.toLocaleString()}/-
            </span>
          </div>
          <button className="btn btn-outline-brand-navy course-card-enroll">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  )
}
