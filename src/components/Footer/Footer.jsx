import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-line"></div>

      <div className="footer-grid">
        <div className="footer-column">
          <h4>Company</h4>
          <a href="#">Home</a>
          <a href="#">Studio</a>
          <a href="#">Service</a>
          <a href="#">Blog</a>
        </div>

        <div className="footer-column">
          <h4>Terms & Policies</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Explore</a>
          <a href="#">Accessibility</a>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Youtube</a>
          <a href="#">Twitter</a>
        </div>

        <div className="footer-column">
          <h4>Terms & Policies</h4>
          <p>1498w Fluton ste, STE</p>
          <p>2D Chicgo, IL 63867.</p>
          <p>(123) 456789000</p>
          <p>info@elementum.com</p>
        </div>
      </div>

      <p className="copyright">©2023 Elementum. All rights reserved</p>
    </footer>
  );
};

export default Footer;