import React, { Component } from "react";

class Card extends Component {
  state = {
    isFlipped: false,
    wasRemembered: false
  };

  flipThisCard = () => {
    this.setState({
      isFlipped: !this.state.isFlipped
    });
  };

  rememberedCorrectly = () => {
    this.setState({
      wasRemembered: true
    });
    this.props.tallyCorrect();
    console.log("remembered");
  };
  render() {
    return (
      <>
        {!this.state.wasRemembered ? (
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
              <button onClick={this.rememberedCorrectly}>
                Recalled correctly
              </button>
              <button>Need more practice</button>
            </div>
          </div>
        ) : (
          <h1>Success!</h1>
        )}
      </>
    );
  }
}

export default Card;
