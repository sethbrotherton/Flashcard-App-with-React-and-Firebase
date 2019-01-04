import React, { Component } from "react";
import "./App.css";
import Cards from "./components/Cards";
import AddCard from "./components/AddCard";
import firebase from "firebase";
import { db } from "./config/Firebase";

class App extends Component {
  state = {
    cards: []
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
    db.collection("testing").onSnapshot(res => {
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
          // case "removed":
          //   data = data.filter(item => item.id !== doc.id);
          //   break;
          default:
            break;
        }
      });
    });
  };

  deleteCard = id => {
    console.log("deleting");
    const copy = [...this.state.cards];
    const filteredCards = copy.filter(card => {
      return card.id !== id;
    });
    console.log(filteredCards);
    this.setState({
      cards: filteredCards
    });
    db.collection("testing")
      .doc(id)
      .delete();
    this.syncCards();
  };

  componentWillMount() {
    this.syncCards();
  }

  // componentWillUpdate(nextProps, nextState) {
  //   if (this.state !== nextState) {
  //     console.log(nextState);
  //     console.log(this.state);
  //   }
  // }

  render() {
    return (
      <div className="App">
        <h2>React Flashcards - Under Construction</h2>
        {/* {this.state.cards.map(card => {
          return <Cards>{card.front}</Cards>;
        })} */}
        <AddCard syncCards={this.syncCards} />
        <Cards cards={this.state.cards} deleteCard={this.deleteCard} />
      </div>
    );
  }
}

export default App;
