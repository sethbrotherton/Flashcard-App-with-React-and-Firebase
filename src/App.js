import React, { Component } from "react";
import "./App.css";
import Cards from "./components/Cards";
import AddCard from "./components/AddCard";
import Deck from "./components/Deck";
import firebase from "firebase/app";
//import firebase from "firebase/firestore";
import "firebase/firestore";
import { db } from "./config/Firebase";

class App extends Component {
  state = {
    cards: [],
    deck: "default",
    isFlipped: false
  };

  // updateCards = () => {
  //   let cards = [];
  //   db.collection("testing")
  //     .get()
  //     .then(querySnapshot => {
  //       console.log("id:", this.state.cards);
  //       querySnapshot.forEach(doc => {
  //         cards.push(doc.data(), doc.id);
  //       });
  //       return cards;
  //     })
  //     .then(() => {
  //       this.setState({
  //         cards
  //       });
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

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
  };

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

  componentWillUnmount() {
    // const ref = firebase.firestore();
    // ref.off();
  }

  render() {
    return (
      <div className="App">
        <h2>React Flashcards - Under Construction</h2>
        <Deck deck={this.state.deck} switchDeck={this.switchDeck} />
        <AddCard deck={this.state.deck} syncCards={this.syncCards} />
        <Cards
          cards={this.state.cards}
          deleteCard={this.deleteCard}
          flipThisCard={this.flipThisCard}
          isFlipped={this.state.isFlipped}
        />
      </div>
    );
  }
}

export default App;
