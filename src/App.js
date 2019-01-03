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

  componentWillMount() {
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
  }

  render() {
    return (
      <div className="App">
        <h2>React Flashcards - Under Construction</h2>
        {this.state.cards.map(card => {
          return <Cards>{card.front}</Cards>;
        })}
        {/* <Cards /> */}
        <AddCard />
      </div>
    );
  }
}

export default App;
