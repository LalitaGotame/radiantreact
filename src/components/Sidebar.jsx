import { NavLink } from 'react-router-dom'
import logoIcon from '../assets/logo-icon.png'
import profileAvatar from '../assets/profile-avatar.jpg'

const menuGroups = [
  {
    label: null,
    items: [{ to: '/home', icon: 'bi-house-fill', text: 'Home' }],
  },
  {
    label: 'Contents',
    items: [
      { to: '/courses', icon: 'bi-journal-bookmark-fill', text: 'All Courses' },
      { to: '/featured', icon: 'bi-bookmark-star-fill', text: 'Featured Courses' },
    ],
  },
  {
    label: 'My Library',
    items: [
      { to: '/saved', icon: 'bi-bookmark-heart-fill', text: 'Saved Courses' },
      { to: '/recommendation', icon: 'bi-hand-thumbs-up-fill', text: 'Recommendation' },
    ],
  },
  {
    label: 'Profile',
    items: [
      { to: '/my-dashboard', icon: 'bi-grid-fill', text: 'Dashboard' },
      { to: '/certifications', icon: 'bi-award-fill', text: 'Certifications' },
    ],
  },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={logoIcon} alt="Radiant Elite Tutors" height="56" />
      </div>

      <nav className="sidebar-nav">
        {menuGroups.map((group, i) => (
          <div className="sidebar-group" key={group.label ?? `top-${i}`}>
            {group.label && <div className="sidebar-group-label">{group.label}</div>}
            {group.items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? 'is-active' : ''}`
                }
              >
                <i className={`bi ${item.icon}`}></i>
                <span>{item.text}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      
      <div className="sidebar-profile-card">
        <img src={profileAvatar} alt="" className="sidebar-profile-avatar" />
        <div>
          <div className="sidebar-profile-name">Laila</div>
          <div className="sidebar-profile-role">Student</div>
        </div>
      </div>
    </aside>
  )
}
