import logoIcon from '../assets/logo-icon.png'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src={logoIcon} alt="" height="70" />
        <div>
          <div className="footer-brand-name">RADIANT ELITE TUTORS</div>
          <div className="footer-brand-tagline">Smart Care, Pro Guidance</div>
        </div>
      </div>

      <nav className="footer-nav">
        <a href="/home">Home</a>
        <a href="/courses">Courses</a>
        <a href="#!">About Us</a>
      </nav>

      <div className="footer-contact">
        Contact Us : +977-1234567890 | +977-0987654321
      </div>

      <div className="footer-social">
        <span className="footer-social-label">Follow Us</span>
        <div className="footer-social-icons">
          <a href="#!" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#!" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#!" aria-label="TikTok">
            <i className="bi bi-tiktok"></i>
          </a>
          <a href="#!" aria-label="WhatsApp">
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
