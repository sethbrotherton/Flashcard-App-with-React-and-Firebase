import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import "firebase/firestore";
import { db } from "./config/Firebase";

class App extends Component {
  state = {
    cards: [],
    deck: "default",
    isFlipped: false
  };

  syncCards = () => {
    let deckName = this.state.deck;
    db.collection(deckName).onSnapshot(res => {
      this.setState({
        cards: []
      });
      res.docChanges().forEach(change => {
        const doc = { ...change.doc.data(), id: change.doc.id };
        switch (change.type) {
          case "added":
            let cards = [...this.state.cards, doc];
            this.setState({
              cards: cards
            });
            //console.log(this.state.cards);
            break;
          // case "modified":
          //   const index = data.findIndex(item => item.id == doc.id);
          //   data[index] = doc;
          //   break;
          case "removed":
            const copy = [...this.state.cards];
            let filteredCards = copy.filter(card => card.id !== doc.id);
            this.setState({
              cards: filteredCards
            });
            break;
          default:
            break;
        }
      });
    });
  };

  deleteCard = id => {
    const copy = [...this.state.cards];
    const filteredCards = copy.filter(card => {
      return card.id !== id;
    });
    this.setState({
      cards: filteredCards
    });
    db.collection(this.state.deck)
      .doc(id)
      .delete();
    this.syncCards();
  };

  switchDeck = deckName => {
    this.setState(
      state => {
        const deck = deckName;
        return {
          deck
        };
      },
      () => {
        this.syncCards();
      }
    );
    this.cardsRef.current.resetTally();
  };

  cardsRef = React.createRef();

  flipThisCard = () => {
    const copy = this.state.isFlipped;
    const toggled = !copy;
    this.setState({
      isFlipped: toggled
    });
  };

  componentWillMount() {
    this.syncCards();
  }

  componentWillUnmount() {}

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h2>React Flashcards - Under Construction</h2>
          <Navbar />
          <Switch>
            <Route
              path="/practice"
              render={() => (
                <Cards
                  ref={this.cardsRef}
                  cards={this.state.cards}
                  deleteCard={this.deleteCard}
                  flipThisCard={this.flipThisCard}
                  isFlipped={this.state.isFlipped}
                  deck={this.state.deck}
                  switchDeck={this.switchDeck}
                  syncCards={this.syncCards}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
