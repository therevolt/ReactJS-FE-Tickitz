import React, { Component } from "react";
import CardMovieUpcoming from "./CardMovieUpcoming";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
require("dotenv").config();

export class Upcoming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
    };
  }

  componentDidMount() {
    if (this.props.movie) {
      this.setState({
        movie: this.props.movie.movie_home.filter((item) => {
          return !item.showing;
        }),
      });
    }
  }

  render() {
    return (
      <div className="display-flex margin-x-5 flex-direction-col sm-container-1">
        <div className="nav-showing display-flex flex-content-between is-vertically-centered">
          <div>
            <p className="color-black">Upcoming Movies</p>
          </div>
          <div>
            <Link to="/movies">
              <span>view all</span>
            </Link>
          </div>
        </div>
        <div className="month-movies margin-top-2 sm-overflow">
          <input type="submit" className="btn-month-movies selected" value="September" />
          <input type="submit" className="btn-month-movies" value="October" />
          <input type="submit" className="btn-month-movies" value="November" />
          <input type="submit" className="btn-month-movies" value="December" />
          <input type="submit" className="btn-month-movies" value="January" />
          <input type="submit" className="btn-month-movies" value="February" />
          <input type="submit" className="btn-month-movies" value="March" />
          <input type="submit" className="btn-month-movies" value="April" />
          <input type="submit" className="btn-month-movies" value="May" />
          <input type="submit" className="btn-month-movies" value="June" />
          <input type="submit" className="btn-month-movies" value="July" />
          <input type="submit" className="btn-month-movies" value="Agust" />
        </div>
        <div className="element-showing display-flex flex-direction-row margin-y-3 flex-content-between sm-overflow">
          {this.state.movie &&
            this.state.movie.map((item, i) => {
              return (
                <CardMovieUpcoming
                  title={item.name.replace(/\(\d*\)/gi, "")}
                  genre={item.genre}
                  image={item.image}
                  id={item.id}
                  key={i}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movie,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getMovie: (value) => {
    dispatch({ type: "GET_MOVIE", payload: value });
  },
  setLoad: (value) => {
    dispatch({ type: "SET_LOAD_MOVIE", payload: value });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Upcoming);
