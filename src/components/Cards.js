import React from "react";

function Cards(props) {
  const cardStyle = {
    border: "3px solid blue",
    padding: "1rem",
    fontSize: "24px",
    margin: "1rem auto",
    maxWidth: "25%"
  };

  return (
    <div>
      <p style={cardStyle}>{props.children}</p>
    </div>
  );
}

export default Cards;
