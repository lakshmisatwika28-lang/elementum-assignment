import "./Hero.css";

import e255 from "../../assets/images/Ellipse 255.png";
import e256 from "../../assets/images/Ellipse 256.png";
import e257 from "../../assets/images/Ellipse 257.png";
import e258 from "../../assets/images/Ellipse 258.png";
import e259 from "../../assets/images/Ellipse 259.png";
import e260 from "../../assets/images/Ellipse 260.png";
import e261 from "../../assets/images/Ellipse 261.png";
import e262 from "../../assets/images/Ellipse 262.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="left-doodle"></div>
      <div className="purple-shape"></div>

      <div className="hero-content">
        <h1>
          The <span className="thinkers">thinkers</span> and
          <br />
          doers were <span className="changing">changing</span>
          <br />
          the <span className="status">status</span> Quo with
        </h1>

        <p>
          We are a team of strategists, designers communicators, researchers.
          Together, we believe that progress only happens when you refuse to
          play things safe.
        </p>
      </div>

      <div className="avatar avatar-1"><img src={e262} alt="" /></div>
      <div className="avatar avatar-2"><img src={e261} alt="" /></div>
      <div className="avatar avatar-3"><img src={e255} alt="" /></div>
      <div className="avatar avatar-4"><img src={e256} alt="" /></div>
      <div className="avatar avatar-5"><img src={e257} alt="" /></div>
      <div className="avatar avatar-6"><img src={e258} alt="" /></div>
      <div className="avatar avatar-7"><img src={e259} alt="" /></div>
      <div className="avatar avatar-8"><img src={e260} alt="" /></div>
    </section>
  );
};

export default Hero;