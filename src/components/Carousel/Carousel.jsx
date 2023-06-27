import "./Carousel.css";
import ClientCard from "../ClientCard/ClientCard";

import avanza from "../../assets/img/ic-site-carrousel-1@2x.png";
import atento from "../../assets/img/ic-site-carrousel-2@2x.png";
import alsea from "../../assets/img/ic-site-carrousel-3@2x.png";

const contentCard = [
  {
    name: "Alsea",
    image: alsea,
  },
  {
    name: "Atento",
    image: atento,
  },
  {
    name: "Avanza",
    image: avanza,
  },
];

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="itemContainerCarousel">
            {contentCard.map((content) => (
              <ClientCard srcClient={content.image} nameClient={content.name} />
            ))}
            {contentCard.map((content) => (
              <ClientCard srcClient={content.image} nameClient={content.name} />
            ))}
          </div>
        </div>
        <div className="carousel-item">
          <div className="itemContainerCarousel">
            {contentCard.map((content) => (
              <ClientCard srcClient={content.image} nameClient={content.name} />
            ))}
            {contentCard.map((content) => (
              <ClientCard srcClient={content.image} nameClient={content.name} />
            ))}
          </div>
        </div>
        <div className="carousel-item">
          <div className="itemContainerCarousel">
            {contentCard.map((content) => (
              <ClientCard srcClient={content.image} nameClient={content.name} />
            ))}
            {contentCard.map((content) => (
              <ClientCard srcClient={content.image} nameClient={content.name} />
            ))}
          </div>
        </div>
      </div>
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
    </div>
  );
};
export default Carousel;
