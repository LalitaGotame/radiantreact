# Project Structure
```
./.gitignore
./dump-project.sh
./eslint.config.js
./index.html
./package.json
./package-lock.json
./project-dump.md
./public/background.jpg
./public/favicon.svg
./public/icons.svg
./public/logo.jpg
./README.md
./src/App.jsx
./src/assets/background.jpg
./src/assets/course-thumb.jpg
./src/assets/hero.png
./src/assets/icons/FeatureIcons.jsx
./src/assets/instructor-avatar.jpg
./src/assets/logo.png
./src/assets/logo-icon.png
./src/assets/profile-avatar.jpg
./src/assets/react.svg
./src/assets/vite.svg
./src/components/CourseCard.jsx
./src/components/CourseCarousel.jsx
./src/components/FeaturedCourseBanner.jsx
./src/components/FieldBox.jsx
./src/components/Footer.jsx
./src/components/HeroSide.jsx
./src/components/LoginForm.jsx
./src/components/Navbar.jsx
./src/components/Registerform.jsx
./src/components/Sidebar.jsx
./src/data/courses.js
./src/index.css
./src/layouts/DashboardLayout.jsx
./src/main.jsx
./src/pages/HomePage.jsx
./src/pages/LoginPage.jsx
./src/pages/RegisterPage.jsx
./vite.config.js
```

# File Contents

## ./eslint.config.js
```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
```

## ./index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Radiant Elite Tutors</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## ./package.json
```json
{
  "name": "radiant-elite-tutors",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@fortawesome/fontawesome-free": "^6.5.2",
    "bootstrap": "^5.3.3",
    "bootstrap-icons": "^1.11.3",
    "react": "^18.3.1",
    "react-bootstrap-icons": "^1.11.6",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "vite": "^5.4.0"
  }
}
```

## ./src/App.jsx
```jsx
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import HomePage from './pages/HomePage.jsx'
import DashboardLayout from './layouts/DashboardLayout.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<DashboardLayout />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  )
}
```

## ./src/assets/icons/FeatureIcons.jsx
```jsx
// Icons extracted 1:1 from the Figma export (language.svg, local_library.svg,
// military_tech.svg). Rendered as inline React components so `color` and
// `size` can be controlled directly via props instead of swapping files.

export function GlobeIcon({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z"
        fill={color}
      />
    </svg>
  );
}

export function BookIcon({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 9.22461C14.21 9.22461 16 7.43461 16 5.22461C16 3.01461 14.21 1.22461 12 1.22461C9.79 1.22461 8 3.01461 8 5.22461C8 7.43461 9.79 9.22461 12 9.22461ZM12 3.22461C13.1 3.22461 14 4.12461 14 5.22461C14 6.32461 13.1 7.22461 12 7.22461C10.9 7.22461 10 6.32461 10 5.22461C10 4.12461 10.9 3.22461 12 3.22461ZM12 11.7746C9.64 9.57461 6.48 8.22461 3 8.22461V19.2246C6.48 19.2246 9.64 20.5746 12 22.7746C14.36 20.5846 17.52 19.2246 21 19.2246V8.22461C17.52 8.22461 14.36 9.57461 12 11.7746ZM19 17.3546C16.47 17.6946 14.07 18.6546 12 20.1746C9.94 18.6546 7.53 17.6846 5 17.3446V10.3946C7.1 10.7746 9.05 11.7446 10.64 13.2246L12 14.5046L13.36 13.2346C14.95 11.7546 16.9 10.7846 19 10.4046V17.3546Z"
        fill={color}
      />
    </svg>
  );
}

export function AwardIcon({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 10.43V2H7V10.43C7 10.78 7.18 11.11 7.49 11.29L11.67 13.8L10.68 16.14L7.27 16.43L9.86 18.67L9.07 22L12 20.23L14.93 22L14.15 18.67L16.74 16.43L13.33 16.14L12.34 13.8L16.52 11.29C16.82 11.11 17 10.79 17 10.43ZM11 11.07L9 9.87V4H11V11.07ZM15 9.87L13 11.07V4H15V9.87Z"
        fill={color}
      />
    </svg>
  );
}
```

## ./src/components/CourseCard.jsx
```jsx
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
   
    </div>
  )
}

export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="course-card-image-wrap">
        <img src={course.thumb} alt="" className="course-card-image" />
        <button className="course-card-wishlist" aria-label="Save course">
          <i className="bi bi-heart"></i>
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
```

## ./src/components/CourseCarousel.jsx
```jsx
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
```

## ./src/components/FeaturedCourseBanner.jsx
```jsx
export default function FeaturedCourseBanner({ course }) {
  return (
    <section className="featured-course-banner">
      <div className="featured-course-text">
        <span className="featured-course-badge">Popular</span>
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
    </section>
  )
}
```

