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
