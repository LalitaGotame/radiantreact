import { useState } from "react";
import logo from '../assets/logo.jpg';

const initialValues = { email: "", password: "" };

export default function LoginForm({ onSwitchToRegister }) {
  const [role, setRole] = useState("student");
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (data) => {
    const newErrors = {};

    if (!data.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailPattern.test(data.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!data.password) {
      newErrors.password = "Password is required.";
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...values, [name]: value };
    setValues(updated);
    if (submitted) {
      setErrors(validate(updated));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert(`Welcome back! Logging in as ${role} with ${values.email}`);
    }
  };

  return (
    <div className="auth-card-floating"
    style={{backgroundColor:"#f7f7f5"}}>
      <div className="auth-card-logo">
        <div style={{ fontSize: "2rem" }} role="img" aria-label="owl logo">
          <img src={logo} alt='Logo' style={{ width: "100px", height: "50px" }} />
        </div>
      </div>
     
<div className=" loginbox d-flex align-items-center h-100 bg-white rounded-pill p-1" role="group">   
       <button
          type="button"
          className={`btn flex-fill rounded-pill ${
            role === "student" ? "btn-brand-navy" : "btn-outline-brand-navy"
          }`}
          onClick={() => setRole("student")}
        >
          Student Login
        </button>
        <button
          type="button"
          className={`btn flex-fill rounded-pill ${
            role === "teacher" ? "btn-brand-navy" : "btn-outline-brand-navy"
          }`}
          onClick={() => setRole("teacher")}
        >
          Teacher Login
        </button>
      </div>



      
      <form noValidate onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="login-email" className="field-box">
            Email
          </label>
          <input
            type="email"
            id="login-email"
            name="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="Enter your email address"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <div className="mb-2">
          <label htmlFor="login-password" className="field-box">
            Password
          </label>
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="login-password"
              name="password"
              className={`form-control ${
                errors.password ? "is-invalid" : ""
              }`}
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={() => setShowPassword((s) => !s)}
              aria-label="Toggle password visibility"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
            {errors.password && (
              <div className="invalid-feedback d-block">zz
                {errors.password}
              </div>
            )}
          </div>
        </div>

        <div className="text-end mb-3" style={{ fontSize: "0.85rem" }}>
          Forgot Password ?{" "}
          <a href="#!" className="link-brand-navy">
            Click Here!
          </a>
        </div>

        <button type="submit" className="btn btn-brand-navy w-100 mb-3">
          Login
        </button>

        <p className="text-center mb-2" style={{ fontSize: "0.9rem" }}>
          Don't have an account?{" "}
          <button
            type="button"
            className="btn btn-link p-0 link-brand-navy"
            onClick={onSwitchToRegister}
          >
            Register!
          </button>
        </p>

        <div className="divider-text">Or sign in with</div>

        <button type="button" className="google-btn" aria-label="Sign in with Google">
          <svg width="20" height="20" viewBox="0 0 48 48">
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4c-7.5 0-14 4.2-17.7 10.7z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.5 0 10.4-1.9 14.2-5.1l-6.5-5.5C29.6 35.1 27 36 24 36c-5.3 0-9.7-3.4-11.3-8.1l-6.5 5C9.9 39.7 16.4 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.7l6.5 5.5C40.9 36.6 44 30.9 44 24c0-1.3-.1-2.7-.4-3.5z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}