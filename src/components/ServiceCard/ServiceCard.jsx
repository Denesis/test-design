import "./ServiceCard.css";

const ServiceCard = (props) => {
  const { src, title, textContentCard } = props;
  const url = "#";

  return (
    <div className="col">
      <div className="card">
        <img className="card-img-top" src={src} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{textContentCard}</p>
          <a href={url} className="card-link">
            Ver producto
          </a>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
