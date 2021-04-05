import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class NowShowing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      show: "",
    };
  }

  componentDidMount() {
    if (this.props.movie.movie) {
      this.setState({
        ...this.state,
        movie: this.props.movie.movie.filter((item) => {
          return item.showing;
        }),
      });
    }
  }

  render() {
    return (
      <div className="bg-grey sm-container">
        <div className="display-flex margin-x-5 flex-direction-col sm-container-1">
          <div className="nav-showing display-flex flex-content-between is-vertically-centered">
            <div>
              <p className="color-blue">Now Showing</p>
              <hr size="5" />
            </div>
            <div>
              <span>view all</span>
            </div>
          </div>
          <div className="element-showing display-flex margin-y-3 flex-content-between sm-overflow">
            {this.state.movie &&
              this.state.movie.map((item, i) => {
                return (
                  <div
                    className={`card-showing border-rounded2 d-flex flex-column align-items-center ${
                      this.state.show === i && "h-auto"
                    }`}
                    onMouseEnter={() => this.setState({ ...this.state, show: i })}
                    onMouseLeave={() => this.setState({ ...this.state, show: null })}
                  >
                    <img className="padding-y-1" src={item.image} alt={item.name} />
                    {this.state.show === i && (
                      <>
                        <span>{item.name}</span>
                        <span>{item.genre}</span>
                        <Link to={`/movie/${item.id}`}>
                          <button className="btn-submit-transparent w-auto border-rounded2 px-4 h-auto py-1">
                            Details
                          </button>
                        </Link>
                      </>
                    )}
                  </div>
                );
              })}
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NowShowing);
