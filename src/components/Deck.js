import React, { Component } from "react";

class Deck extends Component {
  render() {
    return (
      <div>
        <h1>Choose a Deck!</h1>

        <button id="react" onClick={e => this.props.switchDeck(e.target.id)}>
          React
        </button>
        <button id="react" onClick={e => this.props.switchDeck(e.target.id)}>
          Vue
        </button>
        <button id="react" onClick={e => this.props.switchDeck(e.target.id)}>
          Angular
        </button>
        <button id="java" onClick={e => this.props.switchDeck(e.target.id)}>
          Scala
        </button>
        <button
          id="developer-tools"
          onClick={e => this.props.switchDeck(e.target.id)}
        >
          Developer Tools
        </button>
        <button id="science" onClick={e => this.props.switchDeck(e.target.id)}>
          Science
        </button>
        <button id="science" onClick={e => this.props.switchDeck(e.target.id)}>
          Math
        </button>
        <button
          id="scripture"
          onClick={e => this.props.switchDeck(e.target.id)}
        >
          Scripture
        </button>
      </div>
    );
  }
}

export default Deck;
