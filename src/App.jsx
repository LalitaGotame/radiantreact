import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSide from "./components/HeroSide.jsx";
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";

export default function App() {
  
  const [view, setView] = useState("login");

  const goToLogin = () => setView("login");
  const goToRegister = () => setView("register");

  return (
    <div>
      <Navbar onLoginClick={goToLogin} onSignupClick={goToRegister} />

      <div className="auth-page-wrapper">
        <div className="row g-0">
          <div className="col-lg-6">
            <HeroSide onExploreClick={() => alert("Redirecting to courses...")} />
          </div>
          <div className="col-lg-6">
            <div className="hero-photo-side">
              <div className="hero-tagline">
                <h2>
                  LEARN. <span className="accent-gold">ACHIEVE.</span> EXCEL.
                </h2>
                <p className="text-white-50 mb-0">
                  Your Path to Mastery Starts Here!
                </p>
              </div>
            </div>
          </div>
        </div>

        {view === "login" ? (
          <LoginForm onSwitchToRegister={goToRegister} />
        ) : (
          <RegisterForm onSwitchToLogin={goToLogin} />
        )}
      </div>
    </div>
  );
}