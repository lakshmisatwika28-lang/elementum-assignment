import "./Offer.css";

const services = [
  {
    id: "01",
    subtitle: "Office of multiple interest content",
    title: "Collaborative & partnership",
  },
  {
    id: "02",
    subtitle: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
  },
  {
    id: "03",
    subtitle: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
  },
];

const Offer = () => {
  return (
    <section className="offer">
      <div className="offer-heading">
        <h2>
          What we can
          <br />
          offer you!
        </h2>
      </div>

      <div className="offer-list">
        {services.map((item) => (
          <div className="offer-card" key={item.id}>
            <div className="offer-left">
              <span>{item.subtitle}</span>
            </div>

            <div className="offer-center">
              <h3>{item.title}</h3>
            </div>

            <div className="offer-right">
              <span className="arrow">↗</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offer;