import React, { Component } from "react";

class Deck extends Component {
  render() {
    return (
      <div>
        <h1>Choose a Deck!</h1>

        <button id="react" onClick={e => this.props.switchDeck(e.target.id)}>
          React
        </button>
        <button id="vue" onClick={e => this.props.switchDeck(e.target.id)}>
          Vue
        </button>
        <button id="angular" onClick={e => this.props.switchDeck(e.target.id)}>
          Angular
        </button>
        <button id="scala" onClick={e => this.props.switchDeck(e.target.id)}>
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
        <button id="math" onClick={e => this.props.switchDeck(e.target.id)}>
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
