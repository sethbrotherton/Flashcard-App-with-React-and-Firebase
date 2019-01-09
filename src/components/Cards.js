import React, { Component } from "react";
import Card from "./Card";
import Deck from "./Deck";
import AddCard from "./AddCard";

class Cards extends Component {
  cardStyle = {
    border: "3px solid blue",
    padding: "1rem",
    fontSize: "24px",
    margin: "1rem 1rem",
    minWidth: "25%",
    display: "inline-block"
  };

  state = {
    numberCorrect: 0,
    switchDeckWasCalled: false
  };

  tallyCorrect = () => {
    let newTotal = this.state.numberCorrect + 1;
    this.setState({
      numberCorrect: newTotal
    });
  };

  resetTally = () => {
    //if (this.state.switchDeckWasCalled) {
    let newTotal = 0;
    this.setState({
      numberCorrect: newTotal
    });
    // }
  };

  render() {
    return (
      <div>
        <Deck deck={this.props.deck} switchDeck={this.props.switchDeck} />
        <AddCard deck={this.props.deck} syncCards={this.props.syncCards} />
        <h3>
          {this.state.numberCorrect}/{this.props.cards.length} Correct
        </h3>
        {this.props.cards.length ? (
          this.props.cards.map((card, index) => {
            return (
              <div className="flip-card" key={card.id} style={this.cardStyle}>
                <Card
                  tallyCorrect={this.tallyCorrect}
                  cardFront={card.front}
                  cardBack={card.back}
                />
                <button
                  className="delete-button"
                  onClick={() => this.props.deleteCard(card.id)}
                >
                  Delete
                </button>
              </div>
            );
          })
        ) : (
          <div>
            <h1>
              There are no flashcards in this deck. Add some, or pick another
              deck
            </h1>
          </div>
        )}
      </div>
    );
  }
}

export default Cards;
