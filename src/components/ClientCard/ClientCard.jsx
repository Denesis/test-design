import "./ClientCard.css";

const ClientCard = (props) => {
  const { srcClient, nameClient } = props;
  return (
    <div className="clientContainer">
      <img className="imageClient" src={srcClient} alt={nameClient} />
    </div>
  );
};
export default ClientCard;
