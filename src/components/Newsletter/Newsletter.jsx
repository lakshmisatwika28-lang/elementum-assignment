import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-lines"></div>
      <div className="newsletter-shape"></div>

      <h2>
        Subscribe to
        <br />
        our newsletter
      </h2>

      <p>To make your stay special and even more memorable</p>

      <button>Subscribe Now</button>
    </section>
  );
};

export default Newsletter;