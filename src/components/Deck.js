import React, { Component } from "react";

class Deck extends Component {
  render() {
    return (
      <div>
        <h1>Choose a Deck!</h1>

        <button id="testing" onClick={e => this.props.switchDeck(e.target.id)}>
          testing
        </button>

        <button id="second" onClick={e => this.props.switchDeck(e.target.id)}>
          second
        </button>
      </div>
    );
  }
}

export default Deck;
