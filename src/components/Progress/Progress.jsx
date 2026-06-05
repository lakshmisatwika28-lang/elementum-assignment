import "./Progress.css";

const Progress = ({ reverse }) => {
  return (
    <section className={`progress ${reverse ? "reverse" : ""}`}>

      {/* decorative shapes only */}
      <div className="progress-image">
        <div className="green-blur"></div>
        <div className="yellow-shape"></div>
        <div className="circle-ring"></div>
      </div>

      <div className="progress-content">

        <h2>
          See how we can help you <span>progress</span>
        </h2>

        <p>
          We add a layer of fearless insights and action that allows
          changemakers to accelerate their progress in areas such as brand,
          design, digital, comms and social research.
        </p>

        <a href="/" className="progress-link">
          Read more <span className="line"></span>
        </a>

      </div>

    </section>
  );
};

export default Progress;