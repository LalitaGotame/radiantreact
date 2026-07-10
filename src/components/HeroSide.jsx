import { GlobeIcon, BookIcon, AwardIcon } from '../assets/icons/FeatureIcons.jsx'

const features = [
  { Icon: GlobeIcon, label: 'Verified Contents' },
  { Icon: BookIcon, label: 'Flexible Learning' },
  { Icon: AwardIcon, label: 'Certified Skills' },
]

export default function HeroSide({ onExploreClick }) {
  return (
    <div className="hero-side">
      <h1>
        Unlock Your <br /> Potential!
      </h1>
      <p className="mt-3" style={{ maxWidth: 420, opacity: 0.9, lineHeight: 1.8 }}>
        Join Nepal's first premier learning platform. Access personalized
        courses, expert instructors, and interactive resources.
      </p>

      <ul className="list-unstyled mt-4">
        {features.map(({ Icon, label }) => (
          <li key={label} className="d-flex align-items-center gap-2 mb-3">
            <span className="hero-feature-icon">
              <Icon size={22} color="#ffffff" />
            </span>
            <span className="fw-semibold">{label}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="btn btn-outline-light rounded-pill mt-3 px-4"
        style={{ width: 'fit-content' }}
        onClick={onExploreClick}
      >
        Explore Courses
      </button>
    </div>
  )
}
