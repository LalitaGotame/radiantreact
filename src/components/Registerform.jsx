import { useState } from "react";
import logo from '../assets/logo.jpg';

const initialValues = {
  fullName: "",
  dob: "",
  email: "",
  gender: "",
  role: "",
  address: "",
  phone: "",
  photo: null,
  password: "",
  retypePassword: "",
};

export default function RegisterForm({ onSwitchToLogin }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [photoName, setPhotoName] = useState("");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{7,15}$/;

  const validate = (data) => {
    const newErrors = {};

    if (!data.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (data.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters.";
    }

    if (!data.dob) {
      newErrors.dob = "Date of birth is required.";
    } else {
      const dobDate = new Date(data.dob);
      const age = (Date.now() - dobDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
      if (dobDate.getTime() > Date.now()) {
        newErrors.dob = "Date of birth cannot be in the future.";
      } else if (age < 5) {
        newErrors.dob = "You must be at least 5 years old.";
      }
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailPattern.test(data.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!data.gender) {
      newErrors.gender = "Please select a gender.";
    }

    if (!data.role) {
      newErrors.role = "Please select a role.";
    }

    if (!data.address.trim()) {
      newErrors.address = "Address is required.";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phonePattern.test(data.phone.trim())) {
      newErrors.phone = "Enter a valid phone number (digits only).";
    }

    if (!data.photo) {
      newErrors.photo = "Please select a profile photo.";
    }

    if (!data.password) {
      newErrors.password = "Password is required.";
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!data.retypePassword) {
      newErrors.retypePassword = "Please re-enter your password.";
    } else if (data.retypePassword !== data.password) {
      newErrors.retypePassword = "Passwords do not match.";
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

  const handlePhotoChange = (e) => {
    const file = e.target.files && e.target.files[0] ? e.target.files[0] : null;
    const updated = { ...values, photo: file };
    setValues(updated);
    setPhotoName(file ? file.name : "");
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
      alert(`Account created for ${values.fullName}! You can now log in.`);
      onSwitchToLogin();
    }
  };

  return (
    <div className="auth-card-floating register-card " >
      <div className="auth-card-logo">
        <div style={{ fontSize: "2rem" }} role="img" aria-label="owl logo">
          <img src={logo} alt="logo" style={{width:'100px', height:'50px'}} />
        </div>
        
      </div>

      <form noValidate onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="fullName" className="field-label-sm">
              Full Name<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className={`field-label ${errors.fullName ? "is-invalid" : ""}`}
              placeholder="Enter your full name"
              value={values.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <div className="invalid-feedback">{errors.fullName}</div>
            )}
          </div>

          <div className="col-md-6">
            <label htmlFor="dob" className="form-label-sm">
              DOB<span className="text-danger">*</span>
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className={`field-label ${errors.dob ? "is-invalid" : ""}`}
              value={values.dob}
              onChange={handleChange}
            />
            {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
          </div>

          <div className="col-md-6">
            <label htmlFor="reg-email" className="form-label-sm">
              Email<span className="text-danger">*</span>
            </label>
            <input
              type="email"
              id="reg-email"
              name="email"
              className={`field-label ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter your email address"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          <div className="col-md-6">
            <label className="form-label-sm d-block">
              Gender<span className="text-danger">*</span>
            </label>
            <div className="d-flex gap-3 pt-1">
              {["Male", "Female", "Others"].map((g) => (
                <div className="form-check" key={g}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id={`gender-${g}`}
                    value={g}
                    checked={values.gender === g}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor={`gender-${g}`}>
                    {g}
                  </label>
                </div>
              ))}
            </div>
            {errors.gender && (
              <div className="text-danger" style={{ fontSize: "0.8rem" }}>
                {errors.gender}
              </div>
            )}
          </div>

          <div className="col-md-6">
            <label className="form-label-sm d-block">
              Your Role<span className="text-danger">*</span>
            </label>
            <div className="d-flex gap-3 pt-1">
              {["Student", "Teacher"].map((r) => (
                <div className="form-check" key={r}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="role"
                    id={`role-${r}`}
                    value={r}
                    checked={values.role === r}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor={`role-${r}`}>
                    {r}
                  </label>
                </div>
              ))}
            </div>
            {errors.role && (
              <div className="text-danger" style={{ fontSize: "0.8rem" }}>
                {errors.role}
              </div>
            )}
          </div>

          <div className="col-md-6">
            <label htmlFor="address" className="form-label-sm">
              Address<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className={`field-label ${errors.address ? "is-invalid" : ""}`}
              placeholder="Enter your address"
              value={values.address}
              onChange={handleChange}
            />
            {errors.address && (
              <div className="invalid-feedback">{errors.address}</div>
            )}
          </div>

          <div className="col-md-6">
            <label htmlFor="phone" className="form-label-sm">
              Phone<span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`field-label ${errors.phone ? "is-invalid" : ""}`}
              placeholder="Enter your phone number"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <div className="invalid-feedback">{errors.phone}</div>
            )}
          </div>

          <div className="col-md-6">
            <label htmlFor="password" className="form-label-sm">
              Password<span className="text-danger">*</span>
            </label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className={`field-label ${
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
               <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i> 
              </button>
              {errors.password && (
                <div className="invalid-feedback d-block">
                  {errors.password}
                </div>
              )}
            </div>
          </div>

          <div className="col-md-6">
            <label htmlFor="photo" className="form-label-sm">
              Photo<span className="text-danger">*</span>
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              className={`field-label ${errors.photo ? "is-invalid" : ""}`}
              onChange={handlePhotoChange}
            />
            {photoName && (
              <div className="text-muted mt-1" style={{ fontSize: "0.75rem" }}>
                Selected: {photoName}
              </div>
            )}
            {errors.photo && (
              <div className="invalid-feedback d-block">{errors.photo}</div>
            )}
          </div>

          <div className="col-md-6">
            <label htmlFor="retypePassword" className="field-label-sm">
              Re-type Password<span className="text-danger">*</span>
            </label>
            <div className="password-input-wrapper">
              <input
                type={showRetypePassword ? "text" : "password"}
                id="retypePassword"
                name="retypePassword"
                className={`field-label ${
                  errors.retypePassword ? "is-invalid" : ""
                }`}
                placeholder="Re-enter your password"
                value={values.retypePassword}
                onChange={handleChange}
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowRetypePassword((s) => !s)}
                aria-label="Toggle password visibility"
              >
               <i className={showRetypePassword ? "bi bi-eye-slash" : "bi bi-eye"}></i> 
              </button>
              {errors.retypePassword && (
                <div className="invalid-feedback d-block">
                  {errors.retypePassword}
                </div>
              )}
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-brand-navy w-100 mt-4">
          Register
        </button>

        <p className="text-center mt-3 mb-0" style={{ fontSize: "0.9rem" }}>
          Already have an account?{" "}
          <button
            type="button"
            className="btn btn-link p-0 link-brand-navy"
            onClick={onSwitchToLogin}
          >
            Login!
          </button>
        </p>
      </form>
    </div>
  );
}