## ./src/components/FieldBox.jsx
```jsx
export default function FieldBox({
  label,
  required = false,
  error,
  children,
}) {
  return (
    <div className="mb-1">
      <div className={`field-box ${error ? 'has-error' : ''}`}>
        <span className="field-label">
          {label}
          {required && <span className="required">*</span>}
        </span>
        {children}
      </div>
      {error && <span className="invalid-msg">{error}</span>}
    </div>
  )
}
```

## ./src/components/Footer.jsx
```jsx
import logoIcon from '../assets/logo-icon.png'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src={logoIcon} alt="" height="70" />
        <div>
          <div className="footer-brand-name">RADIANT ELITE TUTORS</div>
          <div className="footer-brand-tagline">Smart Care, Pro Guidance</div>
        </div>
      </div>

      <nav className="footer-nav">
        <a href="/home">Home</a>
        <a href="/courses">Courses</a>
        <a href="#!">About Us</a>
      </nav>

      <div className="footer-contact">
        Contact Us : +977-1234567890 | +977-0987654321
      </div>

      <div className="footer-social">
        <span className="footer-social-label">Follow Us</span>
        <div className="footer-social-icons">
          <a href="#!" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#!" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#!" aria-label="TikTok">
            <i className="bi bi-tiktok"></i>
          </a>
          <a href="#!" aria-label="WhatsApp">
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
```

## ./src/components/HeroSide.jsx
```jsx
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
```

## ./src/components/LoginForm.jsx
```jsx
import { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import FieldBox from './FieldBox.jsx'
import logo from '../assets/logo.png'

const initialValues = { email: '', password: '' }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function LoginForm() {
  const [role, setRole] = useState('student')
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()
  const validate = (data) => {
    const newErrors = {}

    if (!data.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!emailPattern.test(data.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!data.password) {
      newErrors.password = 'Password is required.'
    }

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const updated = { ...values, [name]: value }
    setValues(updated)
    if (submitted) {
      setErrors(validate(updated))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    const validationErrors = validate(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      navigate('/home')
    }
  }

  return (
    <div className="auth-card-floating">
      <div className="auth-card-logo">
        <img src={logo} alt="Radiant Elite Tutors" width="220" />
      </div>

      <div className="loginbox d-flex align-items-center gap-2" role="group">
        <button
          type="button"
          className={`btn flex-fill rounded-pill ${
            role === 'student' ? 'btn-brand-navy' : 'btn-outline-brand-navy'
          }`}
          onClick={() => setRole('student')}
        >
          Student Login
        </button>
        <button
          type="button"
          className={`btn flex-fill rounded-pill ${
            role === 'teacher' ? 'btn-brand-navy' : 'btn-outline-brand-navy'
          }`}
          onClick={() => setRole('teacher')}
        >
          Teacher Login
        </button>
      </div>

      <form noValidate onSubmit={handleSubmit}>
        <FieldBox label="Email" required error={errors.email}>
          <input
            type="email"
            name="email"
            className="field-input"
            placeholder="Enter your email address"
            value={values.email}
            onChange={handleChange}
          />
        </FieldBox>

        <div className="mb-3" />

        <FieldBox label="Password" required error={errors.password}>
          <div className="password-input-wrapper d-flex align-items-center">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              className="field-input"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              style={{ paddingRight: 30 }}
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={() => setShowPassword((s) => !s)}
              aria-label="Toggle password visibility"
            >
              <i className={showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'}></i>
            </button>
          </div>
        </FieldBox>

        <div className="text-center my-3" style={{ fontSize: '0.85rem' }}>
          Forgot Password ?{' '}
          <a href="#!" className="link-brand-navy">
            Click Here!
          </a>
        </div>

        <div className="text-center mb-3">
          <button type="submit" className="btn btn-auth-submit">
            Login
          </button>
        </div>

        <p className="text-center mb-2" style={{ fontSize: '0.9rem' }}>
          Don't have an account?{' '}
          <Link to="/register" className="link-brand-navy">
            Register!
          </Link>
        </p>

        <div className="text-center mt-3" style={{ fontSize: '0.85rem' }}>
          Or sign in with
        </div>
        <div className="text-center mt-2">
          <a href="#!" className="google-btn" aria-label="Sign in with Google">
            <i className="bi bi-google"></i>
          </a>
        </div>
      </form>
    </div>
  )
}
```

## ./src/components/Navbar.jsx
```jsx
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <nav className="site-navbar navbar navbar-expand-lg">
      <div className="container-fluid px-3 px-lg-5 d-flex align-items-center justify-content-between flex-wrap gap-3">
        <a className="navbar-brand fw-bold m-0" href="/">
          <img src={logo} height="48" alt="Radiant Elite Tutors" />
        </a>

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

        <div className="d-flex gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-auth-link ${isActive ? 'is-active' : 'is-inactive'}`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `nav-auth-link ${isActive ? 'is-active' : 'is-inactive'}`
            }
          >
            Sign up
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
```

## ./src/components/Registerform.jsx
```jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import FieldBox from './FieldBox.jsx'
import logo from '../assets/logo.png'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const nepalPhonePattern = /^(97|98)\d{8}$|^0[1-9]\d{6,8}$/
const strongPasswordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_#^])[A-Za-z\d@$!%*?&_#^]{8,}$/

