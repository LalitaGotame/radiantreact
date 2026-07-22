import { useState } from 'react'
import PurchaseCard from '../components/PurchaseCard.jsx'
import Footer from '../components/Footer.jsx'
import { purchaseHistory } from '../data/courses.js'

const filters = [
  { key: 'all', label: 'All', icon: 'bi-list-ul' },
  { key: 'active', label: 'Active', icon: 'bi-check-circle' },
  { key: 'pending', label: 'Pending', icon: 'bi-clock' },
  { key: 'expired', label: 'Expired', icon: 'bi-hourglass-split' },
]

export default function PurchaseHistoryPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all'
      ? purchaseHistory
      : purchaseHistory.filter((p) => p.status === activeFilter)

  return (
    <div className="home-page">
      <div className="home-page-topbar">
        <h1 className="home-greeting">Purchase History</h1>
      </div>

      <div className="category-filter-pills">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            className={`category-pill ${activeFilter === f.key ? 'is-active' : ''}`}
            onClick={() => setActiveFilter(f.key)}
          >
            <i className={`bi ${f.icon}`}></i> {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <i className="bi bi-receipt empty-state-icon"></i>
          <h3>No purchases found</h3>
          <p>Nothing matches this filter yet.</p>
        </div>
      ) : (
        <div className="course-grid">
          {filtered.map((purchase) => (
            <PurchaseCard key={purchase.id} purchase={purchase} />
          ))}
        </div>
      )}

      <Footer />
    </div>
  )
}