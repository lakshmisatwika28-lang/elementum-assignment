import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">

      <div className="newsletter-purple"></div>

      <h2>
        Subscribe to
        <br />
        our newsletter
      </h2>

      <p>
        To make your stay special and even more memorable
      </p>

      <form className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email"
        />

        <button type="submit">
          Subscribe Now
        </button>
      </form>

    </section>
  );
};

export default Newsletter;