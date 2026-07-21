export default function DashboardTopbar({ onMenuClick, userName = 'Laila' }) {
  const initials = userName
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()

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

      <div className="dashboard-topbar-user">
        <span className="dashboard-topbar-username">{userName}</span>
        <div className="dashboard-topbar-avatar">{initials}</div>
      </div>
    </header>
  )
}