import {useState} from 'react';
import logo from '../assets/logo.jpg';

export default function Navbar({ onLoginClick, onSignupClick }) {
  const [role,setRole] = useState("Login");
  return (
    <nav className="site-navbar d-flex align-items-center justify-content-between flex-wrap gap-2"
    style={{backgroundColor:"#f7f7f5"}}>
      <div className="d-flex align-items-center gap-2">
        <span style={{ fontSize: "1.8rem" }} role="img" aria-label="owl logo">
          <img src={logo} alt="Logo" style={{ width: "100px", height: "50px" }} />  
        </span>
      </div>

      <div className="input-group" style={{ maxWidth: "360px" }}>
        <input
          type="search"
          className="form-control"
          placeholder="Search courses..."
          aria-label="Search courses"
        />
        <button className="btn btn-brand-navy" type="button">
          <i className="bi bi-search me-1 d-flex gx-1" aria-hidden="true"></i>
          Search
        </button>
      </div>

      <div className="d-flex align-items-center gap-2">
        <button
              type="button"
              className={`btn px-4 ${role === "Login" ? "btn-brand-navy" : "btn-outline-brand-navy"}`}
              onClick={() => {
             setRole("Login")
            onLoginClick()
         }}
      >
       Login
       </button>
        <button
            type="button"
             className={`btn px-4 ${role === "Signup" ? "btn-brand-navy" : "btn-outline-brand-navy"}`}
             onClick={() => {
               setRole("Signup")
               onSignupClick()
           }}
        >
         Sign up
         </button>
      </div>
    </nav>
  );
}