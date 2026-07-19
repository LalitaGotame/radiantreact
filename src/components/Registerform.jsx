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
      <div className="register-card-floating">
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
     </div>
  )
}
