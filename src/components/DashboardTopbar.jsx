import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function DashboardTopbar({ onMenuClick, userName = 'Sagar Timilsina' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const navigate = useNavigate()

  const initials = userName
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  // Close the dropdown when clicking anywhere outside it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleProfileClick = () => {
    setMenuOpen(false)
    navigate('/profile')
  }

  const handleLogout = () => {
    setMenuOpen(false)
    // placeholder — no real auth/session yet
    navigate('/')
  }

  return (
    <header className="dashboard-topbar">
      <button
        type="button"
        className="dashboard-topbar-menu-btn"
        onClick={onMenuClick}
        aria-label="Toggle menu"
      >
        <i className="bi bi-list"></i>
      </button>

      <span className="dashboard-topbar-title">Radiant Elite Tutors</span>

      <div className="dashboard-topbar-user" ref={menuRef}>
        <button
          type="button"
          className="dashboard-topbar-user-btn"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="dashboard-topbar-username">{userName}</span>
          <div className="dashboard-topbar-avatar">{initials}</div>
        </button>

        {menuOpen && (
          <div className="dashboard-user-dropdown">
            <button
              type="button"
              className="dashboard-user-dropdown-item"
              onClick={handleProfileClick}
            >
              My Profile
            </button>
            <button
              type="button"
              className="dashboard-user-dropdown-item dashboard-user-dropdown-logout"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  )
}