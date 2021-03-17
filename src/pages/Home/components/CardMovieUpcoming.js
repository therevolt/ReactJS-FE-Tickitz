import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CardMovieUpcoming extends Component {
  render() {
    return (
      <div className="card-movies border-rounded2 display-flex flex-direction-col is-vertically-centered margin-right-1">
        <img className="padding-y-1 border-rounded2" src={this.props.image} alt="" />
        <span className="title-movies d-inline-block text-truncate">{this.props.title}</span>
        <p className="cat-movies">{this.props.genre}</p>
        <Link to={`/movie/${this.props.id}`}>
          <input className="btn-detail-movies" type="submit" value="Detail" id={this.props.id} />
        </Link>
      </div>
    );
  }
}

export default CardMovieUpcoming;
