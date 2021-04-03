import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { connect } from "react-redux";

export class CardCinemas extends Component {
  constructor() {
    super();
    this.state = {
      style: "text-bold text-title margin-05 cursor-pointer no-border no-outline bg-transparent",
      clicked: false,
      time: "",
      playing_times: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:6000/v1/cinemas/playlist/${this.props.id}`).then((result) => {
      this.setState({
        ...this.state,
        playing_times: result.data.data.filter((item) => item.cinema_id === this.props.cinema_id),
      });
    });
  }

  getTimes(value) {
    const date = new Date(value);
    let hour = date.getHours();
    hour = hour < 10 ? `0${hour}` : hour;
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const format = hour < 12 ? "am" : "pm";
    return `${hour}:${minutes}${format}`;
  }

  render() {
    const handleClickTimes = (i, time, id) => {
      this.setState({
        ...this.state,
        clicked: this.state.clicked === i ? false : i,
        time,
        playlist_id: id,
      });
    };

    const handleOrder = () => {
      let data = {
        cinema_id: this.props.cinema_id,
        playlist_id: this.state.playlist_id,
        cinema: this.props.cinema,
        image: this.props.image,
        time: this.state.time,
      };
      this.props.setOrder(data);
    };

    return (
      <div className="border-rounded padding-y-1 margin-x-05 cinema sm-margin-bottom-1">
        <div className="card-cinema display-flex is-vertically-centered flex-direction-row sm-flex-direction-col">
          <div className="display-flex flex-direction-col is-vertically-centered flex-content-center sm-margin-bottom-1">
            <img alt="ebv" src={this.props.image} width="106px" height="40px" />
          </div>
          <div className="display-flex flex-direction-col sm-text-center">
            <h5 className="font-size-3 text-title margin-bottom-05 sm-display-none">
              {this.props.cinema}
            </h5>
            <span>{this.props.location}</span>
          </div>
        </div>
        <hr className="hr margin-y-2 margin-x-1" />
        <div className="min-height-cinemas">
          <div className="grid grid-template-columns-4 margin-x-1">
            {this.state.playing_times.length > 0 && // eslint-disable-next-line
              this.state.playing_times.map((item, i) => {
                if (
                  `${new Date(item.playing_time).getDate()}/${new Date(
                    item.playing_time
                  ).getMonth()}` ===
                  `${new Date(this.props.fireState).getDate()}/${new Date(
                    this.props.fireState
                  ).getMonth()}`
                ) {
                  return (
                    <button
                      id={i}
                      className={
                        this.state.clicked === i ? `${this.state.style} blue` : this.state.style
                      }
                      key={i}
                      onClick={() => handleClickTimes(i, item.playing_time, item.id)}
                    >
                      {this.getTimes(item.playing_time)}
                    </button>
                  );
                }
              })}
          </div>
        </div>
        <div className="display-flex flex-direction-row is-vertically-centered margin-y-1 margin-x-1">
          <div className="display-flex flex-content-start font-size-5">Price</div>
          <div className="display-flex flex-content-end font-size-5 text-title text-bold">
            $10.00/seat
          </div>
        </div>
        <div className="display-flex flex-direction-row is-vertically-centered margin-y-2 margin-x-1">
          <div className="display-flex">
            <Link
              onClick={() =>
                this.state.time === "" && Swal.fire("Hey!", "Select the Play Time First", "info")
              }
              to={
                this.state.time === ""
                  ? `/movie/${this.props.id}`
                  : `/order/${this.props.id}?time=${this.state.time}&cinema=${this.props.cinema_id}`
              }
            >
              <button
                className="btn-cinema background-primary text-white padding-1 border-rounded2 text-bold font-size-6 no-border hover-cursor-pointer no-outline"
                onClick={handleOrder}
              >
                Book Now
              </button>
            </Link>
          </div>
          <div className="display-flex text-bold display-flex flex-content-end">
            <Link to="/order">
              <button className="text-primary background-white padding-1 border-rounded2 text-bold font-size-6 no-border hover-cursor-pointer no-outline">
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.order,
  };
};
const mapDispatchToProps = (dispatch) => ({
  setOrder: (value) => {
    dispatch({ type: "SET_ORDER", payload: value });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardCinemas);
