import React, { Component } from "react";

class Deck extends Component {
  render() {
    return (
      <div>
        <h1>Choose a Deck!</h1>
        <ul>
          <li>
            <button
              id="testing"
              onClick={e => this.props.switchDeck(e.target.id)}
            >
              testing
            </button>
          </li>
          <li>
            <button
              id="second"
              onClick={e => this.props.switchDeck(e.target.id)}
            >
              second
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Deck;
