import React, { Component } from "react";
import CardCinemas from "../CardCinemas";
import axios from "axios";
import { connect } from "react-redux";
export class ContainerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      cinema: [],
      playing_time: [],
    };
  }

  async componentDidMount() {
    if (this.props.movie.movie[parseInt(this.props.id) - 1].showing.toString() === "1") {
      const resDataPlaylist = await axios.get(
        `${process.env.REACT_APP_URL_API}/v1/cinemas/playlist/${this.props.id}`
      );
      if (resDataPlaylist.data.data.length >= 1) {
        this.setState({
          ...this.state,
          playing_time: resDataPlaylist.data.data.map((item) => item.playing_time),
        });
        let cinema = resDataPlaylist.data.data.map((item) => item.cinema_id);
        [...new Set(cinema)].forEach(async (item) => {
          const getData = await axios.get(`${process.env.REACT_APP_URL_API}/v1/cinemas/${item}`);
          const resultGetData = await getData.data.data[0];
          this.setState({ ...this.state, data: [...this.state.data, resultGetData] });
        });
      }
    }
  }

  render() {
    return (
      <div className="grid margin-x-3 grid-template-columns-3 margin-bottom-05 sm-grid-template-columns-1 sm-margin-x-05">
        {this.state.data.length > 0 &&
          this.state.data.map((item, i) => {
            return (
              <CardCinemas
                cinema={item.name}
                location={item.address}
                image={item.logo}
                cinema_id={item.id}
                id={this.props.id}
                fireState={this.props.fireState}
                key={i}
              />
            );
          })}
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

export default connect(mapStateToProps, mapDispatchToProps)(ContainerContent);
