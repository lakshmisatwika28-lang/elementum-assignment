import "./Offer.css";

const offers = [
  {
    small: "Office of multiple\ninterest content",
    title: "Collaborative & partnership",
  },
  {
    small: "The hanger US Air force\ndigital experimental",
    title: "We talk about our weight",
  },
  {
    small: "Delta faucet content,\nsocial, digital",
    title: "Piloting digital confidence",
  },
];

const Offer = () => {
  return (
    <section className="offer-section">
      <div className="offer-curve"></div>

      <div className="offer-heading">
        <h2>
          What we <span>can</span>
          <br />
          <em>offer</em> you!
        </h2>
      </div>

      <div className="offer-list">
        {offers.map((item, index) => (
          <div className="offer-row" key={index}>
            <p className="offer-small">{item.small}</p>

            <h3>{item.title}</h3>

            <div className="offer-arrow">→</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offer;