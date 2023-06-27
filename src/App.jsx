import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import Carousel from "./components/Carousel/Carousel";

import imageHero from "./assets/img/ic-site-background.png";
import conversationalBot from "./assets/img/ic-site-producto-2@2x.png";
import contactCenter from "./assets/img/ic-site-producto-3@2x.png";
import mktCRM from "./assets/img/ic-site-producto-1@2x.png";
import imageCard from "./assets/img/ic-site-imagen-1@2x.png";

const imageBackground = imageHero;
const namePage = "Productos";
const titleHero = "Rentabiliza cada etapa del ciclo de vida de tus clientes";
const textContentHero =
  "Desde el marketing digital y tradicional, pasando por el CRM, la resolución de casos y la cobranza. Todos los puntos de contacto y todas las etapas del customer journey. All-in-one.";

const contentCard = [
  {
    img: conversationalBot,
    title: "Conversational Bot",
    text: "Reduce costes y mejora los resultados con inteligencia artificial.",
  },
  {
    img: contactCenter,
    title: "Contact Center",
    text: "Obtén todas las herramientas y aplicaciones que necesitas para el éxito de tu centro de contactos. ",
  },
  {
    img: mktCRM,
    title: "Marketing Automation & CRM",
    text: "Potencia, rentabiliza e integra los procesos de marketing y ventas.",
  },
];

function App() {
  return (
    <>
      <Hero
        image={imageBackground}
        namePage={namePage}
        title={titleHero}
        text={textContentHero}
      />
      <section className="sectionContainer">
        <h2 className="titleSection">
          Descubre el portafolio de productos omnicanales all-in-one más
          completo del mercado
        </h2>
        <p className="textSection">
          Súmale valor al viaje de tu cliente en cada punto de contacto a través
          del chat, mail, teléfono, WhatsApp y otros canales. Con inConcert
          vende más, brinda un mejor servicio y reduce costes operativos.
        </p>
        <p className="textSection">
          Conoce los productos que componen nuestra plataforma omnicanal y
          modular diseñada para optimizar los contactos con tus clientes y los
          procesos de marketing, ventas, servicio y cobranza.
        </p>
        <div className="cardContainer row">
          {contentCard.map((card) => (
            <ServiceCard
              src={card.img}
              title={card.title}
              textContentCard={card.text}
            />
          ))}
        </div>
      </section>
      <section className="sectionCarousel">
        <div className="carouselContainer">
          <h1 className="titleSectionCarousel">Transformamos <br/>el Contact Center en</h1>
          <Carousel />
          <div className="buttonContainer">
            <button type="button" class="btn btn-primary">
              Quiero una demo
            </button>
            <button type="button" class="btn btn-outline-primary">
              Más información
            </button>
          </div>
        </div>
        <div className="imageCarousel">
          <img src={imageCard} alt="" />
        </div>
      </section>
      {/* <LandingPage/> */}
      <Footer />
    </>
  );
}

export default App;
