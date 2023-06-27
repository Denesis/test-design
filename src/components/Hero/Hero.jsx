import "./Hero.css";

const Hero = (props) => {
  const { image, namePage, title, text } = props;
  
  return (
    <section
      className="heroContainer"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <h5 className="namePage">{namePage}</h5>
      <div className="itemContainer">
        <h1 className="title">{title}</h1>
        <p className="text">{text}</p>
      </div>
    </section>
  );
};
export default Hero;
