import React, { Component } from "react";
import firebase from "../config/Firebase";

export default class AddCard extends Component {
  state = {
    front: "",
    back: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state);
  };

  addCard = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const cardRef = db.collection("testing").add({
      front: this.state.front,
      back: this.state.back
    });
    this.setState({
      front: "",
      back: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addCard} action="">
          <input
            type="text"
            name="front"
            id="front"
            placeholder="Front of Card"
            onChange={this.handleChange}
            value={this.state.front}
          />
          <input
            type="text"
            name="back"
            id="back"
            placeholder="Back of Card"
            onChange={this.handleChange}
            value={this.state.back}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
