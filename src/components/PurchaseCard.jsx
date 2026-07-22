const statusLabels = {
  active: 'Active',
  pending: 'Pending',
  expired: 'Expired',
}

export default function PurchaseCard({ purchase }) {
  return (
    <div className="purchase-card">
      <div className="purchase-card-image-wrap">
        <img src={purchase.thumb} alt="" className="purchase-card-image" />
        <span className={`purchase-status-badge purchase-status-${purchase.status}`}>
          {statusLabels[purchase.status]}
        </span>
        <span className="course-card-type-badge">Course</span>
      </div>

      <div className="purchase-card-body">
        <div className="purchase-card-title-row">
          <h3 className="purchase-card-title">{purchase.title}</h3>
          <span className="purchase-card-rating">
            <i className="bi bi-star-fill"></i> {purchase.rating}
          </span>
        </div>

        <div className="purchase-card-dates">
          <div>
            <i className="bi bi-calendar-event"></i> Purchased:{' '}
            {purchase.purchasedDate}
          </div>
          <div>
            <i className="bi bi-hourglass-split"></i> Expires:{' '}
            {purchase.expiresDate}
          </div>
        </div>

        <div className="purchase-card-footer">
          <span className="purchase-card-price">
            Rs. {purchase.price.toFixed(2)}
          </span>
          <div className="purchase-card-tags">
            <span className="purchase-tag">
              <i className="bi bi-credit-card"></i> {purchase.paymentType}
            </span>
            <span className={`purchase-tag purchase-status-${purchase.status}`}>
              {statusLabels[purchase.status]}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}