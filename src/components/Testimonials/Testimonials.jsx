import "./Testimonials.css";

import e263 from "../../assets/images/Ellipse 263.png";
import e266 from "../../assets/images/Ellipse 266.png";
import e267 from "../../assets/images/Ellipse 267.png";
import e268 from "../../assets/images/Ellipse 268.png";
import e269 from "../../assets/images/Ellipse 269.png";
import e270 from "../../assets/images/Ellipse 270.png";
import e260 from "../../assets/images/Ellipse 260.png";
import e258 from "../../assets/images/Ellipse 258.png";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>
        <span>What</span> our customer
        <br />
        says <em>About Us</em>
      </h2>

      <div className="testimonial-card">
        <span className="quote quote-left">“</span>
        <p>
          Elementum delivered the site with inthe timeline as they requested.
          Inthe end, the client found a 50% increase in traffic with in days
          since its launch. They also had an impressive ability to use
          technologies that the company hasn&apos;t used, which have also proved
          to be easy to use and reliable
        </p>
        <span className="quote quote-right">”</span>
      </div>

      <img src={e263} alt="" className="test-avatar t1" />
      <img src={e266} alt="" className="test-avatar t2" />
      <img src={e267} alt="" className="test-avatar t3" />
      <img src={e268} alt="" className="test-avatar t4" />
      <img src={e269} alt="" className="test-avatar t5" />
      <img src={e270} alt="" className="test-avatar t6" />
      <img src={e260} alt="" className="test-avatar t7" />
      <img src={e258} alt="" className="test-avatar t8" />
    </section>
  );
};

export default Testimonials;