import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">

      <h2>
        What our customer
        <br />
        says About Us
      </h2>

      <div className="testimonial-wrapper">

        <img
          className="floating-avatar avatar1"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          alt=""
        />

        <img
          className="floating-avatar avatar2"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43f"
          alt=""
        />

        <img
          className="floating-avatar avatar3"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
          alt=""
        />

        <div className="testimonial-card">

          <p>
            Elementum delivered the site within the timeline as
            requested. In the end, the client found a 50%
            increase in traffic within days since launch.
            They also demonstrated an impressive ability
            to use technologies that the company hadn't
            used before, which proved easy to use and reliable.
          </p>

          <div className="testimonial-user">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
              alt=""
            />

            <div>
              <h4>John Smith</h4>
              <span>Marketing Director</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;