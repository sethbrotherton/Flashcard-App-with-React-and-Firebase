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
  //console.log(props);
  return (
    <div>
      {props.cards.map((card, index) => {
        return (
          <div className="flip-card" key={card.id} style={cardStyle}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p>{card.front}</p>
              </div>
              <div className="flip-card-back">
                <p>{card.back}</p>
              </div>
            </div>
            <button
              className="delete-button"
              onClick={() => props.deleteCard(card.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
      {/* <p style={cardStyle}>{props.children}</p> */}
    </div>
  );
}

export default Cards;
