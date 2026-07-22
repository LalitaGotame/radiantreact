import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import profileAvatar from '../assets/profile-avatar.jpg'

const menuGroups = [
  {
    label: 'Main',
    items: [{ to: '/home', icon: 'bi-house-fill', text: 'Home' }],
  },
  {
    label: 'Learning Content',
    items: [
      { to: '/courses', icon: 'bi-journal-bookmark-fill', text: 'All Courses' },
      { to: '/all-live-class', icon: 'bi-camera-video-fill', text: 'All Live Classes' },
      { to: '/saved', icon: 'bi-heart-fill', text: 'Saved Courses' },
    ],
  },
  {
    label: 'My Learning',
    items: [
      { to: '/subscriptions', icon: 'bi-journal-bookmark', text: 'My Subscriptions' },
      { to: '/progress', icon: 'bi-graph-up', text: 'Courses Progress' },
      { to: '/purchase-history', icon: 'bi-clock-history', text: 'Purchase History' },
    ],
  },
  {
    label: 'Account',
    items: [
      { to: '/profile', icon: 'bi-person-fill', text: 'My Profile' },
      { to: '/settings', icon: 'bi-gear-fill', text: 'Settings' },
    ],
  },
  {
    label: 'Support',
    items: [
      { to: '/support', icon: 'bi-question-circle-fill', text: 'Support' },
      { to: '/feedback', icon: 'bi-chat-dots-fill', text: 'Feedback' },
    ],
  },
]

export default function Sidebar({isOpen= true}) {
  return (
     <aside className={`sidebar ${isOpen ? '' : 'sidebar-collapsed'}`}>
      <div className="sidebar-logo">
        <img src={logo} alt="Radiant Elite Tutors" height="56" />
      </div>

      <nav className="sidebar-nav">
        {menuGroups.map((group) => (
          <div className="sidebar-group" key={group.label}>
            <div className="sidebar-group-label">{group.label}</div>
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