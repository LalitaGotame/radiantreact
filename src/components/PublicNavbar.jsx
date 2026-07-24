import logoIcon from '../assets/logo-icon.png'

export default function PublicNavbar() {
  return (
    <nav className="site-navbar navbar navbar-expand-lg">
      <div className="container-fluid px-3 px-lg-5 d-flex align-items-center justify-content-between flex-wrap gap-3">
        <a className="navbar-brand fw-bold m-0" href="/">
          <img src={logoIcon} height="44" alt="Radiant Elite Tutors" />
        </a>

        <div className="d-flex gap-2 flex-grow-1" style={{ maxWidth: 480 }}>
          <input
            className="form-control search-box"
            type="search"
            placeholder="Search Courses..."
          />
          <button className="btn btn-search px-4 text-nowrap">
            <i className="fa-solid fa-magnifying-glass"></i> Search
          </button>
        </div>

        <div className="d-flex gap-2">
          <a href="/login" className="btn btn-brand-navy px-4">Login</a>
          <a href="/register" className="btn btn-outline-brand-navy px-4">Signup</a>
        </div>
      </div>
    </nav>
  )
}