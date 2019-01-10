import React from "react";

export default function PracticeAgain(props) {
  return (
    <div>
      <button onClick={() => props.switchDeck(props.deck)}>
        Practice Again!
      </button>
    </div>
  );
}
