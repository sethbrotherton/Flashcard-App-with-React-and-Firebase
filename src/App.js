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

  updateCards = () => {
    let cards = [];
    db.collection("testing")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          cards.push(doc.data());
        });
        return cards;
      })
      .then(() => {
        this.setState({
          cards
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  componentWillMount() {
    this.updateCards();
  }

  componentWillUpdate() {
    this.updateCards();
  }

  render() {
    return (
      <div className="App">
        <h2>React Flashcards - Under Construction</h2>
        {/* {this.state.cards.map(card => {
          return <Cards>{card.front}</Cards>;
        })} */}
        <AddCard />
        <Cards cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
