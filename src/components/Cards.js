import React from "react";
import Card from "./Card";

function Cards(props) {
  const cardStyle = {
    border: "3px solid blue",
    padding: "1rem",
    fontSize: "24px",
    margin: "1rem 1rem",
    minWidth: "25%",
    display: "inline-block"
  };

  // const flipThisCard = id => {
  //   props.isFlipped = !props.isFlipped;
  // };

  return (
    <div>
      {props.cards.length ? (
        props.cards.map((card, index) => {
          return (
            <div
              className="flip-card"
              key={card.id}
              style={cardStyle}
              //onClick={() => props.flipThisCard()}
            >
              {/* <div
                className={
                  props.isFlipped
                    ? "flipped-card flip-card-inner"
                    : "flip-card-inner"
                }
              >
                <div className="flip-card-front">
                  <p>{card.front}</p>
                </div>
                <div className=" flip-card-back">
                  <p>{card.back}</p>
                </div>
              </div> */}
              <Card cardFront={card.front} cardBack={card.back} />
              <button
                className="delete-button"
                onClick={() => props.deleteCard(card.id)}
              >
                Delete
              </button>
            </div>
          );
        })
      ) : (
        <div>
          <h1>
            There are no flashcards in this deck. Add some, or pick another deck
          </h1>
        </div>
      )}
      {/* <p style={cardStyle}>{props.children}</p> */}
    </div>
  );
}

export default Cards;
