import "./About.css";

import image348 from "../../assets/images/image 348.png";
import image3481 from "../../assets/images/image 348(1).png";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-top">
        <div className="about-text about-text-left">
          <h2>
            <span className="about-underline">Tomorrow</span> should
            <br />
            be better than <span className="about-green">today</span>
          </h2>

          <p>
            We are a team of strategists, designers communicators, researchers.
            Together, we believe that progress only happens when you refuse to
            play things safe.
          </p>

          <a href="#" className="read-more">
            Read more <span></span>
          </a>
        </div>

        <div className="about-image about-image-top">
          <div className="red-square"></div>
          <img src={image348} alt="meeting" />
        </div>
      </div>

      <div className="about-bottom">
        <div className="about-image about-image-bottom">
          <div className="red-triangle-left"></div>
          <img src={image3481} alt="team working" />
          <div className="red-triangle-bottom"></div>
        </div>

        <div className="about-text about-text-right">
          <h2>
            <span className="about-green">See</span> how we can
            <br />
            help you <span className="about-underline">progress</span>
          </h2>

          <p>
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>

          <a href="#" className="read-more">
            Read more <span></span>
          </a>
        </div>
      </div>

      <div className="red-curve"></div>
    </section>
  );
};

export default About;