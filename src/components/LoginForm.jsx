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
