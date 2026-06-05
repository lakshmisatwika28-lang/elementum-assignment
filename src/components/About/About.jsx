import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2 className="about-title">
          Tomorrow should
          <br />
          be better than <span>today</span>
        </h2>

        <p className="about-text">
          We are a team of strategists, designers, communicators,
          researchers. Together, we believe that progress only
          happens when you refuse to play things safe.
        </p>

        <a href="/" className="about-link">
          Read more
          <span className="line"></span>
        </a>
      </div>

      <div className="about-image-wrapper">
        <div className="pink-glow"></div>

        <div className="coral-shape"></div>
      </div>
    </section>
  );
};

export default About;