import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-decoration left-circle"></div>
      <div className="hero-decoration right-circle"></div>

      <div className="hero-content">
        <h1>
          The <span className="yellow">thinkers</span> and
          <br />
          doers were <span className="pink">changing</span>
          <br />
          the <span className="green">status Quo</span> with
        </h1>

        <p>
          We are a team of strategists, designers,
          communicators, researchers. Together,
          we believe that progress only happens
          when you refuse to play things safe.
        </p>
      </div>

      <div className="team-members">

        <div className="member">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43f"
            alt=""
          />
        </div>

        <div className="member">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt=""
          />
        </div>

        <div className="member">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
            alt=""
          />
        </div>

        <div className="member">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            alt=""
          />
        </div>

      </div>

    </section>
  );
};

export default Hero;