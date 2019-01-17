import React, { Component } from "react";
import Card from "./Card";
import Deck from "./Deck";
import AddCard from "./AddCard";
import PracticeAgain from "./PracticeAgain";

class Cards extends Component {
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
    let newTotal = 0;
    this.setState({
      numberCorrect: newTotal
    });
  };

  render() {
    return (
      <div>
        <h1>You are currently in the {this.props.deck} deck.</h1>
        <h2>If you would like to change decks, choose from below...</h2>
        <Deck deck={this.props.deck} switchDeck={this.props.switchDeck} />
        <AddCard deck={this.props.deck} syncCards={this.props.syncCards} />
        <h3>
          {this.state.numberCorrect}/{this.props.cards.length} Correct
        </h3>
        {this.state.numberCorrect === this.props.cards.length ? (
          <PracticeAgain
            deck={this.props.deck}
            switchDeck={this.props.switchDeck}
          />
        ) : null}
        {this.props.cards.length ? (
          this.props.cards.map((card, index) => {
            return (
              <div className="flip-card" key={card.id}>
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
