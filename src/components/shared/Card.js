function Card({ children, reverse }) {
  return (
    <div className="row">
    <div
      className="card col-6"
      style={{
        backgroundColor: reverse ? "#333" : "#fff",
        color: reverse ? "#fff" : "#333",
      }}
    >
      
      {children}
      </div>
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

export default Card;