const initialValues = {
  fullname: '',
  dob: '',
  email: '',
  gender: '',
  role: '',
  address: '',
  phone: '',
  password: '',
  confirmPassword: '',
}

export default function RegisterForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [photoFile, setPhotoFile] = useState(null)
  const [photoPreview, setPhotoPreview] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = (data, photo) => {
    const newErrors = {}

    if (!data.fullname.trim()) {
      newErrors.fullname = 'Full name is required.'
    } else if (data.fullname.trim().length < 2) {
      newErrors.fullname = 'Name must be at least 2 characters.'
    }

    if (!data.dob) {
      newErrors.dob = 'Date of birth is required.'
    } else {
      const today = new Date()
      const dob = new Date(data.dob)
      let age = today.getFullYear() - dob.getFullYear()
      const monthDiff = today.getMonth() - dob.getMonth()
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--
      }
      if (age < 16) newErrors.dob = 'You must be at least 16 years old.'
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!emailPattern.test(data.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!data.gender) newErrors.gender = 'Please select your gender.'
    if (!data.role) newErrors.role = 'Please select your role.'

    if (!data.address.trim()) newErrors.address = 'Address is required.'

    if (!data.phone.trim()) {
      newErrors.phone = 'Phone number is required.'
    } else if (!nepalPhonePattern.test(data.phone.trim())) {
      newErrors.phone = 'Enter a valid Nepal phone number (e.g. 98XXXXXXXX).'
    }

    if (!photo) {
      newErrors.photo = 'Please upload a profile photo.'
    }

    if (!data.password) {
      newErrors.password = 'Password is required.'
    } else if (!strongPasswordPattern.test(data.password)) {
      newErrors.password =
        'Min 8 chars with uppercase, lowercase, number & special character.'
    }

    if (!data.confirmPassword) {
      newErrors.confirmPassword = 'Please re-enter your password.'
    } else if (data.confirmPassword !== data.password) {
      newErrors.confirmPassword = 'Passwords do not match.'
    }

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const updated = { ...values, [name]: value }
    setValues(updated)
    if (submitted) setErrors(validate(updated, photoFile))
  }

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0] ?? null
    setPhotoFile(file)
    setPhotoPreview(file ? URL.createObjectURL(file) : null)
    if (submitted) setErrors(validate(values, file))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    const validationErrors = validate(values, photoFile)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      alert('Registration successful! Welcome to Radiant Elite Tutors.')
    }
  }

  return (
    <div className="register-form-panel">
      <div className="auth-card-logo">
        <img src={logo} alt="Radiant Elite Tutors" width="260" />
      </div>

      <form noValidate onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <FieldBox label="Full Name" required error={errors.fullname}>
              <input
                type="text"
                name="fullname"
                className="field-input"
                placeholder="Enter your full name"
                value={values.fullname}
                onChange={handleChange}
              />
            </FieldBox>
          </div>

          <div className="col-md-6">
            <FieldBox label="DOB" required error={errors.dob}>
              <input
                type="date"
                name="dob"
                className="field-input"
                value={values.dob}
                onChange={handleChange}
              />
            </FieldBox>
          </div>

          <div className="col-md-6">
            <FieldBox label="Email" required error={errors.email}>
              <input
                type="email"
                name="email"
                className="field-input"
                placeholder="Enter your email address"
                value={values.email}
                onChange={handleChange}
              />
            </FieldBox>
          </div>

          <div className="col-md-6">
            <div className="radio-field-box">
              <span className="field-label">
                Gender<span className="required">*</span>
              </span>
              <div className="radio-options">
                {['male', 'female', 'others'].map((opt) => (
                  <label key={opt}>
                    <input
                      type="radio"
                      name="gender"
                      value={opt}
                      checked={values.gender === opt}
                      onChange={handleChange}
                    />
                    {opt[0].toUpperCase() + opt.slice(1)}
                  </label>
                ))}
              </div>
            </div>
            {errors.gender && <span className="invalid-msg">{errors.gender}</span>}
          </div>

          <div className="col-md-6">
            <div className="radio-field-box">
              <span className="field-label">
                Your Role<span className="required">*</span>
              </span>
              <div className="radio-options">
                {['student', 'teacher'].map((opt) => (
                  <label key={opt}>
                    <input
                      type="radio"
                      name="role"
                      value={opt}
                      checked={values.role === opt}
                      onChange={handleChange}
                    />
                    {opt[0].toUpperCase() + opt.slice(1)}
                  </label>
                ))}
              </div>
            </div>
            {errors.role && <span className="invalid-msg">{errors.role}</span>}
          </div>

          <div className="col-md-6">
            <FieldBox label="Address" required error={errors.address}>
              <input
                type="text"
                name="address"
                className="field-input"
                placeholder="Enter your address"
                value={values.address}
                onChange={handleChange}
              />
            </FieldBox>
          </div>

          <div className="col-md-6">
            <FieldBox label="Phone" required error={errors.phone}>
              <input
                type="tel"
                name="phone"
                className="field-input"
                placeholder="Enter your phone number"
                value={values.phone}
                onChange={handleChange}
              />
            </FieldBox>
          </div>

          <div className="col-md-6">
            <FieldBox label="Password" required error={errors.password}>
              <div className="password-input-wrapper d-flex align-items-center">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="field-input"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  style={{ paddingRight: 30 }}
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label="Toggle password visibility"
                >
                  <i className={showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'}></i>
                </button>
              </div>
            </FieldBox>
          </div>

          <div className="col-md-6">
            <div className={`photo-box ${errors.photo ? 'has-error' : ''}`}>
              <span className="field-label">Photo</span>
              <span className="photo-placeholder">
                {photoFile ? photoFile.name : 'Select your profile photo'}
              </span>
              <input type="file" accept="image/*" onChange={handlePhotoChange} />
              <i className="fa fa-paperclip clip-icon"></i>
            </div>
            {errors.photo && <span className="invalid-msg">{errors.photo}</span>}
          </div>

          <div className="col-md-6">
            {photoPreview && (
              <img
                src={photoPreview}
                alt="Profile preview"
                className="img-thumbnail"
                style={{ maxWidth: '100%', maxHeight: 130 }}
              />
            )}
          </div>

          <div className="col-md-6">
            <FieldBox
              label="Re-type Password"
              required
              error={errors.confirmPassword}
            >
              <div className="password-input-wrapper d-flex align-items-center">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  className="field-input"
                  placeholder="Re-enter your password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  style={{ paddingRight: 30 }}
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowConfirmPassword((s) => !s)}
                  aria-label="Toggle confirm password visibility"
                >
                  <i
                    className={showConfirmPassword ? 'bi bi-eye-slash' : 'bi bi-eye'}
                  ></i>
                </button>
              </div>
            </FieldBox>
          </div>
        </div>

        <div className="text-center mt-4">
          <button type="submit" className="btn btn-auth-submit">
            Register
          </button>
        </div>

        <div className="text-center mt-3" style={{ fontSize: '0.85rem' }}>
          Already have an account?{' '}
          <Link to="/" className="link-brand-navy">
            Sign In!
          </Link>
        </div>

        <div className="text-center mt-3" style={{ fontSize: '0.85rem' }}>
          Or sign in with
        </div>
        <div className="text-center mt-2">
          <a href="#!" className="google-btn" aria-label="Sign in with Google">
            <i className="bi bi-google"></i>
          </a>
        </div>
      </form>
    </div>
  )
}
```

## ./src/components/Sidebar.jsx
```jsx
import { NavLink } from 'react-router-dom'
import logoIcon from '../assets/logo-icon.png'
import profileAvatar from '../assets/profile-avatar.jpg'

