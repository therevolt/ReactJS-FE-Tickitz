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
      selected: "",
      monthSelected: "",
    };
  }

  componentDidMount() {
    if (this.props.movie) {
      this.setState({
        ...this.state,
        movie: this.props.movie.movie_home.filter((item) => {
          return !item.showing;
        }),
      });
    }
  }

  componentDidUpdate() {
    if (this.state.monthSelected) {
      const newMovie = this.props.movie.movie.filter((item) => {
        if (new Date(item.release_date).getMonth() === parseInt(this.state.monthSelected)) {
          return item;
        }
      });
      this.setState({
        movie: newMovie,
        selected: this.state.selected,
        monthSelected: null,
      });
      console.log(newMovie);
      // this.setState({ ...this.state, monthSelected: null });
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
            <Link to="/movies?type=upcoming">
              <span>view all</span>
            </Link>
          </div>
        </div>
        <div className="month-movies margin-top-2 sm-overflow">
          <input
            id="8"
            type="submit"
            className={
              this.state.selected === "September" ? "btn-month-movies selected" : "btn-month-movies"
            }
            value="September"
            onClick={(e) =>
              this.setState({ ...this.state, selected: e.target.value, monthSelected: e.target.id })
            }
          />
          <input
            id="9"
            type="submit"
            className={
              this.state.selected === "October" ? "btn-month-movies selected" : "btn-month-movies"
            }
            value="October"
            onClick={(e) =>
              this.setState({ ...this.state, selected: e.target.value, monthSelected: e.target.id })
            }
          />
          <input
            id="10"
            type="submit"
            className={
              this.state.selected === "November" ? "btn-month-movies selected" : "btn-month-movies"
            }
            value="November"
            onClick={(e) =>
              this.setState({ ...this.state, selected: e.target.value, monthSelected: e.target.id })
            }
          />
          <input
            id="11"
            type="submit"
            className={
              this.state.selected === "December" ? "btn-month-movies selected" : "btn-month-movies"
            }
            value="December"
            onClick={(e) =>
              this.setState({ ...this.state, selected: e.target.value, monthSelected: e.target.id })
            }
          />
          <input
            id="0"
            type="submit"
            className={
              this.state.selected === "January" ? "btn-month-movies selected" : "btn-month-movies"
            }
            value="January"
            onClick={(e) =>
              this.setState({ ...this.state, selected: e.target.value, monthSelected: e.target.id })
            }
          />
          <input
            id="1"
            type="submit"
            className={
              this.state.selected === "February" ? "btn-month-movies selected" : "btn-month-movies"
            }
            value="February"
            onClick={(e) =>
              this.setState({ ...this.state, selected: e.target.value, monthSelected: e.target.id })
            }
          />
          <input
            id="2"
            type="submit"
            className={
              this.state.selected === "March" ? "btn-month-movies selected" : "btn-month-movies"
            }
            value="March"
            onClick={(e) =>
              this.setState({ ...this.state, selected: e.target.value, monthSelected: e.target.id })
            }
          />
          <input
            id="3"
            type="submit"
            className={
              this.state.selected === "April" ? "btn-month-movies selected" : "btn-month-movies"
            }
            value="April"
            onClick={(e) =>
              this.setState({ ...this.state, selected: e.target.value, monthSelected: e.target.id })
            }
          />
          <input
            id="4"
            type="submit"
            className={
              this.state.selected === "May" ? "btn-month-movies selected" : "btn-month-movies"
            }
            value="May"
            onClick={(e) =>
              this.setState({ ...this.state, selected: e.target.value, monthSelected: e.target.id })
            }
          />
          <input
            id="5"
            type="submit"
            className={
              this.state.selected === "June" ? "btn-month-movies selected" : "btn-month-movies"
            }
            value="June"
            onClick={(e) =>
              this.setState({ ...this.state, selected: e.target.value, monthSelected: e.target.id })
            }
          />
          <input
            id="6"
            type="submit"
            className={
              this.state.selected === "July" ? "btn-month-movies selected" : "btn-month-movies"
            }
            value="July"
            onClick={(e) =>
              this.setState({ ...this.state, selected: e.target.value, monthSelected: e.target.id })
            }
          />
          <input
            id="7"
            type="submit"
            className={
              this.state.selected === "Agust" ? "btn-month-movies selected" : "btn-month-movies"
            }
            value="Agust"
            onClick={(e) =>
              this.setState({ ...this.state, selected: e.target.value, monthSelected: e.target.id })
            }
          />
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
