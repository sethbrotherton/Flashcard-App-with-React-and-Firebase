import React, { Component } from "react";

class Card extends Component {
  state = {
    isFlipped: false
  };

  flipThisCard = () => {
    this.setState({
      isFlipped: !this.state.isFlipped
    });
  };
  render() {
    return (
      <div
        onClick={() => this.flipThisCard()}
        className={
          this.state.isFlipped
            ? "flipped-card flip-card-inner"
            : "flip-card-inner"
        }
      >
        <div className="flip-card-front">
          <p>{this.props.cardFront}</p>
        </div>
        <div className="flip-card-back">
          <p>{this.props.cardBack}</p>
        </div>
      </div>
    );
  }
}

export default Card;
