import React from "react";

function Cards(props) {
  const cardStyle = {
    border: "3px solid blue",
    padding: "1rem",
    fontSize: "24px",
    margin: "1rem 1rem",
    minWidth: "25%",
    display: "inline-block"
  };
  console.log(props);
  return (
    <div>
      {props.cards.map((card, index) => {
        return (
          <div key={index} style={cardStyle}>
            <p>{card.front}</p>
            <p>{card.back}</p>
          </div>
        );
      })}
      {/* <p style={cardStyle}>{props.children}</p> */}
    </div>
  );
}

export default Cards;
