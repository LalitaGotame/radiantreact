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
            to="/login"
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
