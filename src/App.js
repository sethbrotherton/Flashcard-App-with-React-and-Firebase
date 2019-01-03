import React, { Component } from "react";
import "./App.css";
import Cards from "./components/Cards";
import AddCard from "./components/AddCard";

class App extends Component {
  state = {
    cards: [1]
  };

  render() {
    return (
      <div className="App">
        {this.state.cards.map(card => {
          return <Cards>What up</Cards>;
        })}
        {/* <Cards /> */}
        <AddCard />
      </div>
    );
  }
}

export default App;