const menuGroups = [
  {
    label: null,
    items: [{ to: '/home', icon: 'bi-house-fill', text: 'Home' }],
  },
  {
    label: 'Contents',
    items: [
      { to: '/courses', icon: 'bi-journal-bookmark-fill', text: 'All Courses' },
      { to: '/featured', icon: 'bi-bookmark-star-fill', text: 'Featured Courses' },
    ],
  },
  {
    label: 'My Library',
    items: [
      { to: '/saved', icon: 'bi-bookmark-heart-fill', text: 'Saved Courses' },
      { to: '/recommendation', icon: 'bi-hand-thumbs-up-fill', text: 'Recommendation' },
    ],
  },
  {
    label: 'Profile',
    items: [
      { to: '/my-dashboard', icon: 'bi-grid-fill', text: 'Dashboard' },
      { to: '/certifications', icon: 'bi-award-fill', text: 'Certifications' },
    ],
  },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={logoIcon} alt="Radiant Elite Tutors" height="56" />
      </div>

      <nav className="sidebar-nav">
        {menuGroups.map((group, i) => (
          <div className="sidebar-group" key={group.label ?? `top-${i}`}>
            {group.label && <div className="sidebar-group-label">{group.label}</div>}
            {group.items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? 'is-active' : ''}`
                }
              >
                <i className={`bi ${item.icon}`}></i>
                <span>{item.text}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      
      <div className="sidebar-profile-card">
        <img src={profileAvatar} alt="" className="sidebar-profile-avatar" />
        <div>
          <div className="sidebar-profile-name">Laila</div>
          <div className="sidebar-profile-role">Student</div>
        </div>
      </div>
    </aside>
  )
}
```

## ./src/data/courses.js
```js
import thumb from '../assets/course-thumb.jpg'
import avatar from '../assets/instructor-avatar.jpg'

export const featuredCourse = {
  title: 'Introduction to Financial Management and Guidance',
  instructor: 'Ram Saili',
  thumb,
  avatar,
}

export const continueLearning = [
  {
    id: 'c1',
    category: 'Account',
    title: 'Introduction to Account and Management',
    instructor: 'Ram Saili',
    duration: '4hr 12m',
    progress: 62,
    thumb,
    avatar,
  },
  {
    id: 'c2',
    category: 'Finance',
    title: 'Introduction to Financial Management and Guidance',
    instructor: 'Ram Saili',
    duration: '3hr 40m',
    progress: 28,
    thumb,
    avatar,
  },
]

export const topPicks = [
  {
    id: 't1',
    dateRange: '12–24 Jan',
    title: 'UI/UX: Master the Art of Design',
    description:
      'Learn the fundamentals of user interface and user experience design through hands-on projects and real case studies.',
    rating: 5,
    reviews: 117,
    price: 8000,
    originalPrice: 10000,
    thumb,
  },
  {
    id: 't2',
    dateRange: '2–14 Feb',
    title: 'Full-Stack Web Development Bootcamp',
    description:
      'Build complete web applications from scratch using modern frameworks, covering both frontend and backend.',
    rating: 4,
    reviews: 89,
    price: 9500,
    originalPrice: 12000,
    thumb,
  },
  {
    id: 't3',
    dateRange: '20 Jan–5 Feb',
    title: 'Digital Marketing Essentials',
    description:
      'Master SEO, social media, and content strategy to grow any brand online with confidence.',
    rating: 5,
    reviews: 64,
    price: 6500,
    originalPrice: 8500,
    thumb,
  },
  {
    id: 't4',
    dateRange: '15–28 Feb',
    title: 'Data Analysis with Python',
    description:
      'Get hands-on with pandas, NumPy, and visualization libraries to turn raw data into insight.',
    rating: 4,
    reviews: 132,
    price: 8800,
    originalPrice: 11000,
    thumb,
  },
]

export const trendingCourses = [
  {
    id: 'tr1',
    dateRange: '1–15 Mar',
    title: 'Public Speaking & Communication Skills',
    description:
      'Build confidence and clarity speaking in front of any audience, in person or on camera.',
    rating: 5,
    reviews: 201,
    price: 5000,
    originalPrice: 7000,
    thumb,
  },
  {
    id: 'tr2',
    dateRange: '10–22 Mar',
    title: 'Financial Literacy for Beginners',
    description:
      'Understand budgeting, saving, and investing basics to take control of your financial future.',
    rating: 5,
    reviews: 98,
    price: 4500,
    originalPrice: 6000,
    thumb,
  },
  {
    id: 'tr3',
    dateRange: '5–19 Mar',
    title: 'Spoken English Mastery',
    description:
      'Improve fluency and pronunciation through guided practice and real conversation drills.',
    rating: 4,
    reviews: 156,
    price: 4000,
    originalPrice: 5500,
    thumb,
  },
  {
    id: 'tr4',
    dateRange: '18–30 Mar',
    title: 'Mathematics for High School',
    description:
      'A structured course covering algebra, geometry, and calculus fundamentals for SEE/+2 students.',
    rating: 5,
    reviews: 174,
    price: 3500,
    originalPrice: 5000,
    thumb,
  },
]
```

## ./src/index.css
```css
:root {
  --brand-navy: #2e5e88;
  --brand-navy-dark: #1a3a5c;
  --brand-gold: #f0a500;
  --brand-light-blue: #eaf1f8;
  --brand-text-muted: #6c7a89;
  --field-border: #aeaeae;
  --page-bg: #f7f7f5;
}

body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background-color: var(--page-bg);
}

/* ---------- Navbar ---------- */
.site-navbar {
  background-color: #fff;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 2px 10px rgba(20, 30, 50, 0.06);
}

.search-box {
  width: 380px;
  max-width: 40vw;
  border-radius: 12px;
}

.btn-brand-navy {
  background-color: var(--brand-navy);
  border-color: var(--brand-navy);
  color: #fff;
}

.btn-brand-navy:hover,
.btn-brand-navy:focus {
  background-color: var(--brand-navy-dark);
  border-color: var(--brand-navy-dark);
  color: #fff;
}

.btn-outline-brand-navy {
  border: 1px solid var(--brand-navy);
  background: transparent;
  color: var(--brand-navy);
}

.btn-outline-brand-navy:hover {
  background-color: var(--brand-navy);
  color: #fff;
}

.nav-auth-link {
  text-decoration: none;
  padding: 8px 22px;
  border-radius: 8px;
  font-weight: 500;
  transition: 0.2s;
}

.nav-auth-link.is-active {
  background-color: var(--brand-navy);
  color: #fff;
}

.nav-auth-link.is-inactive {
  background-color: transparent;
  color: var(--brand-navy);
  border: 1px solid var(--brand-navy);
}

/* ---------- Split auth layout ---------- */
/* Figma export: navy panel 572 / photo panel 940 -> ~37.8% / 62.2% split */
.auth-page-wrapper {
  position: relative;
  min-height: calc(100vh - 76px);
  overflow: hidden;
}

.auth-page-row {
  display: flex;
  min-height: calc(100vh - 76px);
}

.hero-side {
  flex: 0 0 38%;
  max-width: 38%;
  background-color: var(--brand-navy);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 3.5rem;
}

.hero-side h1 {
  font-weight: 800;
  font-size: 2.75rem;
  line-height: 1.15;
}

.hero-feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
}

.hero-photo-side {
  flex: 1;
  position: relative;
  background-image: url("./assets/background.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
}

.hero-photo-overlay {
  position: absolute;
  inset: 0;
  background: #e6f2ff;
  opacity: 0.4;
  backdrop-filter: blur(4px);
}

.hero-tagline {
  position: absolute;
  right: 6%;
  bottom: 8%;
  z-index: 3;
  text-align: right;
}

.hero-tagline .tagline-text {
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 6px;
}

.hero-tagline .t-white {
  color: #1e4570;
}

.hero-tagline .t-gold {
  color: var(--brand-gold);
}

.hero-tagline .tagline-sub {
  font-size: 1.05rem;
  color: #4a7199;
  font-weight: 500;
  margin: 0;
}

/* ---------- Auth card (login) ---------- */
/* Figma export: white card 449 x 611, radius 20 */
.auth-card-floating {
  position: relative;
  z-index: 10;
  width: 449px;
  max-width: 92vw;
  background: var(--page-bg);
  border-radius: 20px;
  box-shadow: 0 15px 45px rgba(15, 30, 60, 0.25);
  padding: 2.25rem 2.5rem;
}

.auth-card-logo {
  text-align: center;
  margin-bottom: 1.25rem;
}

/* Student / Teacher toggle pill */
.loginbox {
  width: 100%;
  min-height: 56px;
  background: #fff;
  border-radius: 14px;
  box-shadow: inset 0 0 0 1px #eee;
  padding: 0.35rem;
  margin-bottom: 1.5rem;
}

.loginbox .btn {
  padding: 0.65rem 1rem;
  font-weight: 600;
  font-size: 0.9rem;
}

/* ---------- Register layout (no floating card - fields sit
   directly on the frosted glass panel, per Figma export) ---------- */
.register-page-wrapper {
  flex: 1;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
}

.register-form-panel {
  width: 100%;
  max-width: 940px;
}

/* ---------- Field boxes ---------- */
/* Figma export: 329 x 62, radius 14.5, stroke #AEAEAE */
.field-box {
  border: 1.5px solid var(--field-border);
  border-radius: 14px;
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.95);
  position: relative;
}

.field-box.has-error {
  border-color: #dc3545;
}

.field-box .field-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: #222;
  display: block;
  margin-bottom: 2px;
}

.field-box .required {
  color: #dc3545;
  margin-left: 2px;
}

.field-box .field-input {
  border: none;
  padding: 0;
  outline: none;
  box-shadow: none;
  width: 100%;
  font-family: "Poppins", sans-serif;
  background: transparent;
}

.field-box .field-input:focus {
  outline: none;
  box-shadow: none;
}

.invalid-msg {
  font-size: 0.75rem;
  color: #dc3545;
  margin-top: 4px;
  display: block;
}

.radio-field-box .field-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  display: block;
}

.radio-options {
  display: flex;
  gap: 20px;
  align-items: center;
}

.radio-options label {
  font-size: 0.85rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  margin: 0;
}

.radio-options input[type="radio"] {
  accent-color: var(--brand-navy);
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.photo-box {
  border: 1.5px solid var(--field-border);
  border-radius: 14px;
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.95);
  position: relative;
  min-height: 62px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.photo-box .photo-placeholder {
  font-size: 0.8rem;
  color: #aab0bc;
  font-style: italic;
}

.photo-box input[type="file"] {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
}

.photo-box .clip-icon {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--brand-navy);
}

.password-input-wrapper {
  position: relative;
}

.password-toggle-btn {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--brand-text-muted);
  padding: 0;
}

/* ---------- Buttons / links ---------- */
/* Figma export: Login btn 119x44 radius 10, Register btn 97x44 radius 10 */
.btn-auth-submit {
  background: var(--brand-navy);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 11px 40px;
  font-weight: 600;
  min-width: 119px;
  min-height: 44px;
  transition: background 0.2s;
}

.btn-auth-submit:hover {
  background: var(--brand-navy-dark);
  color: #fff;
}

.link-brand-navy {
  color: var(--brand-navy);
  font-weight: 700;
  text-decoration: none;
  background: none;
  border: none;
  padding: 0;
}

.link-brand-navy:hover {
  text-decoration: underline;
}

.google-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background: transparent;
  cursor: pointer;
  font-size: 1.6rem;
  color: var(--brand-navy);
}

@media (max-width: 991.98px) {
  .auth-page-row {
    flex-direction: column;
  }
  .hero-side {
    flex: none;
    max-width: 100%;
    min-height: auto;
    padding: 2.5rem 1.5rem;
  }
  .hero-photo-side {
    min-height: 100vh;
  }
  .hero-tagline {
    display: none;
  }
}

/* =====================================================
   Dashboard shell (post-login)
   ===================================================== */
.dashboard-shell {
  display: flex;
  min-height: 100vh;
  background: var(--page-bg);
}

/* ---------- Sidebar ---------- */
.sidebar {
  width: 275px;
  flex-shrink: 0;
  background: #fff;
  box-shadow: 2px 0 12px rgba(20, 30, 50, 0.06);
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.25rem;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}

.sidebar-logo {
  text-align: center;
  margin-bottom: 1.5rem;
}

.sidebar-nav {
  flex: 1;
}

.sidebar-group {
  margin-bottom: 1.25rem;
}

.sidebar-group-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--brand-text-muted);
  margin: 0.5rem 0.75rem;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 11px 14px;
  border-radius: 10px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  border: none;
  background: transparent;
  margin-bottom: 4px;
  transition: background 0.15s;
}

.sidebar-link i {
  font-size: 1.1rem;
  width: 20px;
  text-align: center;
}

.sidebar-link:hover {
  background: var(--brand-light-blue);
  color: var(--brand-navy);
}

.sidebar-link.is-active {
  background: var(--brand-navy);
  color: #fff;
}

.sidebar-logout {
  color: #c0392b;
  margin-top: auto;
}

.sidebar-logout:hover {
  background: #fdecea;
  color: #c0392b;
}

.sidebar-profile-card {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 1rem;
  padding: 10px 12px;
  border: 1px solid #e6e9ee;
  border-radius: 14px;
}

.sidebar-profile-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.sidebar-profile-name {
  font-size: 0.85rem;
  font-weight: 700;
  color: #222;
}

.sidebar-profile-role {
  font-size: 0.75rem;
  color: var(--brand-text-muted);
  font-style: italic;
}

/* ---------- Dashboard content ---------- */
.dashboard-content {
  flex: 1;
  min-width: 0;
  padding: 2rem 2.5rem 3rem;
}

.home-page-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.75rem;
}

.home-greeting {
  font-size: 1.6rem;
  font-weight: 700;
  color: #1a2b3c;
  margin: 0;
}

.home-search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border: 1px solid #dde3ea;
  border-radius: 12px;
  padding: 10px 18px;
  width: 100%;
  max-width: 380px;
}

.home-search-bar i {
  color: var(--brand-text-muted);
}

.home-search-bar input {
  border: none;
  outline: none;
  flex: 1;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
}

/* ---------- Section cards (white, shadowed - matches Figma Rectangle 195) ---------- */
.home-section-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  padding: 1.75rem 2rem;
  margin-bottom: 2.5rem;
}

.home-section-card h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

/* ---------- Continue learning ---------- */
.continue-learning-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.25rem;
}

.continue-card {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.continue-card-thumb {
  width: 179px;
  height: 112px;
  border-radius: 10px;
  object-fit: cover;
  flex-shrink: 0;
}

.continue-card-body {
  flex: 1;
  min-width: 160px;
}

.continue-card-category {
  font-size: 0.85rem;
  color: #6f6f6f;
}

.continue-card-title {
  font-weight: 700;
  font-size: 1.1rem;
  margin: 4px 0 10px;
  color: #000;
}

.continue-card-instructor {
  display: flex;
  align-items: center;
  gap: 10px;
}

.continue-card-avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
}

.continue-card-instructor-name {
  font-size: 0.9rem;
  font-weight: 600;
}

.continue-card-instructor-role {
  font-size: 0.75rem;
  color: #919191;
  font-style: italic;
}

.continue-card-progress {
  width: 100%;
  max-width: 140px;
}

.continue-card-progress-bar {
  background: #eef1f5;
  border-radius: 6px;
  height: 6px;
  overflow: hidden;
  margin-bottom: 4px;
}

.continue-card-progress-fill {
  background: var(--brand-gold);
  height: 100%;
}

.continue-card-progress span {
  font-size: 0.7rem;
  color: var(--brand-text-muted);
}

/* ---------- Featured course spotlight (matches Figma Rectangle 199) ---------- */
.featured-course-banner {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap-reverse;
}

.featured-course-badge {
  display: inline-block;
  background: var(--brand-gold);
  color: #fff;
  font-size: 0.75rem;
  padding: 3px 12px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.featured-course-title {
  font-size: 1.4rem;
  font-weight: 700;
  max-width: 520px;
  margin-bottom: 16px;
}

.featured-course-instructor {
  display: flex;
  align-items: center;
  gap: 10px;
}

.featured-course-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.featured-course-instructor-name {
  font-weight: 600;
  font-size: 1rem;
}

.featured-course-instructor-role {
  font-size: 0.8rem;
  color: #919191;
  font-style: italic;
}

.featured-course-thumb {
  width: 292px;
  height: 178px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
}

/* ---------- Footer ---------- */
.site-footer {
  background: #e8f2ff;
  border-radius: 12px;
  padding: 2rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-brand-name {
  font-weight: 800;
  color: var(--brand-navy);
  letter-spacing: 1px;
  font-size: 1rem;
}

.footer-brand-tagline {
  font-size: 0.7rem;
  color: var(--brand-gold);
  letter-spacing: 0.5px;
}

.footer-nav {
  display: flex;
  gap: 1.5rem;
}

.footer-nav a {
  color: #000;
  text-decoration: none;
  font-weight: 500;
}

.footer-nav a:hover {
  color: var(--brand-navy);
}

.footer-contact {
  font-size: 0.9rem;
  color: #000;
}

.footer-social {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-social-label {
  font-weight: 500;
}

.footer-social-icons {
  display: flex;
  gap: 10px;
}

.footer-social-icons a {
  color: #304874;
  font-size: 1.3rem;
}

@media (max-width: 767.98px) {
  .site-footer {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* ---------- Course carousels ---------- */
.course-carousel {
  margin-bottom: 2.5rem;
}

.course-carousel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.course-carousel-header h2 {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
}

.course-carousel-arrows {
  display: flex;
  gap: 8px;
}

.carousel-arrow-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #dde3ea;
  background: #fff;
  color: var(--brand-navy);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
}

.carousel-arrow-btn:hover {
  background: var(--brand-light-blue);
}

.course-carousel-track {
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 8px;
  scrollbar-width: thin;
}

.course-card {
  flex: 0 0 295px;
  scroll-snap-align: start;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 34.8px 2px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
}

.course-card-image-wrap {
  position: relative;
  height: 229px;
}

.course-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.course-card-wishlist {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
}

.course-card-body {
  padding: 14px 16px 18px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.course-card-date {
  font-size: 0.7rem;
  color: var(--brand-text-muted);
  margin-bottom: 4px;
}

.course-card-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #1a2b3c;
  margin-bottom: 6px;
  line-height: 1.3;
}

.course-card-desc {
  font-size: 0.78rem;
  color: var(--brand-text-muted);
  line-height: 1.5;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.course-card-rating {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
}

.course-stars {
  color: var(--brand-gold);
  font-size: 0.75rem;
  letter-spacing: 1px;
}

.course-card-reviews {
  font-size: 0.7rem;
  color: var(--brand-text-muted);
}

.course-card-footer {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
}

.course-card-price-current {
  font-weight: 700;
  color: var(--brand-navy);
  margin-right: 6px;
}

.course-card-price-original {
  font-size: 0.75rem;
  color: #b0b6bd;
  text-decoration: line-through;
}

.course-card-enroll {
  padding: 6px 16px;
  font-size: 0.8rem;
  white-space: nowrap;
}

@media (max-width: 767.98px) {
  .sidebar {
    width: 220px;
  }
  .dashboard-content {
    padding: 1.5rem;
  }
}

```

## ./src/layouts/DashboardLayout.jsx
```jsx
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'

export default function DashboardLayout() {
  return (
    <div className="dashboard-shell">
      <Sidebar />
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  )
}
```

## ./src/main.jsx
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

## ./src/pages/HomePage.jsx
```jsx
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
```

## ./src/pages/LoginPage.jsx
```jsx
import Navbar from '../components/Navbar.jsx'
import HeroSide from '../components/HeroSide.jsx'
import LoginForm from '../components/LoginForm.jsx'

export default function LoginPage() {
  return (
    <div className="auth-page-wrapper">
      <Navbar />
      <div className="auth-page-row">
        <HeroSide />

        <div className="hero-photo-side">
          <div className="hero-photo-overlay" />
          <LoginForm />

          <div className="hero-tagline">
            <p className="tagline-text">
              <span className="t-white">LEARN.</span>
              <span className="t-gold"> ACHIEVE.</span>
              <span className="t-white"> EXCEL.</span>
            </p>
            <p className="tagline-sub">Your Path to Mastery Starts Here!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
```

## ./src/pages/RegisterPage.jsx
```jsx
import Navbar from '../components/Navbar.jsx'
import HeroSide from '../components/HeroSide.jsx'
import RegisterForm from '../components/RegisterForm.jsx'

export default function RegisterPage() {
  return (
    <div className="auth-page-wrapper">
      <Navbar />
      <div className="auth-page-row">
        <HeroSide />

        <div className="hero-photo-side" style={{ alignItems: 'stretch' }}>
          <div className="register-page-wrapper">
              <div className="register-card-floating">
               <RegisterForm />
               </div>
           </div>
        </div>
      </div>
    </div>
  )
}
```

## ./vite.config.js
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
```
