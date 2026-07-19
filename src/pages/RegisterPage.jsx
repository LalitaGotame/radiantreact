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
             
               <RegisterForm />
             
           </div>
        </div>
      </div>
    </div>
  )
}
