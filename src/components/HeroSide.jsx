export default function HeroSide({ onExploreClick }) {
  const features = [
    { icon: "🌐", label: "Verified Contents" },
    { icon: "🎓", label: "Flexible Learning" },
    { icon: "🏆", label: "Certified Skills" },
  ];

  return (
    <div className="hero-side">
      <h1>
        Unlock Your <br /> Potential!
      </h1>
      <p className="mt-3" style={{ maxWidth: "420px", opacity: 0.9 }}>
        Join Nepal's first premier learning platform. Access personalized
        courses, expert instructors, and interactive resources.
      </p>

      <ul className="list-unstyled mt-4">
        {features.map((f) => (
          <li key={f.label} className="d-flex align-items-center gap-2 mb-2">
            <span className="hero-feature-icon">{f.icon}</span>
            <span className="fw-semibold">{f.label}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="btn btn-outline-light rounded-pill mt-3 px-4"
        style={{ width: "fit-content" }}
        onClick={onExploreClick}
      >
        Explore Courses
      </button>
    </div>
  );
}