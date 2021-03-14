import React, { Component } from "react";

export class CardLogWith extends Component {
  render() {
    return (
      <div className="col-6">
        <div className="basic-card">
          <img src={this.props.src} alt="log-with" />
          <span className="d-none d-md-inline">{this.props.text}</span>
        </div>
      </div>
    );
  }
}

export default CardLogWith;
