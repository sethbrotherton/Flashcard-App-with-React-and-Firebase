import React, { Component } from "react";
import { db } from "../config/Firebase";

export default class AddCard extends Component {
  state = {
    front: "",
    back: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    //console.log(this.state);
  };

  addCard = e => {
    e.preventDefault();
    //const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    if (this.state.front.length && this.state.back.length) {
      db.collection(this.props.deck).add({
        front: this.state.front,
        back: this.state.back
      });
      //console.log(cardRef);
      this.setState({
        front: "",
        back: ""
      });
      this.props.syncCards();
      this.frontInputFocus();
    }
  };

  frontInputRef = React.createRef();

  frontInputFocus = () => {
    this.frontInputRef.current.focus();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addCard} action="">
          <input
            ref={this.frontInputRef}
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
          <button className="add-button" type="submit">
            ADD CARD
          </button>
        </form>
      </div>
    );
  }
}
