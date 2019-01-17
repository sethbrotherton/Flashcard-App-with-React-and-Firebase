import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import "firebase/firestore";
import { db } from "./config/Firebase";
const Cards = React.lazy(() => import("./components/Cards"));

class App extends Component {
  state = {
    cards: [],
    deck: "react",
    isFlipped: false
  };

  // This function will reach out to the firestore and sync
  // state of this app with the data in the db
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

  // this function will change the name of the deckname in this.state
  // the deckname is the parameter passed into syncCards(),
  // so changing the deckname will change the collection asked for from the db
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
    // when the deck is changed, the number correctly remembered is reset to 0 in the following line.
    this.cardsRef.current.resetTally();
  };

  cardsRef = React.createRef();

  // toggles the state of the card, flipped or not.  Will affect conditional rendering of style, so that different sides
  // will show based on boolean value of this state
  flipThisCard = () => {
    const copy = this.state.isFlipped;
    const toggled = !copy;
    this.setState({
      isFlipped: toggled
    });
  };

  //Cards are loaded from db when component mounts
  componentWillMount() {
    this.syncCards();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/practice"
              render={() => (
                <React.Suspense fallback={<div>Loading...</div>}>
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
                </React.Suspense>
              )}
            />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
